import Image from 'next/image'
import React from 'react'
import noteGray from "@/images/stake/note-gray.png";

interface IInfoDisplay {
    title: string;
    value: string;
    currency: string;
}

const InfoDisplay = ({title, value, currency }: IInfoDisplay) => {
  return (
      <main className="w-full flex justify-between items-center">
          <section className="gap-[8px] flex items-center">
              <span className="text-[#525866] text-[14px] font-normal leading-[20px]">
                  {title}
              </span>
              <figure className="w-[20px] h-[20px]">
                  <Image src={noteGray} alt="note icon" objectFit="cover" />
              </figure>
          </section>
          <span className="text-[#fff] font-medium leading-[20px] text-[14px]">
              {value} {currency}
          </span>
      </main>
  )
}

export default InfoDisplay