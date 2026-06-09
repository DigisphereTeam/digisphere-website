import Reveal from "../../../animations/Reveal";
import { fadeRight, fadeUp } from "../../../animations/variants";
import "./WhyWeExist.css";

const timelineData = [
  {
    year: "2019",
    description: "Started with a vision to help businesses compete digitally.",
  },
  {
    year: "2021",
    description: "Expanded into application development and cloud services.",
  },
  {
    year: "2023",
    description: "Added cybersecurity and managed IT capabilities.",
  },
  {
    year: "2025",
    description: "Delivered 336+ projects for 316+ clients.",
  },
  {
    year: "Future",
    description:
      "Building a national technology ecosystem for growing businesses.",
  },
];

const WhyWeExist = () => {
  return (
    <section className="why-digisphere">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-6">
            <div className="why-heading">
              <Reveal variant={fadeRight}>
                <h2>Why Digisphere exists.</h2>
              </Reveal>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="timeline-wrapper">
              {timelineData.map((item, index) => (
                <Reveal variant={fadeUp} delay={index * 0.1}>
                  <div className="timeline-item" key={index}>
                    <div className="timeline-marker">
                      <span className="timeline-dot"></span>
                      <span className="timeline-line"></span>
                    </div>

                    <div className="timeline-content">
                      <h6>{item.year}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
