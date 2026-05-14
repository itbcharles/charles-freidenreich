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
