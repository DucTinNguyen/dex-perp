import DexChart from '@/components/dex-chart'
import FormTrade from '@/components/form-trade'
import InformationToken from '@/components/information-token'
import WrapTradeComponent from '@/components/wrap-trade'
import React from 'react'

const Trade = () => {
  return (
    <WrapTradeComponent>
      <section className='w-full lg:max-w-[1400px] mx-auto grid-cols-1 sm:grid grid-cols-3 gap-4 py-10 md:py-[62px]'>
        <div className='col-span-2'>
          <div className='grid grid-cols-1'>
            <DexChart />
            <InformationToken />
          </div>
        </div>
        <div className='col-span-1'>
          <FormTrade />
        </div>
      </section>
    </WrapTradeComponent>
  )
}

export default Trade