import Image from 'next/image'
import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Background } from '@/components/background/Background'
import { Section } from '@/components/layout/Section'
import imgGet from "@/images/landing_page/Frame_2147223102_get.svg"
import mailbox from "@/images/landing_page/Mailbox.svg"

const GetInTouch = () => {
  return (
    <Background color="relative w-full h-full bg-black overflow-hidden py-[100px] font-satoshi">
      <div className='bg-[url("/images/landing_page/Geiintouch.svg")] bg-cover bg-center w-full h-full'>
        <Section>
          <div className='grid grid-cols-2'>
            <div>
              <div className="flex items-center justify-start mb-4">
                <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
                  <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                    <Image
                      src={mailbox}
                      alt="icon"
                      width={50}
                      height={50}
                      className="w-[15px] h-[15px]"
                    />
                    <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      Get in touch
                    </span>
                  </div>
                </div>
              </div>
              <h1 className='mb-6 font-bold font-ppneubit text-[64px] bg-gradient-to-br from-[#FCFEFE] to-[#CBD1D6] bg-clip-text text-transparent w-[400px] leading-[47px]'>Ascend with Us Beyond the Horizon</h1>
              <p className='text-white/60 text-xl mb-6'>At <span className='text-[#28FF21] font-bold'>Traxos</span>, we empower businesses to develop cutting-edge tech solutions. Leverage a diverse set of frameworks and tools, customizing them to bring your innovative ideas to market efficiently.</p>
              <div className='flex items-center gap-4'>
                <div className='flex flex-row justify-center items-center  w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaTelegram className='text-white text-2xl'/>
                </div>
                <div className='flex flex-row justify-center items-center  w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaXTwitter className='text-white text-2xl'/>
                </div>
                <div className='flex flex-row justify-center items-center  w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaMedium className='text-white text-2xl'/>
                </div>
                <div className='flex flex-row justify-center items-center  w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaGithub className='text-white text-2xl'/>
                </div>
              </div>
            </div>
            <div>
              <Image src={imgGet} alt='img get' width={1000} height={1000} className='w-full h-full' />
            </div>
          </div>

        </Section>
      </div>
    </Background>
  )
}

export default GetInTouch