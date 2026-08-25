import React from 'react';
import './MissionVision.css';
import missionIcon from '../../../assets/about-page/our-mission-icon.svg';
import visionIcon from '../../../assets/about-page/our-vision-icon.svg';

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const cards=[
  {icon:missionIcon,title:"Our Mission",content:"To make professional technology capability accessible to every business serious about growth  delivered with honesty, skill,and accountability"},
  {icon:visionIcon,title:"Our Vision",content:"To become the technology partner growing businesses recommend first  recognized for outcomes, not outputs."}
]
const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="row justify-content-center g-4">
          
            {cards.map((item ,index)=>(
          <div className="col-lg-4 col-md-5 col-12">
            <Reveal className="h-100" variant={fadeUp} delay={0.15}>
              <div key={index} className='mission-card h-100'>
                <div className='card-icon'>
                  <img src={item.icon} alt='Icon' />
                </div >
                <div className='card-content'>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </Reveal>
          </div>
            
            ))}

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
