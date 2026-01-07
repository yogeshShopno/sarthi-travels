import Image from "next/image";

export default function TourCard({
  image,
  title,
  duration,
  tags = [],
  locations,
  price,
  emi,
  validUpto,
}) {
  return (
    
    <div className="w-full max-w-[340px] rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
        
      {/* Image Section */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 340px"
        />

        {/* Top Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 rounded-md bg-white px-3 py-1 text-xs font-semibold shadow">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-500">{locations}</p>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          ✈️ Flight Not Included
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xl font-bold text-gray-900">
              ₹{price}
              <span className="text-xs font-normal text-gray-500">
                {" "}per person
              </span>
            </div>
            <p className="text-xs text-red-700 underline cursor-pointer">
              EMI from ₹{emi}/month
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Valid upto {validUpto}
        </p>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-lg border border-red-700 py-2 text-sm font-medium text-red-700 hover:bg-blue-50">
            Call Now
          </button>
          <button className="flex-1 rounded-lg bg-red-700 py-2 text-sm font-medium text-white hover:bg-red-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
