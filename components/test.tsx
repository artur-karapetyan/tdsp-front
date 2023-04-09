import { useQuery } from "react-query";
import axios from "axios";

function getCookie(name: string) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : "";
}

interface FetcherResult {
  price: number;
  cat: string[];
  external_id: string;
  image_url: string;
}

function fetcherGenerator(id: string): () => Promise<FetcherResult> {
  async function fetcher(): Promise<FetcherResult> {
    const token = getCookie("token");

    const response = await axios.post<FetcherResult>(
      "http://${process.env.NEXT_PUBLIC_HOST}/rtb/bid/",
      {
        id: id,
        imp: {
          banner: {
            w: 300,
            h: 250,
          },
        },
        click: {
          prob: "0.5",
        },
        conv: {
          prob: "0.5",
        },
        site: {
          domain: "www.example.com",
        },
        ssp: {
          id: "0938831",
        },
        user: {
          id: "u_cq_001_87311",
        },
        bcat: [],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // console.log("Response", response);

    const data = response.data;

    // console.log("Data", data);

    return data;
  }

  return fetcher;
}

interface TestProps {
  id: string;
}

export default function Test(props: TestProps) {
  const query = useQuery({
    queryKey: props.id,
    queryFn: fetcherGenerator(props.id),
  });

  // console.log(query);

  if (query.isLoading) return <>Loading</>;
  if (query.isSuccess)
    return (
      <div>
        {/* <img src={query.data.image_url} /> */}
        <p>
          {query.data.cat.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
        </p>
        <p>Price is: {query.data.price}</p>
      </div>
    );

  return <>Unexpected error</>;
}
