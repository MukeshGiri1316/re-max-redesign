import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { fadeIn, fadeUp, Reveal } from "../helper/global";
import { SearchCard } from "../UI/SearchForm";

const STATS = [
  { val: "10,000+", label: "Offices Around the World" },
  { val: "20+", label: "Successful Years in Malta" },
  { val: "95000+", label: "Satisfied Clients" },
  { val: "1", label: "Globally-Renowned Brand" },
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#0A0807_0%,#1A0505_40%,#030820_100%)]" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:36px_36px]" />

      {/* Accent blobs (responsive) */}
      <div className="absolute -bottom-32 -right-32 w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(204,0,0,0.18)_0%,transparent_70%)]" />

      <div className="absolute top-16 right-[5%] w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,61,165,0.22)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6 pt-[120px] md:pt-[140px] pb-[60px] md:pb-[80px] w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          {/* Live badge */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 bg-red/15 border border-red/40 rounded-full px-4 py-[6px] mb-6 md:mb-7">
              <span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] text-white/85 font-body font-medium">
                Malta's largest real estate network ·{" "}
                <strong className="text-white">40,000+</strong> listings live
                now
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.08}>
            <h1 className="font-display text-[clamp(32px,8vw,70px)] text-white leading-[1.08] max-w-[700px] font-semibold mb-4 md:mb-5 mx-auto">
              Find Your
              <br />
              <span className="text-gold italic">Perfect Property</span>
              <br />— Faster Than Ever.
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={0.16}>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/60 max-w-[540px] leading-[1.6] md:leading-[1.7] mb-8 md:mb-11 font-body font-light mx-auto lg:mx-0">
              From apartments in Sliema to villas in Gozo — search Malta and
              Gozo's biggest verified portfolio with 250+ dedicated agents at
              your side.
            </p>
          </Reveal>

          {/* Stats */}
          {/* <Reveal delay={0.32}>
            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-[320px] sm:max-w-[360px]">
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    className="
            w-full
            rounded-lg sm:rounded-xl
            bg-white/5 backdrop-blur-md
            border border-white/10
            px-3 py-2.5 sm:px-4 sm:py-3
            transition-all duration-300
            hover:bg-white/10 hover:border-white/20
          "
                  >
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-display text-[18px] sm:text-[22px] font-semibold text-red leading-none">
                        {s.val}
                      </span>

                      <span className="text-[10px] sm:text-[11px] text-white/60 leading-[1.3]">
                        {s.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal> */}
        </div>

        {/* RIGHT: SEARCH */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[600px]">
            <SearchCard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 text-white/30"
      >
        <FiChevronDown size={26} />
      </motion.div>
    </div>
  );
}
