import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    threshold: 0.2, 
    once: true,
    margin: "0px 0px -50px 0px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
