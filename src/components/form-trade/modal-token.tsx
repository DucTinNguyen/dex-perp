import React, { Fragment, useEffect, useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

import Image from 'next/image';
import { shortAddress } from '@/utils/address';
import { BirdeyeToken } from '@/utils/birdeyes';
import { getTrendingTokensSolana, TrendingToken } from '@/utils/coingecko';

const ModalTokens = ({ isOpen, setIsOpen, tokens , tab}: { isOpen: boolean, setIsOpen: (value: boolean) => void, tokens: BirdeyeToken[] , tab: string}) => {

    const closeModalToken = () => {
        setIsOpen(false);
    }

    const [trendingTokens, setTrendingTokens] = useState<TrendingToken[]>([]);

    const getTrendingTokens = async () => {
        try {
            const data = await getTrendingTokensSolana();
            if (data) {
                setTrendingTokens(data);
            }
        } catch (e) { 
            console.log('Error getting trending tokens', e);
        }
    }

    useEffect(() => {
        if (tab === 'long') {
            getTrendingTokens();
        }
    },[tab])


    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModalToken}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/50"></div>
            </Transition.Child>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full relative max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <section>
                            <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal border-[#FFFFFF1A] border-solid border-[1px] py-[4px] px-[16px] rounded-[4px] bg-[#0A0A0A]">
                                <input
                                    className="border-none outline-none bg-transparent w-full h-9"
                                    placeholder='Search for token...'
                                />
                            </div>
                            <section className='flex items-center justify-between gap-x-2 w-full overflow-auto my-4'>
                                {trendingTokens.slice(0,4).map((item, index) => {
                                    return (
                                        <div className='flex items-center gap-x-1' key={index}>
                                            <figure className='w-8 h-8 min-w-8 overflow-hidden rounded-full'>
                                                <Image className='w-full h-full' src={item.image} alt='icon' loader={()=> item.image} width={0} height={0} sizes='100vw' />
                                            </figure>
                                            <span className='text-sm text-white'>{item.symbol}</span>
                                        </div>
                                    )
                                })}
                            </section>
                            <section className='flex flex-col gap-2 h-[400px] overflow-y-auto mt-4'>
                                {tokens.map((item, index) => {
                                    return (
                                        <div key={index} className="flex cursor-pointer items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-xl p-3 flex-1 text-white hover:text-gray-300 transition-colors">
                                            <div className='flex items-center gap-2'>
                                                <figure className='w-8 h-8 min-w-8 rounded-full overflow-hidden'>
                                                    <Image width={0} height={0} sizes='100vw' className='w-full h-full' src={item.logoURI?.replace("ipfs://", "https://ipfs.io/ipfs/")} loader={() => item.logoURI?.replace("ipfs://", "https://ipfs.io/ipfs/")} alt='icon' />
                                                </figure>
                                                <span className='text-sm'>{item.name}</span>
                                                {item.address && <span className='text-xs p-2 bg-black rounded-full'>{shortAddress(item.address)}</span>}
                                            </div>
                                            <span>{item.symbol}</span>
                                        </div>
                                    )
                                })}
                            </section>

                        </section>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalTokens