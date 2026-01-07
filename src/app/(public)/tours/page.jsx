import TourCard from "@/components/tours/TourCard";

export default function ToursPage() {
    const tourPackages = [
        {
            id: 1,
            image: "/1.jpg",
            title: "Bali Honeymoon Special With Pool Villa",
            duration: "5 Nights / 6 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Bali Island (3N), Bali Island (2N)",
            price: "31,190",
            emi: "579",
            validUpto: "30 Sep 2026",
        },
        {
            id: 2,
            image: "/2.jpg",
            title: "Scenic Himachal",
            duration: "7 Nights / 8 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Shimla (2N), Manali (4N), +1 more",
            price: "28,130",
            emi: "1,425",
            validUpto: "31 Mar 2026",
        },
        {
            id: 3,
            image: "/3.jpg",
            title: "Uniquely Uttaranchal",
            duration: "7 Nights / 8 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Nainital/Bhimtal (3N), Kausani/Ranikhet (2N), +1 more",
            price: "35,950",
            emi: "1,820",
            validUpto: "31 Mar 2026",
        },
        {
            id: 4,
            image: "/4.jpg",
            title: "The Golden Rajasthan",
            duration: "5 Nights / 6 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Jodhpur (2N), Manvar (1N), +1 more",
            price: "29,630",
            emi: "1,501",
            validUpto: "31 Mar 2026",
        },
        {
            id: 5,
            image: "/5.jpg",
            title: "Simply Bali With Seminyak",
            duration: "4 Nights / 5 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Bali Island (2N), Bali Island (2N)",
            price: "18,370",
            emi: "930",
            validUpto: "30 Sep 2026",
        },
        {
            id: 6,
            image: "/6.jpg",
            title: "Free And Easy Thailand Tour",
            duration: "4 Nights / 5 Days",
            tags: ["Private Van Tour", "Under 50K"],
            locations: "Pattaya (2N), Bangkok (2N)",
            price: "18,910",
            emi: "958",
            validUpto: "30 Sep 2026",
        },

    ];

    return (
        <section className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourPackages.map((pkg) => (
                    <TourCard
                        key={pkg.id}
                        image={pkg.image}
                        title={pkg.title}
                        duration={pkg.duration}
                        tags={pkg.tags}
                        locations={pkg.locations}
                        price={pkg.price}
                        emi={pkg.emi}
                        validUpto={pkg.validUpto}
                    />
                ))}
            </div>
        </section>
    );
}
