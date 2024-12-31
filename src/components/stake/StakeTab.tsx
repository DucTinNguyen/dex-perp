import { Dispatch, SetStateAction } from "react";

interface ActiveProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}
const StakeTab = ({ setActiveTab, activeTab }: ActiveProps) => {
  const menu = [
    {
      id: 1,
      title: "Stake",
      value: "stake",
    },
    {
      id: 2,
      title: "Unstake",
      value: "unstake",
    },
    {
      id: 3,
      title: "Claim",
      value: "claim",
    },
  ];
  return (
    <div className="rounded-full font-satoshi p-[2px] border-solid border-[1px] border-[#FFFFFF0A] backdrop-blur-[4px] bg-[#FFFFFF0A] flex items-center w-full max-w-[290px]">
      {menu.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.value)}
            className={`px-[24px] py-[10px] text-center text-[16px] leading-[24px] cursor-pointer border-[1px] border-solid border-transparent ${
              activeTab == item.value
                ? "text-[#fff] border-[1px] border-solid border-[#FFFFFF14] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full  font-bold hover:from-neutral-500 hover:to-neutral-700 shadow-lg transition-colors"
                : "font-medium text-[#99A0AE]"
            }`}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
export default StakeTab;
