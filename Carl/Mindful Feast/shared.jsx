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
