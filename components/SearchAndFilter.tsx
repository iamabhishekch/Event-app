"use client";

import { useState } from "react";
import { UserTier } from "@/lib/supabase";
import { getTierDisplayName } from "@/lib/utils";
import SearchInput from "./search/SearchInput";
import FilterDropdown from "./search/FilterDropdown";
import FilterBadge from "./search/FilterBadge";
import { getAvailableTiers } from "./search/utils";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onTierFilter: (tier: UserTier | "all") => void;
  userTier: UserTier;
  searchQuery: string;
  selectedTier: UserTier | "all";
}

export default function SearchAndFilter({
  onSearch,
  onTierFilter,
  userTier,
  searchQuery,
  selectedTier,
}: SearchAndFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const availableTiers = getAvailableTiers(userTier);

  const handleTierSelect = (tier: UserTier | "all") => {
    onTierFilter(tier);
    setIsFilterOpen(false);
  };

  const hasActiveFilters = searchQuery || selectedTier !== "all";

  return (
    <div className="card-modern p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchInput searchQuery={searchQuery} onSearch={onSearch} />
        <FilterDropdown
          selectedTier={selectedTier}
          availableTiers={availableTiers}
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          onSelect={handleTierSelect}
        />
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
          {searchQuery && (
            <FilterBadge
              label={`Search: "${searchQuery}"`}
              onClear={() => onSearch("")}
            />
          )}
          {selectedTier !== "all" && (
            <FilterBadge
              label={`Tier: ${getTierDisplayName(selectedTier)}`}
              onClear={() => onTierFilter("all")}
              bgColor="bg-purple-100"
              textColor="text-purple-800"
              hoverColor="hover:bg-purple-200"
            />
          )}
        </div>
      )}
    </div>
  );
}
