import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Josefin_Sans } from "next/font/google";

const Josefin = Josefin_Sans({ subsets: ["latin"], variable: "--josefin" });

export default function DashboardAdops() {
  const router = useRouter();

  function removeCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  const handleLogout = async () => {
    const response = await axios.post(
      `http://${process.env.NEXT_PUBLIC_HOST}/logout/`
    );

    if (response.status === 200) {
      removeCookie("token");
      router.push("/login");
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  const handleLogoClick = () => {
    router.push("/dashboard");
  };

  const handleNotifyClick = () => {
    router.push("/notification_adops");
  };

  const handleConfigClick = () => {
    router.push("/configuration_adops");
  };

  const handleCampaignClick = () => {
    router.push("/campaign_adops");
  };

  return (
    <div
      className={clsx(
        Josefin.className,
        "flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 h-full w-[240px] z-10 fixed left-0 top-0 gap-[17px] py-[39px] bg-[#18202c]"
      )}
    >
      <button
        onClick={handleLogoClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-[49px] text-4xl text-center text-[#3193f5] mb-10"
      >
        The Interns
      </button>
      <button
        onClick={handleCampaignClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200"
      >
        Campaign
      </button>
      <button
        onClick={handleConfigClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200"
      >
        Configuration
      </button>
      <button
        onClick={handleNotifyClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-left px-10 text-[#ecf2f7] hover:bg-[#253347] duration-200"
      >
        Notification
      </button>
      <button
        onClick={handleLogoutClick}
        className="flex-grow-0 flex-shrink-0 w-[257px] h-10 text-xl font-medium text-center text-[#ecf2f7] mt-auto hover:bg-[#253347] duration-200"
      >
        Logout
      </button>
    </div>
  );
}
