import { Background } from '@/components/background/Background'
import { Section } from '@/components/layout/Section'
import React from 'react'
import logo from "@/images/landing_page/logo.svg"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <Background color="w-full h-full bg-black overflow-hidden pt-[40px] pb-[24px] font-satoshi">
      <Section yPadding='p-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[32px] mb-8'>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start"
          >
            <div className='sm:mb-10 mb-6'>
              <Image src={logo} alt='logo' width={200} height={200} className='w-[150px] h-full' />
            </div>
            <div>
              <motion.h1
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='mb-3 font-ppneubit sm:text-[40px] text-[32px] font-bold leading-7 bg-gradient-to-tr from-[#FCFEFE] to-[#CBD1D6] bg-clip-text text-transparent'
              >
                Stay In The Loop
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className='mb-8 text-xl font-normal leading-7 text-white/50 max-w-[500px] mx-auto md:mx-0'
              >
                Wherever you are, our platform empowers you to stay connected to the markets.
              </motion.p>
              <div className='flex border-[1px] border-[#262B33] backdrop-blur-sm rounded-full p-2 max-w-[440px] mx-auto md:mx-0'>
                <Input type='email' placeholder='Your email adddress' className='bg-transparent border-none text-white placeholder:text-white/50 placeholder:font-normal'/>
                <Button className='bg-white text-[#26282B] hover:bg-gray-200 rounded-full shadow-[0px_8px_8px_-4px_rgba(185,191,201,0.5)]'>Subscribe Now</Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='grid grid-cols-3 gap-x-[11px] sm:gap-x-[75px]'
          >
            <div className='flex flex-col gap-y-6'>
              <span className='text-base font-medium bg-gradient-to-tr from-[#FFFFFF] to-[#CBD1D6] bg-clip-text text-transparent'>
                Community
              </span>
              <ul className='flex flex-col gap-y-6'>
                <li><Link href={"#"} className='text-white/50'>X</Link></li>
                <li><Link href={"#"} className='text-white/50'>Telegram</Link></li>
                <li><Link href={"#"} className='text-white/50'>Medium</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-y-6'>
              <span className='text-base font-medium bg-gradient-to-tr from-[#FFFFFF] to-[#CBD1D6] bg-clip-text text-transparent'>
                Project
              </span>
              <ul className='flex flex-col gap-y-6'>
                <li><Link href={"#"} className='text-white/50'>Documentation</Link></li>
                <li><Link href={"#"} className='text-white/50'>Github</Link></li>
                <li><Link href={"#"} className='text-white/50'>Dapp</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-y-6'>
              <span className='text-base font-medium bg-gradient-to-tr from-[#FFFFFF] to-[#CBD1D6] bg-clip-text text-transparent'>
                Token
              </span>
              <ul className='flex flex-col gap-y-6'>
                <li><Link href={"#"} className='text-white/50'>Dexscreener</Link></li>
                <li><Link href={"#"} className='text-white/50'>Solscan</Link></li>
                <li><Link href={"#"} className='text-white/50'>Resource</Link></li>
                <li><Link href={"#"} className='text-white/50'>Pump.fun</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='text-center py-4 border-t-[1px] border-[#122405]'
        >
          <span>Copyright © Traxos 2024</span>
        </motion.div>
      </Section>
    </Background>
  )
}

export default Footer
