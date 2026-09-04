import React from 'react'
import TechnologyGuidesHero from './section/TechnologyGuidesHero.js'
import CardsTechnology from './section/CardsTechnology.js'
import NewsletterSection from './section/NewsletterSection.js'
import { useState, useEffect } from "react";

const TechnologyGuides = () => {
  useEffect(() => {
  if (window.location.hash === "#newsletter-section") {
    setTimeout(() => {
      document.getElementById("newsletter-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}, []);

  return (
    <>
   <TechnologyGuidesHero/>
   <CardsTechnology/>
  <NewsletterSection/>
</>
  )
}

export default TechnologyGuides