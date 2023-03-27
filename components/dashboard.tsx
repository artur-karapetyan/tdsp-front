import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  function removeCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  const handleLogout = async () => {
    const response = await axios.post("http://0.0.0.0:9090/logout/");

    if (response.status === 200) {
      removeCookie("token");
      router.push("/login");
    }
  };

  const handleClick = () => {
    handleLogout();
  };

  return (
    <div
      className={clsx(
        "flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 h-full w-[240px] z-10 fixed left-0 top-0 gap-[17px] py-[39px] bg-[#18202c]"
      )}
    >
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-[49px] text-4xl text-center text-[#3193f5] mb-10">
        The Interns
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Bid Request
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Bid Response
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Creative
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Campaign
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Category
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Configuration
      </button>
      <button className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200">
        Notification
      </button>
      <button
        onClick={handleClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-center text-[#ecf2f7] mt-auto hover:bg-[#253347] duration-200"
      >
        Logout
      </button>
    </div>
  );
}
