import note from "@/images/stake/note.png";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import union from "@/images/position/union.png";

interface Props {
  setClosePosition: Dispatch<SetStateAction<boolean>>;
}
const RepaymentAmount = ({ setClosePosition }: Props) => {
  const [selected, setSelected] = useState("25");
  const data = [
    {
      id: 1,
      title: "25%",
      value: "25",
    },
    {
      id: 2,
      title: "50%",
      value: "50",
    },
    {
      id: 3,
      title: "75%",
      value: "75",
    },
    {
      id: 4,
      title: "100%",
      value: "100",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-[16px] font-satoshi">
      <div className="flex flex-col gap-[24px]">
        <div className="text-[#fff] text-[14px] font-medium leading-[20px] tracking-[0.5%] ">
          Repaying 100% of the outstading loan balance fully closes your
          position and release all collateral to you.
        </div>
        <div className="bg-[#0000003D] p-[12px] rounded-[12px] flex flex-col gap-[12px] text-[#fff] text-[14px] leading-[20px] tracking-[0.5%] ">
          <div className="font-bold uppercase">REPAYMENT AMOUNT</div>
          <div className="flex items-center gap-[8px]">
            {data.map((item) => {
              return (
                <button
                  onClick={() => setSelected(item.value)}
                  key={item.id}
                  className={`w-[84px] py-[12px] font-bold text-[16px] leading-[24px] tracking-[0.5%] rounded-[12px] ${
                    selected == item.value
                      ? "border-[1px] border-solid border-[#8CE339] bg-[#8CE3391F] text-[#8CE339]"
                      : "border-[1px] border-solid border-transparent bg-[#FFFFFF0D] text-[#fff]"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Loan balance
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              -71.1326 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Repaying now
              <div className="w-[20px] h-[20px]">
                <Image src={note} alt="note" objectFit="cover" />
              </div>
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              35.5663 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              LTV
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF] flex items-center gap-[8px]">
              <div className="text-[#F6B51E]">74%</div>
              <div className="w-[20px] h-[20px]">
                <Image src={union} alt="union" objectFit="cover" />
              </div>
              <div className="text-[#8CE339]">37%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Liquidation Price
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF] flex items-center gap-[8px]">
              <div className="text-[#8CE339]">2.6511</div>
              <div className="w-[20px] h-[20px]">
                <Image src={union} alt="union" objectFit="cover" />
              </div>
              <div className="text-[#8CE339]">1.3274</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#525866] flex items-center gap-[8px]">
              Remaining Loan Balance
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#525866]">
              -35.5663 SOL
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[12px] font-ppneubit">
        <button
          onClick={() => setClosePosition(false)}
          className="w-[50%] py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] text-[#fff]"
        >
          Close
        </button>
        <button className="w-[50%] py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] bg-[#FFFFFF] text-[#26282B]">
          Confirm
        </button>
      </div>
    </div>
  );
};
export default RepaymentAmount;
