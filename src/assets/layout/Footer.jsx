import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiSearch, FiMapPin, FiHome, FiArrowRight, FiPhone, FiMail,
  FiCheckCircle, FiShield, FiAward, FiUsers, FiClock, FiChevronDown,
  FiChevronLeft, FiChevronRight, FiInstagram, FiFacebook,
  FiLinkedin, FiYoutube, FiStar, FiHeart, FiEye,
  FiTrendingUp, FiBell, FiKey, FiGrid, FiMenu, FiX
} from "react-icons/fi";
import { MdVerified, MdLocationOn, MdBed, MdBathtub, MdApartment, MdVilla, MdStorefront } from "react-icons/md";
import { BsBuildings, BsHouseHeart, BsGrid3X3, BsPersonCheck } from "react-icons/bs";


export function Footer() {
  const COL = [
    { title:"Buy", links:["Buying a Property","Property for Sale in Malta","Property for Sale in Gozo","Listings","Sole Agency Listings","Buyer Match"] },
    { title:"Rent", links:["Rent a Property","List Your Property for Rent","Luxury Property for Rent","Budget Property for Rent","Holiday Rentals in Malta"] },
    { title:"Popular Locations", links:["Valletta","Sliema & St Julians","North Region","Central Region","Portomaso","Tigne Point","Fort Cambridge","Kempinski Gozo"] },
    { title:"Company", links:["About RE/MAX Malta","Our Agents","Our Offices","Join Us","Contact Us","Blog","Guides","Privacy Policy"] },
  ];

  return (
    <footer style={{ background:"#0C0A08", padding:"56px 24px 28px" }}>
      <div style={{ maxWidth:1240, margin:"0 auto" }}>
        {/* Top strip */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:48, paddingBottom:32, borderBottom:"1px solid rgba(255,255,255,.07)", flexWrap:"wrap", gap:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:42, height:42, background:"var(--c-red)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#fff", fontFamily:"var(--f-display)", fontWeight:700, fontSize:20 }}>R</span>
            </div>
            <div>
              <div style={{ fontFamily:"var(--f-display)", fontSize:18, fontWeight:700, color:"#fff" }}>RE/MAX Malta</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,.35)", letterSpacing:".07em" }}>Malta's Leading Real Estate Network</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:16, alignItems:"center" }}>
            {[FiFacebook,FiInstagram,FiLinkedin,FiYoutube].map((Icon,i)=>(
              <a key={i} href="#" style={{ width:36, height:36, borderRadius:"50%", border:"1px solid rgba(255,255,255,.12)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,.4)", transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--c-red)";e.currentTarget.style.color="var(--c-red)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.color="rgba(255,255,255,.4)";}}>
                <Icon size={16}/>
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:32, marginBottom:48 }}>
          {COL.map((c,i)=>(
            <div key={i}>
              <div style={{ fontSize:11, fontWeight:700, color:"var(--c-red)", textTransform:"uppercase", letterSpacing:".1em", marginBottom:16, fontFamily:"var(--f-body)" }}>{c.title}</div>
              {c.links.map(l=>(
                <a key={l} href="#" style={{ display:"block", fontSize:13, color:"rgba(255,255,255,.38)", marginBottom:10, fontFamily:"var(--f-body)", transition:"color .2s" }}
                  onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.38)"}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:22, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:12, color:"rgba(255,255,255,.25)", fontFamily:"var(--f-body)" }}>
            © 2026 RE/MAX Malta. All rights reserved. License PC-00442-22.
          </span>
          <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
            {["Privacy Policy","Terms & Conditions","Data Protection","Access Your Personal Data"].map(l=>(
              <a key={l} href="#" style={{ fontSize:12, color:"rgba(255,255,255,.25)", fontFamily:"var(--f-body)", transition:"color .2s" }}
                onMouseEnter={e=>e.target.style.color="rgba(255,255,255,.65)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.25)"}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}