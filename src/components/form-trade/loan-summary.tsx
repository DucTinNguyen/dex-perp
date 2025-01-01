import React from 'react'
import InfoDisplay from './infor-display'

const LoanSummary = () => {
    return (
        <main className="mt-4 rounded-[24px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px]">
            <h5 className="text-[32px] text-center leading-[22.85px] text-[#fff] tracking-[0.5%] font-bold font-ppneubit">
                Loan Summary
            </h5>
            <div className='flex flex-col gap-1'>
                <InfoDisplay title='Borrowed Amount' value='1' currency='USDC' />
                <InfoDisplay title='Position Size' value='10.9241' currency='USDC' />
                <InfoDisplay title='Daily Interest' value='0.189' currency='%' />
                <InfoDisplay title='Entry Price' value='3.446' currency='USDC' />
                <InfoDisplay title='Liquidation Price' value='0.346' currency='USDC' />
            </div>
        </main>
    )
}

export default LoanSummary