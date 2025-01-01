import Image from "next/image";
import logo from "@/images/stake/stake-logo.png";
import solIcon from "@/images/stake/solana.png";
import trxSol from "@/images/stake/solana-SOL.png";
import swapIcon from "@/images/stake/swap-icon.png";
import claimLogo from "@/images/stake/claim-logo.png";
import note from "@/images/stake/note.png";
import noteGray from "@/images/stake/note-gray.png";
import { useState } from "react";
interface ActiveProps {
  activeTab: string;
}
const StakeContent = ({ activeTab }: ActiveProps) => {
  const [solToken, setSolToken] = useState([
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
  ]);
  const handleSwap = (title: string) => {
    if (title == "SOL") {
      setSolToken([
        {
          id: 1,
          title: "TRXSOL",
          icon: trxSol,
          value: "0.8202",
        },
        {
          id: 2,
          title: "SOL",
          icon: solIcon,
          value: "1",
        },
      ]);
    } else {
      setSolToken([
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
      ]);
    }
  };
  const [slippage, setSlippage] = useState("20");
  const dataClaim = [
    {
      id: 1,
      title: "Staked Amount",
      content: "0 SOL",
    },
    {
      id: 2,
      title: "Total Rewards",
      content: "0 TRXSOL",
    },
    {
      id: 3,
      title: "Available to Claim",
      content: "0 SOL",
    },
  ];
  if (activeTab == "stake") {
    return (
      <div className="flex flex-col gap-[24px] w-full">
        <div className="rounded-[24px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[40px] h-[40px]">
              <Image src={logo} alt="logo" objectFit="cover" />
            </div>
            <div className="text-[32px] leading-[22.85px] text-[#fff] tracking-[0.5%] font-bold font-ppneubit">
              Stake
            </div>
          </div>
          <div className="w-full flex justify-between font-satoshi">
            <div className="flex items-center gap-[8px]">
              <div className="text-[14px] leading-[20px] text-[#CACFD8]">
                Current Tax:
              </div>
              <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal">
                20/20
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="text-[14px] leading-[20px] text-[#CACFD8]">
                Slippage:
              </div>
              <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal border-[#FFFFFF1A] border-solid border-[1px] py-[4px] px-[16px] rounded-[4px] bg-[#0A0A0A]">
                <input
                  className="border-none outline-none bg-transparent max-w-[20px]"
                  value={slippage}
                  onChange={(e) => setSlippage(e.target.value)}
                />
                %
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center gap-[4px] font-satoshi">
            <button
              onClick={() => handleSwap(solToken[0].title)}
              className="w-[40px] h-[40px] absolute"
            >
              <Image src={swapIcon} alt="swap icon" />
            </button>
            <div className="w-full h-[147px] rounded-[16px] bg-[#FFFFFF0D] p-[12px] gap-[8px]">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px]">
                    <Image
                      src={solToken[0].icon}
                      alt="icon"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-normal leading-[20px] text-[#99A0AE]">
                      You stake
                    </div>
                    <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%]">
                      {solToken[0].title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] font-normal leading-[20px] text-[14px]">
                  <div className="text-[#99A0AE]">Balance:</div>
                  <div className="text-[#FFFFFF]">0</div>
                </div>
              </div>
              <div className="w-full flex justify-end text-[32px] leading-[43px] font-medium tracking-[0.5%] text-[#fff] h-[43px] items-center">
                {solToken[0].value}
              </div>
              <div className="flex justify-end w-full">
                <button className="text-[#8CE339] text-[14px] leading-[20px] font-bold uppercase">
                  Max
                </button>
              </div>
            </div>
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
                      You recieve
                    </div>
                    <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%]">
                      {solToken[1].title}
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
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="gap-[8px] flex items-center">
              <div className="text-[#525866] text-[14px] font-normal leading-[20px]">
                Fee
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={noteGray} alt="note icon" objectFit="cover" />
              </div>
            </div>
            <div className="text-[#fff] font-medium leading-[20px] text-[14px]">
              0.00759 USDC
            </div>
          </div>
          <button className="bg-[#8CE339] rounded-full w-full py-[12px] flex justify-center text-[#076200] font-bold text-[22px] leading-[15.71px] font-ppneubit">
            Stake
          </button>
        </div>
        <div className="w-full rounded-2xl bg-[#335CFF14] border-[1px] border-solid border-[#1342FF3D] backdrop-blur-[40px] p-[12px] flex items-start gap-[12px]">
          <div className="min-w-[20px] h-[20px]">
            <Image src={note} alt="note icon" objectFit="cover" />
          </div>
          <div className="font-normal text-[14px] leading-[20px] text-[#fff] flex flex-col gap-[12px]">
            Stake your SOL to receive TRXSOL (Traxos Staked SOL). Your staked
            amount will be actively utilized in our vault.
            <button className="w-[74px] font-medium border-b-[1px] border-solid border-b-[#fff]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    );
  } else if (activeTab == "unstake") {
    return (
      <div className="flex flex-col gap-[24px] w-full">
        <div className="rounded-[24px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[40px] h-[40px]">
              <Image src={logo} alt="logo" objectFit="cover" />
            </div>
            <div className="text-[32px] leading-[22.85px] text-[#fff] tracking-[0.5%] font-bold font-ppneubit">
              Unstake
            </div>
          </div>
          <div className="w-full flex justify-between font-satoshi">
            <div className="flex items-center gap-[8px]">
              <div className="text-[14px] leading-[20px] text-[#CACFD8]">
                Current Tax:
              </div>
              <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal">
                20/20
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="text-[14px] leading-[20px] text-[#CACFD8]">
                Slippage:
              </div>
              <div className="text-[#8CE339] text-[14px] leading-[20px] font-normal border-[#FFFFFF1A] border-solid border-[1px] py-[4px] px-[16px] rounded-[4px] bg-[#0A0A0A]">
                <input
                  className="border-none outline-none bg-transparent max-w-[20px]"
                  value={slippage}
                  onChange={(e) => setSlippage(e.target.value)}
                />
                %
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center gap-[4px] font-satoshi">
            <button
              onClick={() => handleSwap(solToken[0].title)}
              className="w-[40px] h-[40px] absolute"
            >
              <Image src={swapIcon} alt="swap icon" />
            </button>
            <div className="w-full h-[147px] rounded-[16px] bg-[#FFFFFF0D] p-[12px] gap-[8px]">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px]">
                    <Image
                      src={solToken[0].icon}
                      alt="icon"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-normal leading-[20px] text-[#99A0AE]">
                      You stake
                    </div>
                    <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%]">
                      {solToken[0].title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] font-normal leading-[20px] text-[14px]">
                  <div className="text-[#99A0AE]">Balance:</div>
                  <div className="text-[#FFFFFF]">0</div>
                </div>
              </div>
              <div className="w-full flex justify-end text-[32px] leading-[43px] font-medium tracking-[0.5%] text-[#fff] h-[43px] items-center">
                {solToken[0].value}
              </div>
              <div className="flex justify-end w-full">
                <button className="text-[#8CE339] text-[14px] leading-[20px] font-bold uppercase">
                  Max
                </button>
              </div>
            </div>
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
                      You recieve
                    </div>
                    <div className="text-[#FFFFFF] font-bold leading-[24px] text-[16px] tracking-[0.5%]">
                      {solToken[1].title}
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
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="gap-[8px] flex items-center">
              <div className="text-[#525866] text-[14px] font-normal leading-[20px]">
                Free
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={noteGray} alt="note icon" objectFit="cover" />
              </div>
            </div>
            <div className="text-[#fff] font-medium leading-[20px] text-[14px]">
              0.00759 USDC
            </div>
          </div>
          <button className="bg-[#8CE339] rounded-full w-full py-[12px] flex justify-center text-[#076200] font-bold text-[22px] leading-[15.71px] font-ppneubit">
            Unstake
          </button>
        </div>
        <div className="w-full rounded-2xl bg-[#335CFF14] border-[1px] border-solid border-[#1342FF3D] backdrop-blur-[40px] p-[12px] flex items-start gap-[12px]">
          <div className="min-w-[20px] h-[20px]">
            <Image src={note} alt="note icon" objectFit="cover" />
          </div>
          <div className="font-normal text-[14px] leading-[20px] text-[#fff] flex flex-col gap-[12px]">
            Unstake your TRXSOL (Traxos Staked SOL) to receive SOL. It may take
            up to 5 days before you can claim your funds.
            <button className="w-[74px] font-medium border-b-[1px] border-solid border-b-[#fff]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded-[24px] border-solid bg-[#FFFFFF0A] w-full shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[12px] backdrop-blur-[20px]">
        <div className="flex items-center gap-[16px]">
          <div className="w-[40px] h-[40px]">
            <Image src={claimLogo} alt="claim logo" objectFit="cover" />
          </div>
          <div className="font-ppneubit font-bold text-[32px] leading-[22.85px] tracking-[0.5%] text-[#fff]">
            Claim
          </div>
        </div>
        <div className="rounded-[24px] font-satoshi w-full border-solid border-[1px] border-[#FFFFFF1A] p-[16px] flex flex-col gap-[12px]">
          {dataClaim.map((item) => {
            return (
              <div key={item.id} className="flex w-full justify-between">
                <div className="text-[14px] leading-[20px] font-normal text-[#99A0AE]">
                  {item.title}
                </div>
                <div className="text-[16px] leading-[24px] font-medium text-[#8CE339]">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-full font-ppneubit bg-[#8CE339] rounded-full py-[12px] text-[#076200] text-[22px] leading-[15.7px] font-bold">
          Claim
        </button>
      </div>
    );
  }
};
export default StakeContent;
