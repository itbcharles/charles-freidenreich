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
