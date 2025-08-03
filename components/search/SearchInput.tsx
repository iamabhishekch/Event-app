import { SearchIcon } from "./Icons";

interface SearchInputProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function SearchInput({
  searchQuery,
  onSearch,
}: SearchInputProps) {
  return (
    <div className="flex-1">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          aria-label="Search events"
        />
      </div>
    </div>
  );
}
