import React, { useState } from 'react';

// Shared flavor data
const FLAVORS = [
  { n: 1, name: "Rose", note: "Damascus rose, almond, white chocolate", season: "Spring", tone: "blush" },
  { n: 2, name: "Pistachio", note: "Roasted Central Valley, dark chocolate", season: "Spring", tone: "sage" },
  { n: 3, name: "Lavender", note: "Marin lavender, honey, lemon zest", season: "Spring", tone: "sage-2" },
  { n: 4, name: "Yuzu", note: "Japanese citrus, black sesame", season: "Spring", tone: "cream-2" },
  { n: 5, name: "Fig & Walnut", note: "Dried fig, brown butter, bay", season: "Spring", tone: "sage" },
  { n: 6, name: "Matcha", note: "Kyoto matcha, white chocolate, salt", season: "Spring", tone: "sage-2" },
];

// Placeholder image component
function ImgSlot({ ratio, tone, label, ...props }) {
  return (
    <div {...props} style={{
      ...props.style,
      background: `var(--${tone || 'cream'})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#999',
      fontSize: 12,
      borderRadius: 4,
    }}>
      {label}
    </div>
  );
}

function BotanicalMark({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/>
      <path d="M12 2v20M2 12h20" stroke={color} strokeWidth="1"/>
    </svg>
  );
}

function Divider({ markColor = "black", width = 80 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <div style={{ height: 1, width, background: markColor }} />
      <div style={{ width: 6, height: 6, background: markColor, transform: 'rotate(45deg)' }} />
      <div style={{ height: 1, width, background: markColor }} />
    </div>
  );
}

function Seal({ size = 24, color = "currentColor" }) {
  return <BotanicalMark size={size} color={color} />;
}

// OPTION A — "Editorial Garden"
function OptionA() {
  return (
    <div className="mf-tokens" style={{
      width: '100%',
      background: "var(--cream)",
      fontFamily: "'Lato', sans-serif",
      color: "var(--ink)",
      fontSize: 14,
      lineHeight: 1.55,
    }}>
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
            Seasonal confections baked in small batches each Thursday, from a quiet kitchen in the Mission.
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

      <section style={{ padding: "100px 64px", background: "var(--cream-2)", borderTop: "1px solid var(--rule)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: "0 0 40px", color: "var(--charcoal)" }}>
          <span style={{ fontStyle: "italic" }}>Six</span> flavors, told in order.
        </h2>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {FLAVORS.map((f, i) => (
            <li key={f.n} style={{
              display: "grid",
              gridTemplateColumns: "80px 1.4fr 1fr 200px",
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
            </li>
          ))}
        </ol>
      </section>

      <footer style={{ padding: "64px 64px 40px", background: "var(--cream)", borderTop: "1px solid var(--rule)" }}>
        <div style={{ textAlign: "center", paddingBottom: 24 }}>
          <BotanicalMark size={32} color="var(--gold)" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "0.28em", marginTop: 12 }}>THE MINDFUL FEAST</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "var(--ink-2)", margin: "16px 0 0" }}>
            3411 Florida Street, San Francisco · hello@themindfulfeast.co
          </p>
        </div>
      </footer>
    </div>
  );
}

// OPTION B — "Atelier"
function OptionB() {
  return (
    <div className="mf-tokens" style={{
      width: '100%',
      background: "var(--charcoal)",
      color: "var(--cream)",
      fontFamily: "'Lato', sans-serif",
      fontSize: 14,
    }}>
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
        </nav>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, letterSpacing: "0.34em", color: "var(--gold-2)" }}>THE MINDFUL FEAST</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 13, letterSpacing: "0.18em", color: "rgba(242,235,220,0.55)", marginTop: 4 }}>maison de macarons · est. 2021</div>
        </div>
        <div style={{ display: "flex", gap: 26, justifyContent: "flex-end", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,235,220,0.7)" }}>
          <span>EN · FR</span>
          <span style={{ color: "var(--gold-2)" }}>Reserve →</span>
        </div>
      </header>

      <section style={{ padding: "120px 56px 160px", position: "relative", overflow: "hidden" }}>
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
              Twelve confections, hand-piped in a single kitchen on Florida Street, San Francisco.
            </p>
            <button style={{
              background: "var(--gold)", color: "var(--charcoal)",
              border: 0, padding: "18px 32px",
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
              cursor: "pointer",
              marginTop: 40,
            }}>Reserve a box</button>
          </div>
          <ImgSlot ratio="4/5" tone="charcoal" label="Hero · macaron on dark linen" />
        </div>
      </section>

      <section style={{ padding: "100px 56px", borderTop: "1px solid rgba(242,235,220,0.10)", borderBottom: "1px solid rgba(242,235,220,0.10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 80 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--gold-2)", marginBottom: 18 }}>I · LE RÉPERTOIRE</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 400, margin: 0 }}>
              The <span style={{ fontStyle: "italic", color: "var(--gold-2)" }}>répertoire.</span>
            </h2>
          </div>

          <div>
            {FLAVORS.map((f, i) => (
              <div key={f.n} style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 200px",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "80px 56px 36px", borderTop: "1px solid rgba(242,235,220,0.10)" }}>
        <div style={{ textAlign: "center", paddingBottom: 56 }}>
          <BotanicalMark size={40} color="var(--gold-2)" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, letterSpacing: "0.34em", color: "var(--gold-2)", marginTop: 18 }}>THE MINDFUL FEAST</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 17, color: "rgba(242,235,220,0.55)", marginTop: 10 }}>
            3411 Florida Street · San Francisco
          </div>
        </div>
      </footer>
    </div>
  );
}

// OPTION C — "Seasonal Almanac"
function OptionC() {
  return (
    <div className="mf-tokens" style={{
      width: '100%',
      background: "var(--cream)",
      color: "var(--ink)",
      fontFamily: "'Lato', sans-serif",
      fontSize: 14,
    }}>
      <header style={{
        padding: "20px 48px",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 32,
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <BotanicalMark size={32} color="var(--sage)" />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "0.26em" }}>THE MINDFUL FEAST</span>
        </div>
        <nav style={{ display: "flex", justifyContent: "center", gap: 36, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <span>Almanac</span><span>Box</span><span>Flavors</span><span>Visit</span>
        </nav>
        <button style={{
          background: "var(--sage)", color: "var(--cream)", border: 0,
          padding: "11px 18px", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer",
        }}>Order — $48</button>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 620,
      }}>
        <div style={{
          background: "var(--sage)",
          color: "var(--cream)",
          padding: "72px 64px 56px",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.28em", marginBottom: 80 }}>
            ※ AN ALMANAC OF<br/>SMALL SWEET<br/>SEASONAL THINGS
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: 132,
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            margin: 0,
            flex: 1,
          }}>
            Small<br/>
            <span style={{ fontStyle: "italic" }}>good</span><br/>
            things,<br/>
            in season.
          </h1>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, maxWidth: 340, lineHeight: 1.45 }}>
            An almanac, a pastry kitchen, and weekly macarons from what the markets are giving us.
          </p>
        </div>

        <ImgSlot tone="cream" label="Hero · open box, overhead" style={{ width: "100%", height: "100%", minHeight: 620 }} />
      </section>

      <section style={{
        padding: "64px 48px",
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.32em", color: "var(--sage)", marginBottom: 40 }}>I. THE INDEX</div>

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
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 56, color: "var(--sage-2)", lineHeight: 1 }}>{f.n}</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "var(--charcoal)", marginBottom: 4 }}>{f.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: "var(--ink-2)", marginBottom: 16 }}>{f.note}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--sage)" }}>
                  {f.season}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "var(--cream)", padding: "56px 48px 36px", borderTop: "1px solid var(--rule)" }}>
        <div style={{ textAlign: "center", paddingBottom: 36 }}>
          <BotanicalMark size={28} color="var(--sage)" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, letterSpacing: "0.26em", marginTop: 12 }}>THE MINDFUL FEAST</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "var(--ink-2)", margin: "16px 0 0" }}>
            3411 Florida St, San Francisco. Thursdays & Fridays 10–4.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Master component with switcher
export default function MindfulFeastSites() {
  const [activeOption, setActiveOption] = useState('A');

  const cssVariables = {
    '--cream': '#f2ebdc',
    '--cream-2': '#ebe5d9',
    '--sage': '#8ba892',
    '--sage-2': '#7a9f87',
    '--charcoal': '#2b2520',
    '--ink': '#3d3a36',
    '--ink-2': '#6b6764',
    '--gold': '#c99c5d',
    '--gold-2': '#d4a574',
    '--blush': '#dcc7c1',
    '--rule': '#d4ccc3',
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Cormorant+Garamond:ital@0;1&family=DM+Mono:wght@400&family=Lato:wght@400;700&display=swap');

        body { margin: 0; font-family: 'Lato', sans-serif; }
        .mf-tokens { min-height: 100vh; }
      `}</style>

      {/* Switcher */}
      <div style={{
        position: 'sticky',
        top: 0,
        background: '#fff',
        padding: '16px 32px',
        borderBottom: '2px solid #ddd',
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        {['A', 'B', 'C'].map(opt => (
          <button
            key={opt}
            onClick={() => setActiveOption(opt)}
            style={{
              padding: '10px 20px',
              border: activeOption === opt ? '2px solid #c99c5d' : '2px solid #ddd',
              background: activeOption === opt ? '#c99c5d' : '#fff',
              color: activeOption === opt ? '#fff' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: 4,
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
            }}
          >
            {opt === 'A' && 'Editorial Garden'}
            {opt === 'B' && 'Atelier'}
            {opt === 'C' && 'Almanac'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={cssVariables}>
        {activeOption === 'A' && <OptionA />}
        {activeOption === 'B' && <OptionB />}
        {activeOption === 'C' && <OptionC />}
      </div>
    </div>
  );
}