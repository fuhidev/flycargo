'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Reviews from './components/Reviews';
import PricingTable from './components/PricingTable';
import GlobalMap from './components/GlobalMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <GlobalMap />
      <Testimonials />
      <Reviews />
      <PricingTable />
      <Contact />
      <Footer />
    </div>
  );
}