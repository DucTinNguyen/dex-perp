import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/dex/logo.svg';
import { LinkHero, SocialHero } from '@/utils/hero';

import { Background } from '@/components/background/Background';
import { HeroOneButton } from '@/components/hero/HeroOneButton';
import { Section } from '@/components/layout/Section';
import heroBG from "@/images/dex/2270009_Futuristic_Meta_1920x1080.svg"
const Hero = () => (
  <Background color="relative w-full h-full overflow-hidden bg-black">
    {/* <div className='absolute top-0 left-0 w-full z-[-10]'>
      <Image src={heroBG} alt='hero-bg' width={1000} height={1000} className='h-full w-full '/>
    </div> */}
    <Section yPadding="py-6">
      <div className="flex justify-between items-center rounded-2xl bg-[linear-gradient(93.78deg,_rgba(17,18,20,0.18)_4.87%,_rgba(12,13,15,0.216)_75.88%)] px-4 py-2 border-[1px] border-[#FFFFFF0F] shadow-[inset_0px_1px_1px_1px_#FFFFFF26] backdrop-blur-[12px]">
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
          <button className="rounded-lg bg-white px-4 pb-2 pt-[10px] font-neuebit text-[22px] font-bold">
            Launch App
          </button>
        </div>
      </div>
    </Section>

    <Section yPadding="py-[63px]">
      <HeroOneButton
        title={
          <>
            {/* {'The modern landing page for\n'} */}
            <span className="text-shadow-lg bg-gradient-to-br from-[#28FF2166] to-[#1BCA6A66] bg-clip-text font-neuebit text-[84px] text-transparent bg-blend-soft-light backdrop-blur-[12px]">
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
            <div>
              <button className='px-4 py-2 font-neuebit text-3xl rounded-2xl bg-[#28FF21] bg-gradient-to-br from-[#F0F1FF00] to-[#F0F1FF3D] text-[#0B0B0B] font-bold'>Discover Now</button>
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
    
  </Background>
);

export default Hero;