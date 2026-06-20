import React from "react";
import MarketingServices from "./sections/MarketingServices";
import MarketingHeroSection from "./sections/MarketingHeroSection";
import CardsFaqSection from "./sections/CardsFaqSection";
import DigitalMarketingHerosection from "./sections/DigitalMarketingHerosection.js";
export const DigitalMarketing = () => {
  return (
    <>
      <DigitalMarketingHerosection />
      <MarketingHeroSection />
      <MarketingServices />
      <CardsFaqSection />
    </>
  );
};
