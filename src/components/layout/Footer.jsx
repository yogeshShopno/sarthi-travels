import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#42194C] pt-0 m-1">
            {/* Top Light Container */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#fbf5ef] rounded-[28px] p-10 flex flex-col lg:flex-row gap-10" style={{
                    backgroundImage: "url('/footer-bg.svg')",
                }}>
                    {/* Left Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                        <div>
                            <h4 className="text-xs font-semibold tracking-widest mb-4">
                                ABOUT Sarthi
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>About Us</li>
                                <li>We Are Hiring</li>
                                <li>Sarthi Reviews</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policies</li>
                                <li>Copyright Policies</li>
                                <li>Support</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-widest mb-4">
                                FOR SUPPLIERS
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>List Your Activities</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-widest mb-4">
                                FOR BRANDS
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>Partner With Us</li>
                                <li>Destination Marketing</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-widest mb-4">
                                FOR TRAVELLERS
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>Gift an Experience</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className=" w-full lg:w-[320px] flex flex-col items-end justify-between " >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-medium">PAYMENT PARTNER</span>
                            <Image
                                src="/razorpay.svg"
                                alt="Razorpay"
                                width={90}
                                height={24}
                            />
                        </div>


                    </div>
                </div>

                {/* Service Badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {[
                        "CAR & BUS RENTAL",
                        "HOTEL BOOKING",
                        "FLIGHT BOOKING",
                        "ONE DAY PICNIC",
                        "DOMESTIC & INTERNATIONAL TOURS",
                        "FARM HOUSE ON RENT",
                        "PASSPORT SERVICE",
                    ].map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 text-xs font-semibold rounded-md text-white bg-gradient-to-r from-pink-500 to-orange-500"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Dark Section */}
            <div className="mt-16 text-center text-white px-6 pb-8">

                <p className="text-sm text-white-300">
                    © 2024 Sarthi Tours and Travels. All rights reserved. | Crafted with ❤️
                    by Shopno Ecommerce Pvt. Ltd.
                </p>


            </div>
        </footer>
    );
}
