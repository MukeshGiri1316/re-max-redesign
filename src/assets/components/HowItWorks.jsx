import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "../helper/global";

const HOW_STEPS = [
  { n:"01", title:"Tell Us What You Need",      desc:"Share your budget, preferred location, and must-haves. Our team is ready — takes less than 2 minutes." },
  { n:"02", title:"Get a Personal Match",        desc:"We hand-pick listings that match your exact criteria. No spam, no generic dump of irrelevant results." },
  { n:"03", title:"View & Decide with Confidence", desc:"Private viewings arranged at your pace. We handle negotiation, paperwork, and every step to completion." },
];

export function HowItWorks() {
  return (
    <section style={{ padding:"88px 24px", background:"var(--c-bg)" }}>
      <div style={{ maxWidth:1240, margin:"0 auto" }}>
        <Reveal style={{ textAlign:"center", marginBottom:56 }}>
          <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"var(--c-red)", fontFamily:"var(--f-body)", marginBottom:10 }}>Simple Process</div>
          <h2 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(26px,4vw,42px)", color:"var(--c-dark)" }}>
            From First Search<br/>to Keys in Hand
          </h2>
        </Reveal>

        <div className="grid-3" style={{ gap:24 }}>
          {HOW_STEPS.map((s,i)=>(
            <Reveal key={i} delay={i*0.1}>
              <div style={{ background:"var(--c-surface)", borderRadius:"var(--r-lg)", padding:"34px 28px", height:"100%", boxShadow:"var(--sh-xs)", border:"1.5px solid var(--c-border)", position:"relative", overflow:"hidden" }}>
                <div style={{ fontFamily:"var(--f-display)", fontSize:80, fontWeight:700, color:"var(--c-red)", opacity:.07, position:"absolute", top:-8, left:12, lineHeight:1, userSelect:"none" }}>{s.n}</div>
                <div style={{ fontFamily:"var(--f-body)", fontSize:12, fontWeight:700, color:"var(--c-red)", marginBottom:14, letterSpacing:".06em" }}>STEP {s.n}</div>
                <h3 style={{ fontFamily:"var(--f-display)", fontSize:21, color:"var(--c-dark)", marginBottom:12, lineHeight:1.25 }}>{s.title}</h3>
                <p style={{ fontSize:14, color:"var(--c-muted)", lineHeight:1.7, margin:0, fontFamily:"var(--f-body)", fontWeight:300 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} style={{ textAlign:"center", marginTop:48 }}>
          <a href="#contact" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--c-red)", color:"#fff", padding:"15px 36px", borderRadius:"var(--r-md)", fontSize:15, fontWeight:700, fontFamily:"var(--f-body)", letterSpacing:".02em", transition:"background .2s" }}
            onMouseEnter={e=>e.target.style.background="var(--c-red-d)"} onMouseLeave={e=>e.target.style.background="var(--c-red)"}>
            Start My Property Search <FiArrowRight size={17}/>
          </a>
          <div style={{ marginTop:10, fontSize:12, color:"var(--c-muted)", fontFamily:"var(--f-body)" }}>Free consultation · No obligation · Agent responds in 2 hours</div>
        </Reveal>
      </div>
    </section>
  );
}