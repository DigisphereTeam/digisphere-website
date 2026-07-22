import React from 'react'
import Reveal from "../../../../animations/Reveal";
import Counter from "../../../../components/Counter/Counter";
import { fadeUp } from "../../../../animations/variants";
const WebAppCounter = () => {
    const stats = [
  {
    end: 80,
    suffix: "+",
    label: "Custom applications delivered",
  },
  {
    end: 9,
    prefix: "99.",
    suffix: "%",
    label: "Average uptime across hosted apps",
  },
  {
    end: 3,
    suffix: "x",
    label: "Avg. productivity gain for clients",
  },
 {
  end: 8,
  suffix: "wks",
  label: "Avg. productivity gain for clients",
}
];
  return (
    <section>
    <div className="container-fluid mt-5 px-5" style={{backgroundColor:"#0F172A",}}>
        <div className="row g-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <Reveal variant={fadeUp} delay={index * 0.1}>
                <div className="experince-stat-card">
                  <h3 className="experince-stat-number">
                    <Counter
                      end={item.end}
                      prefix={item.prefix || ""}
                      suffix={item.suffix || ""}
                    />
                  </h3>

                  <p className="experince-stat-label">{item.label}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default WebAppCounter