"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextRevealAnimation = () => {
  const targetText = `The Next Generation Trading Platform`;
  const initialText = "Welcome to the Future"; // Static text displayed initially
  const [displayText, setDisplayText] = useState(initialText);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalDuration = 100; // Animation speed
  const repeatDelay = 5000; // Delay between animations

  const startAnimation = () => {
    let currentIndex = 0;
    const length = targetText.length;
    const intervalId = setInterval(() => {
      if (currentIndex < length) {
        setDisplayText((prev) => {
          const revealedText = targetText.substring(0, currentIndex + 1);
          const randomText = Array.from(
            { length: length - revealedText.length },
            () => characters.charAt(Math.floor(Math.random() * characters.length))
          ).join("");
          return revealedText + randomText;
        });
        currentIndex++;
      } else {
        clearInterval(intervalId); // Stop the interval when done
      }
    }, intervalDuration);
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      startAnimation();
    }, 2000); // Delay before starting the animation

    const repeatInterval = setInterval(() => {
      setDisplayText(initialText); // Reset to initial text
      setTimeout(startAnimation, 2000); // Restart animation after delay
    }, repeatDelay);

    // Cleanup
    return () => {
      clearTimeout(animationTimeout);
      clearInterval(repeatInterval);
    };
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-[600px] ${displayText !== "The Next Generation Trading Platform" ? "h-[170px]":""} text-shadow-lg bg-gradient-to-br from-[#A4FFB1] to-[#A4FFB1] inline-block text-transparent bg-clip-text font-ppneubit text-[84px] bg-blend-lighten`}
    >
      {displayText}
    </motion.span>
  );
};

export default TextRevealAnimation;
