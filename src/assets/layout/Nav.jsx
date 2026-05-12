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

const NAV_LINKS = [
  {
    label: "Buy",
    sub: [
      "Buying a Property",
      "Property for Sale",
      "First-Time Buyers",
      "Luxury Property",
      "Property Investments",
    ],
  },
  {
    label: "Rent",
    sub: [
      "Rent a Property",
      "List Your Property",
      "Budget Rentals",
      "Luxury Rentals",
      "Holiday Rentals",
    ],
  },
  { label: "Sell", sub: ["Sell Your Property", "Sell with Exclusive"] },
  {
    label: "Commercial",
    sub: [
      "Commercial Property",
      "Buy Commercial",
      "Rent Commercial",
      "Offices in Malta",
    ],
  },
  { label: "Guides", sub: [] },
  {
    label: "About",
    sub: ["About RE/MAX Malta", "Our Agents", "Our Offices", "Join Us"],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-900 px-6 py-1.5 flex justify-end gap-6">
        {["Log In", "Contact Us", "Join Us"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-xs text-white/70 hover:text-white transition"
          >
            {l}
          </a>
        ))}
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <div
                className={`font-semibold text-sm leading-tight ${scrolled ? "text-black" : "text-white"}`}
              >
                RE/MAX Malta
              </div>
              <div
                className={`text-[10px] uppercase tracking-wider ${scrolled ? "text-gray-500" : "text-white/60"}`}
              >
                Leading Real Estate Network
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href="#"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition
                  ${hovered === item.label ? "text-red-600" : scrolled ? "text-gray-700" : "text-white"}
                  `}
                >
                  {item.label}
                  {item.sub.length > 0 && <FiChevronDown size={12} />}
                </a>

                {/* Dropdown */}
                {item.sub.length > 0 && hovered === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2 z-50">
                    {item.sub.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Phone (desktop only) */}
            <a
              href="tel:+35627992796"
              className={`hidden md:flex items-center gap-2 px-3 py-2 text-[10px] lg:text-sm font-semibold rounded-md border transition
              ${scrolled ? "border-gray-300 text-black" : "border-white/40 text-white"}
              `}
            >
              <FiPhone className="text-red-600" size={14} />
              Call
            </a>

            {/* CTA */}
            {/* <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-md transition"
            >
              Book Viewing
            </a> */}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-lg border-t border-gray-200"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((item) => (
                  <div key={item.label}>
                    <div className="font-semibold text-gray-800 py-2">
                      {item.label}
                    </div>

                    {item.sub.length > 0 && (
                      <div className="pl-3 flex flex-col gap-1">
                        {item.sub.map((s) => (
                          <a
                            key={s}
                            href="#"
                            className="text-sm text-gray-600 py-1 hover:text-red-600"
                          >
                            {s}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile phone */}
                <a
                  href="tel:+35627992796"
                  className="flex items-center gap-2 mt-3 text-sm font-semibold text-gray-800"
                >
                  <FiPhone className="text-red-600" />
                  +356 2799 2796
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
