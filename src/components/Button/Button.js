import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "primary", //default
  icon,
  iconPosition = "right", // default
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`custom-btn ${variant}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </button>
  );
};

export default Button;