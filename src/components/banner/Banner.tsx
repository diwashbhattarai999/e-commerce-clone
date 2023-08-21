import Image from "next/image";
import banner from "@/images/banner/banner.jpg";
import Countdown from "./Countdown";
import SubBanner from "./SubBanner";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        className="w-full min-h-[765px] max-w-full object-cover"
      />
      <Countdown date={new Date(2023, 8, 18)} />
      <SubBanner />
    </div>
  );
};

export default Banner;
