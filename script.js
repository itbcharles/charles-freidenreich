class SlideScroller {
    constructor() {
        this.container = document.getElementById('scrollContainer') || document.querySelector('.scroll-container');
        this.cards = Array.from(document.querySelectorAll('.card'));
        this.progressBar = document.getElementById('progressBar');
        this.nav = document.querySelector('.nav-dots');
        this.dots = Array.from(document.querySelectorAll('.nav-dot'));
        this.total = this.cards.length;
        this.current = 1;
        
        // Sidebar-dot progress: accumulate input into a non-directional progress ring.
        this.locked = false;
        this.lockTimer = null;
        this.cooldown = 160; // brief guard after stepping to absorb momentum

        // Progress toward the next/prev step
        this.accumulated = 0; // pixels, positive=down, negative=up
        this.pxPerStep = 900; // slower fill for deliberate step

        // Minimal delta to consider (noise filter)
        this.wheelThreshold = 0.5; // accept tiny deltas; smooth visually

        // Visual smoothing state for the progress (rAF-driven)
        this.progressTarget = 0; // 0..1
        this.progressVisual = 0; // 0..1
        this._raf = 0;
        this._lastTs = 0;
        this.progressLerp = 0.28; // higher = snappier

        // Touch swipe thresholds
        this.touchThreshold = 20;
        this.touchVelocity = 0.25;

        this.init();
    }

    init() {
        this.normalizeStructure();
        this.buildDots();
        this.updateUI();
        this.bindEvents();
        // Hide native scrolling entirely
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    normalizeStructure() {
        if (!this.container) return;
        let fixedNested = 0;
        // 1) Flatten any accidentally nested .card elements
        this.cards.forEach((card) => {
            const nested = card.querySelectorAll('.card');
            nested.forEach((n) => {
                this.container.insertBefore(n, card.nextSibling);
                fixedNested++;
            });
        });

        if (fixedNested > 0) {
            console.warn(`[slides] Moved ${fixedNested} nested .card element(s) out to the top level.`);
        }

        // 2) Ensure each card has a .card-content wrapper
        const allCards = Array.from(this.container.querySelectorAll('.card'));
        let wrapped = 0;
        allCards.forEach((card) => {
            if (!card.querySelector('.card-content')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'card-content';
                while (card.firstChild) {
                    wrapper.appendChild(card.firstChild);
                }
                card.appendChild(wrapper);
                wrapped++;
            }
        });
        if (wrapped > 0) {
            console.warn(`[slides] Wrapped ${wrapped} card(s) content inside .card-content for consistency.`);
        }

        // 3) Refresh card references - preserve user's data-card order
        this.cards = Array.from(this.container.querySelectorAll('.card'));
        this.total = this.cards.length;
    }

    buildDots() {
        if (!this.nav) return;
        const need = this.total;
        const have = this.nav.querySelectorAll('.nav-dot').length;
        if (have === need && have > 0) {
            this.dots = Array.from(this.nav.querySelectorAll('.nav-dot'));
            return;
        }
        // Rebuild to match cards
        this.nav.innerHTML = '';
        const frag = document.createDocumentFragment();
        for (let i = 1; i <= need; i++) {
            const span = document.createElement('span');
            span.className = 'nav-dot' + (i === 1 ? ' active' : '');
            span.dataset.target = String(i);
            frag.appendChild(span);
        }
        this.nav.appendChild(frag);
        this.dots = Array.from(this.nav.querySelectorAll('.nav-dot'));
    }

    bindEvents() {
        window.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });
        window.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true });
        window.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        window.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: true });

        window.addEventListener('keydown', (e) => {
            // Ignore auto-repeat so holding a key doesn't skip multiple
            if (e.repeat) return;
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                this.step(1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                this.step(-1);
            } else if (e.key === ' ') {
                e.preventDefault();
                this.step(e.shiftKey ? -1 : 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.jumpTo(1);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.jumpTo(this.total);
            }
        });

        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const target = parseInt(dot.dataset.target || '0', 10);
                if (Number.isFinite(target) && target > 0) this.jumpTo(target);
            });
        });

        // No standalone button; progress integrates into active sidebar dot
    }

    onWheel(e) {
        e.preventDefault();
        if (this.locked) return;

        const scale = e.deltaMode === 1 ? 16 : (e.deltaMode === 2 ? window.innerHeight : 1);
        const dy = e.deltaY * scale;
        if (Math.abs(dy) < this.wheelThreshold) return;
        this.addInput(dy);
    }

    onTouchStart(e) {
        this.touchStartY = e.touches[0].clientY;
        this.touchPrevY = this.touchStartY;
        this.touchStartTime = performance.now();
    }

    onTouchMove(e) {
        // Prevent native scrolling; we handle it
        e.preventDefault();
        if (this.locked) return;
        const y = e.touches[0].clientY;
        const dy = (this.touchPrevY - y) * 1.5; // subtle amplify for mobile feel
        this.touchPrevY = y;
        if (Math.abs(dy) > 1) this.addInput(dy);
    }

    onTouchEnd(e) {
        // no-op; accumulation already handled in move
    }

    addInput(deltaY) {
        // Accumulate; clamp to one step worth before triggering
        // Avoid visual progress when trying to scroll beyond ends
        if ((this.current === this.total && deltaY > 0) || (this.current === 1 && deltaY < 0)) {
            return;
        }
        this.accumulated += deltaY;
        // Non-directional visual: progress reflects magnitude only
        const fill = Math.max(0, Math.min(1, Math.abs(this.accumulated) / this.pxPerStep));
        this.setDotProgressTarget(fill);

        if (this.accumulated >= this.pxPerStep) {
            this.completeStep(1);
        } else if (this.accumulated <= -this.pxPerStep) {
            this.completeStep(-1);
        }
    }

    completeStep(dir) {
        const target = this.current + dir;
        if (target < 1 || target > this.total) {
            // Reset accumulation and visual when at ends
            this.accumulated = 0;
            this.setDotProgressTarget(0);
            return;
        }
        this.setCurrent(target);
        // Reset accumulation and visual, then briefly lock to absorb momentum
        this.accumulated = 0;
        this.setDotProgressTarget(0);
        this.lock();
    }

    step(delta) {
        if (this.locked || delta === 0) return;
        const target = this.current + delta;
        if (target < 1 || target > this.total) return;
        this.setCurrent(target);
        this.lock();
    }

    jumpTo(target) {
        const clamped = Math.max(1, Math.min(this.total, target));
        this.setCurrent(clamped);
    }

    setCurrent(index) {
        this.current = index;
        this.updateCards();
        this.updateProgress();
        this.updateDots();
        // reset progress ring on new active dot
        this.setDotProgressTarget(0);
    }

    updateCards() {
        this.cards.forEach((card, i) => {
            const n = i + 1;
            card.classList.remove('active', 'prev', 'next');
            if (n === this.current) {
                card.classList.add('active');
            } else if (n < this.current) {
                card.classList.add('prev');
            } else {
                card.classList.add('next');
            }
        });
    }

    updateProgress() {
        if (this.progressBar) {
            const progress = (this.current / Math.max(1, this.total)) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
    }

    updateDots() {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i + 1 === this.current);
        });
    }

    // No separate arrow visibility; progress lives in active dot

    lock() {
        this.locked = true;
        if (this.lockTimer) clearTimeout(this.lockTimer);
        this.lockTimer = setTimeout(() => {
            this.locked = false;
        }, this.cooldown);
    }

    setDotProgressTarget(ratio) {
        this.progressTarget = Math.max(0, Math.min(1, ratio));
        if (!this._raf) {
            this._lastTs = 0;
            this._raf = requestAnimationFrame((ts) => this._animateDotProgress(ts));
        }
    }

    _animateDotProgress(ts) {
        if (!this._lastTs) this._lastTs = ts;
        const dt = ts - this._lastTs;
        this._lastTs = ts;

        // Frame-rate independent smoothing
        const frames = Math.max(1, dt / 16.67);
        const alpha = 1 - Math.pow(1 - this.progressLerp, frames);
        this.progressVisual += (this.progressTarget - this.progressVisual) * alpha;

        const clamped = Math.max(0, Math.min(1, this.progressVisual));
        const dot = this.dots[this.current - 1];
        if (dot) {
            dot.style.setProperty('--p', clamped.toFixed(3));
        }

        if (Math.abs(this.progressTarget - this.progressVisual) > 0.002) {
            this._raf = requestAnimationFrame((n) => this._animateDotProgress(n));
        } else {
            // Snap and stop
            this.progressVisual = this.progressTarget;
            if (dot) {
                dot.style.setProperty('--p', this.progressVisual.toFixed(3));
            }
            this._raf = 0;
        }
    }

    updateUI() {
        this.updateCards();
        this.updateProgress();
        this.updateDots();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SlideScroller();
});
