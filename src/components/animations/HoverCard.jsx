import React from "react";
import { motion } from "framer-motion";

const HoverCard = ({ 
  children, 
  className = "",
  scale = 1.05,
  rotate = 0 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: scale,
        rotate: rotate,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
