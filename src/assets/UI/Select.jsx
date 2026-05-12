import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck, FiSearch } from "react-icons/fi";

export const CustomSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  multiple = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isSelected = (val) => {
    if (multiple) return (value || []).includes(val);
    return value === val;
  };

  const handleSelect = (val) => {
    if (multiple) {
      const current = value || [];
      if (current.includes(val)) {
        onChange(current.filter((v) => v !== val));
      } else {
        onChange([...current, val]);
      }
    } else {
      onChange(val);
      setOpen(false);
    }
  };

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  const displayValue = () => {
    if (multiple) {
      const vals = value || [];
      if (!vals.length) return placeholder;
      return options
        .filter((o) => vals.includes(o.value))
        .map((o) => o.label)
        .join(", ");
    } else {
      const selected = options.find((o) => o.value === value);
      return selected ? selected.label : placeholder;
    }
  };

  return (
    <div ref={ref} className="relative w-full font-body">
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-4 py-[11px] bg-bg border-[1.5px] border-border rounded-sm text-mid text-[13.5px] hover:border-red transition"
      >
        <span className="truncate text-left">{displayValue()}</span>
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-surface border border-border rounded-md shadow-md overflow-hidden">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-bg">
            <FiSearch className="text-muted" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-sm text-dark placeholder:text-muted"
            />
          </div>

          {/* Options */}
          <div className="max-h-56 overflow-y-auto">
            {filtered.length ? (
              filtered.map((opt) => {
                const selected = isSelected(opt.value);

                return (
                  <div
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`flex items-center justify-between px-4 py-2.5 cursor-pointer text-sm transition
                      ${
                        selected
                          ? "bg-red-soft text-red"
                          : "text-mid hover:bg-bg"
                      }
                    `}
                  >
                    <span>{opt.label}</span>

                    {selected && <FiCheck className="text-red" />}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-3 text-sm text-muted">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
