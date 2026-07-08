import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// Updated Sub-component to sync with scroll view
const CountingNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  // This hook returns true when the specific number is visible on screen
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    // ONLY run the animation if the item is in view
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: "easeOut",
    });
    
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, value, motionValue, rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const DropOffAnimation = ({ title, data, isRedTheme = true, icon }) => {
  const barColor = isRedTheme ? "#ef4444" : "#3b82f6";

  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <span style={cardTitleStyle}>{title}</span>
        {icon && (
          <img 
            src={icon} 
            alt={`${title} icon`} 
            style={{ width: "20px", height: "20px", objectFit: "contain" }} 
          />
        )}
      </div>

      <div style={statsContainerStyle}>
        {data.map((item, index) => (
          <div key={index} style={rowStyle}>
            {item.label && <span style={labelStyle}>{item.label}</span>}
            <div style={trackStyle}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percentage}%` }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                style={{
                  ...barStyle,
                  backgroundColor: item.color || barColor,
                }}
              />
            </div>
            <span style={valueStyle}>
              <CountingNumber value={item.numericValue} suffix={item.suffix} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles remain identical
const cardStyle = { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", width: "100%" };
const cardHeaderStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" };
const cardTitleStyle = { color: "#334155", fontWeight: "600", fontSize: "16px" };
const statsContainerStyle = { display: "flex", flexDirection: "column", gap: "16px" };
const rowStyle = { display: "flex", alignItems: "center", gap: "12px" };
const labelStyle = { width: "80px", fontSize: "13px", color: "#64748b", fontWeight: "500" };
const trackStyle = { flex: 1, height: "12px", backgroundColor: "#e2e8f0", borderRadius: "999px", overflow: "hidden" };
const barStyle = { height: "100%", borderRadius: "999px" };
const valueStyle = { width: "45px", fontSize: "13px", color: "#475569", textAlign: "right", fontWeight: "600" };

export default DropOffAnimation;