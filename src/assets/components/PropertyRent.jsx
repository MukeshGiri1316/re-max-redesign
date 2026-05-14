import { useState, useEffect, useRef } from "react";
import { Reveal } from "../helper/global";
import { FiArrowRight, FiEye, FiGrid, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";
import { MdBathtub, MdBed, MdLocationOn, MdVerified } from "react-icons/md";

const CARD_WIDTH = 384;
const AUTO_DELAY = 3000; // ⏸ pause duration after interaction (3s)

const LISTINGS = [
  {
    id: 1,
    type: "Penthouse",
    area: "Tigne Point, Sliema",
    beds: 3,
    baths: 2,
    size: "185m²",
    price: "€1,250,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 312,
    image: "/images/property13.jpg",
  },
  {
    id: 2,
    type: "Apartment",
    area: "Sliema Seafront",
    beds: 2,
    baths: 1,
    size: "98m²",
    price: "€695,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 219,
    image: "/images/property14.jpg",
  },
  {
    id: 3,
    type: "Villa",
    area: "St. Julian's",
    beds: 4,
    baths: 3,
    size: "260m²",
    price: "€2,100,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 487,
    image: "/images/property3.webp",
  },
  {
    id: 4,
    type: "Maisonette",
    area: "Valletta Centre",
    beds: 3,
    baths: 2,
    size: "130m²",
    price: "€480,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 178,
    image: "/images/property4.webp",
  },
  {
    id: 5,
    type: "Studio",
    area: "St. Julian's Bay",
    beds: 1,
    baths: 1,
    size: "52m²",
    price: "€365,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 143,
    image: "/images/property15.jpg",
  },
  {
    id: 6,
    type: "Townhouse",
    area: "Mdina",
    beds: 5,
    baths: 4,
    size: "320m²",
    price: "€3,200,000",
    tag: "For Rent",
    badge: "bg-blue text-surface",
    views: 521,
    image: "/images/property7.jpg",
  },
];

const LOOP_LISTINGS = [...LISTINGS, ...LISTINGS];

export function PropertyRent() {
  const [saved, setSaved] = useState([]);

  const containerRef = useRef(null);
  const autoRef = useRef(null);
  const resumeTimeout = useRef(null);

  const toggle = (id) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  // 🔁 Infinite logic
  const handleInfiniteScroll = () => {
    const el = containerRef.current;
    const half = el.scrollWidth / 2;

    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft <= 0) el.scrollLeft += half;
  };

  // ▶️ Auto scroll
  const startAuto = () => {
    stopAuto();

    autoRef.current = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;

      el.scrollLeft += 0.6;
      handleInfiniteScroll();
    }, 16);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  // resume after delay
  const resumeAutoWithDelay = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);

    resumeTimeout.current = setTimeout(() => {
      startAuto();
    }, 3000); // ⏱ pause duration (tweak this)
  };

  useEffect(() => {
    const el = containerRef.current;
    el.scrollLeft = el.scrollWidth / 2;
    startAuto();

    return () => {
      stopAuto();
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  // 🖱 Drag
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onDown = (e) => {
    isDown.current = true;
    stopAuto();

    const el = containerRef.current;
    startX.current = e.pageX;
    scrollStart.current = el.scrollLeft;

    el.style.scrollBehavior = "auto";
  };

  const onUp = () => {
    isDown.current = false;
    snap();
    resumeAutoWithDelay(); // 🔥 instead of startAuto()
  };

  const onMove = (e) => {
    if (!isDown.current) return;

    const el = containerRef.current;
    const walk = (e.pageX - startX.current) * 1.2;
    el.scrollLeft = scrollStart.current - walk;

    handleInfiniteScroll();
  };

  // 🎯 Snap
  const snap = () => {
    const el = containerRef.current;

    const index = Math.round(el.scrollLeft / CARD_WIDTH);
    const target = index * CARD_WIDTH;

    el.style.scrollBehavior = "smooth";
    el.scrollTo({ left: target });
  };

  return (
    <section className="py-16 px-5 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <div>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-red)] mb-2">
                Rent at Your Favourite Place
              </div>
              <h2 className="text-[clamp(26px,4vw,42px)] font-semibold text-[var(--color-dark)] leading-tight">
                Property for Rent <br /> Across Malta & Gozo
              </h2>
            </div>

            <a className="flex items-center gap-2 text-[var(--color-red)] font-medium border-b border-[var(--color-red)] pb-[2px]">
              View All Listings <FiArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          {/* fades */}
          <div className="hidden sm:block absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
          <div className="hidden sm:block absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
            // MOUSE
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            // TOUCH ✅
            onTouchStart={(e) => {
              isDown.current = true;
              stopAuto();

              const el = containerRef.current;
              startX.current = e.touches[0].pageX;
              scrollStart.current = el.scrollLeft;

              el.style.scrollBehavior = "auto";
            }}
            onTouchMove={(e) => {
              if (!isDown.current) return;

              const el = containerRef.current;
              const walk = (e.touches[0].pageX - startX.current) * 1.2;

              el.scrollLeft = scrollStart.current - walk;
              handleInfiniteScroll();
            }}
            onTouchEnd={() => {
              isDown.current = false;
              snap();
              resumeAutoWithDelay(); // 🔥 key fix
            }}
          >
            {LOOP_LISTINGS.map((l, i) => (
              <div
                key={i}
                className="
                w-[85%] 
                xs:w-[75%]
                sm:w-[320px] 
                md:w-[360px] 
                lg:w-[380px] 
                flex-shrink-0 snap-center
              "
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="relative h-[180px] sm:h-[200px] md:h-[210px] overflow-hidden">
                    <div className="absolute w-full h-full z-30 bg-black/50 sm:bg-black/60 group-hover:bg-transparent duration-200" />

                    <img
                      src={l.image}
                      className="w-full h-full object-fill group-hover:scale-105 sm:group-hover:scale-110 duration-300"
                    />

                    <span
                      className={`absolute z-40 top-2 sm:top-3 left-2 sm:left-3 text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${l.badge}`}
                    >
                      {l.tag}
                    </span>

                    <button
                      onClick={() => toggle(l.id)}
                      className="absolute z-40 top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center"
                    >
                      <FiHeart
                        size={14}
                        className={
                          saved.includes(l.id)
                            ? "text-[var(--color-red)] fill-[var(--color-red)]"
                            : "text-[var(--color-dark)]"
                        }
                      />
                    </button>

                    <div className="absolute z-40 bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 text-white/80 text-[10px] sm:text-xs">
                      <FiEye size={11} /> {l.views}
                    </div>

                    <div className="absolute z-40 bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full text-[10px] sm:text-[11px] text-white">
                      <MdVerified
                        size={11}
                        className="text-[var(--color-gold)]"
                      />
                      Verified
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5">
                    <div className="text-lg sm:text-xl font-semibold text-[var(--color-dark)]">
                      {l.price}
                    </div>

                    <div className="text-xs sm:text-sm text-[var(--color-muted)] mb-1 sm:mb-2">
                      {l.type}
                    </div>

                    <div className="flex items-center gap-1 text-xs sm:text-sm text-[var(--color-muted)] mb-3 sm:mb-4">
                      <MdLocationOn
                        size={13}
                        className="text-[var(--color-red)]"
                      />
                      <span className="truncate">{l.area}</span>
                    </div>

                    {/* ✅ Better mobile layout */}
                    <div
                      className="
        grid grid-cols-2 sm:flex sm:justify-between 
        text-[11px] sm:text-xs text-[var(--color-mid)] 
        border-t border-[var(--color-border)] 
        pt-3 mb-4 gap-y-2
      "
                    >
                      <div className="flex items-center gap-1">
                        <MdBed size={13} /> {l.beds} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <MdBathtub size={13} /> {l.baths} Baths
                      </div>
                      <div className="flex items-center gap-1 col-span-2 sm:col-auto">
                        <FiGrid size={13} /> {l.size}
                      </div>
                    </div>

                    <button className="w-full py-2 sm:py-2.5 rounded-[var(--radius-sm)] border border-[var(--color-red)] text-[var(--color-red)] text-xs sm:text-sm hover:bg-[var(--color-red)] hover:text-white transition">
                      View Property →
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
