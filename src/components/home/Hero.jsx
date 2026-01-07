import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-4 pt-6">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl">

        {/* Background Image */}
        <div className="relative h-[520px] w-full">
          <Image
            src="/bus.jpg"
            alt="Beach destination"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Text Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Explore under the <br className="hidden md:block" /> waves
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/90">
              Dive into sun-soaked shores and crystal-clear waters. Whether
              you&apos;re lounging on the sand, exploring vibrant coral reefs,
              or sipping cocktails at sunset, your perfect beach getaway
              awaits!
            </p>
          </div>

          {/* Slider Arrows (UI only) */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/40 text-white">
            ←
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/40 text-white">
            →
          </button>
        </div>

        {/* Search Box */}
        <div className="relative z-20 -mt-16 px-4 pb-6">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">

            {/* Tabs */}
            <div className="flex">
              <button className="flex-1 py-4 text-sm font-medium text-gray-700 border-r">
                Tour
              </button>
              <button className="flex-1 py-4 text-sm font-medium text-gray-700 border-r">
                Activities
              </button>
              <button className="flex-1 py-4 text-sm font-medium bg-[#42194C] text-white">
                Transport
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="p-4 border-t md:border-r">
                <label className="text-xs text-gray-500">From</label>
                <p className="text-sm font-medium">Select From City</p>
              </div>

              <div className="p-4 border-t md:border-r">
                <label className="text-xs text-gray-500">To</label>
                <p className="text-sm font-medium">Select To City</p>
              </div>

              <div className="p-4 border-t md:border-r">
                <label className="text-xs text-gray-500">Journey Date</label>
                <p className="text-sm font-medium">Sep 12 - Sep 20</p>
              </div>

              <div className="p-4 border-t md:border-r">
                <label className="text-xs text-gray-500">Mobile No</label>
                <p className="text-sm font-medium">Your Mobile No</p>
              </div>

              <button className="bg-[#42194C] text-white font-semibold text-sm flex items-center justify-center">
                Search
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
