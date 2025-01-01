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
          ).join(" ");
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`overflow-hidden break-words text-shadow-lg bg-gradient-to-br from-[#A4FFB1] to-[#A4FFB1] inline-block text-transparent bg-clip-text font-ppneubit bg-blend-lighten`}
      style={{
        fontSize: "clamp(64px, 5vw, 84px)", // Dynamically resize font based on screen size
        // lineHeight: "1.2",
        maxWidth: "600px", // Maximum width for the container
        maxHeight: "180px", // Maximum height for the container
        overflow: "hidden", // Ensure content doesn't overflow the container
        textAlign: "center", // Center-align the text
        // whiteSpace: "normal", // Allow text wrapping within the container
      }}
    >
      {displayText}
    </motion.div>
  );
};

export default TextRevealAnimation;
