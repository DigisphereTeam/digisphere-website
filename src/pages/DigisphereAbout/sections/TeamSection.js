import React from "react";
import "./TeamSection.css";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const TeamSection = () => {
  const teamMembers = [
  {
    initials: "KR",
    name: "Krishna Reddy",
    role: "Founder & CEO",
    description: "15+ years in technology strategy and business transformation.",
  },
  {
    initials: "SK",
    name: "Satish Kumar",
    role: "Head of Design",
    description: "UX strategist creating user-centered digital experiences.",
  },
  {
    initials: "SP",
    name: "Shiva Prasanna Kumar",
    role: "UI/UX Designer",
    description: "Creative designer crafting intuitive and visually engaging user interfaces.",
  },
   {
    initials: "JB",
    name: "Jabeer",
    role: "Senior IT Sales Manager",
    description: "Driving IT sales through client relationships and technology solutions.",
  },

  {
    initials: "RV",
    name: "Ravi Kishore",
    role: "Lead Backend Developer",
    description: "Specializes in scalable cloud architecture, database optimization, and secure API design.",
  },
  {
    initials: "NA",
    name: "Naveen",
    role: "Backend Developer",
    description: "Specializing in Node.js, database architecture, and API optimization.",
  },
  {
    initials: "VS",
    name: "Vamshi",
    role: "Backend Developer",
    description: "Engineers high-performance server logic and secure backend services.",
  },
  {
    initials: "IS",
    name: "Ibrahim Shaik",
    role: "Lead Frontend Developer",
    description: "Focuses on design translation, UI architecture, and overall user experience.",
  },
  {
    initials: "PM",
    name: "Prasad",
    role: "Frontend Developer",
    description: "Focuses on component development, state management, and smooth application performance.",
  },
  {
    initials: "AA",
    name: "Ashok",
    role: "Frontend Developer",
    description: "Develops responsive web interfaces with a focus on code optimization and seamless user experience.",
  },
  {
    initials: "PR",
    name: "Pardeep",
    role: "Intern",
    description: "Eager learner contributing to frontend components, bug fixes, and supporting core feature delivery.",
  },
 
];

  return (
    <section className="team-section container">
      <Reveal variant={fadeUp}>
        <div className="team-header text-center">
          <h2>
            Meet the people{" "}
            <span className="team-highlight">behind the work.</span>
          </h2>
          <p className="team-subtitle">
            Designers, developers, marketers, cloud engineers, security
            specialists, and project managers working directly on your projects.
          </p>
        </div>
      </Reveal>

      <div className="row g-4 team-grid">
        {teamMembers.map((member, index) => (
          <div className="col-12 col-md-4" key={index}>
            <Reveal className="h-100" variant={fadeUp} delay={index * 0.1}>
              <div className="profile-card h-100">
                <div className="avatar-circle">{member.initials}</div>
                <h3>{member.name}</h3>
                <span className="profile-role">{member.role}</span>
                <p className="profile-desc">{member.description}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;