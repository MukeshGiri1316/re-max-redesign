import { useState } from "react";
import { Reveal } from "../helper/global";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { CustomSelect } from "./Select";
import { FaFilter } from "react-icons/fa";

const LOCALITIES = [
  { label: "All", value: "" },
  { label: "Valletta", value: "valletta" },
  { label: "Sliema", value: "sliema" },
  { label: "St. Julian's", value: "St. Julian's" },
  { label: "Tigne Point", value: "Tigne Point" },
  { label: "Portomaso", value: "Portomaso" },
  { label: "Gozo", value: "Gozo" },
  { label: "Mdina", value: "Mdina" },
  { label: "Smart City", value: "Smart City" },
  { label: "Pender Gardens", value: "Pender Gardens" },
  { label: "Fort Cambridge", value: "Fort Cambridge" },
];

const TABS = ["Buy", "Rent", "Sell", "Commercial"];

const TYPES = [
  { label: "All", value: "" },
  { label: "Apartment", value: "Apartment" },
  { label: "Villa", value: "Villa" },
  { label: "Maisonette", value: "Maisonette" },
  { label: "Townhouse", value: "Townhouse" },
  { label: "Penthouse", value: "Penthouse" },
  { label: "Studio", value: "Studio" },
];

const BEDS = ["Any", "1", "2", "3", "4", "5+"];

export function SearchCard() {
  const [tab, setTab] = useState("Buy");
  const [loc, setLoc] = useState("");
  const [propType, setPropType] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [beds, setBeds] = useState("Any");

  return (
    <Reveal delay={0.22}>
      <div className="bg-surface rounded-xl p-6 pb-7 px-7 max-w-[740px] shadow-lg">
        {/* Tabs */}
        <div className="flex gap-1 mb-5 bg-bg rounded-md p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-[9px] rounded-sm text-[13.5px] font-semibold font-body transition-all
            ${
              tab === t
                ? t === "Buy" || t === "Sell"
                  ? "bg-red text-white"
                  : t === "Rent"
                    ? "bg-blue text-white"
                    : "bg-dark text-white"
                : "text-muted hover:bg-border/40"
            }
          `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Row 2: Filters */}
        <div className="grid grid-rows-2 grid-cols-2 gap-2.5">
          <CustomSelect
            placeholder="Property Type"
            options={TYPES}
            onChange={setPropType}
            value={propType}
          />

          <CustomSelect placeholder="Location" options={LOCALITIES} onChange={setLoc} value={loc} />

          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="&#8364; Min Price"
            className="px-3.5 py-[11px] rounded-sm border-[1.5px] border-border bg-bg text-[13.5px] font-body text-mid outline-none placeholder:text-muted"
          />

          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="&#8364; Max Price"
            className="px-3.5 py-[11px] rounded-sm border-[1.5px] border-border bg-bg text-[13.5px] font-body text-mid outline-none placeholder:text-muted"
          />
        </div>
        <div className="flex justify-between mt-5">
          <button className="px-6 py-[11px] text-dark rounded-sm font-bold text-[14px] font-body flex items-center gap-2 whitespace-nowrap transition-colors border border-border">
            <FaFilter /> Advance Filters
          </button>

          <button className="px-6 py-[11px] bg-red text-white rounded-sm font-bold text-[14px] font-body flex items-center gap-2 whitespace-nowrap transition-colors hover:bg-red-d">
            <FiSearch size={16} /> Search
          </button>
        </div>
      </div>
    </Reveal>
  );
}
