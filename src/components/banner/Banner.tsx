import Image from "next/image";
<<<<<<< HEAD
import banner from "../../../public/images/banner/banner.jpg";
=======
import banner from "public/images/banner/banner.jpg";
>>>>>>> 34f42bb5f3b8800d6e0a2ff8f1efe6f5a57946bf
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
      <Countdown date={new Date(2023, 9, 21)} />
      <SubBanner />
    </div>
  );
};

export default Banner;
