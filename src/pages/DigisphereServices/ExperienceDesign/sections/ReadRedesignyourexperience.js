import React from 'react'

import "./ReadRedesignyourexperience.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";



const ReadRedesignyourexperience = () => {
  return (
<section className="read-redesign">
      <div className="container">
        <h2 className="Ready-redesign">
          Ready to redesign your experience?
        </h2>

        <p>
          Start with a UX audit. We'll review your current product and identify
          the top three experience improvements that will drive the most impact.
        </p>

        <button className="request-ux">
          Request UX Audit
          <HiOutlineArrowSmallRight />
        </button>
      </div>
    </section>
  )
}

export default ReadRedesignyourexperience