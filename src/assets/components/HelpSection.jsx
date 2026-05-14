import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";

const ITEMS = [
  {
    title: "Buy a Property",
    desc: "Discover handpicked homes across Malta & Gozo — from modern apartments to luxury villas.",
    cta: "Browse Properties",
    link: "/buy",
    accent: "var(--color-red)",
    bg: "var(--color-red-soft)",
    icon: <IoHome size={20} className="text-red"/>
  },
  {
    title: "Rent a Property",
    desc: "Find flexible rental options that suit your lifestyle — short-term stays or long-term living.",
    cta: "Explore Rentals",
    link: "/rent",
    accent: "var(--color-blue)",
    bg: "rgba(0,61,165,0.08)",
    icon: <TbHomeSearch size={20} className="text-blue"/>
  },
  {
    title: "Sell your Property",
    desc: "Maximize your property’s value with expert marketing and a network that delivers results.",
    cta: "Start Selling",
    link: "/sell",
    accent: "var(--color-gold)",
    bg: "var(--color-gold-soft)",
    icon: <MdSell size={20} className="text-gold"/>
  },
];

export function HelpSection() {
  return (
    <section className="py-20 px-5 bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-widest uppercase text-[var(--color-red)] font-semibold mb-3">
            Services
          </div>
          <h2
            className="text-[clamp(28px,4vw,44px)] leading-tight text-[var(--color-dark)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How can we help you?
          </h2>
          <p className="text-[var(--color-muted)] mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Whether you're buying, renting, or selling — we provide expert
            guidance at every step of your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ ease: "easeOut", duration: 0.25 }}
              className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition"
            >
              {/* Accent */}
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-5"
                style={{ background: item.bg }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[var(--color-dark)] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-medium transition group"
                style={{ color: item.accent }}
              >
                {item.cta}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Bottom line accent */}
              <div
                className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: item.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
