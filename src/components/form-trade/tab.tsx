'use client'
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

interface IMenu {
    id: number;
    title: string;
    value: string;
}

const FormTabTrade = ({tab, menu, titleTab}: {tab: string, menu: IMenu[], titleTab: string}) => {
    const searchParams = useSearchParams()
    
    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
    }
    
    return (
        <div className="rounded-full font-satoshi p-[2px] border-solid border-[1px] border-[#FFFFFF0A] backdrop-blur-[4px] bg-[#FFFFFF0A] flex items-center w-max">
            {menu.map((item) => {
                return (
                    <Link
                        href={`?${createQueryString(titleTab, item.value)}`}
                        key={item.id}
                        className={`px-[24px] py-[10px] text-center text-[16px] leading-[24px] cursor-pointer border-[1px] border-solid border-transparent min-w-fit ${
                            tab == item.value
                                ? "text-[#fff] border-[1px] border-solid border-[#FFFFFF14] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full  font-bold hover:from-neutral-500 hover:to-neutral-700 shadow-lg transition-colors"
                                : "font-medium text-[#99A0AE]"
                        }`}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </div>
    )
}

export default FormTabTrade