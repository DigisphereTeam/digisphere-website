import seoIcon from "../../../../assets/digital-marketing/seo-icon.svg"
import adsIcon from "../../../../assets/digital-marketing/ads-icon.svg"
import socialIcon from "../../../../assets/digital-marketing/social-icon.svg"
import emailIcon from "../../../../assets/digital-marketing/email-icon.svg"
import contentIcon from "../../../../assets/digital-marketing/content-icon.svg"
import analyticsIcon from "../../../../assets/digital-marketing/analytics-icon.svg"
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg"

import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";

const marketingServices = [
  {
    icon: seoIcon,
    title: "Search Engine Optimisation",
    description:
      "Rank higher, get found faster. Technical SEO, content strategy, and authority building to drive sustainable organic traffic that converts.",
    points: [
      "300%+ organic traffic growth",
      "First-page rankings in 6 months",
      "Full SEO audit & roadmap",
    ],
  },

  {
    icon: adsIcon,
    title: "Google Ads & PPC",
    description:
      "ROI-obsessed paid search campaigns. From keyword research to bid strategy and landing page optimisation.",
    points: [
      "Average 4.2x ROAS",
      "Conversion rate optimisation",
      "Monthly performance reporting",
    ],
  },

  {
    icon: socialIcon,
    title: "Social Media Advertising",
    description:
      "Meta, LinkedIn, and YouTube campaigns engineered for your audience. We build funnels that move prospects from awareness to revenue.",
    points: [
      "Targeted audience building",
      "Creative A/B testing",
      "Cross-platform attribution",
    ],
  },

  {
    icon: emailIcon,
    title: "Email & Marketing Automation",
    description:
      "Nurture leads, retain customers, and drive repeat revenue with behaviour-triggered email journeys and automation systems.",
    points: [
      "40%+ open rate campaigns",
      "Drip sequence design",
      "CRM integration & sync",
    ],
  },

  {
    icon: contentIcon,
    title: "Content Marketing",
    description:
      "Thought leadership content that ranks, educates, and converts. Blogs, landing pages, case studies, and video scripts.",
    points: [
      "SEO-driven content calendar",
      "Long-form authority articles",
      "Lead magnet creation",
    ],
  },

  {
    icon: analyticsIcon,
    title: "Analytics & CRO",
    description:
      "Data without action is noise. We set up proper tracking, identify conversion bottlenecks, and run structured experiments.",
    points: [
      "GA4 & event tracking setup",
      "Heatmap & session analysis",
      "Monthly CRO experiments",
    ],
  },
];

function MarketingServices() {
  return (
    <ServicesGrid
      sectionLabel="WHAT WE DO"
      heading="Every channel, one strategy."
      description="We don't pick one channel and call it a day. We build integrated systems where SEO, paid, email, and content amplify each other."
      services={marketingServices}
      tickIcon={tickIcon}
    />
  );
}

export default MarketingServices;
