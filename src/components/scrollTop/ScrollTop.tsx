"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isTop = () => {
    console.log("hello");
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", isTop);
  }, [scrollToTop]);
  return (
    <button
      onClick={scrollToTop}
      className="flex flex-col items-center gap-3"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        opacity: showScroll ? 1 : 0,
        transition: "all 500ms ease-out",
      }}
    >
      <div
        className="flex items-center justify-center hover:brightness-110 transition"
        style={{
          height: 56,
          width: 56,
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 10,
          transition: "all 500ms ease-out",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.08) 100%)",
          boxShadow:
            "0px -1px 0px 0px #00000033 inset, 0px 0px 40px -2px #0000008F, 0px 1px 0px 0px #FFFFFF0D inset, 0px 1px 0px 0px #FFFFFF0D inset",
          backdropFilter: "blur(40px)",
          //   background: '#FFA563'
        }}
      >
        <MdOutlineKeyboardArrowUp className="text-white text-2xl" />
      </div>
      <p className="text-sm font-medium bg-gradient-to-tr from-[#FFFFFF] to-[#CBD1D6] bg-clip-text text-transparent">Back to top</p>
    </button>
  );
};
