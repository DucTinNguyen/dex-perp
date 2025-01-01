"use client"
import Image from 'next/image'
import React from 'react'
import logo from '@/images/landing_page/logo.svg';
import Link from 'next/link';
import { tradeHeader } from '@/utils/hero';
import icReward from '@/images/trade/reward.svg'
import icConnect from '@/images/trade/connect.svg'
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { usePathname } from 'next/navigation';


const HeaderTrade = () => {
  const { setVisible } = useWalletModal()
  const { publicKey, disconnect } = useWallet()
  const handleConnect = () => {
    if (!publicKey) {
      setVisible(true)
    } else {
      disconnect();
    }
  }

  const pathName = usePathname();

  return (
    <main className='w-full px-10'>
      <div className="grid grid-cols-3 items-center rounded-2xl bg-[linear-gradient(93.78deg,_rgba(17,18,20,0.18)_4.87%,_rgba(12,13,15,0.216)_75.88%)] px-4 py-[10px] border-[1px] border-[#FFFFFF0F] shadow-[inset_0px_1px_1px_1px_#FFFFFF26] backdrop-blur-[12px]">
        <Link href={'/'} className="flex items-center">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="flex items-center justify-center gap-x-4 text-base font-light text-icon_soft-400">
          {tradeHeader.map((item) => (
            <div
              className="flex h-[40px] items-center justify-center"
              key={item.id}
            >
              <Link href={item.link} className={`px-2 font-medium ${item.link === pathName ? 'text-[#8CE339]' : 'text-[#99A0AE]'} text-base`}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link href={'/reward'} className='px-4 py-[10px] rounded-[12px] bg-[rgba(246,181,30,0.19)] flex items-center justify-center gap-2'>
            <Image src={icReward} alt='reward' />
            <span className='text-[22px] text-[#F6B51E] font-ppneubit'>Reward</span>
          </Link>
          <button onClick={handleConnect} className='px-4 py-[10px] rounded-[12px] bg-[#fff] shadow-[0px_8px_8px_-4px_rgba(185,191,201,0.50)] flex items-center justify-center gap-2'>
            <Image src={icConnect} alt='reward' />
            <span className='text-[22px] text-[#26282B] font-ppneubit'>
              {publicKey ? `${publicKey?.toBase58().slice(0, 6)}...${publicKey?.toBase58().slice(-4)}` : 'Connect wallet'}
            </span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default HeaderTrade