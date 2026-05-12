import { FiBell } from "react-icons/fi";

export function UrgencyBar() {
  return (
    <div style={{ background:"var(--c-red)", padding:"11px 24px" }}>
      <div style={{ maxWidth:1240, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
        <FiBell size={14} color="#fff"/>
        <span style={{ fontSize:13, color:"#fff", fontFamily:"var(--f-body)", fontWeight:400, textAlign:"center" }}>
          🔥 <strong>23 new listings</strong> added across Malta &amp; Gozo this week — properties move fast.
        </span>
        <a href="#listings" style={{ fontSize:12, fontWeight:700, color:"var(--c-red)", background:"#fff", padding:"4px 16px", borderRadius:100, whiteSpace:"nowrap" }}>
          Browse Now →
        </a>
      </div>
    </div>
  );
}