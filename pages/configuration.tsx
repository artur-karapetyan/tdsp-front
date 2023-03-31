import Head from "next/head";
import { Josefin_Sans } from "next/font/google";
import DashboardComponent from "@/components/dashboard";
import Notify from "@/components/notify";
import Configure from "@/components/configure";
const Josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

export default function Configuration() {
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
            Configuration
          </p>
        </div>
        <Configure />
      </div>
    </>
  );
}
