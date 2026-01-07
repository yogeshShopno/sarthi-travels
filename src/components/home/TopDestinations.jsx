import Image from "next/image";

const destinations = [
    {
        title: "Kerala",
        tours: "7 Tours",
        image: "/keral.jpg",
        large: true,
    },
    {
        title: "Sikkim",
        tours: "11 Tours",
        image: "/sikkim.jpg",
        large: true,
    },
    {
        title: "Char Dham Yatra",
        tours: "4 Tours",
        image: "/char-dham.jpg",

    },
    {
        title: "Himachal Pradesh",
        tours: "25 Tours",
        image: "/himachal.jpg",
        large: true,
    },
    {
        title: "Jammu And Kashmir",
        tours: "26 Tours",
        image: "/kashmir.jpg",
        large: true,
    },
    {
        title: "Leh Ladakh",
        tours: "28 Tours",
        image: "/leh.jpg",
        large: true,
    },
];

export default function TopDestinations() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Top Destinations
                </h2>
                <p className="text-gray-500 mt-1">
                    Most visited destinations by Sarthi tourist arrivals
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinations.map((item, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl group ${item.grid ? "grid grid-cols-2 grid-rows-2 gap-1 h-[340px]" : "h-[340px]"
                            }`}
                    >

                        <DestinationCard {...item} />

                    </div>
                ))}
            </div>
                     {/* Heading */}
            <div className="mt-8">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Top Packages
                </h2>
                <p className="text-gray-500 mt-1">
                    Most visited Packages by Sarthi tourist arrivals
                </p>
            </div>
        </section>
    );
}

/* Card */
function DestinationCard({ image, title, tours }) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <Image
                src={image}
                alt={title || "destination"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
            />

            {/* Overlay */}
            {(title || tours) && (
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
                    {title && (
                        <h3 className="text-xl font-semibold tracking-wide uppercase">
                            {title}
                        </h3>
                    )}
                    <span className="w-10 h-[2px] bg-white my-2"></span>
                    {tours && (
                        <p className="text-sm opacity-90">{tours}</p>
                    )}
                </div>
            )}
        </div>
    );
}
