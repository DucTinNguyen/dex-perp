"use client";
import Image from "next/image";
import positionBanner from "@/images/position/positionBanner.png";
import { useState } from "react";
import PositionContent from "./PositionContent";

const PositionPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [value, setValue] = useState(2);
  const menu = [
    {
      id: 1,
      title: `Open (${value})`,
      value: 0,
    },
    {
      id: 2,
      title: "Close",
      value: "",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] md:pt-[40px] pt-[100px] md:px-[64px] px-[26px] flex flex-col gap-[24px] items-center">
        <div className="font-ppneubit font-bold text-[48px] leading-[34px] tracking-[0.5%] text-[#FAFAFA]">
          Position
        </div>
        <div className="rounded-full font-satoshi p-[2px] border-solid border-[1px] border-[#FFFFFF0A] backdrop-blur-[4px] bg-[#FFFFFF0A] flex items-center">
          {menu.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-[24px] py-[10px] text-center text-[16px] leading-[24px] cursor-pointer border-[1px] border-solid border-transparent flex items-center ${
                  activeTab == item.id
                    ? "text-[#fff] border-[1px] border-solid border-[#FFFFFF14] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full  font-bold hover:from-neutral-500 hover:to-neutral-700 shadow-lg transition-colors"
                    : "font-medium text-[#99A0AE] border-[1px] border-solid border-transparent"
                }`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <PositionContent value={value} />
      </div>
    </div>
  );
};
export default PositionPage;
