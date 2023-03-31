import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} className={josefin.className} />
    </QueryClientProvider>
  );
}
