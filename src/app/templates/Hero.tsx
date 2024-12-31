import Image from 'next/image';
import Link from 'next/link';
import { Background } from '@/components/background/Background';
import { HeroOneButton } from '@/components/hero/HeroOneButton';
import { Section } from '@/components/layout/Section';

import heroBG from "@/images/landing_page/2270009_Futuristic_Meta_1920x1080.svg"
import logo from '@/images/landing_page/logo.svg';
import lightLeft from "@/images/landing_page/Lightleft.svg"
import lightRight from "@/images/landing_page/Lightright.svg"
import meme from "@/images/landing_page/meme.svg"
import { LinkHero, SocialHero } from '@/utils/hero';
const Hero = () => (
  <Background color="relative w-full h-screen overflow-hidden">
    <div className='absolute top-0 left-0 w-full z-[-1]'>
      <Image src={heroBG} alt='hero-bg' width={1000} height={1000} className='h-full w-full '/>
    </div>
    <div className='absolute top-[-250px] right-[-36%] w-full z-[-1]'>
      <Image src={lightRight} alt='hero-bg' width={1000} height={1000} className='h-full w-[1200px] '/>
    </div>
    <div className='absolute top-[-250px] left-0 w-full z-[-1]'>
      <Image src={lightLeft} alt='hero-bg' width={1000} height={1000} className='h-full w-[1200px] '/>
    </div>
    <Section yPadding="py-6">
      <div className='fixed z-50 top-5 left-0 w-full px-[40px]'>
        <div className="grid grid-cols-3 items-center rounded-2xl bg-[linear-gradient(93.78deg,_rgba(17,18,20,0.18)_4.87%,_rgba(12,13,15,0.216)_75.88%)] px-4 py-2 border-[1px] border-[#FFFFFF0F] shadow-[inset_0px_1px_1px_1px_#FFFFFF26] backdrop-blur-[12px]">
          <div className="flex items-center">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-center gap-x-4 text-base font-light text-icon_soft-400">
            {LinkHero.map((item) => (
              <div
                className="flex h-[40px] items-center justify-center"
                key={item.id}
              >
                <Link href={item.link} className="px-2 font-medium">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-5">
            <div className="flex items-center gap-2">
              {SocialHero.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="flex size-11 items-center justify-center"
                >
                  <item.icon className="text-2xl text-white" />
                </Link>
              ))}
            </div>
            <button className="rounded-lg bg-white px-4 pb-2 pt-[10px] font-ppneubit text-[22px] font-bold">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </Section>

    <Section yPadding="pb-[63px] pt-[143px]">
      <HeroOneButton
        title={
          <>
            {/* {'The modern landing page for\n'} */}
            <span className="text-shadow-lg bg-gradient-to-br from-[#A4FFB1] to-[#A4FFB1] bg-clip-text font-ppneubit text-[84px] text-transparent bg-blend-lighten backdrop-blur-[24px]">
              The Next Generation <br/> Trading Platform
            </span>
          </>
        }
        description={
          <div className="my-6 text-xl font-normal text-[#F0FFF5A3]">
            Unleash the potential of your digital assets with
            <br />a platform designed for the modern trader.
          </div>
        }
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <div className='rounded-2xl bg-gradient-to-b from-[#5EECFF00] to-[#5EECFF40] p-[6px] backdrop-blur-[4px] inline-block shadow-[1px_1px_2px_0px_#FFFFFF3D_inset,0px_16px_32px_-8px_#F0F1FF52,0px_4px_8px_0px_#F0F1FF1F,0px_2px_6px_0px_#F0F1FF3D,0px_1px_3px_0px_#F0F1FF3D]'>
              <button className='px-4 py-2 rounded-xl bg-[#28FF21] bg-gradient-to-br from-[#F0F1FF00] to-[#F0F1FF3D]'>
                <span className='text-[#0B0B0B] font-bold font-ppneubit text-3xl'>Discover Now</span>
              </button>
            </div>
          </Link>
        }
        subtitle={
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
              <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                <div className="size-2 flex-none rounded-full bg-gradient-to-br from-[#FCFEFE] to-[#CBD1D6] shadow-[0_0_8px_4px_rgba(255,255,255,0.25)]"></div>
                <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                  Get early access
                </span>
              </div>
            </div>
          </div>
        }
      />
    </Section>
    <div className='pt-[31px] pb-[121px]'>
        <Image src={meme} alt='meme' width={1000} height={100} className='w-full h-full'/>
    </div>
    <div className='bg-gradient-black w-full h-[130px] absolute bottom-0 left-0 z-[-1]'></div>
  </Background>
);

export default Hero;