class SlideScroller {
    constructor() {
        this.container = document.getElementById('scrollContainer') || document.querySelector('.scroll-container');
        this.cards = Array.from(document.querySelectorAll('.card'));
        this.progressBar = document.getElementById('progressBar');
        this.nav = document.querySelector('.nav-dots');
        this.dots = Array.from(document.querySelectorAll('.nav-dot'));
        this.total = this.cards.length;
        this.current = 1;

        // Detect device type and screen size
        this.deviceType = this.detectDeviceType();

        // Sidebar-dot progress: accumulate input into a non-directional progress ring.
        this.locked = false;
        this.lockTimer = null;

        // Set parameters based on device type
        this.updateDeviceSettings();

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

    detectDeviceType() {
        // Check for touch capability
        const hasTouchScreen = ('ontouchstart' in window) ||
                               (navigator.maxTouchPoints > 0) ||
                               (navigator.msMaxTouchPoints > 0);

        const width = window.innerWidth;

        // Categorize by screen width
        if (width < 768) {
            return 'mobile';
        } else if (width < 1024) {
            return hasTouchScreen ? 'tablet' : 'desktop';
        } else {
            return 'desktop';
        }
    }

    updateDeviceSettings() {
        // Configure scroll sensitivity based on device type
        switch (this.deviceType) {
            case 'mobile':
                this.pxPerStep = 280;
                this.cooldown = 120;
                this.touchAmplify = 2.2;
                this.accumulated = 0; // Reset accumulation
                break;
            case 'tablet':
                this.pxPerStep = 500;
                this.cooldown = 140;
                this.touchAmplify = 1.8;
                this.accumulated = 0; // Reset accumulation
                break;
            case 'desktop':
            default:
                this.pxPerStep = 900;
                this.cooldown = 160;
                this.touchAmplify = 1.5;
                this.accumulated = 0; // Reset accumulation
                break;
        }
    }

    get isMobile() {
        // Backwards compatibility - treat both mobile and tablet as "mobile" for touch handling
        return this.deviceType === 'mobile' || this.deviceType === 'tablet';
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

        // Re-detect device type on resize (e.g., device rotation, browser resize)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const previousType = this.deviceType;
                this.deviceType = this.detectDeviceType();
                if (previousType !== this.deviceType) {
                    this.updateDeviceSettings();
                    // Reset progress visual on device type change
                    this.setDotProgressTarget(0);
                }
            }, 150);
        });

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
        const dy = (this.touchPrevY - y) * this.touchAmplify; // amplify for mobile feel
        this.touchPrevY = y;
        if (Math.abs(dy) > 1) this.addInput(dy);
    }

    onTouchEnd(e) {
        // Velocity-based navigation for mobile: if user swipes fast enough, complete the step
        if (!this.isMobile || this.locked) {
            this.accumulated = 0;
            this.setDotProgressTarget(0);
            return;
        }

        const touchEndY = this.touchPrevY;
        const touchDuration = performance.now() - this.touchStartTime;
        const touchDistance = this.touchStartY - touchEndY;

        // Calculate velocity (pixels/ms)
        const velocity = Math.abs(touchDistance / touchDuration);

        // If the swipe was fast enough (> 0.8 px/ms) and in a clear direction (> 50px),
        // complete the navigation even if we haven't reached the full threshold
        if (velocity > 0.8 && Math.abs(touchDistance) > 50) {
            const direction = touchDistance > 0 ? 1 : -1;
            this.completeStep(direction);
        } else {
            // Not fast enough - reset if we haven't reached the threshold
            if (Math.abs(this.accumulated) < this.pxPerStep) {
                this.accumulated = 0;
                this.setDotProgressTarget(0);
            }
        }
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
    initEmailGuard();
});

function initEmailGuard() {
    const trigger = document.getElementById('reveal-email');
    const overlay = document.getElementById('email-guard');
    if (!trigger || !overlay) return;

    const dialog = overlay.querySelector('.email-guard__dialog');
    const aEl = document.getElementById('eg-a');
    const bEl = document.getElementById('eg-b');
    const form = document.getElementById('email-guard-form');
    const answer = document.getElementById('eg-answer');
    const submit = document.getElementById('eg-submit');
    const holdWrap = document.getElementById('eg-hold');
    const holdBtn = document.getElementById('eg-hold-btn');
    const holdProg = document.getElementById('eg-hold-progress');
    const result = document.getElementById('eg-result');
    const emailText = document.getElementById('eg-email-text');
    const copyBtn = document.getElementById('eg-copy');
    const copied = document.getElementById('eg-copied');
    const closeBtn = document.getElementById('eg-close');

    const EMAIL_B64 = 'Y2FmcmVpZGVucmVpY2grd0BnbWFpbC5jb20=';
    const HOLD_MS = 2200;

    let expected = 0;
    let holdAnim = 0;
    let holdStart = 0;
    let holding = false;
    let revealed = false;

    function openGuard() {
        // Math generator for the captcha thing because I didnt want to use API
        const a = 7 + Math.floor(Math.random() * 13);  // 3..15
        const b = 3 + Math.floor(Math.random() * 9);   // 3..11
        expected = a + b;
        aEl.textContent = String(a);
        bEl.textContent = String(b);

        // Reset UI
        form.hidden = false;
        holdWrap.hidden = true;
        result.hidden = true;
        submit.disabled = true;
        answer.value = '';
        copied.hidden = true;
        copyBtn.disabled = true;
        emailText.textContent = '';
        revealed = false;

        dialog.classList.remove('revealed');
        overlay.setAttribute('aria-labelledby', 'email-guard-title');
        overlay.hidden = false;
        setTimeout(() => answer.focus(), 0);
    }

    function closeGuard() {
        overlay.hidden = true;
        cancelHold();
        revealed = false;
        dialog.classList.remove('revealed');
        overlay.setAttribute('aria-labelledby', 'email-guard-title');
    }

    function revealEmail() {
        const email = atob(EMAIL_B64);
        emailText.textContent = email;
        copyBtn.disabled = false;
        result.hidden = false;
        revealed = true;
        dialog.classList.add('revealed');
        overlay.setAttribute('aria-labelledby', 'eg-email-text');
        setTimeout(() => copyBtn.focus(), 0);
    }

    function mapProgress(p) {
        if (p <= 0.2) {
            return p;
        }
        if (p <= 0.35) {
            return 0.2 + (p - 0.2) * 0.2; // 80% slowdown between 20-35%
        }
        if (p <= 0.6) {
            const span = 0.25;
            const start = 0.23;
            return start + ((p - 0.35) / span) * (0.6 - start);
        }
        if (p <= 0.7) {
            return 0.6 + (p - 0.6) * 0.1; // 90% slowdown between 60-70%
        }
        const normalized = (p - 0.7) / 0.3;
        return 0.61 + normalized * (1 - 0.61);
    }

    function startHold() {
        if (holding) return;
        holding = true;
        holdStart = performance.now();
        holdProg.style.width = '0%';
        const step = (ts) => {
            if (!holding) return;
            const elapsed = ts - holdStart;
            const p = Math.max(0, Math.min(1, elapsed / HOLD_MS));
            const display = mapProgress(p);
            holdProg.style.width = `${(display * 100).toFixed(1)}%`;
            if (p >= 1) {
                holding = false;
                revealEmail();
                return;
            }
            holdAnim = requestAnimationFrame(step);
        };
        holdAnim = requestAnimationFrame(step);
    }

    function cancelHold() {
        holding = false;
        if (holdAnim) cancelAnimationFrame(holdAnim);
        holdAnim = 0;
        holdProg.style.width = '0%';
    }

    // Events
    trigger.addEventListener('click', (e) => { e.preventDefault(); openGuard(); });
    closeBtn.addEventListener('click', closeGuard);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeGuard();
    });
    document.addEventListener('keydown', (e) => {
        if (!overlay.hidden && e.key === 'Escape') closeGuard();
    });

    answer.addEventListener('input', () => {
        const val = parseInt(answer.value.replace(/\D+/g, ''), 10);
        submit.disabled = !(Number.isFinite(val) && val === expected);
        if (answer.classList.contains('eg-error')) answer.classList.remove('eg-error');
        answer.removeAttribute('aria-invalid');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = parseInt(answer.value.replace(/\D+/g, ''), 10);
        if (!(Number.isFinite(val) && val === expected)) {
            // Wrong answer
            answer.classList.add('eg-error');
            answer.setAttribute('aria-invalid', 'true');
            answer.focus();
            answer.select?.();
            return;
        }
        // Correct answer, reveal the hold button 
        form.hidden = true;
        holdWrap.hidden = false;
        holdBtn.focus();
    });

    holdBtn.addEventListener('pointerdown', () => startHold());
    holdBtn.addEventListener('pointerup', () => cancelHold());
    holdBtn.addEventListener('pointerleave', () => cancelHold());
    holdBtn.addEventListener('blur', () => cancelHold());
    holdBtn.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            startHold();
        }
    });
    holdBtn.addEventListener('keyup', () => cancelHold());

    copyBtn.addEventListener('click', async () => {
        if (copyBtn.disabled || !revealed) return;
        const email = atob(EMAIL_B64);
        try {
            await navigator.clipboard.writeText(email);
            copied.hidden = false;
            setTimeout(() => (copied.hidden = true), 1500);
        } catch {
            copied.textContent = 'Copy failed';
            copied.hidden = false;
            setTimeout(() => (copied.hidden = true), 1500);
        }
    });
}
