import avatar1 from "@/images/reward/avatar1.png";
import avatar2 from "@/images/reward/avatar2.png";
import avatar3 from "@/images/reward/avatar3.png";
import avatar4 from "@/images/reward/avatar4.png";
import avatar5 from "@/images/reward/avatar5.png";
import avatar6 from "@/images/reward/avatar6.png";
import avatar7 from "@/images/reward/avatar7.png";
import avatar8 from "@/images/reward/avatar8.png";
import avatar9 from "@/images/reward/avatar9.png";
import avatar10 from "@/images/reward/avatar10.png";
import Image from "next/image";

const RewardRankings = () => {
  const rankings = [
    {
      id: 1,
      value: "1,691,109",
      address: "9iEq...uQ8",
      avatar: avatar1,
    },
    {
      id: 2,
      value: "1,673,759",
      address: "9iEq...uQ8",
      avatar: avatar2,
    },
    {
      id: 3,
      value: "1,222,922",
      address: "9iEq...uQ8",
      avatar: avatar3,
    },
    {
      id: 4,
      value: "943,160",
      address: "9iEq...uQ8",
      avatar: avatar4,
    },
    {
      id: 5,
      value: "745,732",
      address: "9iEq...uQ8",
      avatar: avatar5,
    },
    {
      id: 6,
      value: "605,077",
      address: "9iEq...uQ8",
      avatar: avatar6,
    },
    {
      id: 7,
      value: "579,726",
      address: "9iEq...uQ8",
      avatar: avatar7,
    },
    {
      id: 8,
      value: "547,058",
      address: "9iEq...uQ8",
      avatar: avatar8,
    },
    {
      id: 9,
      value: "404,393",
      address: "9iEq...uQ8",
      avatar: avatar9,
    },
    {
      id: 10,
      value: "393,232",
      address: "9iEq...uQ8",
      avatar: avatar10,
    },
  ];
  return (
    <div className="w-full p-[16px] rounded-[24px] border-solid bg-[#FFFFFF0A] font-satoshi shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] flex flex-col gap-[16px] backdrop-blur-[20px]">
      <div className="font-ppneubit font-bold text-[40px] leading-[28.56px] tracking-[0.5%] text-[#FAFAFA] text-center">
        Top TRXSOL Earners
      </div>
      <div className="w-full justify-center flex items-center gap-[8px]">
        <div className="w-[110.34px] h-[140px] bg-[url('/images/reward/frame2.png')] bg-cover pt-[8px] flex flex-col gap-[16px]">
          <div className="w-full pl-[35.12px] pr-[35.22px]">
            <div className="w-[40px] h-[40px]">
              <Image src={rankings[1].avatar} alt="avatar" objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col gap-[5.8px] items-center font-satoshi">
            <div className="font-ppneubit text-[18px] leading-[12.85px] font-bold tracking-[0.5%] bg-gradient-to-r from-[#B2E8FF] to-[#F4F9FF] text-transparent bg-clip-text">
              Top 2
            </div>
            <div className="font-ppneubit text-[12px] font-normal leading-[16.2px] tracking-[0.5%] text-[#C0EAFF]">
              {rankings[1].address}
            </div>
            <div className="font-ppneubit text-[12px] font-bold leading-[16.2px] tracking-[0.5%] text-[#FAFAFA]">
              {rankings[1].value}
            </div>
          </div>
        </div>
        <div className="w-[137.56px] h-[200px] bg-[url('/images/reward/frame1.png')] bg-cover pt-[11.75px] flex flex-col gap-[19.73px]">
          <div className="w-full px-[40px]">
            <div className="w-[57.56px] h-[57.56px]">
              <Image src={rankings[0].avatar} alt="avatar" objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-center font-satoshi">
            <div className="font-ppneubit text-[24px] leading-[17.14px] font-bold tracking-[0.5%] bg-gradient-to-r from-[#FFB931] to-[#FFE8BB] text-transparent bg-clip-text">
              Top 1
            </div>
            <div className="font-ppneubit text-[12px] font-normal leading-[16.2px] tracking-[0.5%] text-[#FFECC0]">
              {rankings[2].address}
            </div>
            <div className="font-ppneubit text-[14px] font-bold leading-[20px] tracking-[0.5%] text-[#FAFAFA]">
              {rankings[2].value}
            </div>
          </div>
        </div>
        <div className="w-[110.34px] h-[140px] bg-[url('/images/reward/frame3.png')] bg-cover pt-[8px] flex flex-col gap-[16px]">
          <div className="w-full pl-[35.12px] pr-[35.22px]">
            <div className="w-[40px] h-[40px]">
              <Image src={rankings[2].avatar} alt="avatar" objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col gap-[5.8px] items-center font-satoshi">
            <div className="font-ppneubit text-[18px] leading-[12.85px] font-bold tracking-[0.5%] bg-gradient-to-r from-[#DE9D7B] to-[#FFE9DE] text-transparent bg-clip-text">
              Top 3
            </div>
            <div className="font-ppneubit text-[12px] font-normal leading-[16.2px] tracking-[0.5%] text-[#FAFAFA]">
              {rankings[2].address}
            </div>
            <div className="font-ppneubit text-[12px] font-bold leading-[16.2px] tracking-[0.5%] text-[#FAFAFA]">
              {rankings[2].value}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        {rankings.slice(3, rankings.length).map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-full rounded-[16px] bg-[#FFFFFF0A] border-[1px] border-solid border-[#FFFFFF0A] p-[12px] flex items-center justify-between"
            >
              <div className="flex items-center gap-[10px]">
                <div className="text-[#FFFFFF] font-normal text-[14px] leading-[20px]">
                  {index + 4 < 10 ? `0${index + 4}` : index + 4}
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px]">
                    <Image src={item.avatar} alt="avatar" objectFit="cover" />
                  </div>
                  <div className="text-[#fff] text-[16px] leading-[20px] font-normal">
                    {item.address}
                  </div>
                </div>
              </div>
              <div className="text-[16px] font-bold text-[#8CE339] leading-[24px] tracking-[0.5%]">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RewardRankings;
