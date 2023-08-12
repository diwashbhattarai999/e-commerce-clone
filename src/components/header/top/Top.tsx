"use client";

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import MenuItem from "../MenuItem";
import { useRouter } from "next/navigation";

const Top = () => {
  const router = useRouter();
  const handleAdvertise = () => {
    router.push("/advertise_on_sastodeal");
  };
  const handleSell = () => {
    router.push("/sell_on_sastodeal");
  };

  return (
    <div
      className="
      hidden
      w-full 
      laptop:flex items-center justify-between 
      text-lightgrey-color
    "
    >
      <div className="flex gap-3">
        <p className="text-sm ">Connect with us</p>
        <div className="flex gap-1">
          <a
            href="https://www.facebook.com/sastodealonlineshopping"
            target="_blank"
          >
            <BiLogoFacebook size="20px" />
          </a>
          <a href="https://www.instagram.com/sastodeal_/" target="_blank">
            <BiLogoInstagram size="20px" />
          </a>
          <a href="https://twitter.com/SastoDeal" target="_blank">
            <BiLogoTwitter size="20px" />
          </a>
        </div>
      </div>
      <div className="flex items-center text-xs">
        <MenuItem
          border_right
          onClick={handleAdvertise}
          label="Advertise On Sastodeal"
        />
        <MenuItem border_right onClick={handleSell} label="Sell On Sastodeal" />
        <MenuItem border_right label="Raise A Ticket" />
        <MenuItem label="Order Tracking" />
      </div>
    </div>
  );
};

export default Top;
