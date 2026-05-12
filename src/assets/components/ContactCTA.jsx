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

export function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    intent: "Buy",
    msg: "",
  });
  const [sent, setSent] = useState(false);
  const h = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24"
      id="contact"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#cc0000_1px,transparent_0)] bg-[length:28px_28px]" />
      <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,61,165,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Container */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left */}
        <Reveal>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-red-600 mb-4">
            Book a Free Consultation
          </div>

          <h2 className="text-white leading-tight mb-6 text-[32px] md:text-[48px] font-semibold">
            Don't Let Your
            <br />
            Dream Property
            <br />
            <span className="text-red-600 italic">Go to Someone Else.</span>
          </h2>

          <p className="text-white/60 text-sm leading-relaxed mb-9 max-w-md">
            The best properties across Malta and Gozo are claimed within days.
            Our team of 250+ agents moves fast — and they only work for you.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: <FiPhone size={16} />,
                text: "+356 2799 2796  ·  Mon–Sat 9:00–17:00",
              },
              { icon: <FiMail size={16} />, text: "info@remax-malta.com" },
              {
                icon: <FiMapPin size={16} />,
                text: "58 Tigne Seafront, Sliema, Malta",
              },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-red-600">{c.icon}</div>
                <span className="text-sm text-white/60">{c.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.12}>
          {sent ? (
            <div className="bg-white/5 border border-red-600/30 rounded-2xl p-12 flex flex-col items-center text-center gap-4">
              <FiCheckCircle size={52} className="text-red-600" />
              <h3 className="text-white text-2xl font-semibold">
                Enquiry Received!
              </h3>
              <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                An agent will contact you within 2 hours. Check your inbox for a
                confirmation.
              </p>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8">
              {/* Inputs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                    ph: "Your name",
                    full: true,
                  },
                  {
                    label: "Phone Number",
                    name: "phone",
                    type: "tel",
                    ph: "+356…",
                    full: true,
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    type: "email",
                    ph: "you@email.com",
                    full: true,
                  },
                ].map((f) => (
                  <div key={f.name} className={f.full ? "col-span-2" : ""}>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.07em] text-white/40 mb-1">
                      {f.label}
                    </label>
                    <input
                      name={f.name}
                      type={f.type}
                      value={form[f.name]}
                      onChange={h}
                      placeholder={f.ph}
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/10 rounded-md text-white text-sm outline-none focus:border-red-600 transition"
                    />
                  </div>
                ))}

                {/* Intent */}
                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.07em] text-white/40 mb-2">
                    I'm Looking To
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {["Buy", "Rent", "Sell", "Invest", "Commercial"].map(
                      (o) => (
                        <button
                          key={o}
                          onClick={() => setForm((f) => ({ ...f, intent: o }))}
                          className={`flex-1 min-w-[70px] py-2 text-xs font-semibold rounded-md border transition
                        ${
                          form.intent === o
                            ? "border-red-600 bg-red-600/20 text-red-600"
                            : "border-white/10 text-white/40"
                        }`}
                        >
                          {o}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.07em] text-white/40 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="msg"
                    value={form.msg}
                    onChange={h}
                    rows={3}
                    placeholder="Tell us what you're looking for…"
                    className="w-full px-3 py-2.5 bg-white/10 border border-white/10 rounded-md text-white text-sm resize-y outline-none focus:border-red-600 transition"
                  />
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setSent(true)}
                className="w-full mt-5 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-md transition"
              >
                Get My Free Property Match →
              </button>

              <p className="text-center text-[11px] text-white/30 mt-3">
                No spam. No obligation. GDPR compliant. Licensed estate agent.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
