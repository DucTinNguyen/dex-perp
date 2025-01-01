"use client";
import { useState } from "react";
import StakeTab from "./StakeTab";
import StakeContent from "./StakeContent";
import Liquidity from "./Liquidity";

const StakePage = () => {
  const [activeTab, setActiveTab] = useState("stake");
  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col md:gap-[49px] gap-[24px] md:pt-[32px] pt-[26px] md:px-[40px] px-[8px] w-full max-w-[1440px] pb-[24px] items-center">
        <div className="w-full md:max-w-[406px] relative md:block flex flex-col md:gap-0 gap-[24px]">
          <div className="w-full flex flex-col gap-[24px] md:items-start items-center">
            <StakeTab setActiveTab={setActiveTab} activeTab={activeTab} />
            <StakeContent activeTab={activeTab} />
          </div>
          <Liquidity />
        </div>
      </div>
    </div>
  );
};
export default StakePage;
