"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MatrixTextAnimation = () => {
  const targetText = "The Next Generation Trading Platform";
  const [displayText, setDisplayText] = useState("");
  const matrixChars = "qwertyuiopas1234567890";
  const [raindrops, setRaindrops] = useState<any>([]);
  const intervalDuration = 50;

  // Matrix rain effect
  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20); // Adjust spacing
    const initialRaindrops = Array.from({ length: columns }, (_, i) => ({
      x: i * 20,
      y: Math.random() * -1000,
      speed: 5 + Math.random() * 15,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
    }));
    setRaindrops(initialRaindrops);

    const rainInterval = setInterval(() => {
      setRaindrops((drops: any) =>
        drops.map((drop: any) => ({
          ...drop,
          y:
            drop.y > window.innerHeight
              ? Math.random() * -100
              : drop.y + drop.speed,
          char:
            Math.random() > 0.95
              ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
              : drop.char,
        }))
      );
    }, 50);

    return () => clearInterval(rainInterval);
  }, []);

  // Text reveal effect
  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setDisplayText((prev) => {
          const revealed = targetText.substring(0, currentIndex);
          const scrambled = Array.from(
            { length: targetText.length - currentIndex },
            () => matrixChars[Math.floor(Math.random() * matrixChars.length)]
          ).join(" ");
          return revealed + scrambled;
        });
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, intervalDuration);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div>
      {/* Matrix rain */}
      {raindrops.map((drop: any, i: any) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute text-[#00ff00] text-lg font-matrix"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            textShadow: "0 0 8px #00ff00",
          }}
        >
          {drop.char}
        </motion.div>
      ))}

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="break-words max-h-[200px] max-w-[600px] text-[64px] sm:text-[84px] text-shadow-lg bg-gradient-to-br from-[#A4FFB1] to-[#A4FFB1] inline-block text-transparent bg-clip-text font-ppneubit bg-blend-lighten my-auto"
        style={{
          textShadow: "0 0 10px #A4FFB1, 0 0 20px #00ff00",
          // fontFamily: "monospace",
        }}
      >
        {displayText}
      </motion.div>
    </div>
  );
};

export default MatrixTextAnimation;
