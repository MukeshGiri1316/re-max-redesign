import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

export function Footer() {
  const COL = [
    {
      title: "Buy",
      links: [
        "Buying a Property",
        "Property for Sale in Malta",
        "Property for Sale in Gozo",
        "Listings",
        "Sole Agency Listings",
        "Buyer Match",
      ],
    },
    {
      title: "Rent",
      links: [
        "Rent a Property",
        "List Your Property for Rent",
        "Luxury Property for Rent",
        "Budget Property for Rent",
        "Holiday Rentals in Malta",
      ],
    },
    {
      title: "Popular Locations",
      links: [
        "Valletta",
        "Sliema & St Julians",
        "North Region",
        "Central Region",
        "Portomaso",
        "Tigne Point",
        "Fort Cambridge",
        "Kempinski Gozo",
      ],
    },
    {
      title: "Company",
      links: [
        "About Agency",
        "Our Agents",
        "Our Offices",
        "Join Us",
        "Contact Us",
        "Blog",
        "Guides",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <footer className="bg-[#0C0A08] px-5 md:px-6 pt-14 pb-8">
      <div className="max-w-[1240px] mx-auto">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 mb-10 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[var(--color-red)] flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">
                R
              </span>
            </div>
            <div>
              <div className="text-white font-display font-bold text-[17px]">
                Real Estate Malta
              </div>
              <div className="text-[11px] text-white/40 tracking-[0.08em] font-body">
                Malta's Leading Real Estate Network
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[FiFacebook, FiInstagram, FiLinkedin, FiYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    border border-white/15
                    text-white/50
                    transition-all duration-200
                    hover:border-[var(--color-red)]
                    hover:text-[var(--color-red)]
                    hover:bg-white/5
                  "
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          {COL.map((c, i) => (
            <div key={i}>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-red)] mb-4 font-body">
                {c.title}
              </div>

              <div className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="
                      text-[13px]
                      text-white/40
                      font-body
                      transition-colors duration-200
                      hover:text-white
                    "
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-white/10">
          <span className="text-[12px] text-white/30 font-body">
            © 2026 RE Malta. All rights reserved. License PC-*****-22.
          </span>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Data Protection",
              "Access Your Personal Data",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="
                  text-[12px]
                  text-white/30
                  font-body
                  transition-colors duration-200
                  hover:text-white/70
                "
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
