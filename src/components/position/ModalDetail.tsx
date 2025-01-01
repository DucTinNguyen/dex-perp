import brainlet from "@/images/position/brainlet.png";
import checkIcon from "@/images/position/check.png";
import note from "@/images/stake/note.png";
import Image from "next/image";

const ModalDetail = ({ setDataDetail }: any) => {
  return (
    <div
      onClick={() => setDataDetail()}
      className="fixed inset-0 bg-[#000000CC] flex justify-center md:items-center items-start md:pt-0 pt-[32px] md:px-0 px-[16px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[416px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[24px] backdrop-blur-[20px] rounded-[24px] h-[70vh] md:h-[95vh] overflow-auto"
      >
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
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              State
            </div>
            <div className="bg-[#1FC16B1F] rounded-full flex gap-[8px] p-[4px]">
              <div className="w-[20px] h-[20px]">
                <Image src={checkIcon} alt="check icon" objectFit="cover" />
              </div>
              <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                Active
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Date
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              21:54 2024-08-06
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
        <div className="w-full border-t-[1px] border-dashed border-[#fff]"></div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Open Date
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              2024-08-06 21:54
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Close Date
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              --
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Initial Margin
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              30 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Initial Position Size
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                60 SOL
              </div>
              <div className="py-[4px] px-[8px] border-[#1FC16B] border-[1px] border-solid rounded-[5px] text-[#1FC16B] font-bold text-[12px] leading-[16px]">
                2.0x
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
              Entry Price
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              0.04673
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Current Price
              <div className="w-[20px] h-[20px]">
                <Image src={note} alt="note" objectFit="cover" />
              </div>
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              0.0314
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Liquidation Price
              <div className="w-[20px] h-[20px]">
                <Image src={note} alt="note" objectFit="cover" />
              </div>
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              0.04374
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Daily Interest
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              0.1207%
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
        </div>
        <div className="w-full flex flex-col gap-[12px] font-ppneubit">
          <button className="w-full py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] bg-[#FFFFFF] text-[#26282B]">
            Close position
          </button>
          <button
            onClick={() => setDataDetail()}
            className="w-full py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] text-[#fff]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDetail;
