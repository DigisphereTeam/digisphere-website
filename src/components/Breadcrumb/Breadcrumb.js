import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb-nav">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="breadcrumb-current">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="breadcrumb-link"
              >
                {item.label}
              </Link>
            )}

            {!isLast && (
              <span className="breadcrumb-separator">
                /
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;