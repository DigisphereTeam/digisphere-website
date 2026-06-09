import { motion } from "framer-motion";

const Reveal = ({
  children,
  variant,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;