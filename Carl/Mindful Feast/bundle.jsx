// Shared brand assets + placeholders for The Mindful Feast website.

// Placeholder image slot — subtle striped fill + mono label
function ImgSlot({ label, ratio = "4/5", tone = "cream", style = {}, children }) {
  const palettes = {
    cream:    { bg: "#E8DEC8", stripe: "rgba(176,134,74,0.12)", ink: "#7C6A4B" },
    sage:     { bg: "#A6AE97", stripe: "rgba(45,42,37,0.10)",  ink: "#3A4030" },
    charcoal: { bg: "#322F2A", stripe: "rgba(201,156,93,0.14)", ink: "#C9A871" },
    blush:    { bg: "#E0B4A2", stripe: "rgba(45,42,37,0.10)",  ink: "#6E3D32" },
    gold:     { bg: "#C49A5B", stripe: "rgba(45,42,37,0.10)",  ink: "#3A2C16" },
  };
  const p = palettes[tone] || palettes.cream;
  return (
    <div style={{
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 15px)`,
      color: p.ink,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Mono', ui-monospace, monospace",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      textAlign: "center",
      padding: 16,
      ...style,
    }}>
      {children || label}
    </div>
  );
}

// Tiny botanical line mark — kept geometric (circle + 3 short stem lines).
function BotanicalMark({ size = 48, color = "#B0864A", stroke = 1 }) {
  const c = size / 2;
  const r = c - stroke;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={stroke} />
      {/* stem */}
      <line x1={c} y1={c + r * 0.55} x2={c} y2={c - r * 0.55} stroke={color} strokeWidth={stroke} />
      {/* leaves as small ellipses */}
      <ellipse cx={c - r*0.28} cy={c - r*0.05} rx={r*0.22} ry={r*0.08} fill="none" stroke={color} strokeWidth={stroke} transform={`rotate(-40 ${c - r*0.28} ${c - r*0.05})`} />
      <ellipse cx={c + r*0.28} cy={c + r*0.15} rx={r*0.22} ry={r*0.08} fill="none" stroke={color} strokeWidth={stroke} transform={`rotate(40 ${c + r*0.28} ${c + r*0.15})`} />
      <circle cx={c} cy={c - r*0.55} r={r*0.06} fill={color} />
    </svg>
  );
}

// Tiny circular wax-seal style marker — geometric only (concentric circle + dot).
function Seal({ size = 36, color = "#B0864A" }) {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={c} cy={c} r={c - 1} fill="none" stroke={color} strokeWidth="0.7" />
      <circle cx={c} cy={c} r={c - 5} fill="none" stroke={color} strokeWidth="0.7" />
      <circle cx={c} cy={c} r="1.6" fill={color} />
    </svg>
  );
}

// Section divider with center mark
function Divider({ color = "rgba(45,42,37,0.25)", markColor = "#B0864A", width = 240 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, width: "100%" }}>
      <span style={{ height: 1, background: color, width }} />
      <span style={{ width: 6, height: 6, transform: "rotate(45deg)", background: markColor }} />
      <span style={{ height: 1, background: color, width }} />
    </div>
  );
}

// Shared flavor data
const FLAVORS = [
  { n: "01", name: "Honey & Bee Pollen",  note: "Wildflower honey buttercream",      tone: "gold",   season: "Late Spring" },
  { n: "02", name: "Pistachio",            note: "Roasted pistachio cream",          tone: "sage",   season: "All Season" },
  { n: "03", name: "Matcha Yuzu",          note: "Ceremonial matcha + yuzu curd",    tone: "sage",   season: "Winter" },
  { n: "04", name: "Rose & Lychee",        note: "Rose cream + lychee preserve",     tone: "blush",  season: "Early Summer" },
  { n: "05", name: "Meyer Lemon",          note: "Lemon curd + vanilla bean",        tone: "cream",  season: "Winter" },
  { n: "06", name: "Black Fig & Walnut",   note: "Fig confit, candied walnut",       tone: "charcoal", season: "Autumn" },
];

Object.assign(window, { ImgSlot, BotanicalMark, Seal, Divider, FLAVORS });


// ─────────────────

// OPTION A — "Editorial Garden"
// Cream-led, magazine-style long-scroll, asymmetric grids, botanical accents.

function OptionA() {
  return (
    <div className="mf-tokens" style={{
      width: 1440,
      background: "var(--cream)",
      fontFamily: "'Lato', sans-serif",
      color: "var(--ink)",
      fontSize: 14,
      lineHeight: 1.55,
    }}>
      {/* Top bar */}
      <header style={{
        padding: "22px 64px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        borderBottom: "1px solid var(--rule)",
      }}>
        <nav style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <span>The Collection</span>
          <span>Flavors</span>
          <span>Journal</span>
          <span>Visit</span>
        </nav>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <BotanicalMark size={28} color="var(--gold)" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "0.28em" }}>THE MINDFUL FEAST</div>
        </div>
        <div style={{ display: "flex", gap: 22, justifyContent: "flex-end", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <span>Account</span>
          <span>Search</span>
          <span style={{ color: "var(--gold)" }}>Basket · 0</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "64px 64px 96px", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: 28 }}>
            <span style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span>The Spring Collection · No. 14</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: 116,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "var(--charcoal)",
          }}>
            A garden,<br/>
            <span style={{ fontStyle: "italic", color: "var(--sage)" }}>folded into</span><br/>
            twelve macarons.
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            lineHeight: 1.45,
            maxWidth: 520,
            marginTop: 36,
            color: "var(--ink-2)",
          }}>
            Seasonal confections baked in small batches each Thursday, from a quiet kitchen in the Mission. Honey from rooftops on 24th, rose from the Sunset, figs from a backyard on Bernal Hill.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
            <button style={{
              background: "var(--charcoal)", color: "var(--cream)",
              border: 0, padding: "16px 28px",
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase",
              cursor: "pointer",
            }}>Reserve a Box →</button>
            <button style={{
              background: "transparent", color: "var(--charcoal)",
              border: "1px solid var(--charcoal)", padding: "16px 28px",
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase",
              cursor: "pointer",
            }}>Read the Almanac</button>
          </div>
        </div>
        <ImgSlot ratio="3/4" tone="blush" label="Hero · Macaron box, three-quarter overhead" style={{ width: "100%" }} />
      </section>

      {/* Marquee strip */}
      <div style={{
        background: "var(--cream-2)",
        padding: "20px 64px",
        display: "flex",
        gap: 48,
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "var(--ink-2)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}>
        {["Root-to-Leaf", "Nose-to-Tail", "Botanical", "Seasonal", "Handcrafted"].map((t, i) => (
          <React.Fragment key={t}>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 5, height: 5, background: "var(--gold)", transform: "rotate(45deg)" }} />
              {t}
            </span>
            {i < 4 && <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />}
          </React.Fragment>
        ))}
      </div>

      {/* The Box — feature card */}
      <section style={{ padding: "120px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <ImgSlot ratio="4/5" tone="cream" label="The Twelve · open box detail" />
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", color: "var(--gold)", marginBottom: 24 }}>
            ※ THE TWELVE
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 64,
            lineHeight: 1.02,
            margin: 0,
            fontWeight: 400,
            color: "var(--charcoal)",
            letterSpacing: "-0.01em",
          }}>
            One box.<br/>
            <span style={{ fontStyle: "italic" }}>Six seasons.</span><br/>
            Twelve small bites.
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20, lineHeight: 1.5, marginTop: 28, maxWidth: 460, color: "var(--ink-2)",
          }}>
            Each box arrives nestled in raffia and rice paper, with a hand-printed flavor card and a single wax-sealed note from the kitchen. Best within three days; refrigerate; warm to room twenty minutes before eating.
          </p>
          <dl style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 14, columnGap: 24, marginTop: 36, maxWidth: 460, fontSize: 12 }}>
            {[
              ["Count", "12 macarons"],
              ["Cadence", "Thursdays, weekly"],
              ["Region", "San Francisco, hand-delivered"],
              ["Price", "$48 / box"],
            ].map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid var(--rule)", paddingTop: 10 }}>
                <dt style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-2)" }}>{k}</dt>
                <dd style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 22 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Seasonal index */}
      <section style={{ padding: "100px 64px", background: "var(--cream-2)", borderTop: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", color: "var(--gold)", marginBottom: 14 }}>
              ※ THE INDEX · SPRING 2026
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: 0, color: "var(--charcoal)" }}>
              <span style={{ fontStyle: "italic" }}>Six</span> flavors,<br/>told in order.
            </h2>
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, maxWidth: 380, color: "var(--ink-2)", lineHeight: 1.5 }}>
            The list rotates with the markets. New entries arrive on the first Thursday of each season; old favorites retire quietly.
          </div>
        </div>

        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {FLAVORS.map((f, i) => (
            <li key={f.n} style={{
              display: "grid",
              gridTemplateColumns: "80px 1.4fr 1fr 200px 24px",
              alignItems: "center",
              gap: 32,
              padding: "26px 0",
              borderTop: "1px solid var(--rule)",
              borderBottom: i === FLAVORS.length - 1 ? "1px solid var(--rule)" : "none",
            }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-2)" }}>{`№ ${f.n}`}</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "var(--charcoal)" }}>{f.name}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, color: "var(--ink-2)" }}>{f.note}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>{f.season}</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--ink-2)", justifySelf: "end" }}>→</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Story / pull quote */}
      <section style={{ padding: "140px 200px", textAlign: "center" }}>
        <Divider markColor="var(--gold)" width={120} />
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 44,
          lineHeight: 1.25,
          fontStyle: "italic",
          fontWeight: 400,
          color: "var(--charcoal)",
          margin: "48px 0 36px",
          textWrap: "balance",
        }}>
          “We bake the way one keeps a garden — quietly, in small returns, with the patience of someone waiting for the figs to come in.”
        </p>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", color: "var(--ink-2)", textTransform: "uppercase" }}>
          Élise Marchand · Pastry, founder
        </div>
        <div style={{ marginTop: 48 }}>
          <Divider markColor="var(--gold)" width={120} />
        </div>
      </section>

      {/* Story panel — image + drop cap */}
      <section style={{ padding: "0 64px 120px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>
        <ImgSlot ratio="4/5" tone="sage" label="Kitchen · zinc counter, market produce" />
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", color: "var(--gold)", marginBottom: 22 }}>
            ※ THE PRACTICE
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: 0, color: "var(--charcoal)" }}>
            On baking with<br/>
            <span style={{ fontStyle: "italic", color: "var(--sage)" }}>what is here.</span>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, lineHeight: 1.55, marginTop: 32, color: "var(--ink)" }}>
            <span style={{ float: "left", fontFamily: "'Playfair Display', serif", fontSize: 88, lineHeight: 0.85, marginRight: 10, marginTop: 6, color: "var(--gold)" }}>O</span>
            ur shelves are short on purpose. We bake what the markets give us, and we stop when the trays are gone. A box never travels by overnight courier, never sees a freezer, and never crosses a state line. The pistachios come from a single co-op in the Central Valley; the lavender from a friend in Marin who lets us pick on Wednesdays.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, lineHeight: 1.55, marginTop: 18, color: "var(--ink)" }}>
            What follows is not a brand, exactly — more a habit of paying attention. We hope the macarons taste like that.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "var(--charcoal)", color: "var(--cream)", padding: "100px 64px", textAlign: "center" }}>
        <BotanicalMark size={36} color="var(--gold)" />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 400, margin: "24px 0 16px" }}>
          The <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>Almanac</span>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, color: "rgba(242,235,220,0.7)", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.5 }}>
          A short letter every other Thursday. Seasonal notes, the week's flavors, and the occasional pantry recipe — nothing more.
        </p>
        <form style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", borderBottom: "1px solid rgba(242,235,220,0.35)" }}>
          <input placeholder="your@email" style={{
            flex: 1, background: "transparent", border: 0, color: "var(--cream)",
            fontFamily: "'Cormorant Garamond', serif", fontSize: 20, padding: "14px 4px", outline: "none",
          }}/>
          <button style={{
            background: "transparent", color: "var(--gold-2)", border: 0, padding: "14px 8px",
            fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
          }}>Subscribe →</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ padding: "64px 64px 40px", background: "var(--cream)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 64, paddingBottom: 48, borderBottom: "1px solid var(--rule)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <BotanicalMark size={32} color="var(--gold)" />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "0.28em" }}>THE MINDFUL FEAST</span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: "var(--ink-2)", maxWidth: 320, margin: 0 }}>
              A small pastry kitchen on Florida Street. Open Thursday & Friday, 10–4. By the door, by appointment.
            </p>
          </div>
          {[
            ["The Shop", ["The Twelve", "Single boxes", "Gift cards", "Subscriptions"]],
            ["About",    ["Our practice", "Sourcing", "The Almanac", "Press"]],
            ["Contact",  ["3411 Florida St", "San Francisco, CA", "hello@themindfulfeast.co", "@themindfulfeast"]],
          ].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 18 }}>{title}</div>
              {items.map(i => <div key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, marginBottom: 6 }}>{i}</div>)}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-2)" }}>
          <span>© 2026 The Mindful Feast — Baked in San Francisco</span>
          <span>Terms · Privacy · Allergens</span>
        </div>
      </footer>
    </div>
  );
}

window.OptionA = OptionA;


// ─────────────────

// OPTION B — "Atelier"
// Charcoal-dominant, gold accents, gallery-like, boutique / by-reservation feel.

function OptionB() {
  return (
    <div className="mf-tokens" style={{
      width: 1440,
      background: "var(--charcoal)",
      color: "var(--cream)",
      fontFamily: "'Lato', sans-serif",
      fontSize: 14,
    }}>
      {/* Top bar */}
      <header style={{
        padding: "26px 56px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        borderBottom: "1px solid rgba(242,235,220,0.10)",
      }}>
        <nav style={{ display: "flex", gap: 32, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,235,220,0.7)" }}>
          <span>Atelier</span>
          <span>Collection</span>
          <span>Reservations</span>
          <span>Journal</span>
        </nav>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, letterSpacing: "0.34em", color: "var(--gold-2)" }}>THE MINDFUL FEAST</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 13, letterSpacing: "0.18em", color: "rgba(242,235,220,0.55)", marginTop: 4 }}>maison de macarons · est. 2021</div>
        </div>
        <div style={{ display: "flex", gap: 26, justifyContent: "flex-end", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,235,220,0.7)" }}>
          <span>EN · FR</span>
          <span>Search</span>
          <span style={{ color: "var(--gold-2)" }}>Reserve →</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", padding: "120px 56px 160px", overflow: "hidden" }}>
        {/* faint number watermark */}
        <div style={{
          position: "absolute", top: 60, right: 56,
          fontFamily: "'Playfair Display', serif",
          fontSize: 220, lineHeight: 1, fontStyle: "italic",
          color: "rgba(201,156,93,0.07)",
          pointerEvents: "none",
        }}>MMXXVI</div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <Seal size={28} color="var(--gold-2)" />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold-2)" }}>
                Hiver · Collection XIV
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: 128,
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              margin: 0,
              color: "var(--cream)",
            }}>
              The quiet<br/>
              <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>art</span> of the<br/>
              macaron.
            </h1>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              lineHeight: 1.5,
              color: "rgba(242,235,220,0.7)",
              maxWidth: 460,
              marginTop: 36,
            }}>
              Twelve confections, hand-piped in a single kitchen on Florida Street, San Francisco. Reservations open the first of every month and close, usually, within an afternoon.
            </p>
            <div style={{ display: "flex", gap: 18, marginTop: 40, alignItems: "center" }}>
              <button style={{
                background: "var(--gold)", color: "var(--charcoal)",
                border: 0, padding: "18px 32px",
                fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
                cursor: "pointer",
              }}>Reserve a box</button>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: "rgba(242,235,220,0.55)" }}>
                — 18 of 60 remaining for February
              </span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <ImgSlot ratio="4/5" tone="charcoal" label="Hero · macaron on dark linen, gold light" />
            <div style={{
              position: "absolute", left: -36, bottom: 36,
              background: "var(--cream)", color: "var(--charcoal)",
              padding: "18px 22px", maxWidth: 220,
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 17, lineHeight: 1.35,
            }}>
              “the closest thing to a French letter you can eat.”
              <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontStyle: "normal", fontSize: 9, letterSpacing: "0.28em", color: "var(--ink-2)" }}>SF CHRONICLE · 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Index — number list of collection */}
      <section style={{ padding: "100px 56px", borderTop: "1px solid rgba(242,235,220,0.10)", borderBottom: "1px solid rgba(242,235,220,0.10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 40 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--gold-2)", marginBottom: 18 }}>I · LE RÉPERTOIRE</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: 0, lineHeight: 1.02 }}>
              The current<br/>
              <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>répertoire.</span>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.55, color: "rgba(242,235,220,0.65)", marginTop: 22 }}>
              Six rotate through the box at a time. Highlight any name to read the note from the kitchen.
            </p>
          </div>

          <div>
            {FLAVORS.map((f, i) => (
              <div key={f.n} style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 200px 28px",
                alignItems: "center",
                gap: 24,
                padding: "28px 0",
                borderTop: "1px solid rgba(242,235,220,0.12)",
                borderBottom: i === FLAVORS.length - 1 ? "1px solid rgba(242,235,220,0.12)" : "none",
              }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 28, color: "var(--gold-2)" }}>
                  {["I","II","III","IV","V","VI"][i]}
                </span>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "var(--cream)" }}>{f.name}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: "rgba(242,235,220,0.55)", marginTop: 4 }}>{f.note}</div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,235,220,0.55)" }}>{f.season}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--gold-2)" }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier showcase — gallery of 3 */}
      <section style={{ padding: "120px 56px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--gold-2)", marginBottom: 16 }}>II · L'ATELIER</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 400, margin: 0 }}>
            Three ways to <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>arrive</span>.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { label: "The Twelve", price: "$48", note: "Twelve macarons, six flavors, raffia and rice paper.", tone: "cream", tag: "Signature" },
            { label: "Le Noir",    price: "$72", note: "A black presentation box, fig-and-walnut emphasis, gold ribbon.", tone: "charcoal", tag: "Limited" },
            { label: "La Saison",  price: "$120 / mo", note: "Four boxes, delivered each first Thursday, address-locked.", tone: "sage", tag: "Subscription" },
          ].map(c => (
            <div key={c.label} style={{ border: "1px solid rgba(242,235,220,0.12)", padding: 18 }}>
              <ImgSlot ratio="4/5" tone={c.tone} label={`${c.label} · packshot`} />
              <div style={{ padding: "22px 4px 6px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", color: "var(--gold-2)", textTransform: "uppercase", marginBottom: 10 }}>{c.tag}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "var(--cream)" }}>{c.label}</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 24, color: "var(--gold-2)" }}>{c.price}</div>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: "rgba(242,235,220,0.62)", margin: "10px 4px 22px", lineHeight: 1.45 }}>{c.note}</p>
              <div style={{ borderTop: "1px solid rgba(242,235,220,0.12)", padding: "16px 4px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", color: "rgba(242,235,220,0.6)", textTransform: "uppercase" }}>Reserve →</span>
                <Seal size={22} color="var(--gold-2)" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By reservation panel */}
      <section style={{ background: "var(--ink)", padding: "100px 56px", borderTop: "1px solid rgba(242,235,220,0.10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--gold-2)", marginBottom: 16 }}>III · SUR RÉSERVATION</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
              We bake to a list.<br/>
              <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>Please add yours.</span>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, lineHeight: 1.55, color: "rgba(242,235,220,0.7)", marginTop: 22, maxWidth: 460 }}>
              Reservations open at noon on the first of each month. We bake sixty boxes a week. Your hold becomes a confirmation when we tell you it does, and not before.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 32 }}>
              {[["This month","FEB 2026"],["Boxes left","18 / 60"],["Pickup","THU & FRI"]].map(([k,v])=>(
                <div key={k}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", color: "rgba(242,235,220,0.5)", textTransform: "uppercase", marginBottom: 8 }}>{k}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "var(--gold-2)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--cream)", color: "var(--charcoal)", padding: 36 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.32em", color: "var(--gold)", marginBottom: 22 }}>RESERVATION CARD</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              {["Name","Telephone"].map(l=>(
                <label key={l}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: 6 }}>{l}</div>
                  <div style={{ borderBottom: "1px solid var(--ink-2)", height: 30 }} />
                </label>
              ))}
            </div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: 6 }}>Box</div>
              <div style={{ display: "flex", gap: 10 }}>
                {["The Twelve","Le Noir","La Saison"].map((b,i)=>(
                  <span key={b} style={{
                    padding: "10px 14px", border: "1px solid var(--ink-2)", flex: 1, textAlign: "center",
                    fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 15,
                    background: i===0 ? "var(--charcoal)" : "transparent",
                    color: i===0 ? "var(--gold-2)" : "var(--ink)",
                  }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: 10 }}>Pick-up Thursday</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["FEB 06","FEB 13","FEB 20","FEB 27"].map((d,i)=>(
                  <div key={d} style={{
                    flex: 1, padding: "12px 0", textAlign: "center",
                    border: "1px solid var(--ink-2)",
                    background: i===1 ? "var(--gold)" : "transparent",
                    color: i===1 ? "var(--charcoal)" : "var(--ink)",
                    fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.18em",
                  }}>{d}</div>
                ))}
              </div>
            </div>
            <button style={{
              width: "100%", background: "var(--charcoal)", color: "var(--gold-2)",
              border: 0, padding: "16px 0",
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
              cursor: "pointer",
            }}>Add to the list →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "80px 56px 36px", borderTop: "1px solid rgba(242,235,220,0.10)" }}>
        <div style={{ textAlign: "center", paddingBottom: 56 }}>
          <BotanicalMark size={40} color="var(--gold-2)" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, letterSpacing: "0.34em", color: "var(--gold-2)", marginTop: 18 }}>THE MINDFUL FEAST</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 17, color: "rgba(242,235,220,0.55)", marginTop: 10 }}>
            3411 Florida Street · San Francisco · open Thursday & Friday 10–4
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 48, paddingTop: 36, borderTop: "1px solid rgba(242,235,220,0.10)" }}>
          {[
            ["Atelier", ["The practice","Sourcing","Press","Stockists"]],
            ["Boxes", ["The Twelve","Le Noir","La Saison","Gifts"]],
            ["Visit", ["Reservations","Studio hours","Private events","Directions"]],
            ["Contact", ["hello@themindfulfeast.co","+1 415 555 0123","@themindfulfeast","Newsletter"]],
          ].map(([t, items]) => (
            <div key={t}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.32em", color: "var(--gold-2)", textTransform: "uppercase", marginBottom: 16 }}>{t}</div>
              {items.map(i => <div key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "rgba(242,235,220,0.75)", marginBottom: 6 }}>{i}</div>)}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28, marginTop: 36, borderTop: "1px solid rgba(242,235,220,0.10)", display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,235,220,0.5)" }}>
          <span>© MMXXVI · The Mindful Feast</span>
          <span>Allergens · Privacy · Terms</span>
        </div>
      </footer>
    </div>
  );
}

window.OptionB = OptionB;


// ─────────────────

// OPTION C — "Seasonal Almanac"
// Sage-dominant blocks + cream cards, structured grid, journal/almanac feel.

function OptionC() {
  return (
    <div className="mf-tokens" style={{
      width: 1440,
      background: "var(--cream)",
      color: "var(--ink)",
      fontFamily: "'Lato', sans-serif",
      fontSize: 14,
    }}>
      {/* Top bar */}
      <header style={{
        padding: "20px 48px",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 32,
        background: "var(--cream)",
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <BotanicalMark size={32} color="var(--sage)" />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "0.26em" }}>THE MINDFUL FEAST</span>
        </div>
        <nav style={{ display: "flex", justifyContent: "center", gap: 36, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <span>Almanac</span><span>Box</span><span>Flavors</span><span>Sourcing</span><span>Visit</span>
        </nav>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-2)" }}>VOL. III · ISSUE 14</span>
          <button style={{
            background: "var(--sage)", color: "var(--cream)", border: 0,
            padding: "11px 18px", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer",
          }}>Order — $48</button>
        </div>
      </header>

      {/* Masthead */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 620,
      }}>
        {/* Left: sage block */}
        <div style={{
          background: "var(--sage)",
          color: "var(--cream)",
          padding: "72px 64px 56px",
          position: "relative",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 80 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em" }}>
              ※ AN ALMANAC OF<br/>SMALL SWEET<br/>SEASONAL THINGS
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", opacity: 0.7 }}>THE WEEK OF</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 30, marginTop: 4 }}>14 February</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", opacity: 0.7, marginTop: 4 }}>SAN FRANCISCO</div>
            </div>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: 132,
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            margin: 0,
          }}>
            Small<br/>
            <span style={{ fontStyle: "italic" }}>good</span><br/>
            things,<br/>
            in season.
          </h1>

          <div style={{ position: "absolute", left: 64, bottom: 56, right: 64, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, maxWidth: 340, lineHeight: 1.45 }}>
              An almanac, a pastry kitchen, and a weekly box of twelve macarons baked from whatever the farmers, friends and rooftops are giving us this week.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              <span>Read this week →</span>
              <span style={{ width: 36, height: 1, background: "var(--cream)" }} />
            </div>
          </div>
        </div>

        {/* Right: image */}
        <ImgSlot ratio="auto" tone="cream" label="Hero · open box, overhead on linen" style={{ width: "100%", height: "100%" }} />
      </section>

      {/* Almanac index — this week */}
      <section style={{
        padding: "64px 48px",
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 32, marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--sage)" }}>I. THE INDEX</div>
          <div style={{ height: 1, background: "var(--rule)" }} />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, color: "var(--ink-2)" }}>Six in the box this week</div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          border: "1px solid var(--rule)",
        }}>
          {FLAVORS.map((f, i) => (
            <div key={f.n} style={{
              padding: "32px 28px",
              borderRight: (i % 3 !== 2) ? "1px solid var(--rule)" : "none",
              borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
              position: "relative",
              minHeight: 220,
              background: "var(--cream)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 56, color: "var(--sage-2)", lineHeight: 1 }}>{f.n}</span>
                <ImgSlot ratio="1/1" tone={f.tone} label="" style={{ width: 64, height: 64, borderRadius: 999 }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "var(--charcoal)", marginBottom: 4 }}>{f.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: "var(--ink-2)", marginBottom: 16 }}>{f.note}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--sage)" }}>
                  <span>{f.season}</span>
                  <span>Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drop calendar */}
      <section style={{ padding: "100px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "end", gap: 32, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--sage)", marginBottom: 14 }}>II. THE CALENDAR</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 64, margin: 0, lineHeight: 1, color: "var(--charcoal)" }}>
              The year, <span style={{ fontStyle: "italic", color: "var(--sage)" }}>tasted twelve times.</span>
            </h2>
          </div>
          <div />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, color: "var(--ink-2)", maxWidth: 320, textAlign: "right" }}>
            Each box rotates. Below: what we'll be piping, month by month, through the close of 2026.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", border: "1px solid var(--rule)" }}>
          {[
            ["JAN", "Yuzu, Buckwheat", false],
            ["FEB", "Rose, Lychee", true],
            ["MAR", "Earl Grey, Plum", false],
            ["APR", "Strawberry, Sorrel", false],
            ["MAY", "Honey, Pollen", false],
            ["JUN", "Apricot, Tarragon", false],
            ["JUL", "Stone Fruit, Basil", false],
            ["AUG", "Fig, Sesame", false],
            ["SEP", "Pear, Cardamom", false],
            ["OCT", "Pumpkin, Brown Butter", false],
            ["NOV", "Quince, Chestnut", false],
            ["DEC", "Spruce, Citron", false],
          ].map(([m, flavors, current], i) => (
            <div key={m} style={{
              padding: "26px 20px",
              borderRight: (i % 6 !== 5) ? "1px solid var(--rule)" : "none",
              borderBottom: i < 6 ? "1px solid var(--rule)" : "none",
              background: current ? "var(--sage)" : "var(--cream)",
              color: current ? "var(--cream)" : "var(--ink)",
              minHeight: 160,
              position: "relative",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 18 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em" }}>{m}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 14, opacity: 0.6 }}>'26</span>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, lineHeight: 1.15 }}>{flavors}</div>
              {current && <div style={{ position: "absolute", bottom: 14, left: 20, fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em" }}>※ NOW</div>}
            </div>
          ))}
        </div>
      </section>

      {/* The Box panel — large product card */}
      <section style={{ padding: "0 48px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", background: "var(--cream-2)", border: "1px solid var(--rule)" }}>
          <ImgSlot ratio="auto" tone="cream" label="The Box · packshot, overhead" style={{ width: "100%", height: "100%", minHeight: 520 }} />
          <div style={{ padding: "56px 56px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--sage)", marginBottom: 14 }}>III. THE BOX</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 56, margin: 0, lineHeight: 1.02, color: "var(--charcoal)" }}>
              Twelve macarons,<br/>
              <span style={{ fontStyle: "italic", color: "var(--sage)" }}>delivered Thursday.</span>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, lineHeight: 1.5, marginTop: 22, maxWidth: 460, color: "var(--ink-2)" }}>
              Hand-piped Wednesday night, packed in rice paper, sealed with the week's wax stamp. Local SF delivery or pickup at the studio on Florida.
            </p>

            <table style={{ marginTop: 32, width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              {[
                ["Count", "Twelve macarons, six flavors"],
                ["Cadence", "Baked weekly, Thursdays only"],
                ["Price", "$48 per box · $120 monthly"],
                ["Keep", "Refrigerate · room temp 20 min"],
                ["Best", "Within three days of pickup"],
              ].map(([k,v]) => (
                <tr key={k} style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--ink-2)", padding: "12px 0", width: 90 }}>{k}</td>
                  <td style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, padding: "12px 0", color: "var(--charcoal)" }}>{v}</td>
                </tr>
              ))}
            </table>

            <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
              <button style={{
                background: "var(--charcoal)", color: "var(--cream)", border: 0,
                padding: "16px 26px", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
              }}>Order a box →</button>
              <button style={{
                background: "transparent", color: "var(--charcoal)", border: "1px solid var(--charcoal)",
                padding: "16px 26px", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
              }}>Subscribe monthly</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing ledger */}
      <section style={{ background: "var(--sage)", color: "var(--cream)", padding: "100px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "rgba(242,235,220,0.7)", marginBottom: 18 }}>IV. THE LEDGER</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 64, margin: 0, lineHeight: 1 }}>
              What is here.<br/>
              <span style={{ fontStyle: "italic" }}>Who grew it.</span>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, lineHeight: 1.55, marginTop: 24, maxWidth: 340, color: "rgba(242,235,220,0.78)" }}>
              The week's sources, listed plain. We update the ledger each Thursday morning, before the door opens.
            </p>
            <div style={{ marginTop: 32, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", color: "rgba(242,235,220,0.78)" }}>
              ← Browse past weeks
            </div>
          </div>

          <div>
            {[
              ["Honey",       "Vela Apiary",        "Bernal Hill rooftops",   "0.6 mi"],
              ["Pistachios",  "Salida Co-op",        "Central Valley, CA",     "92 mi"],
              ["Rose petals", "Friend's garden",     "Outer Sunset",           "3.1 mi"],
              ["Matcha",      "Ippodō Tea",          "Kyoto, Japan",           "5,148 mi"],
              ["Lemons",      "Frog Hollow Farm",    "Brentwood, CA",          "47 mi"],
              ["Figs",        "Lupinetti family",    "Bernal Hill backyard",   "0.4 mi"],
              ["Walnuts",     "Capay Hills Orchard", "Esparto, CA",            "98 mi"],
            ].map(([item, farm, place, dist], i) => (
              <div key={item} style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.5fr 1.5fr auto",
                padding: "18px 0",
                borderTop: "1px solid rgba(242,235,220,0.20)",
                borderBottom: i === 6 ? "1px solid rgba(242,235,220,0.20)" : "none",
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                alignItems: "baseline",
              }}>
                <span>{item}</span>
                <span style={{ fontStyle: "italic", color: "rgba(242,235,220,0.85)" }}>{farm}</span>
                <span style={{ fontSize: 16, color: "rgba(242,235,220,0.7)", fontFamily: "'Cormorant Garamond', serif" }}>{place}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", color: "rgba(242,235,220,0.7)" }}>{dist}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section style={{ padding: "72px 48px", background: "var(--cream-2)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--sage)", marginBottom: 14 }}>V. THE LETTER</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 44, margin: 0, color: "var(--charcoal)", lineHeight: 1.05 }}>
              A short note every other <span style={{ fontStyle: "italic", color: "var(--sage)" }}>Thursday.</span>
            </h2>
          </div>
          <div>
            <form style={{ display: "flex", gap: 12, borderBottom: "1.5px solid var(--charcoal)" }}>
              <input placeholder="your@email" style={{
                flex: 1, background: "transparent", border: 0, padding: "16px 4px",
                fontFamily: "'Cormorant Garamond', serif", fontSize: 22, outline: "none", color: "var(--charcoal)",
              }} />
              <button style={{
                background: "transparent", border: 0, color: "var(--sage)",
                fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
              }}>Subscribe →</button>
            </form>
            <div style={{ marginTop: 14, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.26em", color: "var(--ink-2)", textTransform: "uppercase" }}>
              2,418 quiet readers · no spam, never sold
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--cream)", padding: "56px 48px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 48, paddingBottom: 36, borderBottom: "1px solid var(--rule)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <BotanicalMark size={28} color="var(--sage)" />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, letterSpacing: "0.26em" }}>THE MINDFUL FEAST</span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "var(--ink-2)", margin: 0, maxWidth: 280 }}>
              3411 Florida St, San Francisco. Thursdays & Fridays 10–4. Closed when the kitchen is.
            </p>
          </div>
          {[
            ["Shop",      ["The Box","Subscription","Gift cards","Single boxes"]],
            ["Almanac",   ["This week","Past issues","Recipes","Calendar"]],
            ["About",     ["Practice","Sourcing","Press","Stockists"]],
            ["Contact",   ["hello@mindfulfeast.co","@themindfulfeast","Newsletter","Trade"]],
          ].map(([t,items])=>(
            <div key={t}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.28em", color: "var(--sage)", textTransform: "uppercase", marginBottom: 14 }}>{t}</div>
              {items.map(i=><div key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "var(--ink)", marginBottom: 6 }}>{i}</div>)}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--ink-2)" }}>
          <span>© 2026 The Mindful Feast · An almanac, a kitchen, a list of small good things.</span>
          <span>Terms · Privacy · Allergens</span>
        </div>
      </footer>
    </div>
  );
}

window.OptionC = OptionC;


// ─────────────────

function App() {
  return (
    <DesignCanvas
      title="The Mindful Feast — Website Directions"
      subtitle="Three explorations for the homepage. Drag to pan, scroll to zoom. Click an artboard to focus."
    >
      <DCSection
        id="home"
        title="Homepage — three directions"
        subtitle="A · Editorial Garden  ·  B · Atelier  ·  C · Seasonal Almanac"
      >
        <DCArtboard id="a" label="A · Editorial Garden — cream, magazine, asymmetric" width={1440} height={3900}>
          <OptionA />
        </DCArtboard>
        <DCArtboard id="b" label="B · Atelier — charcoal & gold, by reservation" width={1440} height={3700}>
          <OptionB />
        </DCArtboard>
        <DCArtboard id="c" label="C · Seasonal Almanac — sage blocks, journal grid" width={1440} height={3650}>
          <OptionC />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
