import Head from "next/head";
import { Josefin_Sans } from "next/font/google";
import Campaigns from "@/components/campaigns";
import DashboardAdops from "@/components/dashboardadops";
const Josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

export default function Bid_Request() {
  return (
    <>
      <Head>
        <title>The Interns</title>
        <meta name="description" content="Generated by The Interns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DashboardAdops />
      <div className="flex flex-col w-full h-full relative bg-[#ecf2f7] pl-60">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full h-[75px] overflow-hidden gap-2.5 px-[5px] py-4 bg-neutral-100 border-t-0 border-r-0 border-b-[5px] border-l-0 border-[#c0c9ee]">
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black max-w-full">
            Campaign
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[693px] w-full relative gap-2.5 px-2.5 py-[30px]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[550px] w-[900px] overflow-hidden gap-2.5 py-2.5">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-1 bg-[#e6e5e5]">
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-7 text-base font-medium text-left text-black">
                Enable/Disable
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[100px] h-7 text-base font-medium text-left text-black">
                ID
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[240px] h-7 text-base font-medium text-left text-black">
                Name
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-7 text-base font-medium text-left text-black">
                Budget
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-7 text-base font-medium text-left text-black">
                Min Bid
              </p>
            </div>
            <Campaigns page={1} />
          </div>
        </div>
      </div>
    </>
  );
}
