import Image from "next/image";
import banner from "@/images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        className="w-full min-h-[765px] max-w-full object-cover"
      />
      {/* <div className="absolute top-0 left-0 bg-white p-10">
        Timer
      </div> */}
    </div>
  );
};

export default Banner;
