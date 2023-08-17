import Image from "next/image";
import banner from "@/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Image
        src={banner}
        alt="banner"
        className="w-full min-h-[765px] max-w-full object-cover"
      />
    </div>
  );
};

export default Banner;
