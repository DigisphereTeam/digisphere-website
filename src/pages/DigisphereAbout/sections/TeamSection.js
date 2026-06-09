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
    initials: "RV",
    name: "Ravi",
    role: "Backend Lead",
    description: "Cybersecurity expert with enterprise compliance experience.",
  },
  {
    initials: "IS",
    name: "Ibrahim Shaik",
    role: "Frontend Developer",
    description: "Cloud architect specializing in scalable infrastructure.",
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
    description: "Focused on building robust microservices and server-side logic.",
  },
  {
    initials: "PM",
    name: "Prasad",
    role: "Frontend Developer",
    description: "Crafting responsive user interfaces with modern React frameworks.",
  },
  {
    initials: "AA",
    name: "Ashok",
    role: "Frontend Developer",
    description: "Expert in performance tuning and interactive component design.",
  },
  {
    initials: "PR",
    name: "Pardeep",
    role: "Intern",
    description: "Assisting the engineering team with feature testing and documentation.",
  },
  {
    initials: "AS",
    name: "Akash",
    role: "Intern",
    description: "Gaining hands-on experience in full-stack development and agile workflows.",
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
