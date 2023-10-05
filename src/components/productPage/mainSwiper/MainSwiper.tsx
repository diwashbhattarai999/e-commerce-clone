"use client";

import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";

import Button from "@/components/Button";

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
    <div className="flex flex-col">
      <div className="flex flex-col-reverse tablet:flex-row gap-4 overflow-hidden">
        <div className="flex tablet:flex-col self-center tablet:self-start pr-2 tablet:h-[479px] overflow-auto prod-slider">
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

      {/* actions */}
      <div className="hidden tablet:flex gap-4 mt-4">
        <Button buttonText="Add to Cart" icon={BsFillCartPlusFill} full />
        <Button
          buttonText="Add to wishlist"
          icon={AiOutlineHeart}
          full
          secondary
        />
      </div>
    </div>
  );
};

export default MainSwiper;
