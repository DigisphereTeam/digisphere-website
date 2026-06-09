import React from 'react'

import HeroSection from './sections/HeroSection'
import WhyWeExist from './sections/WhyWeExist'
import MissionVision from './sections/MissionVision'
import StatsSection from './sections/StatsSection'
import PrinciplesSection from './sections/PrinciplesSection'
import ComparisonSection from './sections/ComparisonSection'
import EcosystemSection from './sections/EcosystemSection'
import TeamSection from './sections/TeamSection'
import EngagementSection from './sections/EngagementSection'
import CTASection from './sections/CtaSection'

import './DigisphereAbout.css'

const DigisphereAbout = () => {
  return (
    <div>
      <HeroSection />
      <WhyWeExist />
      <MissionVision />
      <StatsSection />
      <PrinciplesSection />
      <ComparisonSection />
      <EcosystemSection />
      <TeamSection />
      <EngagementSection />
      <CTASection />
    </div>
  )
}

export default DigisphereAbout