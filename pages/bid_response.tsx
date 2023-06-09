import Head from "next/head";
import { Josefin_Sans } from "next/font/google";
import DashboardComponent from "@/components/dashboard";
import Bid_response from "@/components/bid_res";
const Josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

export default function Bid_Request() {
  return (
    <>
      <Head>
        <title>The Interns</title>
        <meta name="description" content="Generated by The Interns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DashboardComponent />
      <div className="flex flex-col w-full h-full relative bg-[#ecf2f7] pl-60">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full h-[75px] overflow-hidden gap-2.5 px-[5px] py-4 bg-neutral-100 border-t-0 border-r-0 border-b-[5px] border-l-0 border-[#c0c9ee]">
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black max-w-full">
            Bid Response
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[693px] w-full relative gap-2.5 px-2.5 py-[30px]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[550px] w-[860px] overflow-hidden gap-2.5 p-2.5">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-9 relative overflow-hidden gap-2.5 px-[5px] py-1 bg-[#e6e5e5]">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] h-7 text-base font-medium text-left text-black">
                ID
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] h-7 text-base font-medium text-left text-black">
                Bid ID
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] h-7 text-base font-medium text-left text-black">
                External ID
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] h-7 text-base font-medium text-left text-black">
                Price
              </p>
            </div>
            <Bid_response page={1} />
          </div>
        </div>
      </div>
    </>
  );
}
