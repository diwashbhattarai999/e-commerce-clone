"use client";

import Image from "next/image";
import { useState } from "react";
// import ReactImageMagnify from "react-image-magnify";
import InnerImageZoom from "react-inner-image-zoom";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

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
  const [active, setActive] = useState(0);

  const imgSrc = images ? images[active]?.url : "";

  return (
    <div className="flex flex-col-reverse tablet:flex-row gap-4 overflow-hidden">
      <div className="flex tablet:flex-col self-center pr-2 tablet:h-[472px] overflow-auto prod-slider">
        {images?.map((img, index) => (
          <div
            key={img.url}
            className={`
              mb-2 border-2  p-[2px] cursor-pointer
              ${
                active === index ? "border-primary-color" : "border-transparent"
              }
              transition duration-300
            `}
            onClick={() => setActive(index)}
          >
            <Image src={img.url} alt="" width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="tablet:w-[360px] self-center tablet:self-start">
        <InnerImageZoom src={imgSrc} zoomType="hover" zoomPreload={true} />
      </div>
    </div>
  );
};

export default MainSwiper;
