import React from "react";
import bgLong from "@/images/trade/Long.jpg";
import Image from "next/image";
import HeaderTrade from "../header-trade";
const WrapTradeComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full min-h-screen h-full">
      <Image src={bgLong} alt="bg" fill priority objectPosition="center" objectFit="cover"/>
      <section className="z-10 h-screen">
        <div className="absolute w-full h-full py-8 overflow-auto">
          <HeaderTrade />
          <section>
            {children}
          </section>
        </div>
      </section>
    </main>
  );
};

export default WrapTradeComponent;
