import React from "react";

interface ISlippage {
    slippage: number;
    setSlippage: (value: number) => void;
}

const Slippage = ( { slippage, setSlippage }: ISlippage) => {
  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[14px] leading-[20px] text-[#CACFD8]">Slippage:</span>
      <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal border-[#FFFFFF1A] border-solid border-[1px] py-[4px] px-[16px] rounded-[4px] bg-[#0A0A0A]">
        <input
          className="border-none outline-none bg-transparent max-w-[20px]"
          value={slippage}
          onChange={(e) => setSlippage(Number(e.target.value))}
        />
        %
      </div>
    </div>
  );
};

export default Slippage;
