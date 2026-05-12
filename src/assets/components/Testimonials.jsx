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

const TESTIMONIALS = [
  {
    name: "Rosanna C.",
    role: "Seller",
    stars: 5,
    quote:
      "She was very fast and organised. Our property was listed and advertised in a few days. We sold the house in 1 week. Highly recommended.",
  },
  {
    name: "Joanna S.",
    role: "Buyer",
    stars: 5,
    quote:
      "We cannot imagine a better service. Our agent was extremely helpful, very knowledgeable, and very nice. I recommend her to anyone.",
  },
  {
    name: "Pierre B.",
    role: "Relocating Expat",
    stars: 5,
    quote:
      "Having Pierre help us saved a lot of time. He was honest, reliable, and supportive throughout the entire process of finding our new home.",
  },
  {
    name: "Mark M.",
    role: "Investor",
    stars: 5,
    quote:
      "His loyalty, honesty and integrity stand way above the crowd. He always delivers what he promises. Added value no doubt.",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () =>
    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-surface px-6 py-[80px] md:py-[88px]">
      <div className="max-w-[920px] mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-red font-body mb-2.5">
              Client Reviews
            </div>

            <h2 className="font-display text-[clamp(26px,4vw,42px)] text-dark">
              Thousands of Clients
              <br />
              Trust RE/MAX Malta
            </h2>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2.5 mt-4">
              {/* <div className="flex gap-[3px]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FiStar
                    key={s}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div> */}

              <span className="text-[13.5px] text-muted font-body">
                4.9 / 5 from 2,000+ verified reviews
              </span>
            </div>
          </div>
        </Reveal>

        {/* SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative text-center
              bg-white
              rounded-2xl
              border border-border
              shadow-md
              px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12
            "
          >
            {/* Quote mark */}
            <div className="font-display text-[60px] md:text-[72px] text-red/20 leading-none mb-4 select-none">
              "
            </div>

            {/* Quote */}
            <p className="font-display text-[16px] sm:text-[18px] md:text-[22px] text-dark leading-[1.65] italic max-w-[640px] mx-auto mb-8">
              {TESTIMONIALS[idx].quote}
            </p>

            {/* User */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-x-2">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-border"
                  style={{
                    background: `hsl(${idx * 90 + 20},45%,55%)`,
                  }}
                />

                <div className="text-left">
                  <div className="font-semibold text-dark text-[14px] sm:text-[15px] font-body">
                    {TESTIMONIALS[idx].name}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-muted font-body">
                    {TESTIMONIALS[idx].role}
                  </div>
                </div>
              </div>

              <div className="flex gap-[3px] ml-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FiStar
                    key={s}
                    size={13}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-3 mt-6 md:mt-7">
          <button
            onClick={prev}
            className="
              w-9 h-9 md:w-10 md:h-10
              rounded-full
              border border-border
              bg-surface
              flex items-center justify-center
              transition-all
              hover:border-red
            "
          >
            <FiChevronLeft size={18} className="text-mid" />
          </button>

          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`
                h-[8px] rounded-full transition-all duration-300
                ${i === idx ? "w-[26px] bg-red" : "w-[8px] bg-border"}
              `}
            />
          ))}

          <button
            onClick={next}
            className="
              w-9 h-9 md:w-10 md:h-10
              rounded-full
              border border-border
              bg-surface
              flex items-center justify-center
              transition-all
              hover:border-red
            "
          >
            <FiChevronRight size={18} className="text-mid" />
          </button>
        </div>
      </div>
    </section>
  );
}
