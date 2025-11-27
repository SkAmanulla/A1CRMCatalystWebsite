import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesOverview from '../../components/ServicesOverview/ServicesOverview';
import IndustriesSection from '../../components/IndustriesSection/IndustriesSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesOverview />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
