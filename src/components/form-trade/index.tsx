'use client'
import { useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import FormHead from "./form-head"
import InfoDisplay from "./infor-display"
import LeverageSelector from "./leverage"
import LoanSummary from "./loan-summary"
import Slippage from "./slippage"
import FormTabTrade from "./tab"
import YouPay from "./you-pay"
import YouReceived from "./you-received"
import { useWallet } from "@solana/wallet-adapter-react"
import BtnConnectWallet from "../button/connect-wallet"

const FormTrade = () => {

  const [slippage, setSlippage] = useState(20);

  const pathName = useSearchParams()
  const tab = pathName.get('tab');
  const {publicKey, disconnect} = useWallet()
  const buttonClassName = "bg-[#8CE339] rounded-full w-full py-4 flex justify-center text-[#076200] font-bold text-[22px] leading-[15.71px] font-ppneubit capitalize"; 
  
  const renderButton = useCallback(() => {
    if (!publicKey) return <BtnConnectWallet className={buttonClassName} />
    return <button className={buttonClassName}>{tab}</button>
  },[publicKey,tab])

  return (
    <main>
      <FormTabTrade tab={String(tab)} />
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
        {renderButton()}
      </section>
      {tab === 'long' && <LoanSummary />}

    </main>
  )
}

export default FormTrade