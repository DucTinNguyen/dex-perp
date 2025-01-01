import RewardRankings from "./RewardRankings";

const RewardPage = () => {
  return (
    <div className="w-full flex justify-center md:px-0 px-[8px]">
      <div className="w-full max-w-[600px] md:py-[40px] py-[24px] flex flex-col gap-[24px] items-center">
        <div className="font-ppneubit font-bold text-[48px] leading-[34px] tracking-[0.5%] text-[#FAFAFA]">
          EARN REWARDS
        </div>
        <div className="w-full md:px-[71px] font-medium text-[14px] leading-[20px] tracking-[0.5%] text-[#CACFD8] text-center">
          Trade on Traxos to earn TRXSOL—the exclusive rewards of the Traxos
          ecosystem—from every transaction, dating back to day one.
        </div>
        <button className="bg-[#FFFFFF0A] backdrop-blur-[24px] relative rounded-[12px] w-fit p-[16px] text-[14px] font-medium flex justify-center text-[#FFFFFF] leading-[20px] border-[1px] border-solid border-[#5b5b5b] overflow-hidden">
          Your Traxos: 0
          <div className="absolute bottom-0 w-[110px] h-[27px] bg-[url('/images/position/ellip.png')] bg-cover"></div>
        </button>
        <RewardRankings />
      </div>
    </div>
  );
};
export default RewardPage;
