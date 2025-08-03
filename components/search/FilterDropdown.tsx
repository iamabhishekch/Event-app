import { UserTier } from "@/lib/supabase";
import { getTierDisplayName } from "@/lib/utils";
import { FilterIcon, ChevronIcon } from "./Icons";

interface FilterDropdownProps {
  selectedTier: UserTier | "all";
  availableTiers: UserTier[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (tier: UserTier | "all") => void;
}

export default function FilterDropdown({
  selectedTier,
  availableTiers,
  isOpen,
  onToggle,
  onSelect,
}: FilterDropdownProps) {
  const getButtonClass = (tier: UserTier | "all", selected: UserTier | "all") =>
    `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
      selected === tier ? "bg-blue-50 text-blue-700" : "text-gray-700"
    }`;

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
      >
        <FilterIcon />
        {selectedTier === "all"
          ? "All Tiers"
          : getTierDisplayName(selectedTier)}
        <ChevronIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => onSelect("all")}
              className={getButtonClass("all", selectedTier)}
            >
              All Accessible Events
            </button>
            {availableTiers.map((tier) => (
              <button
                key={tier}
                onClick={() => onSelect(tier)}
                className={getButtonClass(tier, selectedTier)}
              >
                {getTierDisplayName(tier)} Events Only
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
