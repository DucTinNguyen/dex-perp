import Image from 'next/image'
import React from 'react'
import { Background } from '@/components/background/Background'
import { Section } from '@/components/layout/Section'
import grid from "@/images/landing_page/grid.svg"
import union from "@/images/landing_page/Union.svg"
import ligth from "@/images/landing_page/lighting.svg"
import shake from "@/images/landing_page/skae.svg"
import guard from "@/images/landing_page/path660.svg"
import group from "@/images/landing_page/Frame 1171278159.svg"
import haftearth from "@/images/landing_page/halfearth.svg"
import chart from "@/images/landing_page/Chart (1).svg" 
import listCoin from "@/images/landing_page/Frame 2147225144.svg"
const Offer = () => {
    return (
        <Background color="relative w-full h-full overflow-hidden py-[100px] bg-black font-satoshi">
            <Section yPadding='p-0'>
                <div className="mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
                        <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                            <Image
                                src={grid}
                                alt="icon"
                                width={50}
                                height={50}
                                className="w-[15px] h-[15px]"
                            />
                            <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                                Our Core
                            </span>
                        </div>
                    </div>
                </div>
                <h1 className='uppercase text-center text-[#F0FFF5] text-shadow-custom font-ppneubit text-[64px] font-bold mb-12'>What we offer?</h1>
                <div className='grid grid-cols-7 gap-5'>
                    <div className='relative overflow-hidden col-span-4 h-[360px] bg-[rgba(11,11,11,0.84)] border border-white/12 backdrop-blur-[24px] rounded-2xl p-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='relative flex justify-center items-center overflow-hidden w-10 h-10 bg-[rgba(255,254,249,0.04)] shadow-[inset_0px_0.625px_10px_rgba(238,255,248,0.34)] backdrop-blur-[2.5px] rounded-[7.5px]'>
                                <div className='w-[25.62px] h-[17.5px] absolute left-[calc(50%-12.81px-0.31px)] bottom-[-9.06px] bg-[#28FF21] opacity-45 blur-[6.25px]'></div>
                                <Image src={union} alt='union' width={25} height={25} className='w-[25px] h-[25px]' />
                            </div>
                            <h3 className='font-ppneubit leading-6 text-[32px] font-bold text-white'>Opportunities</h3>
                        </div>
                        <p className='font-satoshi text-xl font-normal leading-[27px] text-[#B1BAB4BF]'>Early Leverage Access: Trade more of the latest and hottest tokens and unlock the potential for explosive gains. Access more, sooner.</p>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center'>
                            <Image src={haftearth} alt='halfearth' width={500} height={360} className='w-[500px] h-full' />
                        </div>
                    </div>
                    <div className='relative overflow-hidden col-span-3 h-[360px] bg-[rgba(11,11,11,0.84)] border border-white/12 backdrop-blur-[24px] rounded-2xl p-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='relative flex justify-center items-center overflow-hidden w-10 h-10 bg-[rgba(255,254,249,0.04)] shadow-[inset_0px_0.625px_10px_rgba(238,255,248,0.34)] backdrop-blur-[2.5px] rounded-[7.5px]'>
                                <div className='w-[25.62px] h-[17.5px] absolute left-[calc(50%-12.81px-0.31px)] bottom-[-9.06px] bg-[#28FF21] opacity-45 blur-[6.25px]'></div>
                                <Image src={ligth} alt='ligth' width={25} height={25} className='w-[25px] h-[25px]' />
                            </div>
                            <h3 className='font-ppneubit leading-6 text-[32px] font-bold text-white'>Ease of Use</h3>
                        </div>
                        <p className='font-satoshi text-xl font-normal leading-[27px] text-[#B1BAB4BF]'>Few-clicks Interface: Already using DEXes? Using Lavarage will feel second nature – trade effortlessly with just a few clicks.</p>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-start'>
                            <Image src={chart} alt='chart' width={500} height={360} className='w-[400px] h-full' />
                        </div>
                    </div>
                    <div className='relative overflow-hidden col-span-3 h-[360px] bg-[rgba(11,11,11,0.84)] border border-white/12 backdrop-blur-[24px] rounded-2xl p-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='relative flex justify-center items-center overflow-hidden w-10 h-10 bg-[rgba(255,254,249,0.04)] shadow-[inset_0px_0.625px_10px_rgba(238,255,248,0.34)] backdrop-blur-[2.5px] rounded-[7.5px]'>
                                <div className='w-[25.62px] h-[17.5px] absolute left-[calc(50%-12.81px-0.31px)] bottom-[-9.06px] bg-[#28FF21] opacity-45 blur-[6.25px]'></div>
                                <Image src={shake} alt='shake' width={25} height={25} className='w-[25px] h-[25px]' />
                            </div>
                            <h3 className='font-ppneubit leading-6 text-[32px] font-bold text-white'>Partners in Profit</h3>
                        </div>
                        <p className='font-satoshi text-xl font-normal leading-[27px] text-[#B1BAB4BF]'>Fair Market Price: All trades are done on top DEXs, always executed at true market prices.</p>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center'>
                            <Image src={listCoin} alt='listCoin' width={500} height={360} className='w-full h-full' />
                        </div>
                    </div>
                    <div className='relative overflow-hidden col-span-4 h-[360px] bg-[rgba(11,11,11,0.84)] border border-white/12 backdrop-blur-[24px] rounded-2xl p-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='relative flex justify-center items-center overflow-hidden w-10 h-10 bg-[rgba(255,254,249,0.04)] shadow-[inset_0px_0.625px_10px_rgba(238,255,248,0.34)] backdrop-blur-[2.5px] rounded-[7.5px]'>
                                <div className='w-[25.62px] h-[17.5px] absolute left-[calc(50%-12.81px-0.31px)] bottom-[-9.06px] bg-[#28FF21] opacity-45 blur-[6.25px]'></div>
                                <Image src={guard} alt='guard' width={25} height={25} className='w-[25px] h-[25px]' />
                            </div>
                            <h3 className='font-ppneubit leading-6 text-[32px] font-bold text-white'>Your Key, Your Crypto</h3>
                        </div>
                        <p className='font-satoshi text-xl font-normal leading-[27px] text-[#B1BAB4BF] w-[214px]'>Permissionless: Our fully decentralized platform ensures all activities are transparent and verifiable on-chain.</p>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-end'>
                            <Image src={group} alt='group' width={500} height={360} className='w-[400px] h-full' />
                        </div>
                    </div>
                </div>
            </Section>
        </Background>
    )
}

export default Offer