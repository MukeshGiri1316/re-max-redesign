import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "../helper/global";

export function SplitCTA() {
  const data = [
    {
      label: "Selling?",
      headline: "Sell Your Property\nFaster & For More",
      sub: "Our proven marketing tools and Malta's largest buyer database deliver results. Sold in less time, at better prices.",
      cta: "Get a Free Valuation",
      bg: "bg-[var(--color-gold)]",
    },
    {
      label: "Landlord?",
      headline: "Rent Out Your\nProperty with Confidence",
      sub: "We handle everything — from listing and tenant screening to contracts and compliance. Stress-free lettings from day one.",
      cta: "List Your Property",
      bg: "bg-[var(--color-blue)]",
    },
  ];

  return (
    <section className="bg-[var(--color-surface)] px-5 md:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--color-border)] rounded-[var(--radius-xl)] overflow-hidden">
          {data.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`
                  ${s.bg}
                  relative
                  px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14
                  flex flex-col
                  justify-between
                  transition-all duration-300
                  hover:brightness-110
                `}
              >
                {/* subtle overlay glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition duration-300 pointer-events-none" />

                {/* content */}
                <div className="relative z-10 max-w-[460px]">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-surface/90 mb-3 font-body">
                    {s.label}
                  </div>

                  <h3 className="font-display text-[clamp(22px,3vw,34px)] text-white leading-[1.2] mb-4 whitespace-pre-line">
                    {s.headline}
                  </h3>

                  <p className="text-[13.5px] md:text-[14px] text-surface/80 leading-[1.7] font-body font-light mb-7">
                    {s.sub}
                  </p>

                  <a
                    href="#contact"
                    className="
                      inline-flex items-center gap-2
                      bg-[var(--color-red)]
                      hover:bg-[var(--color-red-d)]
                      text-white
                      px-5 py-3
                      text-[13.5px] md:text-[14px]
                      font-semibold
                      rounded-[var(--radius-sm)]
                      transition-all duration-200
                      shadow-sm hover:shadow-md
                    "
                  >
                    {s.cta}
                    <FiArrowRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* bottom spacing */}
      <div className="h-16 md:h-20" />
    </section>
  );
}
