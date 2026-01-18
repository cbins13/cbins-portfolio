import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ShuffleText = ({ 
  text, 
  delay = 0,
  className = "",
  shuffleSpeed = 50,
  revealSpeed = 100
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
  const getRandomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  useEffect(() => {
    if (isComplete) return;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // Create shuffled text: revealed characters + random chars for remaining
        const revealed = text.slice(0, currentIndex);
        const remaining = text.slice(currentIndex);
        const shuffled = revealed + remaining
          .split("")
          .map(() => getRandomChar())
          .join("");
        
        setDisplayText(shuffled);

        // Randomly reveal the next character (creates shuffle effect)
        if (Math.random() > 0.85) {
          setCurrentIndex((prev) => {
            const next = prev + 1;
            if (next >= text.length) {
              setIsComplete(true);
              setDisplayText(text);
              return text.length;
            }
            return next;
          });
        }
      } else {
        setIsComplete(true);
        setDisplayText(text);
        clearInterval(interval);
      }
    }, shuffleSpeed);

    return () => clearInterval(interval);
  }, [currentIndex, text, shuffleSpeed, isComplete]);

  // Start the animation after delay
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setIsComplete(false);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayText || text.split("").map(() => getRandomChar()).join("")}
    </motion.span>
  );
};

export default ShuffleText;
