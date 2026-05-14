import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMapPin,
  FiHome,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiShield,
  FiAward,
  FiUsers,
  FiClock,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiStar,
  FiHeart,
  FiEye,
  FiTrendingUp,
  FiBell,
  FiKey,
  FiGrid,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  MdVerified,
  MdLocationOn,
  MdBed,
  MdBathtub,
  MdApartment,
  MdVilla,
  MdStorefront,
} from "react-icons/md";
import {
  BsBuildings,
  BsHouseHeart,
  BsGrid3X3,
  BsPersonCheck,
} from "react-icons/bs";
import { Reveal } from "../helper/global";

const WHY_ITEMS = [
  {
    icon: <MdVerified size={30} />,
    title: "Verified Listings Only",
    desc: "Every property personally vetted by our licensed agents. What you see is exactly what you get.",
  },
  {
    icon: <FiAward size={30} />,
    title: "Malta's #1 Real Estate Brand",
    desc: "RE/MAX Malta — the country's leading network with 250+ professional Sales & Letting Associates.",
  },
  {
    icon: <FiShield size={30} />,
    title: "Licensed & Fully Regulated",
    desc: "Fully licensed under Malta's estate agent regulations. Your interests are protected by law.",
  },
  {
    icon: <FiClock size={30} />,
    title: "Fast, Personal Service",
    desc: "Agents who respond within 2 hours and speak 14 languages. International buyers, fully covered.",
  },
];

export function WhyRemax() {
  return (
    <section className="relative overflow-hidden px-6 py-[88px]">
      {/* image */}
      <img
        src="/images/about.jpeg"
        alt="about"
        className="
        absolute
        -top-100 left-0
        max-w-none
        h-auto
        pointer-events-none
        select-none
      "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark opacity-60" />

      <div className="relative max-w-310 mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold font-body mb-2.5">
                Why RE/MAX Malta
              </div>

              <h2 className="font-display text-[clamp(26px,4vw,46px)] text-white leading-[1.12] max-w-[520px]">
                The Standard Other Agents Simply Can't Match
              </h2>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 text-gold font-semibold text-sm md:text-base font-body border-b-[1.5px] border-gold pb-[2px] w-fit"
            >
              Talk to an Agent <FiArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map((w, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="
                  h-full
                  rounded-xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  px-5 py-6 md:px-6 md:py-7
                  transition-all duration-300 hover:bg-white/10
                "
              >
                <div className="text-gold mb-4">{w.icon}</div>

                <h3 className="font-display text-[18px] md:text-[19px] text-white mb-2 leading-[1.25]">
                  {w.title}
                </h3>

                <p className="text-[13.5px] md:text-[14px] text-white/60 leading-[1.7] font-body font-light">
                  {w.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* BADGES */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-10 md:mt-14">
            {[
              "10000+ Offices Around The World",
              "20+ Successful Years",
              "95000 Satisfied Clients",
              "Global-Renowned Brand",
              "GDPR Compliant",
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <FiCheckCircle size={14} className="text-gold" />
                <span className="text-[12.5px] md:text-[13px] text-white font-body">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
