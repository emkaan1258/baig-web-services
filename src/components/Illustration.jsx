/**
 * Inline SVG illustrations for the web-design / web-development industry.
 * They use the site's own palette, scale to any width (fixed 16:11 aspect ratio),
 * and can never produce a broken image.
 */
const C = {
  navy: "#0e2a47", navy2: "#163a5f", sky: "#1d7fd6", soft: "#e7f1fb", amber: "#f0a500",
  line: "#dde3ec", ink: "#1a2230", muted: "#9fb0c3", white: "#fff", ok: "#1f7a4d",
};

const Bar = ({ x, y, w, h = 8, fill = C.line, r = 4 }) => <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} />;

/** Browser-style window frame */
const Win = ({ x, y, w, h, children, dark }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" fill={dark ? C.navy : C.white} stroke={dark ? C.navy2 : C.line} strokeWidth="2" />
    <path d={`M${x} ${y + 12}a12 12 0 0 1 12-12h${w - 24}a12 12 0 0 1 12 12v16H${x}z`} fill={dark ? C.navy2 : "#f1f5fa"} />
    {[0, 1, 2].map((i) => (
      <circle key={i} cx={x + 18 + i * 14} cy={y + 14} r="4" fill={[ "#ff6b6b", C.amber, "#3ecf8e" ][i]} />
    ))}
    {children}
  </g>
);

const Phone = ({ x, y, w = 96, h = 180, children }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="16" fill={C.navy} />
    <rect x={x + 6} y={y + 10} width={w - 12} height={h - 20} rx="10" fill={C.white} />
    {children}
  </g>
);

const scenes = {
  website: (
    <>
      <Win x="30" y="40" w="440" h="300">
        <rect x="46" y="76" width="408" height="108" rx="10" fill={C.sky} />
        <Bar x="66" y="100" w="190" h="14" fill={C.white} />
        <Bar x="66" y="124" w="140" h="8" fill="#bcd9f4" />
        <rect x="66" y="146" width="84" height="24" rx="12" fill={C.amber} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={46 + i * 140} y="200" width="128" height="120" rx="10" fill={C.soft} />
            <rect x={60 + i * 140} y="214" width="30" height="30" rx="8" fill={C.sky} opacity=".85" />
            <Bar x={60 + i * 140} y="256" w="90" />
            <Bar x={60 + i * 140} y="272" w="70" />
            <Bar x={60 + i * 140} y="288" w="80" />
          </g>
        ))}
      </Win>
      <Phone x="440" y="140" >
        <rect x="454" y="160" width="68" height="46" rx="6" fill={C.sky} />
        <Bar x="454" y="216" w="60" /><Bar x="454" y="232" w="44" />
        <rect x="454" y="252" width="68" height="30" rx="6" fill={C.soft} />
        <rect x="454" y="290" width="68" height="24" rx="12" fill={C.amber} />
      </Phone>
    </>
  ),
  react: (
    <>
      <Win x="30" y="40" w="360" h="300" dark>
        {[
          [60, 90, 120, C.sky], [78, 112, 160, "#7fb8ee"], [78, 134, 100, C.amber], [96, 156, 180, "#7fb8ee"],
          [96, 178, 140, C.white], [78, 200, 90, C.amber], [60, 222, 70, C.sky], [60, 256, 150, "#7fb8ee"], [78, 278, 110, C.white],
        ].map(([x, y, w, f], i) => <Bar key={i} x={x} y={y} w={w} h="9" fill={f} />)}
      </Win>
      <g>
        <rect x="410" y="60" width="200" height="64" rx="12" fill={C.sky} />
        <Bar x="430" y="84" w="110" h="10" fill={C.white} />
        <path d="M510 124v30M510 154H450v26M510 154h60v26" stroke={C.navy} strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="400" y="180" width="100" height="56" rx="10" fill={C.soft} stroke={C.sky} strokeWidth="2" />
        <rect x="520" y="180" width="100" height="56" rx="10" fill={C.soft} stroke={C.sky} strokeWidth="2" />
        <Bar x="414" y="202" w="70" /><Bar x="534" y="202" w="70" />
        <circle cx="540" cy="300" r="34" fill="none" stroke={C.sky} strokeWidth="5" />
        <ellipse cx="540" cy="300" rx="34" ry="13" fill="none" stroke={C.sky} strokeWidth="5" />
        <ellipse cx="540" cy="300" rx="34" ry="13" fill="none" stroke={C.sky} strokeWidth="5" transform="rotate(60 540 300)" />
        <ellipse cx="540" cy="300" rx="34" ry="13" fill="none" stroke={C.sky} strokeWidth="5" transform="rotate(120 540 300)" />
        <circle cx="540" cy="300" r="6" fill={C.amber} />
      </g>
    </>
  ),
  wordpress: (
    <>
      <Win x="30" y="40" w="580" h="300">
        <rect x="30" y="68" width="110" height="272" fill={C.navy} />
        {[0, 1, 2, 3, 4].map((i) => <Bar key={i} x="46" y={92 + i * 30} w="76" h="10" fill={i === 1 ? C.amber : "#7893b0"} />)}
        <Bar x="164" y="92" w="230" h="16" fill={C.navy} />
        <rect x="164" y="124" width="430" height="84" rx="10" fill={C.soft} />
        <Bar x="180" y="142" w="260" /><Bar x="180" y="160" w="200" /><Bar x="180" y="178" w="230" />
        <rect x="164" y="224" width="200" height="100" rx="10" fill={C.sky} opacity=".9" />
        <rect x="380" y="224" width="214" height="100" rx="10" fill={C.soft} />
        <Bar x="396" y="244" w="150" /><Bar x="396" y="262" w="120" />
        <rect x="396" y="290" width="76" height="22" rx="11" fill={C.amber} />
        <rect x="510" y="86" width="84" height="26" rx="13" fill={C.sky} />
      </Win>
    </>
  ),
  ecommerce: (
    <>
      <Win x="30" y="40" w="470" h="300">
        <Bar x="50" y="80" w="90" h="12" fill={C.navy} />
        <rect x="400" y="76" width="80" height="22" rx="11" fill={C.amber} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={50 + i * 144} y="116" width="130" height="150" rx="10" fill={C.soft} />
            <rect x={62 + i * 144} y="128" width="106" height="74" rx="8" fill={[C.sky, "#7fb8ee", C.navy2][i]} />
            <Bar x={62 + i * 144} y="214" w="80" />
            <Bar x={62 + i * 144} y="232" w="44" h="10" fill={C.navy} />
            <circle cx={152 + i * 144} cy="237" r="12" fill={C.amber} />
          </g>
        ))}
        <Bar x="50" y="284" w="430" h="36" r="10" fill={C.sky} />
        <Bar x="190" y="298" w="150" h="8" fill={C.white} />
      </Win>
      <Phone x="510" y="120" w="100" h="200">
        <Bar x="522" y="140" w="76" h="10" fill={C.navy} />
        <rect x="522" y="162" width="76" height="44" rx="6" fill={C.soft} />
        <rect x="522" y="214" width="76" height="44" rx="6" fill={C.soft} />
        <rect x="522" y="270" width="76" height="26" rx="13" fill={C.amber} />
      </Phone>
    </>
  ),
  uiux: (
    <>
      {[[40, 60], [250, 60], [460, 60]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="150" height="200" rx="12" fill={C.white} stroke={C.line} strokeWidth="2" />
          <rect x={x + 12} y={y + 14} width="126" height="52" rx="8" fill={i === 1 ? C.sky : C.soft} />
          <Bar x={x + 12} y={y + 80} w="100" /><Bar x={x + 12} y={y + 98} w="80" />
          <rect x={x + 12} y={y + 124} width="58" height="58" rx="8" fill={C.soft} />
          <rect x={x + 80} y={y + 124} width="58" height="58" rx="8" fill={C.soft} />
        </g>
      ))}
      <path d="M190 160h50M400 160h50" stroke={C.navy} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
      <path d="M236 152l10 8-10 8M446 152l10 8-10 8" stroke={C.navy} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(310 220)">
        <path d="M0 0l0 36 10-9 8 18 8-4-8-17 14-1z" fill={C.amber} stroke={C.navy} strokeWidth="2" strokeLinejoin="round" />
      </g>
      {[C.sky, C.navy, C.amber, C.soft].map((f, i) => <circle key={i} cx={90 + i * 40} cy="320" r="14" fill={f} stroke={C.line} strokeWidth="2" />)}
      <Bar x="290" y="312" w="140" h="10" fill={C.navy} /><Bar x="290" y="332" w="100" h="8" />
    </>
  ),
  landing: (
    <>
      <Win x="120" y="30" w="400" h="320">
        <rect x="136" y="66" width="368" height="130" rx="10" fill={C.navy} />
        <Bar x="160" y="92" w="220" h="16" fill={C.white} />
        <Bar x="160" y="118" w="170" h="9" fill="#7fb8ee" />
        <rect x="160" y="146" width="104" height="30" rx="15" fill={C.amber} />
        <rect x="410" y="86" width="80" height="90" rx="10" fill={C.sky} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={170 + i * 120} cy="228" r="15" fill={C.soft} stroke={C.sky} strokeWidth="2" />
            <Bar x={150 + i * 120} y="256" w="80" /><Bar x={150 + i * 120} y="272" w="56" />
          </g>
        ))}
        <rect x="136" y="298" width="368" height="38" rx="19" fill={C.soft} />
        <rect x="396" y="302" width="104" height="30" rx="15" fill={C.amber} />
      </Win>
      <circle cx="70" cy="190" r="34" fill="none" stroke={C.sky} strokeWidth="5" />
      <circle cx="70" cy="190" r="20" fill="none" stroke={C.sky} strokeWidth="5" />
      <circle cx="70" cy="190" r="6" fill={C.amber} />
    </>
  ),
  redesign: (
    <>
      <Win x="30" y="50" w="270" h="280">
        <rect x="44" y="84" width="242" height="60" rx="4" fill="#cfd6df" />
        <Bar x="44" y="160" w="200" h="8" fill="#b9c3cf" r="1" /><Bar x="44" y="178" w="160" h="8" fill="#b9c3cf" r="1" />
        <Bar x="44" y="206" w="110" h="8" fill="#b9c3cf" r="1" /><Bar x="44" y="224" w="230" h="8" fill="#b9c3cf" r="1" />
        <Bar x="44" y="252" w="120" h="8" fill="#b9c3cf" r="1" />
      </Win>
      <path d="M312 190h28M330 178l12 12-12 12" stroke={C.amber} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Win x="352" y="40" w="260" h="300">
        <rect x="366" y="76" width="232" height="84" rx="10" fill={C.sky} />
        <Bar x="384" y="98" w="120" h="12" fill={C.white} />
        <rect x="384" y="124" width="64" height="22" rx="11" fill={C.amber} />
        {[0, 1].map((i) => (
          <rect key={i} x={366 + i * 120} y="176" width="112" height="70" rx="10" fill={C.soft} />
        ))}
        <Bar x="366" y="264" w="190" /><Bar x="366" y="282" w="150" /><Bar x="366" y="300" w="170" />
      </Win>
    </>
  ),
  performance: (
    <>
      <Win x="30" y="40" w="580" h="300">
        <circle cx="140" cy="200" r="56" fill="none" stroke={C.line} strokeWidth="14" />
        <circle cx="140" cy="200" r="56" fill="none" stroke={C.ok} strokeWidth="14" strokeLinecap="round"
          strokeDasharray="300 352" transform="rotate(-90 140 200)" />
        <path d="M118 202l16 16 28-32" stroke={C.ok} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <Bar x="240" y={100 + i * 50} w="90" h="10" fill={C.navy} />
            <Bar x="240" y={118 + i * 50} w="320" h="12" fill={C.line} />
            <Bar x="240" y={118 + i * 50} w={[290, 260, 305][i]} h="12" fill={[C.ok, C.sky, C.ok][i]} />
          </g>
        ))}
        <path d="M60 310l70-24 60 14 70-40 70 18 80-34 90 4" stroke={C.sky} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </Win>
    </>
  ),
  devices: (
    <>
      <Win x="110" y="40" w="380" h="250">
        <rect x="126" y="76" width="348" height="90" rx="10" fill={C.sky} />
        <Bar x="146" y="98" w="170" h="14" fill={C.white} /><Bar x="146" y="122" w="120" h="8" fill="#bcd9f4" />
        {[0, 1, 2].map((i) => (
          <g key={i}><rect x={126 + i * 118} y="182" width="112" height="90" rx="8" fill={C.soft} />
            <Bar x={138 + i * 118} y="200" w="70" /><Bar x={138 + i * 118} y="216" w="54" /></g>
        ))}
      </Win>
      <path d="M70 296h460l-24 22H94z" fill={C.navy} />
      <rect x="510" y="150" width="104" height="150" rx="14" fill={C.navy} />
      <rect x="517" y="158" width="90" height="134" rx="8" fill={C.white} />
      <rect x="525" y="168" width="74" height="40" rx="6" fill={C.sky} /><Bar x="525" y="218" w="60" /><Bar x="525" y="234" w="46" />
      <Phone x="30" y="190" w="76" h="130">
        <rect x="42" y="208" width="52" height="32" rx="5" fill={C.sky} /><Bar x="42" y="250" w="44" /><Bar x="42" y="264" w="34" />
      </Phone>
    </>
  ),
};

export default function Illustration({ name = "devices", label, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-sky-soft to-white shadow-card ${className}`}>
      <svg viewBox="0 0 640 380" role="img" aria-label={label || "Website design illustration"} className="block h-auto w-full">
        {scenes[name] || scenes.devices}
      </svg>
    </div>
  );
}
