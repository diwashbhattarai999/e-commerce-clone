"use client";

import Image from "next/image";

interface MainSwiperProps {
  images:
    | {
        url: string;
        public_url: string;
      }[]
    | undefined;
  activeImg?: any;
}

const MainSwiper: React.FC<MainSwiperProps> = ({ images, activeImg }) => {
  console.log(images);
  return (
    <div className="flex tablet:flex-col">
      {images?.map((img) => (
        <div key={img.url} className="mb-2">
          <Image src={img.url} alt="" width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default MainSwiper;
