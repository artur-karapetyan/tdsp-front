import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

function getCookie(name: string) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

interface CreativeData {
  url: string;
  id: number;
  name: string;
  external_id: string;
  campaign_id: number;
  campaign_name: string;
  categories: string[];
}

interface FetcherResult {
  page: number;
  total_pages: number;
  total_items: number;
  data: CreativeData[];
}

function fetcherGenerator(page: number) {
  return async function (): Promise<FetcherResult> {
    const token = getCookie("token");
    const response = await axios.get<FetcherResult>(
      `http://0.0.0.0:9090/api/creatives/${page}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  };
}

interface Props {
  page: number;
}

export default function Creatives(props: Props) {
  const [page, setPage] = useState(props.page);

  const query = useQuery({
    queryKey: ["creative", page],
    queryFn: fetcherGenerator(page),
  });

  const handleNextPage = () => {
    if (query.data && page < query.data.total_pages)
      setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  if (query.isLoading || !query.data) return <>Loading</>;
  if (query.isSuccess) {
    const data = query.data.data;
    return (
      <>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[295px] relative overflow-hidden gap-2.5 p-[5px] bg-neutral-100 border-2 border-[#c0c9ee]"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[280px] h-[280px] relative overflow-hidden">
              <img src={item.url} />
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-8 relative overflow-hidden gap-2.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[130px] h-8 text-base font-semibold text-left text-black">
                ID:
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[140px] h-8 text-base text-center text-black">
                {item.id}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-8 relative overflow-hidden gap-2.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[130px] h-8 text-base font-semibold text-left text-black">
                Name:
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[140px] h-8 text-base text-center text-black">
                {item.name}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-8 relative overflow-hidden gap-2.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[130px] h-8 text-base font-semibold text-left text-black">
                External ID:
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[140px] h-8 text-base text-center text-black">
                {item.external_id}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-8 relative overflow-hidden gap-2.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[130px] h-8 text-base font-semibold text-left text-black">
                Campaign ID:
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[140px] h-8 text-base text-center text-black">
                {item.campaign_id}
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 relative overflow-hidden gap-2.5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[150px] h-11 text-base font-semibold text-left text-black">
                Campaign Name:
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[120px] h-11 text-base text-center text-black">
                {item.campaign_name}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[105px] relative overflow-hidden">
              <p className="flex-grow-0 flex-shrink-0 w-[150px] h-8 text-base font-semibold text-left text-black">
                Categories:
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[279px] h-[65px] text-base text-left text-black">
                {item.categories.join(", ")}
              </p>
            </div>
          </div>
        ))}
        <button onClick={handleNextPage}>
          <svg
            width={54}
            height={54}
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[54px] h-[54px] absolute left-[1150px] top-[294px]"
            preserveAspectRatio="none"
          >
            <circle
              cx="27.5"
              cy="26.5"
              r="22.5"
              fill="#E6E5E5"
              stroke="#B4B1B1"
              stroke-width={2}
              className="hover:fill-[#85b0ed] duration-200"
            />
            <path
              d="M41.0712 28.5607C41.6569 27.9749 41.6569 27.0251 41.0712 26.4393L31.5252 16.8934C30.9394 16.3076 29.9897 16.3076 29.4039 16.8934C28.8181 17.4792 28.8181 18.4289 29.4039 19.0147L37.8892 27.5L29.4039 35.9853C28.8181 36.5711 28.8181 37.5208 29.4039 38.1066C29.9897 38.6924 30.9394 38.6924 31.5252 38.1066L41.0712 28.5607ZM40.0105 26L15.9897 26V29L40.0105 29V26Z"
              fill="#827D7D"
            />
          </svg>
        </button>
        <button onClick={handlePrevPage}>
          <svg
            width={54}
            height={54}
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[54px] h-[54px] absolute left-[80px] top-[294px]"
            preserveAspectRatio="none"
          >
            <circle
              cx="27.5"
              cy="26.5"
              r="22.5"
              fill="#E6E5E5"
              stroke="#B4B1B1"
              stroke-width={2}
              className="hover:fill-[#85b0ed] duration-200"
            />
            <path
              d="M14.929 26.4393C14.3432 27.0251 14.3432 27.9749 14.929 28.5607L24.475 38.1066C25.0607 38.6924 26.0105 38.6924 26.5963 38.1066C27.1821 37.5208 27.1821 36.5711 26.5963 35.9853L18.111 27.5L26.5963 19.0147C27.1821 18.4289 27.1821 17.4792 26.5963 16.8934C26.0105 16.3076 25.0607 16.3076 24.475 16.8934L14.929 26.4393ZM40.0105 26L15.9897 26V29L40.0105 29V26Z"
              fill="#827D7D"
            />
          </svg>
        </button>
      </>
    );
  }

  return null;
}
