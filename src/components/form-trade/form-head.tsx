import React from "react";
import icLong from "@/images/trade/long.svg";
import icSwap from "@/images/trade/swap.svg";
import Image from "next/image";

const FormHead = () => {
  return (
    <main className="flex items-center gap-[16px]">
      <figure className="w-[40px] h-[40px]">
        <Image src={icLong} alt="logo" objectFit="cover" />
      </figure>
      <span className="text-[32px] leading-[22.85px] text-[#fff] tracking-[0.5%] font-bold font-ppneubit">
        Long
      </span>
    </main>
  );
};

export default FormHead;
