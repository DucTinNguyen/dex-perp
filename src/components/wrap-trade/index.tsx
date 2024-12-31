import React from "react";
import bgLong from "@/images/trade/Long.jpg";
import Image from "next/image";
const WrapTradeComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full min-h-svh">
      <Image src={bgLong} alt="bg" fill priority />
      <section className="relative z-10">{children}</section>
    </main>
  );
};

export default WrapTradeComponent;
