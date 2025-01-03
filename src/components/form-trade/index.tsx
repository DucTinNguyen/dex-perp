'use client'
import Image from "next/image"
import FormTabTrade from "./tab"
import icLong from '@/images/trade/long.svg'
import icSwap from '@/images/trade/swap.svg'
import { useState } from "react"
import solIcon from "@/images/stake/solana.png";
import trxSol from "@/images/stake/solana-SOL.png";
import FormHead from "./form-head"
import Slippage from "./slippage"
import YouPay from "./you-pay"
import YouReceived from "./you-received"
import InfoDisplay from "./infor-display"
import LoanSummary from "./loan-summary"
import LeverageSelector from "./leverage"
import { useSearchParams } from "next/navigation"

const FormTrade = () => {

    const [slippage, setSlippage] = useState(20);
  const [solToken, setSolToken] = useState([
    {
      id: 1,
      title: "SOL",
      icon: solIcon,
      value: "1",
    },
    {
      id: 2,
      title: "TRXSOL",
      icon: trxSol,
      value: "0.8202",
    },
  ]);
  const menu = [
    {
        id: 1,
        title: "Long",
        value: "long",
    },
    {
        id: 2,
        title: "Swap",
        value: "swap",
    },
];
  const pathName = useSearchParams()
  const tab = pathName.get('tab');

  return (
    <main>
      <FormTabTrade tab={String(tab)} menu={menu} titleTab="tab"/>
      <section className="mt-4 rounded-[24px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px]">
        <FormHead tab={String(tab)} />
        <div className="w-full flex justify-end font-satoshi">
          <Slippage slippage={slippage} setSlippage={setSlippage}/>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center gap-[4px] font-satoshi">
          <YouPay tab={String(tab)} />
          {tab === 'long' && <LeverageSelector />}
          <YouReceived tab={String(tab)} />
        </div>
        <InfoDisplay title="Fee" value="1" currency="USDC" />
        <InfoDisplay title="Total" value="11" currency="USDC" />
        <button className="bg-[#8CE339] rounded-full w-full py-4 flex justify-center text-[#076200] font-bold text-[22px] leading-[15.71px] font-ppneubit">
          Long
        </button>
      </section>
      {tab === 'long' && <LoanSummary />}

    </main>
  )
}

export default FormTrade