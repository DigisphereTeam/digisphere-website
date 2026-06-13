import React from "react";
import "./ProcessWrapper.css"
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";

// Process Icons
import discoveryIcon from "../../../../assets/website-development/discovery.svg";
import strategyIcon from "../../../../assets/website-development/strategy.svg";
import designIcon from "../../../../assets/website-development/design.svg";
import developmentIcon from "../../../../assets/website-development/development.svg";
import launchIcon from "../../../../assets/website-development/launch.svg";

const ProcessWrapper = () => {
  const processSteps = [
    {
      icon: discoveryIcon,
      number: "01",
      title: "Discovery",
      list: ["Business goals", "User research", "Competitor analysis"],
    },
    {
      icon: strategyIcon,
      number: "02",
      title: "Strategy",
      list: ["Site architecture", "SEO planning", "Content structure"],
    },
    {
      icon: designIcon,
      number: "03",
      title: "Design",
      list: ["Wireframes", "UI designs", "Prototype creation"],
    },
    {
      icon: developmentIcon,
      number: "04",
      title: "Development",
      list: ["Frontend", "Backend", "CMS integration"],
    },
    {
      icon: launchIcon,
      number: "05",
      title: "Launch & Growth",
      list: ["QA testing", "Launch", "Analytics"],
    },
  ];
  return (
    <section className="process-wrapper">
      <div className="container">
        <div className="wrapper-header">
          <h2 className="wrapper-title">
            From strategy <span>to launch.</span>
          </h2>
        </div>

        <ProcessCards cards={processSteps} colClass="col-12 col-sm-6 col-lg" />
      </div>
    </section>
  );
};
export default ProcessWrapper