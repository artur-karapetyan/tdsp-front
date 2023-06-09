/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Josefin_Sans } from "next/font/google";
import DashboardComponent from "@/components/dashboard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import fileToBase64 from "@/utils/base64";
import { error } from "console";
const Josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

function getCookie(name: string) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

async function getCategories() {
  const token = getCookie("token");
  const response = await axios.get<string[]>(
    `http://${process.env.NEXT_PUBLIC_HOST}/api/categories/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

async function getCampaigns() {
  const token = getCookie("token");
  const response = await axios.get<string[]>(
    `http://${process.env.NEXT_PUBLIC_HOST}/api/campaigns/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export default function Create() {
  const [externalID, setExternalID] = useState<string>();
  const [name, setName] = useState<string>();
  const [image, setImage] = useState<string | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<number>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [saveError, setSaveError] = useState<string | null>(null);
  const router = useRouter();

  const categoriesQuery = useQuery({
    queryKey: "categories",
    queryFn: getCategories,
  });

  const categories = categoriesQuery.data ?? [];

  const campaignsQuery = useQuery({
    queryKey: "campaigns",
    queryFn: getCampaigns,
  });
  const campaigns = campaignsQuery.data ?? [];

  async function fetcher() {
    const token = getCookie("token");

    let file = " ";

    if (image) {
      file = image.replace(/^data:image\/\w+;base64,/, "");
    } else {
      return;
    }

    try {
      const response = await axios.post(
        `http://${process.env.NEXT_PUBLIC_HOST}/api/creatives/`,
        {
          external_id: externalID,
          name: name,
          categories: selectedCategories.map((category) => ({
            code: category,
          })),
          campaign: {
            id: selectedCampaign,
          },
          file: file,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        router.push("/creative");
      } else {
        setSaveError("Please complete all fields");
      }
    } catch {
      setSaveError("Please complete all fields");
    }
  }

  function handleSaveClick() {
    fetcher();
  }

  return (
    <>
      <Head>
        <title>The Interns</title>
        <meta name="description" content="Generated by The Interns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DashboardComponent />
      <div className="flex flex-col overflow-y-scroll w-full h-full relative bg-[#ecf2f7] pl-60">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full h-[75px] overflow-hidden gap-2.5 px-[5px] py-4 bg-neutral-100 border-t-0 border-r-0 border-b-[5px] border-l-0 border-[#c0c9ee]">
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black max-w-full">
            Create Creative
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[693px] w-full relative gap-[35px] px-[50px] py-[70px]">
          <input
            placeholder="External ID"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[270px] h-[35px] text-base font-medium text-center text-[#3193f5] relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
            onChange={(e) => {
              setExternalID(e.target.value);
            }}
          ></input>
          <input
            placeholder="Name"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[270px] h-[35px] text-base font-medium text-center text-[#3193f5] relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <form>
            <select
              multiple
              className="flex justify-center overflow-y-scroll items-center flex-grow-0 flex-shrink-0 w-[270px] h-[150px] relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
              onChange={(e) =>
                setSelectedCategories(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {categories.map((category) => (
                <option
                  className="text-base font-medium text-center text-[#3193f5]"
                  key={category}
                  value={category}
                >
                  {`${category}`}
                </option>
              ))}
            </select>
          </form>
          <form>
            <select
              defaultValue=""
              className="flex justify-center items-center text-base font-medium text-center text-[#3193f5] flex-grow-0 flex-shrink-0 w-[270px] h-[35px] relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(parseInt(e.target.value))}
            >
              <option value="" disabled hidden>
                Campaign ID
              </option>
              {campaigns.map((campaign) => (
                <option
                  className="text-base font-medium text-center text-[#3193f5]"
                  key={campaign}
                  value={campaign}
                >
                  {`Campaign Object ${campaign}`}
                </option>
              ))}
            </select>
          </form>
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            style={{ display: "none" }}
            onChange={async (e) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);

                setImage(base64);
              }
            }}
          ></input>
          <label
            htmlFor="imageUpload"
            className="button cursor-pointer shrink-0 text-base font-medium text-center text-[#3193f5] relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
          >
            Choose Image
          </label>
          {image !== null && (
            <img src={image} className="w-[270px]" alt="uploaded" />
          )}
          <button
            onClick={handleSaveClick}
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[130px] h-10 text-xl font-medium text-center text-[#3193f5] absolute right-[60px] bottom-[60px] overflow-hidden gap-2.5 px-2.5 py-[5px] rounded bg-neutral-100 border-2 border-[#3193f5]"
          >
            Save
          </button>
          {saveError !== null && (
            <p className="text-sm text-red-500">{saveError}</p>
          )}
        </div>
      </div>
    </>
  );
}
