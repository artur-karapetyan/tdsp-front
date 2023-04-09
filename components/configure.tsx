import { useQuery } from "react-query";
import axios from "axios";

function getCookie(name: string) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

interface FetcherResult {
  id: number;
  impressions_total: number;
  auction_type: string;
  mode: string;
  game_goal: string;
  budget: number;
  impression_revenue: number;
  click_revenue: number;
  conversion_revenue: number;
  frequency_capping: number;
}

function fetcherGenerator(): () => Promise<FetcherResult> {
  async function fetcher(): Promise<FetcherResult> {
    const token = getCookie("token");
    const response = await axios.get<FetcherResult>(
      `http://${process.env.NEXT_PUBLIC_HOST}/game/configure/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    console.log(data);
    return data;
  }
  return fetcher;
}

export default function Configure() {
  const query = useQuery({
    queryFn: fetcherGenerator(),
  });

  if (query.isLoading || !query.data) return <>Loading</>;

  if (query.isSuccess) {
    const item = query.data;
    return (
      <>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[693px] w-full gap-2.5 px-2.5 py-[70px]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[528px] w-[440px] relative overflow-hidden bg-white border-2 border-[#3193f5]">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden bg-[#e6e5e5] border-t-0 border-r-0 border-b border-l-0 border-[#3193f5]">
              <p className="w-[423px] h-11 absolute left-2 top-0 text-2xl font-medium text-center text-black">
                Configuration
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                ID
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.id}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Impressions Total
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.impressions_total}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Auction Type
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.auction_type}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Game Mode
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.mode}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Game Goal
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.game_goal}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Budget
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.budget}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Impression Revenue
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.impression_revenue}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Click Revenue
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.click_revenue}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#3193f5] hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Conversion Revenue
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.conversion_revenue}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[48px] relative overflow-hidden gap-2.5 px-2.5 hover:bg-[#85b0ed] duration-200">
              <p className="flex-grow-0 flex-shrink-0 w-[250px] h-[38px] text-base font-medium text-left text-black">
                Frequency Capping
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[170px] h-[38px] text-base font-medium text-center text-black">
                {item.frequency_capping}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
