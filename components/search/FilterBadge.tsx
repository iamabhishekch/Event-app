import { CloseIcon } from "./Icons";

interface FilterBadgeProps {
  label: string;
  onClear: () => void;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}

export default function FilterBadge({
  label,
  onClear,
  bgColor = "bg-blue-100",
  textColor = "text-blue-800",
  hoverColor = "hover:bg-blue-200",
}: FilterBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 ${bgColor} ${textColor} text-xs rounded-full`}
    >
      {label}
      <button
        onClick={onClear}
        className={`${hoverColor} rounded-full p-0.5 transition-colors`}
        aria-label={`Clear ${label.toLowerCase()}`}
      >
        <CloseIcon />
      </button>
    </span>
  );
}
