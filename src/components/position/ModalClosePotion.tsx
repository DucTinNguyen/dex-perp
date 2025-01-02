import brainlet from "@/images/position/brainlet.png";
import note from "@/images/stake/note.png";
import Image from "next/image";
import { Dispatch, useState, SetStateAction } from "react";
import closeIcon from "@/images/position/close.png";
import TransactionSummary from "./TransactionSummary";
import RepaymentAmount from "./RepaymentAmount";
interface Props {
  setClosePosition: Dispatch<SetStateAction<boolean>>;
}
const ModalClosePosition = ({ setClosePosition }: Props) => {
  const menu = [
    {
      id: 1,
      title: "Sell",
      value: "sell",
    },
    {
      id: 2,
      title: "Repay",
      value: "repay",
    },
  ];
  const [activeTab, setActiveTab] = useState("sell");
  return (
    <div
      onClick={() => setClosePosition(false)}
      className="fixed inset-0 bg-[#000000CC] flex justify-center items-start md:pt-[204px] pt-[32px] md:px-0 px-[16px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full flex md:justify-center md:flex-row flex-col items-start gap-[16px]  h-[80vh] md:h-[95vh] overflow-auto"
      >
        <div className="w-full max-w-[416px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px] rounded-[24px]">
          <div className="flex items-center justify-between text-[16px] leading-[24px] tracking-[0.5%]">
            <div className="font-bold text-[#fff]">Close Position</div>
            <button
              onClick={() => setClosePosition(false)}
              className="bg-[#FFFFFF1F] p-[10.6px] rounded-full text-[#fff] font-semibold"
            >
              <Image src={closeIcon} alt="close icon" width={10} height={10} />
            </button>
          </div>
          <div className="flex flex-col gap-[24px] items-center">
            <div className="rounded-full font-satoshi p-[2px] border-solid border-[1px] border-[#FFFFFF0A] backdrop-blur-[4px] bg-[#FFFFFF0A] flex items-center">
              {menu.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.value);
                    }}
                    className={`px-[24px] py-[10px] text-center text-[16px] leading-[24px] cursor-pointer border-[1px] border-solid border-transparent flex items-center ${
                      activeTab == item.value
                        ? "text-[#fff] border-[1px] border-solid border-[#FFFFFF14] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full  font-bold hover:from-neutral-500 hover:to-neutral-700 shadow-lg transition-colors"
                        : "font-medium text-[#99A0AE] border-[1px] border-solid border-transparent"
                    }`}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            {activeTab == "sell" ? (
              <TransactionSummary setClosePosition={setClosePosition} />
            ) : (
              <RepaymentAmount setClosePosition={setClosePosition} />
            )}
          </div>
        </div>
        <div className="w-full max-w-[416px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px] rounded-[24px]">
          <div className="w-full flex flex-col gap-[8px]">
            <div className="w-full bg-[#FFFFFF14] rounded-xl p-[12px] flex justify-between items-center">
              <div className="flex items-center gap-[12px]">
                <div className="w-[43px] h-[43px] rounded-full">
                  <Image src={brainlet} alt="avatar" objectFit="cover" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%] uppercase">
                    BRAINLET
                  </div>
                  <div className="text-[#CACFD8] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                    0.0314 SOL
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%] uppercase">
                  890,600.43 BRAINLET
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                    43.0693 SOL
                  </div>
                  <div className="text-[#1FC16B] font-normal text-[14px] leading-[20px] tracking-[0.5%]">
                    +108.8%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                LTV
                <div className="w-[20px] h-[20px]">
                  <Image src={note} alt="note" objectFit="cover" />
                </div>
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                36%/90%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
                PnL
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                  63.7246 SOL
                </div>
                <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                  +212.4%
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-[12px] bg-[#0000003D] p-[12px] text-[14px] leading-[20px] tracking-[0.5%] text-[#fff] flex flex-col gap-[8px]">
            <div className="font-bold uppercase">LOAN BALLANCE</div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                Brrowed Amount
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                30 SOL
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                Duration
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                35 days
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                Daily Interest
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                0.1507%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                Interest Accrued
                <div className="w-[20px] h-[20px]">
                  <Image src={note} alt="note" objectFit="cover" />
                </div>
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                1.5822 SOL
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
                Total Owing
              </div>
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                31.5822 SOL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalClosePosition;
