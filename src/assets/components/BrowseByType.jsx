import { MdApartment, MdStorefront, MdVilla } from "react-icons/md";
import { Reveal } from "../helper/global";
import { motion } from "framer-motion";
import { BsBuildings, BsHouseHeart } from "react-icons/bs";
import { FiHome } from "react-icons/fi";

const PROPERTY_TYPES = [
  { icon: <MdApartment size={28} />, label: "Apartments", count: "4,200+" },
  { icon: <MdVilla size={28} />, label: "Villas", count: "820+" },
  { icon: <BsHouseHeart size={28} />, label: "Maisonettes", count: "1,100+" },
  { icon: <FiHome size={28} />, label: "Townhouses", count: "560+" },
  { icon: <BsBuildings size={28} />, label: "Penthouses", count: "380+" },
  { icon: <MdStorefront size={28} />, label: "Commercial", count: "290+" },
];

export function BrowseByType() {
  return (
    <section
      style={{ padding: "72px 24px 56px", background: "var(--c-surface)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: "var(--c-red)",
                fontFamily: "var(--f-body)",
                marginBottom: 10,
              }}
            >
              Property Types
            </div>
            <h2
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(26px,4vw,42px)",
                color: "var(--c-dark)",
                lineHeight: 1.15,
              }}
            >
              Browse by What
              <br />
              You're Looking For
            </h2>
          </div>
        </Reveal>

        <div className="grid-4" style={{ gap: 16 }}>
          {PROPERTY_TYPES.map((pt, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <motion.a
                href="#"
                whileHover={{ y: -5, boxShadow: "var(--sh-md)" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "var(--c-bg)",
                  borderRadius: "var(--r-lg)",
                  padding: "28px 16px",
                  border: "1.5px solid var(--c-border)",
                  cursor: "pointer",
                  transition: "border .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-red)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-border)")
                }
              >
                <div style={{ color: "var(--c-red)" }}>{pt.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--f-body)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--c-dark)",
                  }}
                >
                  {pt.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--c-muted)",
                    fontFamily: "var(--f-body)",
                  }}
                >
                  {pt.count} listings
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
