import Hero from "@/components/home/Hero";
import ToursPage from "./tours/page";
import TopDestinations from "@/components/home/TopDestinations";
import WhySarthi from "@/components/home/WhySarthi";


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <Hero />
      <TopDestinations />
      <ToursPage />
      <WhySarthi />

      {/* Placeholder content (below hero) */}
      <section className="max-w-7xl mx-auto px-4 py-16">

   

      </section>
    </main>
  );
}
