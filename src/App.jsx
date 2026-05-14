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
import { Navbar } from "./assets/layout/Nav";
import { Hero } from "./assets/components/Hero";
import { UrgencyBar } from "./assets/layout/UrgencyBar";
import { BrowseByType } from "./assets/components/BrowseByType";
import { FeaturedListings } from "./assets/components/FeaturedListings";
import { WhyRemax } from "./assets/components/WhyRE";
import { Testimonials } from "./assets/components/Testimonials";
import { HowItWorks } from "./assets/components/HowItWorks";
import { SplitCTA } from "./assets/components/SplitCTA";
import { ContactCTA } from "./assets/components/ContactCTA";
import { HelpSection } from "./assets/components/HelpSection";
import { PropertyRent } from "./assets/components/PropertyRent";
import { PropertySell } from "./assets/components/PropertySell";
import { Footer } from "./assets/layout/Footer";

/* ──────────────────────────────────────────────────
   ROOT
────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <UrgencyBar />
      <HelpSection />
      <BrowseByType />
      <FeaturedListings />
      <PropertySell />
      <PropertyRent />
      <WhyRemax />
      <Testimonials />
      <HowItWorks />
      <SplitCTA />
      <ContactCTA />
      <Footer />
    </>
  );
}
