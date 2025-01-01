import Image from "next/image";
import React from "react";
import solIcon from "@/images/stake/solana.png";
import trxSol from "@/images/stake/solana-SOL.png";
import arrow from "@/images/trade/arrow.svg"

const YouReceived = () => {

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
        <div className="w-full h-[147px] rounded-[16px] bg-[#FFFFFF0D] p-[12px] gap-[8px]">
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px]">
                        <Image
                            src={solToken[1].icon}
                            alt="icon"
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <div className="text-[14px] font-normal leading-[20px] text-[#99A0AE]">
                            You receive
                        </div>
                        <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%] flex items-center gap-1">
                            {solToken[0].title}
                            <Image src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-[4px] font-normal leading-[20px] text-[14px]">
                    <div className="text-[#99A0AE]">Balance:</div>
                    <div className="text-[#FFFFFF]">0</div>
                </div>
            </div>
            <div className="w-full flex justify-end text-[32px] leading-[43px] font-medium tracking-[0.5%] text-[#fff] h-[43px] items-center">
                {solToken[1].value}
            </div>
            <div className="flex justify-end w-full text-[#8CE339] text-[14px] leading-[20px] font-bold uppercase">
                {solToken[0].value} {solToken[0].title} = {solToken[1].value}{" "}
                {solToken[1].title}
            </div>
        </div>
    )
}

export default YouReceived