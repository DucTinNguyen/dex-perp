import Image from 'next/image'
import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

import { Background } from '@/components/background/Background'
import { Section } from '@/components/layout/Section'
import imgGet from "@/images/landing_page/Frame_2147223102_get.svg"
import mailbox from "@/images/landing_page/Mailbox.svg"
import gitmobile from "@/images/landing_page/gitmobile.svg"
const GetInTouch = () => {
  return (
    <Background color="w-full h-full bg-[#0B0B0B] overflow-hidden font-satoshi">
      <div className='bg-[url("/images/landing_page/Geiintouch.svg")] bg-cover bg-center w-full h-[757px] sm:h-[700px] flex items-center relative overflow-hidden'>
        <Section yPadding='py-[40px] sm:py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='w-full'>
              <motion.div
                className="flex items-center justify-start mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
                  <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                    <Image
                      src={mailbox}
                      alt="icon"
                      width={50}
                      height={50}
                      className="w-[15px] h-[15px]"
                    />
                    <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-sm sm:text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      Get in touch
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.h1
                className='mb-4 sm:mb-6 font-bold font-ppneubit text-[32px] sm:text-[64px] bg-gradient-to-br from-[#FCFEFE] to-[#CBD1D6] bg-clip-text text-transparent w-[400px] sm:w-[500px] leading-[47px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Ascend with Us Beyond the Horizon
              </motion.h1>
              <motion.p
                className='text-white/60 text-sm sm:text-xl mb-6 w-full sm:w-[500px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                At <span className='text-[#28FF21] font-bold'>Traxos</span>, we empower businesses to develop cutting-edge tech solutions. Leverage a diverse set of frameworks and tools, customizing them to bring your innovative ideas to market efficiently.
              </motion.p>
              <motion.div
                className='flex items-center gap-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className='flex justify-center items-center w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaTelegram className='text-white text-2xl'/>
                </div>
                <div className='flex justify-center items-center w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaXTwitter className='text-white text-2xl'/>
                </div>
                <div className='flex justify-center items-center w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaMedium className='text-white text-2xl'/>
                </div>
                <div className='flex justify-center items-center w-[60px] h-[60px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08),_inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] backdrop-blur-[8px] rounded-full'>
                  <FaGithub className='text-white text-2xl'/>
                </div>
              </motion.div>
            </div>
            <div className='w-full'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='hidden sm:block'
              >
                <Image src={imgGet} alt='img get' width={1000} height={1000} className='w-full h-full object-cover'/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='black sm:hidden'
              >
                <Image src={gitmobile} alt='img get' width={1000} height={1000} className='w-full h-full object-cover'/>
              </motion.div>
            </div>
          </div>
        </Section>

        <div className="absolute w-[397px] sm:w-[683px] h-[176px] sm:h-[302px] left-1/2 -translate-x-1/2 bottom-[-87px] bg-gradient-to-t from-[rgba(40,255,33,0.24)] to-[rgba(27,202,106,0)] mix-blend-plus-lighter blur-[32px]"></div>
        <div className="absolute w-[150px] sm:w-[257.13px] h-[64px] sm:h-[109.33px] left-1/2 -translate-x-1/2 bottom-[-45px] bg-gradient-to-t from-[rgba(40,255,33,0.8)] to-[rgba(40,255,33,0)] mix-blend-plus-lighter blur-[32px]"></div>
      </div>
    </Background>
  )
}

export default GetInTouch
