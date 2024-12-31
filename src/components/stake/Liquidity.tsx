import swapLogo from "@/images/stake/swap-container.png";
import line from "@/images/stake/lineEnd.png";
import Image from "next/image";
const Liquidity = () => {
  return (
    <div className="rounded-[24px] border-solid bg-[#FFFFFF0A] font-satoshi shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[12px] w-full backdrop-blur-[20px] md:absolute md:top-[72px] md:right-[-430px]">
      <div className="flex items-center gap-[16px] font-ppneubit">
        <div className="w-[40px] h-[40px]">
          <Image src={swapLogo} alt="swap logo" objectFit="cover" />
        </div>
        <div className="text-[32px] leading-[22.85px] font-bold text-[rgb(255,255,255)]">
          Traxos SOL Meme Liquidity I
        </div>
      </div>
      <div className="text-[#fff] text-[14px] font-medium leading-[20px] text-center w-full flex flex-col items-center">
        Historical Performance
        <div className="flex items-center gap-[8px] justify-center">
          <div className="text-[#8CE339] font-bold">40.4%</div>
          <div className="text-[14px] leading-[20px] font-normal text-[#99A0AE]">
            APY
          </div>
        </div>
      </div>
      <div className="w-full h-[12px] rounded-[4px] bg-[#FFFFFF1F] relative shadow-[0px_0px_0px_2px_rgba(39,39,39,0.55)]">
        <div className="absolute h-[12px] top-0 left-0 w-[199px] rounded-[4px] flex justify-end bg-[url('/images/stake/line.png')] bg-cover">
          <div className="w-[65px] h-full bg-gradient-to-r from-[#7fecec] via-[#b4f5f5] to-white rounded-[4px]"></div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[14px] leading-[20px] font-normal">
        <div className="flex items-center gap-[8px]">
          <div className="text-[#D4D4D4]">Capacity:</div>
          <div className="text-[#8CE339]">4850/ 5000</div>
        </div>
        <div className="text-[#8CE339] font-bold">97% Filled</div>
      </div>
      <div className="text-[14px] leading-[20px] font-normal text-[#FFFFFF] text-center">
        Only <span className="text-[#3EE089] font-medium">150 SOL</span>{" "}
        capacity left! Stake now secure your spot.{" "}
      </div>
    </div>
  );
};
export default Liquidity;
