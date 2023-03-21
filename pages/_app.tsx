import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={josefin.className} />;
}
