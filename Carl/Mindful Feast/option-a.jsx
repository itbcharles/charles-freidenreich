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
