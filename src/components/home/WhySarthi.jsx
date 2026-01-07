import Image from "next/image";

const features = [
  {
    title: "Search Flights and Hotels with Exclusive Deals",
    description:
      "Search for exclusive deals on flights and hotels. Find cheap air tickets to any destination you like. Choose from its vast repository of hotels - from budget, mid-range, five-star to niche boutique properties. Widen your choices with options like flexi stay, pay directly at hotel, and guaranteed standard amenities. Extremely efficient and easy.",
    open: true,
  },
  {
    title: "Enjoy Secure Flight Bookings with Protection",
  },
  {
    title: "Holiday Options for Every Budget and Interest",
  },
  {
    title: "Customize Your Trip with Best Combinations",
  },
  {
    title: "Skip the Ticket Queue for Monument Visits",
  },
  {
    title: "Get New Deals Every Season for Flights and Hotels",
  },
  {
    title: "Customer Support Backed by Millions of Satisfied Travelers",
  },
];

export default function WhySarthi() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Why Sarthi?
            </h2>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <span className="mt-1 text-red-500">✖</span>
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-gray-400">⌄</span>
                  </div>

                  {item.open && (
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* dotted paths */}
        

  
              <Image
                src="/mobile.png"
                alt="Sarthi App"
                width={500}
                height={100}
           
              />
         
          </div>

        </div>
      </div>
    </section>
  );
}
