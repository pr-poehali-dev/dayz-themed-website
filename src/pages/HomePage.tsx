
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import ServersList from '@/components/ServersList';
import PixelArtGallery from '@/components/PixelArtGallery';
import StatsSection from '@/components/StatsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <StatsSection />
        <ServersList />
        <PixelArtGallery />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
