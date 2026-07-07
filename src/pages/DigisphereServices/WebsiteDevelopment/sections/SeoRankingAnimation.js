import React from "react";
import { motion } from "framer-motion";

const SeoRankingAnimation = () => {
  const listItems = [
    { name: "Competitor A", rank: "#1", isSuccess: true },
    { name: "Competitor B", rank: "#3", isSuccess: true },
    { name: "Your Business", rank: "#47", isSuccess: false },
  ];

  // Container variants that orchestrate children sequencing
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5, // This forces items to colorize one by one
        delayChildren: 0.4    // Brief pause before the sequence starts
      }
    }
  };

  // Child variants changing step-by-step
  const itemVariants = (isSuccess) => ({
    initial: {
      borderColor: "#cbd5e1",
      backgroundColor: "rgba(241, 245, 249, 0.5)"
    },
    animate: {
      borderColor: isSuccess ? "#10b981" : "#ef4444",
      backgroundColor: isSuccess ? "rgba(209, 250, 229, 0.2)" : "rgba(254, 226, 226, 0.2)",
      transition: { duration: 0.6 }
    }
  });

  const badgeVariants = (isSuccess) => ({
    initial: { backgroundColor: "#cbd5e1" },
    animate: {
      backgroundColor: isSuccess ? "#10b981" : "#ef4444",
      transition: { duration: 0.6 }
    }
  });

  return (
    <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", width: "100%" }}>
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {listItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants(item.isSuccess)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              borderRadius: "10px",
              border: "2px solid",
              fontWeight: "600",
              color: "#1e293b"
            }}
          >
            <span>{item.name}</span>
            
            <motion.span
              variants={badgeVariants(item.isSuccess)}
              style={{
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "13px"
              }}
            >
              {item.rank}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SeoRankingAnimation;