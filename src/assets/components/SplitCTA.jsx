import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "../helper/global";


export function SplitCTA() {
  return (
    <section style={{ background:"var(--c-surface)", padding:"0 24px 0" }}>
      <div style={{ maxWidth:1240, margin:"0 auto" }}>
        <div className="grid-2" style={{ gap:0, border:"1.5px solid var(--c-border)", borderRadius:"var(--r-xl)", overflow:"hidden" }}>
          {[
            { label:"Selling?", headline:"Sell Your Property\nFaster & For More", sub:"Our proven marketing tools and Malta's largest buyer database deliver results. Sold in less time, at better prices.", cta:"Get a Free Valuation", bg:"var(--c-dark)" },
            { label:"Landlord?", headline:"Rent Out Your\nProperty with Confidence", sub:"We handle everything — from listing and tenant screening to contracts and compliance. Stress-free lettings from day one.", cta:"List Your Property", bg:"var(--c-blue)" },
          ].map((s,i) => (
            <Reveal key={i} delay={i*0.1}
              style={{ background:s.bg, padding:"52px 44px", display:"flex", flexDirection:"column", justifyContent:"flex-start" }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"rgba(255,255,255,.5)", fontFamily:"var(--f-body)", marginBottom:12 }}>{s.label}</div>
              <h3 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(24px,3vw,36px)", color:"#fff", marginBottom:16, lineHeight:1.2, whiteSpace:"pre-line" }}>{s.headline}</h3>
              <p style={{ fontSize:14, color:"rgba(255,255,255,.55)", lineHeight:1.7, marginBottom:28, fontFamily:"var(--f-body)", fontWeight:300, maxWidth:380 }}>{s.sub}</p>
              <a href="#contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--c-red)", color:"#fff", padding:"13px 26px", borderRadius:"var(--r-sm)", fontSize:14, fontWeight:700, fontFamily:"var(--f-body)", alignSelf:"flex-start", transition:"background .2s" }}
                onMouseEnter={e=>e.target.style.background="var(--c-red-d)"} onMouseLeave={e=>e.target.style.background="var(--c-red)"}>
                {s.cta} <FiArrowRight size={15}/>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <div style={{ height:80 }}/>
    </section>
  );
}