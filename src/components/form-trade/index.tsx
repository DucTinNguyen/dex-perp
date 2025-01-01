import FormTabTrade from "./tab"

const FormTrade = () => {


  return (
    <main>
      <FormTabTrade />
      {/* <div className="rounded-[24px] border-solid bg-[#FFFFFF0A] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] p-[16px] flex flex-col gap-[16px] backdrop-blur-[20px]">
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
              20%
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
        <button className="bg-[#8CE339] rounded-full w-full py-[20px] flex justify-center text-[#076200] font-bold text-[22px] leading-[15.71px] font-ppneubit">
          Stake
        </button>
      </div> */}
    </main>
  )
}

export default FormTrade