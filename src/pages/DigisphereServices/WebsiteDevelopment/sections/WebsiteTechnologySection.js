import React from "react";
import "./WebsiteTechnologySection.css";

import Before from "../../../../assets/website-development/before.svg";
import After from "../../../../assets/website-development/after.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import BeforeAfterCards from "../../../../components/BeforeAfterCards/BeforeAfterCards";


const WebsiteTechnologySection = () => {
  const technologies = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind"],
    },
    {
      title: "CMS",
      items: ["WordPress", "Headless CMS", "Sanity", "Strapi"],
    },
    {
      title: "Analytics",
      items: ["GA4", "Tag Manager", "Hotjar", "Search Console"],
    },
    {
      title: "Infrastructure",
      items: ["AWS", "Azure", "Google Cloud", "Cloudflare"],
    },
  ];

  const beforeItems = [
    { icon: "✕", name: "Slow website" },
    { icon: "✕", name: "Poor rankings" },
    { icon: "✕", name: "Low enquiries" },
    { icon: "✕", name: "Outdated design" },
    { icon: "✕", name: "No analytics" },
  ];

  const afterItems = [
    { icon: "✓", name: "Fast performance" },
    { icon: "✓", name: "SEO visibility" },
    { icon: "✓", name: "Lead generation" },
    { icon: "✓", name: "Modern UX" },
    { icon: "✓", name: "Business insights" },
  ];

  return (
    <>
      {/* Technology Stack */}

      <section className="website-tech-section">
        <div className="container">
          <Reveal variant={fadeUp}>
            <h2 className="website-tech-title">
              Built using <span>modern technology.</span>
            </h2>
          </Reveal>

          <div className="row">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-12"
              >
                <div className="technology-group">
                  <h4>{tech.title}</h4>

                  <div className="technology-list">
                    {tech.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="technology-item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After Cards */}

      <BeforeAfterCards
        title="What changes"
        highlightedText="after launch."
        beforeItems={beforeItems}
        afterItems={afterItems}
        beforeIcon={Before}
        afterIcon={After}
      />
    </>
  );
};

export default WebsiteTechnologySection;