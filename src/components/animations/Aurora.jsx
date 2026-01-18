import React from "react";
import { motion } from "framer-motion";

const Aurora = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {/* Top-left orb - responsive sizing */}
      <motion.div
        className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Bottom-right orb - responsive sizing */}
      <motion.div
        className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Center orb - responsive sizing */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Additional orbs for better coverage */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-fuchsia-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-indigo-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Aurora;
