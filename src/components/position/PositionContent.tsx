import positionBanner from "@/images/position/positionBanner.png";
import brainlet from "@/images/position/brainlet.png";
import note from "@/images/stake/note.png";
import checkIcon from "@/images/position/check.png";
import Image from "next/image";
import { useState } from "react";
import ModalDetail from "./ModalDetail";

interface Props {
  value: number;
}

const PositionContent = ({ value }: Props) => {
  const [dataDetail, setDataDetail] = useState<any>();
  const data = [
    {
      id: 1,
      avatar: brainlet,
      name: "BRAINLET",
      price: "0.0314",
      balance: "890,600.43 BRAINLET",
      fund: "43.0693 SOL",
      profit: "+108.8%",
      state: true,
      date: " 21:54 2024-08-06",
      ltv: "36%/90%",
      pnl: "63.7246 SOL",
      percent: "+212.4%",
    },
    {
      id: 2,
      avatar: brainlet,
      name: "BRAINLET",
      price: "0.0314",
      balance: "890,600.43 BRAINLET",
      fund: "43.0693 SOL",
      profit: "+108.8%",
      state: true,
      date: " 21:54 2024-08-06",
      ltv: "36%/90%",
      pnl: "63.7246 SOL",
      percent: "+212.4%",
    },
    {
      id: 3,
      avatar: brainlet,
      name: "BRAINLET",
      price: "0.0314",
      balance: "890,600.43 BRAINLET",
      fund: "43.0693 SOL",
      profit: "+108.8%",
      state: true,
      date: " 21:54 2024-08-06",
      ltv: "36%/90%",
      pnl: "63.7246 SOL",
      percent: "+212.4%",
    },
  ];
  return (
    <>
      {value == 0 ? (
        <div className="w-full max-w-[326px] py-[29px] flex flex-col gap-[32px] font-satoshi">
          <div className="w-full px-[45.55px]">
            <div className="w-full h-[240px] ">
              <Image src={positionBanner} alt="banner" objectFit="cover" />
            </div>
          </div>
          <div className="text-center text-[14px] font-medium leading-[20px] text-[#99A0AE] tracking-[0.5%]">
            You have no closed positions (only recently closed positions will be
            displayed).
          </div>
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[32px] gap-[16px] font-satoshi flex-wrap">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setDataDetail(item)}
                className="rounded-[24px] w-full max-w-[416px] mx-auto border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[24px] backdrop-blur-[20px]"
              >
                <div className="w-full bg-[#FFFFFF14] rounded-xl p-[12px] flex justify-between items-center">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[43px] h-[43px] rounded-full">
                      <Image src={item.avatar} alt="avatar" objectFit="cover" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%] uppercase">
                        {item.name}
                      </div>
                      <div className="text-[#CACFD8] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                        {item.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%] uppercase">
                      {item.balance}
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                        {item.fund}
                      </div>
                      <div className="text-[#1FC16B] font-normal text-[14px] leading-[20px] tracking-[0.5%]">
                        {item.profit}
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
                        <Image
                          src={checkIcon}
                          alt="check icon"
                          objectFit="cover"
                        />
                      </div>
                      <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                        {item.state && "Active"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
                      Date
                    </div>
                    <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
                      {item.date}
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
                      {item.ltv}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8]">
                      PnL
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                        {item.pnl}
                      </div>
                      <div className="text-[#1FC16B] font-medium leading-[20px] text-[14px] tracking-[0.5%]">
                        {item.percent}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-[24px] font-ppneubit">
                  <button className="w-[50%] py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] bg-[#FFFFFF] text-[#26282B]">
                    Close position
                  </button>
                  <button className="w-[50%] py-[12px] flex items-center justify-center text-[22px] leading-[24px] font-bold rounded-[12px] text-[#fff] bg-[]">
                    View more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {dataDetail && <ModalDetail setDataDetail={setDataDetail} />}
    </>
  );
};
export default PositionContent;
