'use client'
import React from "react";
import icLong from "@/images/trade/long.svg";
import icSwap from "@/images/trade/swap.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const FormHead = () => {

  const pathName = useSearchParams()
  const tab = pathName.get('tab');

  const icon = {
    'swap': icSwap,
    'long': icLong
  }


  return (
    <main className="flex items-center gap-[16px]">
      <figure className="w-[40px] h-[40px]">
        <Image src={icon[tab as keyof typeof icon]} alt="logo" objectFit="cover" />
      </figure>
      <span className="text-[32px] leading-[22.85px] text-[#fff] capitalize tracking-[0.5%] font-bold font-ppneubit">
        {tab}
      </span>
    </main>
  );
};

export default FormHead;
