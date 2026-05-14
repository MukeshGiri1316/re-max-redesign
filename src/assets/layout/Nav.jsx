import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiPhone, FiX } from "react-icons/fi";

const NAV_LINKS = [
  {
    label: "Buy",
    sub: [
      "Buying a Property",
      "Property for Sale in Gozo",
      "Property Listings",
      "Government Schemes",
      "Luxury Property",
      "Property Investments",
      "Services",
    ],
  },
  {
    label: "Rent",
    sub: [
      "Rent a Property",
      "List Your Property for Rent",
      "Budget Properties for Rent",
      "Luxury Properties for Rent",
      "Holiday Rentals",
    ],
  },
  { label: "Sell", sub: ["Sell Your Property", "Sell with Exclusive"] },
  {
    label: "Commercial",
    sub: [
      "Commercial Property",
      "Buy Commercial Property",
      "Rent Commercial Property",
      "Offices in Malta",
    ],
  },
  {
    label: "Information",
    sub: [
      "About Malta",
      "About Gozo",
      "Property Types",
      "Localities",
      "Special Designated Areas",
      "Blog",
      "Guides",
    ],
  },
  {
    label: "About",
    sub: ["About RE/MAX Malta", "Our Agents", "Our Offices", "Join Us"],
  },
  { label: "Franchise", sub: [] },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [openMenu, setOpenMenu] = useState(null); // ✅ active dropdown

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ✅ lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

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
        className={`fixed ${scrolled ? "top-0" : "top-6"} left-0 right-0 z-50 transition-all duration-200
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
          <div className="hidden lg:flex items-center gap-1">
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
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2 z-50">
                    {item.sub.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
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
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden duration-100 ${scrolled ? "text-dark" : "text-surface"}`}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ ease: "easeOut" }}
                className="fixed top-0 right-0 w-[88%] max-w-sm h-full 
              bg-blue z-50 shadow-lg
              flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-end px-6 h-16 border-b border-border">
                  <button onClick={closeMenu} className="text-surface">
                    <FiX size={24} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto no-scrollbar px-0 py-6 space-y-3">
                  {NAV_LINKS.map((item) => (
                    <div key={item.label}>
                      {/* Parent */}
                      <button
                        onClick={() =>
                          item.sub.length ? toggleMenu(item.label) : closeMenu()
                        }
                        className="w-full flex items-center justify-between px-5 py-3 text-left"
                      >
                        <span className="text-lg font-semibold text-surface">
                          {item.label}
                        </span>

                        {item.sub.length > 0 && (
                          <FiChevronDown
                            className={`transition-transform duration-300 text-border ${
                              openMenu === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {openMenu === item.label && item.sub.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 py-2 space-y-1 border-l bg-surface border-border">
                              {item.sub.map((s) => (
                                <a
                                  key={s}
                                  href="#"
                                  onClick={closeMenu}
                                  className="block py-2 text-sm text-mid hover:text-[var(--color-red)] transition"
                                >
                                  {s}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Divider */}
                  <div className="border-t border-border my-4" />

                  {/* Contact */}
                  <a
                    onClick={closeMenu}
                    className="flex items-center px-2 py-2 ms-5 bg-surface gap-3 text-mid font-medium border w-fit rounded-sm"
                  >
                    <FiPhone className="text-mid" />
                    +356 2799 2796
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
