import React from 'react'
import HeroStatsSection from './sections/HeroStatsSection'
import BusinessProblemsSection from './sections/BusinessProblemsSection'
import WebsiteCapabilities from './sections/WebsiteCapabilities'
import ResultsSection from './sections/ResultsSection'
import WebsiteTechnologySection from './sections/WebsiteTechnologySection'
import ClientResultsSection from './sections/ClientResultsSection'
import WebsiteFAQCTASection from './sections/WebsiteFAQCTASection'
import TestimonialSection from './sections/TestimonialSection'
import  ProcessWrapper  from './sections/ProcessWrapper'


export const WebsiteDevelopment = () => {
  return (
    <>
        <HeroStatsSection/>
        <BusinessProblemsSection/>
        <WebsiteCapabilities/>
        <ResultsSection/>
        <ProcessWrapper/>
        <WebsiteTechnologySection/>
        <TestimonialSection/>
        <ClientResultsSection/>
        <WebsiteFAQCTASection/>
    </>
  )
}
