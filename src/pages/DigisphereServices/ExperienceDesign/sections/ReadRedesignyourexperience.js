import React from 'react'

import "./ReadRedesignyourexperience.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';



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

        <Link to="/contact"><button className="request-ux">
          Request UX Audit
          <HiOutlineArrowSmallRight />
        </button></Link>
      </div>
    </section>
  )
}

export default ReadRedesignyourexperience