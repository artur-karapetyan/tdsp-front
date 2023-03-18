import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full overflow-hidden gap-2.5 px-[30px] py-2.5 bg-white">
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[600px] relative overflow-hidden gap-10 p-10 rounded-3xl bg-[#deecfa]">
          <input className="self-stretch flex-grow-0 flex-shrink-0 w-[520px] h-16 relative overflow-hidden rounded-3xl bg-white" />
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[520px] h-16 relative overflow-hidden rounded-3xl bg-white" />
          <div className="flex-grow-0 flex-shrink-0 w-[245px] h-16 relative overflow-hidden rounded-3xl bg-[#9db3ed]" />
        </div>
      </div>
    </>
  );
}
