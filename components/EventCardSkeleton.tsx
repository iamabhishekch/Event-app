export default function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1 rounded-full bg-gray-300 w-16 h-6"></div>
        </div>
      </div>

      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
