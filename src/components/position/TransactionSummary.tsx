import note from "@/images/stake/note.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface Props {
  setClosePosition: Dispatch<SetStateAction<boolean>>;
}
const TransactionSummary = ({ setClosePosition }: Props) => {
  return (
    <div className="w-full flex flex-col gap-[16px] font-satoshi">
      <div className="flex flex-col gap-[24px]">
        <div className="text-[#fff] text-[14px] font-medium leading-[20px] tracking-[0.5%]">
          Selling the collateral covers the outstading loan balance and fee,
          with the surplus returned to you
        </div>
        <div className="bg-[#0000003D] p-[12px] rounded-[12px] flex flex-col gap-[8px] text-[#fff] text-[14px] leading-[20px] tracking-[0.5%]">
          <div className="font-bold uppercase">TRANSACTION SUMMARY</div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Sale from position
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              125.197 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Profit fee (5%)
              <div className="w-[20px] h-[20px]">
                <Image src={note} alt="note" objectFit="cover" />
              </div>
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              -3.1807 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Loan Balance
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              -31.5822 SOL
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-normal leading-[20px] text-[14px] tracking-[0.5%] text-[#CACFD8] flex items-center gap-[8px]">
              Tranferred to Wallet
              <div className="w-[20px] h-[20px]">
                <Image src={note} alt="note" objectFit="cover" />
              </div>
            </div>
            <div className="font-medium leading-[20px] text-[14px] tracking-[0.5%] text-[#FFFFFF]">
              90.4341 SOL
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
export default TransactionSummary;
