import React from 'react'
import "./CareersCards.css"
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import { 
  Zap, 
  BookOpen, 
  Users, 
  Heart, 
  Coffee, 
  Briefcase 
} from "lucide-react";
const benefitsData = [
  {
    icon: Zap,
    title: "High-impact work",
    description:
      "Build products and systems that real businesses rely on — not internal tools that collect dust.",
  },
  {
    icon: BookOpen,
    title: "Learning budget",
    description:
      "₹30,000/year for courses, certifications, conferences, and books. We invest in your growth.",
  },
  {
    icon: Users,
    title: "Collaborative culture",
    description:
      "Flat structure, no politics. Senior engineers pair with juniors. Designers work with developers from day one.",
  },
  {
    icon: Heart,
    title: "Health insurance",
    description:
      "Group health insurance for you and your family — because we care about the whole person, not just the employee.",
  },
  {
    icon: Coffee,
    title: "Flexible hours",
    description:
      "Core hours 10am–4pm IST. Beyond that, work when you're at your best — we care about output, not clock-watching.",
  },
  {
    icon: Briefcase,
    title: "Career progression",
    description:
      "Clear growth paths from junior to senior to lead. 6-month performance reviews with structured feedback.",
  },
];
const CareersCards = () => {
  return (
    <>
<section className="career-why-section py-5">
  <div className="container">

    {/* Header */}
    <Reveal variant={fadeUp} delay={0.1}>
      <div className="row mb-4">
        <div className="col-12">
          <span className="career-section-subtitle">
            WHY DIGISPHERE
          </span>

          <h2 className="career-section-title mt-2">
            We take care of the people who take{" "}
            <br className="d-none d-md-inline" />
            care of our clients.
          </h2>
        </div>
      </div>
    </Reveal>

    {/* Benefits Cards */}
    <div className="row g-4">
      {benefitsData.map((benefit, index) => {
        const IconComponent = benefit.icon;

        return (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-12 d-flex"
          >
            <div className="w-100 d-flex">
              <Reveal
                variant={fadeUp}
                delay={0.2 + index * 0.1}
                className="w-100"
              >
                <div className="career-benefit-card h-100 p-4">
                  
                  {/* Icon */}
                  <div className="career-icon-wrapper mb-3">
                    <IconComponent
                      className="career-card-icon"
                      size={20}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="career-card-title h5">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="career-card-description mb-0">
                    {benefit.description}
                  </p>

                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>
    </>
  )
}

export default CareersCards