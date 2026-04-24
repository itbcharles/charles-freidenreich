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

function ClubPlan() {
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
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClubPlan />);
