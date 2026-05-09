const { useState } = React;

const MONTHS = [
  { key: "summer", label: "Summer", sub: "May \u2013 Jul", color: "#E8913A" },
  { key: "aug", label: "Aug", sub: "", color: "#D97832" },
  { key: "sep", label: "Sep", sub: "", color: "#C45B28" },
  { key: "oct", label: "Oct", sub: "", color: "#A3472E" },
  { key: "nov", label: "Nov", sub: "", color: "#7B3A36" },
  { key: "dec", label: "Dec", sub: "", color: "#5C3039" },
  { key: "jan", label: "Jan", sub: "", color: "#3E2B44" },
  { key: "feb", label: "Feb", sub: "", color: "#2E3558" },
  { key: "mar", label: "Mar", sub: "", color: "#26436B" },
  { key: "apr", label: "Apr", sub: "", color: "#1E5A6E" },
];

const TAGS = {
  panel: { label: "Panel", bg: "#FDEBD0", fg: "#A3472E", border: "#E8913A" },
  tour: { label: "Tour", bg: "#D5F5E3", fg: "#1A6B3C", border: "#45B06B" },
  skill: { label: "Skill Share", bg: "#DBEAFE", fg: "#1E3A6E", border: "#5B8DEF" },
  community: { label: "Community", bg: "#F3E8FF", fg: "#5B2E8E", border: "#A878D6" },
  competition: { label: "Case Comp", bg: "#FEE2E2", fg: "#8B2020", border: "#E45B5B" },
  ops: { label: "Ops / Prep", bg: "#F1F1F1", fg: "#444", border: "#AAA" },
};

const PLAN = {
  summer: {
    items: [
      { text: "Confirm 2 company tours & 3+ panelists for fall semester", tag: "ops" },
      { text: "Research & select 1\u20132 case competitions (fall + spring)", tag: "ops" },
      { text: "Lock down on-campus spaces for fall events", tag: "ops" },
    ],
  },
  aug: {
    items: [
      { text: "Send alumni night invites (Nov event)", tag: "ops" },
      { text: "Submit room reservations for Sept\u2013Dec events", tag: "ops" },
      { text: "Big/Little interest form goes out", tag: "community" },
    ],
  },
  sep: {
    items: [
      { text: "1st company tour", tag: "tour" },
      { text: "\uD83C\uDFA4 Consulting Panel \u2014 case prep, recruiting timelines, day-in-the-life", tag: "panel" },
      { text: "Group volunteering", tag: "community" },
      { text: "Big/Little matching kicks off", tag: "community" },
    ],
  },
  oct: {
    items: [
      { text: "2nd company tour", tag: "tour" },
      { text: "\uD83C\uDFA4 Investment Banking Panel \u2014 deal experience, analyst lifestyle, lateral opps", tag: "panel" },
      { text: "Skill share: Resume building", tag: "skill" },
      { text: "Send out fall case competition applications to SOMHP students", tag: "competition" },
    ],
  },
  nov: {
    items: [
      { text: "Group volunteering", tag: "community" },
      { text: "Skill share: Interview skills (behavioral + technical)", tag: "skill" },
      { text: "Alumni night", tag: "community" },
      { text: "SOMHP students submit case competition entry", tag: "competition" },
    ],
  },
  dec: {
    items: [
      { text: "Open applications for spring case comp", tag: "competition" },
      { text: "Begin outreach for spring panelists & company tours", tag: "ops" },
    ],
  },
  jan: {
    items: [
      { text: "\uD83C\uDFA4 Wealth Management Panel \u2014 career paths, certifications, client work", tag: "panel" },
      { text: "Send out spring case competition sign-ups", tag: "competition" },
    ],
  },
  feb: {
    items: [
      { text: "3rd company tour", tag: "tour" },
      { text: "\uD83C\uDFA4 Product Management Panel \u2014 tech PM vs. traditional PM, breaking in", tag: "panel" },
      { text: "Group volunteering", tag: "community" },
    ],
  },
  mar: {
    items: [
      { text: "4th company tour", tag: "tour" },
      { text: "\uD83C\uDFA4 Corporate Strategy / Big 4 Panel \u2014 internal strategy roles, advisory", tag: "panel" },
      { text: "Spring case competition prep workshops", tag: "competition" },
    ],
  },
  apr: {
    items: [
      { text: "Fundraiser competition (end-of-year showcase)", tag: "competition" },
      { text: "Year-end social / awards", tag: "community" },
    ],
  },
};

const tagOrder = ["panel", "tour", "skill", "competition", "community", "ops"];

// ---------- Member Insights data ----------
const HEATMAP_DATA = [
  ['Wealth Management',           [38, 56, 25, 29, 37], [9, 5, 1, 4, 19]],
  ['IB / Private Equity',         [46, 44, 25, 21, 37], [11, 4, 1, 3, 19]],
  ['Accounting',                  [29, 56, 25, 29, 33], [7, 5, 1, 4, 17]],
  ['Venture Capital',             [38, 33,  0, 21, 29], [9, 3, 0, 3, 15]],
  ['Marketing',                   [25, 22, 25, 29, 25], [6, 2, 1, 4, 13]],
  ['Management Consulting',       [25, 11, 25, 29, 24], [6, 1, 1, 4, 12]],
  ['Product Management',          [17, 33,  0, 14, 18], [4, 3, 0, 2, 9]],
  ['Entrepreneurship',            [21,  0,  0, 21, 16], [5, 0, 0, 3, 8]],
  ['Supply Chain / Operations',   [ 8, 33,  0, 14, 14], [2, 3, 0, 2, 7]],
  ['Go-To-Market / Sales',        [ 8,  0,  0,  7,  6], [2, 0, 0, 1, 3]],
  ['Finance (write-in)',          [ 8,  0,  0,  0,  4], [2, 0, 0, 0, 2]],
  ['Legal',                       [ 0,  0,  0,  7,  2], [0, 0, 0, 1, 1]],
];

const CLUSTER_DATA = [
  ['Wealth Management',           19,  1, 5, 13],
  ['IB / Private Equity',         19,  1, 4, 14],
  ['Accounting',                  17,  5, 4,  8],
  ['Venture Capital',             15,  1, 1, 13],
  ['Marketing',                   13,  6, 3,  4],
  ['Management Consulting',       12,  2, 1,  9],
  ['Product Management',           9,  0, 2,  7],
  ['Entrepreneurship',             8,  1, 1,  6],
  ['Supply Chain / Operations',    7,  0, 1,  6],
  ['Go-To-Market / Sales',         3,  0, 0,  3],
];

const COMPANY_DATA = [
  ['Google',          [5, 2, 0, 0]],
  ['Sephora',         [2, 2, 1, 0]],
  ['JPMorgan Chase',  [5, 0, 0, 0]],
  ['Salesforce',      [0, 3, 0, 0]],
  ['Big 4 (generic)', [3, 0, 0, 0]],
  ['Deloitte',        [0, 1, 0, 1]],
  ['LinkedIn',        [0, 1, 0, 0]],
  ['Meta',            [1, 0, 0, 0]],
  ['KPMG',            [2, 0, 0, 0]],
  ['EY',              [2, 0, 0, 0]],
  ['McKinsey',        [0, 1, 0, 0]],
  ['BlackRock',       [0, 0, 1, 0]],
  ['PwC',             [0, 0, 0, 1]],
];

const COHORT_HEADERS = [
  { label: "Rising", sub: "Soph",   n: 24 },
  { label: "Rising", sub: "Junior", n: 9 },
  { label: "Rising", sub: "Senior", n: 4 },
  { label: "Grad",   sub: "Senior", n: 14 },
  { label: "Total",  sub: "",       n: 51 },
];
const COHORT_COLORS = ['#97C459', '#1D9E75', '#BA7517', '#888780'];
const COHORT_LABELS = ['Rising Soph', 'Rising Junior', 'Rising Senior', 'Grad Senior'];

function pctColor(pct) {
  if (pct === 0) return { bg: 'transparent', fg: '#bbb', border: '0.5px solid #e8e8e4' };
  if (pct < 15)  return { bg: '#E6F1FB', fg: '#0C447C', border: 'none' };
  if (pct < 30)  return { bg: '#B5D4F4', fg: '#042C53', border: 'none' };
  if (pct < 45)  return { bg: '#85B7EB', fg: '#042C53', border: 'none' };
  if (pct < 60)  return { bg: '#378ADD', fg: '#FFFFFF', border: 'none' };
  return { bg: '#185FA5', fg: '#FFFFFF', border: 'none' };
}

function SectionCard({ title, subtitle, children }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 14,
      border: "1px solid #e8e8e4",
      padding: "24px 24px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      marginBottom: 20,
    }}>
      <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "#777", margin: "0 0 18px", fontWeight: 300 }}>{subtitle}</p>
      {children}
    </div>
  );
}

function MemberInsights() {
  const maxCo = Math.max(...COMPANY_DATA.map(([_, c]) => c.reduce((a,b) => a+b, 0)));

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <SectionCard
        title="Career paths by cohort"
        subtitle="% of cohort selecting each path. Darker = higher concentration."
      >
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 540 }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px repeat(4, 1fr) 70px", gap: 4, fontSize: 12 }}>
              <div></div>
              {COHORT_HEADERS.map((h, i) => (
                <div key={i} style={{ textAlign: "center", color: "#777", padding: 4, lineHeight: 1.2 }}>
                  {h.label}<br/>{h.sub && <>{h.sub}<br/></>}
                  <span style={{ fontSize: 11 }}>n={h.n}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "180px repeat(4, 1fr) 70px", gap: 4, fontSize: 13, marginTop: 4 }}>
              {HEATMAP_DATA.map(([path, pcts, ns]) => (
                <React.Fragment key={path}>
                  <div style={{ display: "flex", alignItems: "center", paddingRight: 8, color: "#1a1a1a" }}>{path}</div>
                  {pcts.map((p, i) => {
                    const c = pctColor(p);
                    const isTotal = i === 4;
                    return (
                      <div key={i} style={{
                        background: isTotal ? "transparent" : c.bg,
                        color: isTotal ? "#1a1a1a" : c.fg,
                        border: isTotal ? "0.5px solid #e8e8e4" : c.border,
                        borderRadius: 6,
                        padding: "8px 4px",
                        textAlign: "center",
                        fontWeight: 500,
                        lineHeight: 1.1,
                        minHeight: 36,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <span>{p}%</span>
                        <span style={{ fontSize: 10, opacity: 0.7, fontWeight: 400 }}>{ns[i]}</span>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Solo pick or part of a cluster?"
        subtitle="For each path, how many of its selectors picked it alone vs. with 2+ other paths."
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
          {CLUSTER_DATA.map(([path, total, solo, pair, three]) => {
            const soloPct = (solo / total) * 100;
            const pairPct = (pair / total) * 100;
            const threePct = (three / total) * 100;
            return (
              <div key={path} style={{ display: "grid", gridTemplateColumns: "160px 1fr 100px", gap: 12, alignItems: "center" }}>
                <div style={{ color: "#1a1a1a" }}>{path}</div>
                <div style={{ display: "flex", height: 22, borderRadius: 6, overflow: "hidden", background: "#f1f1f1" }}>
                  {solo > 0 && <div style={{ width: `${soloPct}%`, background: "#888780", color: "white", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{solo}</div>}
                  {pair > 0 && <div style={{ width: `${pairPct}%`, background: "#B5D4F4", color: "#042C53", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{pair}</div>}
                  {three > 0 && <div style={{ width: `${threePct}%`, background: "#185FA5", color: "white", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{three}</div>}
                </div>
                <div style={{ fontSize: 12, color: "#777", textAlign: "right" }}>{Math.round(threePct)}% in cluster</div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 14, fontSize: 12, color: "#777" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 2, background: "#888780" }}></span>Solo (only path picked)</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 2, background: "#B5D4F4" }}></span>Pair (2 paths total)</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 2, background: "#185FA5" }}></span>Cluster (3+ paths)</span>
        </div>
      </SectionCard>

      <SectionCard
        title="Companies students want to tour"
        subtitle="Mentions across 49 responses with suggestions. Bars show who's asking, by cohort."
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
          {COMPANY_DATA.map(([name, counts]) => {
            const total = counts.reduce((a,b) => a+b, 0);
            const widthPct = (total / maxCo) * 100;
            return (
              <div key={name} style={{ display: "grid", gridTemplateColumns: "140px 1fr 30px", gap: 12, alignItems: "center" }}>
                <div style={{ color: "#1a1a1a" }}>{name}</div>
                <div style={{ display: "flex", height: 18, width: `${widthPct}%`, borderRadius: 6, overflow: "hidden", minWidth: 20 }}>
                  {counts.map((c, i) => c > 0 && (
                    <div key={i} style={{ width: `${(c/total)*100}%`, background: COHORT_COLORS[i] }}></div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#777", textAlign: "right", fontWeight: 500 }}>{total}</div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 14, fontSize: 12, color: "#777" }}>
          {COHORT_LABELS.map((l, i) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 12, height: 12, borderRadius: 2, background: COHORT_COLORS[i] }}></span>{l}
            </span>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function ClubPlan() {
  const [view, setView] = useState("calendar");
  const [selected, setSelected] = useState("sep");
  const [filter, setFilter] = useState(null);

  const current = PLAN[selected];
  const monthMeta = MONTHS.find((m) => m.key === selected);
  const filtered = filter
    ? current.items.filter((i) => i.tag === filter)
    : current.items;

  const totalByTag = {};
  Object.values(PLAN).forEach((m) =>
    m.items.forEach((i) => {
      totalByTag[i.tag] = (totalByTag[i.tag] || 0) + 1;
    })
  );

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Avenir', 'Segoe UI', sans-serif",
      background: "#FAFAF8",
      minHeight: "100vh",
      padding: "32px 20px",
      color: "#1a1a1a",
    }}>
      {/* Header */}
      <div style={{ maxWidth: 800, margin: "0 auto 28px" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}>
          Club Yearly Plan
        </h1>
        <p style={{
          fontSize: 15,
          color: "#777",
          margin: "8px 0 0",
          fontWeight: 300,
          letterSpacing: "0.01em",
        }}>
          COVP Programming Calendar &mdash; May &rarr; April
        </p>
      </div>

      {/* View toggle */}
      <div style={{ maxWidth: 800, margin: "0 auto 20px", display: "flex", gap: 4, padding: 4, background: "#f1f1f1", borderRadius: 10, width: "fit-content" }}>
        {[
          { key: "calendar", label: "Programming Calendar" },
          { key: "insights", label: "Member Insights" },
        ].map((v) => {
          const active = view === v.key;
          return (
            <button
              key={v.key}
              onClick={() => setView(v.key)}
              style={{
                padding: "8px 16px",
                border: "none",
                borderRadius: 7,
                background: active ? "#fff" : "transparent",
                color: active ? "#1a1a1a" : "#888",
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                fontFamily: "inherit",
                cursor: "pointer",
                boxShadow: active ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {v.label}
            </button>
          );
        })}
      </div>

      {view === "insights" ? <MemberInsights /> : <>

      {/* Month selector */}
      <div style={{
        maxWidth: 800,
        margin: "0 auto 24px",
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
      }}>
        {MONTHS.map((m) => {
          const isActive = m.key === selected;
          const itemCount = PLAN[m.key]?.items.length || 0;
          return (
            <button
              key={m.key}
              onClick={() => { setSelected(m.key); setFilter(null); }}
              style={{
                flex: "1 1 0",
                minWidth: 56,
                padding: "10px 4px 8px",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                background: isActive ? m.color : "transparent",
                color: isActive ? "#fff" : "#666",
                fontFamily: "inherit",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                transition: "all 0.2s ease",
                position: "relative",
              }}
            >
              {m.label}
              {m.sub && (
                <span style={{
                  display: "block",
                  fontSize: 9,
                  opacity: 0.7,
                  marginTop: 1,
                }}>{m.sub}</span>
              )}
              <span style={{
                display: "block",
                fontSize: 9,
                marginTop: 3,
                opacity: isActive ? 0.85 : 0.45,
              }}>
                {itemCount} item{itemCount !== 1 ? "s" : ""}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tag filters */}
      <div style={{
        maxWidth: 800,
        margin: "0 auto 20px",
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
      }}>
        {tagOrder.map((t) => {
          const tag = TAGS[t];
          const isActive = filter === t;
          const countInMonth = current.items.filter((i) => i.tag === t).length;
          if (countInMonth === 0 && !isActive) return null;
          return (
            <button
              key={t}
              onClick={() => setFilter(isActive ? null : t)}
              style={{
                padding: "5px 12px",
                borderRadius: 20,
                border: `1.5px solid ${isActive ? tag.border : "#ddd"}`,
                background: isActive ? tag.bg : "transparent",
                color: isActive ? tag.fg : "#888",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s ease",
              }}
            >
              {tag.label} ({countInMonth})
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #e8e8e4",
        padding: "28px 24px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        minHeight: 180,
      }}>
        <div style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 20,
          borderBottom: `2px solid ${monthMeta.color}`,
          paddingBottom: 12,
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 28,
            fontWeight: 900,
            color: monthMeta.color,
          }}>
            {monthMeta.label}
          </span>
          {monthMeta.sub && (
            <span style={{ fontSize: 13, color: "#999" }}>{monthMeta.sub}</span>
          )}
          <span style={{
            marginLeft: "auto",
            fontSize: 12,
            color: "#aaa",
            fontWeight: 300,
          }}>
            {filtered.length} of {current.items.length} items
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((item, i) => {
            const tag = TAGS[item.tag];
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: tag.bg,
                  borderLeft: `3px solid ${tag.border}`,
                  transition: "transform 0.15s ease",
                }}
              >
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: tag.fg,
                  background: "#fff",
                  border: `1px solid ${tag.border}`,
                  borderRadius: 4,
                  padding: "2px 7px",
                  whiteSpace: "nowrap",
                  marginTop: 2,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}>
                  {tag.label}
                </span>
                <span style={{
                  fontSize: 14,
                  color: "#2a2a2a",
                  lineHeight: 1.45,
                  fontWeight: 400,
                }}>
                  {item.text}
                </span>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p style={{ color: "#bbb", fontSize: 14, textAlign: "center", padding: 20 }}>
              No items match this filter for {monthMeta.label}.
            </p>
          )}
        </div>
      </div>

      {/* Year-at-a-glance summary */}
      <div style={{
        maxWidth: 800,
        margin: "24px auto 0",
        padding: "18px 24px",
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #e8e8e4",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}>
        <p style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#999",
          margin: "0 0 10px",
        }}>Year-at-a-glance</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {tagOrder.map((t) => {
            const tag = TAGS[t];
            return (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                  width: 10,
                  height: 10,
                  borderRadius: 3,
                  background: tag.border,
                  display: "inline-block",
                }} />
                <span style={{ fontSize: 13, color: "#555" }}>
                  {tag.label}: {totalByTag[t] || 0}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      </>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClubPlan />);
