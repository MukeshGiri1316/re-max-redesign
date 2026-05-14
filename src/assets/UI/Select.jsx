import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

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
      // ✅ allow deselect in single mode too
      if (value === val) {
        onChange(null);
      } else {
        onChange(val);
      }
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
        className="w-full flex items-center justify-between px-4 py-[11px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[var(--color-mid)] text-[13.5px] hover:border-[var(--color-red)] transition"
      >
        <span className="truncate text-left">{displayValue()}</span>
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-md)] overflow-hidden">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
            <FiSearch className="text-[var(--color-muted)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-sm text-[var(--color-dark)] placeholder:text-[var(--color-muted)]"
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
                    className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm transition
                      ${
                        selected
                          ? "bg-[var(--color-red-soft)]"
                          : "hover:bg-[var(--color-bg)]"
                      }
                    `}
                  >
                    {/* ✅ Checkbox */}
                    <div
                      className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition
                        ${
                          selected
                            ? "border-red"
                            : "border-border"
                        }
                      `}
                    >
                      {selected && (
                        <IoMdCheckmark />
                      )}
                    </div>

                    {/* Label */}
                    <span
                      className={`flex-1 ${
                        selected
                          ? "text-[var(--color-red)] font-medium"
                          : "text-[var(--color-mid)]"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-3 text-sm text-[var(--color-muted)]">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
