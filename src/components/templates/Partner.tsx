"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Background } from "@/components/background/Background";
import { Section } from "@/components/layout/Section";
import earth from "@/images/landing_page/Earth.svg";
import partners from "@/images/landing_page/partners.svg";
import gate from "@/images/landing_page/gate.svg";
import okx from "@/images/landing_page/okx.svg";
import jupiter from "@/images/landing_page/jupiter.svg";
import tensor from "@/images/landing_page/tensor.svg";
import block from "@/images/landing_page/blockpartner.svg";
import lineright from "@/images/landing_page/lineright.svg";
import lineleft from "@/images/landing_page/lineleft.svg";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Partner = () => {
  return (
    <Background color="relative w-full h-full overflow-hidden pt-[60px] pb-[60px] sm:pt-[80px] sm:pb-[120px] bg-black">
      <motion.div
        className="mb-4 sm:mb-6 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
          <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
            <Image
              src={earth}
              alt="icon"
              width={50}
              height={50}
              className="w-[15px] h-[15px]"
            />
            <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-sm sm:text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
              Our Trusted Partners
            </span>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-[0] hidden sm:block">
          <Image
            src={partners}
            alt="partners"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
        <Section yPadding="py-[20px] sm:py-[80px] z-[10]">
          <motion.div
            className="grid grid-cols-4 gap-4 sm:gap-6 bg-[url('/images/landing_page/partners.svg')] sm:bg-none w-full bg-no-repeat bg-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { staggerChildren: 0.3, duration: 0.5 },
              },
            }}
            viewport={{ once: true }}
          >
            {[gate, okx, jupiter, tensor].map((logo, index) => (
              <motion.div
                key={index}
                className="relative w-[90px] sm:w-[180px] lg:w-[280px] h-[140px] sm:h-[180px] lg:h-[280px] overflow-hidden z-10 mx-auto"
                whileInView="visible"
                variants={fadeIn}
              >
                <Image
                  src={block}
                  alt={`block-${index}`}
                  width={280}
                  height={280}
                  className="w-full h-full"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>

      <motion.div
        className="mx-auto max-w-[90%] sm:max-w-[640px] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0">
          <Image
            src={lineleft}
            alt="line"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={lineright}
            alt="line"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <p className="px-4 sm:px-20 font-satoshi text-sm sm:text-lg lg:text-xl text-center text-[#F0FFF57A] font-normal">
          We are proud to collaborate with{" "}
          <span className="text-white">
            industry-leading blockchain ecosystems and communities
          </span>{" "}
          to deliver a seamless and powerful trading experience.
        </p>
      </motion.div>
    </Background>
  );
};

export default Partner;
