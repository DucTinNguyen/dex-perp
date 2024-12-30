import React from "react";
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
import lineright from "@/images/landing_page/lineright.svg"
import lineleft from "@/images/landing_page/lineleft.svg"
import bgContent from "@/images/landing_page/content.svg"
const Partner = () => {
  return (
    <Background color="relative w-full h-full overflow-hidden py-[80px] bg-black">
      <div className="mb-6 flex items-center justify-center">
        <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
          <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
            <Image
              src={earth}
              alt="icon"
              width={50}
              height={50}
              className="w-[15px] h-[15px]"
            />
            <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
              Get early access
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-[0]">
          <Image
            src={partners}
            alt="partners"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70">

          </div>
        </div>
        <Section yPadding="py-[80px] z-[10]">
          <div className="grid grid-cols-4">
            {[gate, okx, jupiter, tensor].map((logo, index) => (
              <div
                key={index}
                className="relative w-[280px] h-[280px] overflow-hidden z-10"
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
                    width={200}
                    height={200}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <div className="mx-auto max-w-[640px] relative">
        <div className="absolute top-0 left-0">
          <Image src={lineleft} alt="line" width={100} height={100} className="w-full h-full"/>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={lineright} alt="line" width={100} height={100} className="w-full h-full"/>
        </div>
          <p className="px-20 font-satoshi text-xl text-center text-[#F0FFF57A]font-normal">
          We are proud to collaborate with <span className="text-white">industry-leading blockchain ecosystems and communities</span> to deliver a seamless and powerful trading experience.
          </p>
      </div>
    </Background>
  );
};

export default Partner;
