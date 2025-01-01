import Image from "next/image";
import React from "react";
import solIcon from "@/images/stake/solana.png";
import trxSol from "@/images/stake/solana-SOL.png";
import arrow from "@/images/trade/arrow.svg"

const YouPay = () => {
    const solToken = [
        {
            id: 1,
            title: "SOL",
            icon: solIcon,
            value: "1",
        },
        {
            id: 2,
            title: "TRXSOL",
            icon: trxSol,
            value: "0.8202",
        },
    ];

    return (
        <main className="w-full h-[147px] rounded-[16px] bg-[#FFFFFF0D] p-[12px] gap-[8px]">
            <section className="w-full flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px]">
                        <Image
                            src={solToken[0].icon}
                            alt="icon"
                            objectFit="cover"
                        />
                    </div>
                    <div className="cursor-pointer">
                        <div className="text-[14px] font-normal leading-[20px] text-[#99A0AE]">
                            You pay
                        </div>
                        <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%] flex items-center gap-1">
                            {solToken[0].title}
                            <Image src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-[4px] font-normal leading-[20px] text-[14px]">
                    <div className="text-[#99A0AE]">Balance:</div>
                    <div className="text-[#FFFFFF]">0</div>
                </div>
            </section>
            <section className="w-full flex justify-end text-[32px] leading-[43px] font-medium tracking-[0.5%] text-[#fff] h-[43px] items-center">
                {solToken[0].value}
            </section>
            <section className="flex justify-end w-full">
                <button className="text-[#8CE339] text-[14px] leading-[20px] font-bold uppercase">
                    Max
                </button>
            </section>
        </main>

    );
};

export default YouPay;
