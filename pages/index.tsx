import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function handleClick(event: React.MouseEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  if (target.value === "") {
    target.value = "";
  }
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full relative gap-10 px-[60px] py-[100px] bg-neutral-100">
        <p className="flex-grow-0 flex-shrink-0 w-[573px] h-[227px] text-8xl text-center text-[#3193f5]">
          <span className="flex-grow-0 flex-shrink-0 w-[573px] h-[227px] text-8xl text-center text-[#3193f5]">
            The
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-[573px] h-[227px] text-8xl text-center text-[#3193f5]">
            Interns
          </span>
        </p>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[300px] w-[400px] gap-[30px] px-[35px] py-[30px] rounded-3xl bg-[#deecfa]">
          <input
            className="flex justify-start text-2xl text-left text-[#3193f5] items-center self-stretch flex-grow relative overflow-hidden gap-2.5 px-[27px] py-[7px] rounded-[20px] bg-neutral-100"
            type="text"
            placeholder="Email"
            onClick={handleClick}
          ></input>
          <input
            className="flex justify-start text-2xl text-left text-[#3193f5] items-center self-stretch flex-grow relative overflow-hidden gap-2.5 px-[27px] py-[7px] rounded-[20px] bg-neutral-100"
            type="password"
            placeholder="Password"
            onClick={handleClick}
          ></input>
          <button className="flex justify-center items-center flex-grow w-[139px] relative overflow-hidden gap-2.5 px-7 py-2 rounded-3xl bg-[#9db3ed] hover:bg-[#7295f3] transition-colors duration-500">
            <p className="flex-grow-0 flex-shrink-0 text-[32px] text-center text-neutral-100">
              Login
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
