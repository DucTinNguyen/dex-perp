import React, { Fragment } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

import Image from 'next/image';
import { shortAddress } from '@/utils/address';
import { nativeToken } from '@/utils/tokens';

const ModalNativeToken = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) => {

    const closeModalNativeToken = () => {
        setIsOpen(false);
    }


    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModalNativeToken}>
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
                        <section className='flex flex-col gap-2'>
                            {nativeToken.map((item, index) => {
                                return (
                                    <div key={index} className="flex cursor-pointer items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-xl p-3 mx-4 flex-1 text-white hover:text-gray-300 transition-colors">
                                        <div className='flex items-center gap-2'>
                                            <Image width={32} height={32} src={item.icon} alt='icon' />
                                            <span>{item.name}</span>
                                            {item.address && <span className='text-xs p-2 bg-black rounded-full'>{shortAddress(item.address)}</span>}
                                        </div>
                                        <span>{item.symbol}</span>
                                    </div>
                                )
                            })}
                        </section>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalNativeToken