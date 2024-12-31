import Image from 'next/image'
import React from 'react'
import { Background } from '@/components/background/Background'
import { HeroOneButton } from '@/components/hero/HeroOneButton'
import { Section } from '@/components/layout/Section'
import bgContent from "@/images/landing_page/content.svg"
import logoWhatIs from "@/images/landing_page/logoWhatIs.svg"
import chart from "@/images/landing_page/chart.svg"
import swap from "@/images/landing_page/swap.svg"
import { WhatIsList } from '@/utils/whatis'
const WhatIs = () => {
    return (
        <Background color="w-full h-screen bg-black pt-[40px]">
            <div className="w-full h-screen relative bg-black">
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image src={bgContent} alt="bg-content" className="w-full" />
                </div>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Section yPadding='h-full'>
                        <div className='h-full'>
                            <div className='flex flex-col items-center justify-center h-full gap-8'>
                                <Image src={logoWhatIs} alt='logo' width={500} height={500} className='w-[250px] h-[250px]' />
                                <HeroOneButton
                                    title={
                                        <>
                                            {/* {'The modern landing page for\n'} */}
                                            <span className="uppercase text-[#F0FFF5] text-shadow-multi backdrop-blur-xl font-ppneubit text-[84px] font-bold">
                                                What Is traxos
                                            </span>
                                        </>
                                    }
                                    description={
                                        <div className="my-6 text-2xl font-normal text-white">
                                            A platform where you can buy more tokens <br /> with leverage on existing DEXes
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={chart} alt='chart' width={100} height={100} className='' />
                            </div>
                            <div>
                                <Image src={swap} alt='swap' width={100} height={100} className='' />

                            </div>
                        </div>
                    </Section>
                    {WhatIsList.map((item) => (
                        <div key={item.id} style={{
                            top: item.top,
                            left: item.left
                        }} className={`flex px-3 py-2 items-center gap-3 absolute bg-white/5 shadow-[0_0_4px_-1px_rgba(2,29,13,0.12),inset_0_-4px_8px_-2px_rgba(255,255,255,0.37)] backdrop-blur-[10px] rounded-full`}>
                            <Image src={item.icon} alt='rocket' width={50} height={50} className='w-[32px] h-[32px]' />
                            <span className='text-[#F7FDFD] text-sm '>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Background>
    )
}

export default WhatIs