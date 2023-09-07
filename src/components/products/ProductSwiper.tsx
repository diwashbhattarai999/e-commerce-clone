"use client";

//Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Import required modules
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

interface ProductSwiperProps {
  images: {
    url: string;
    public_url: string;
  }[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ images }) => {
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 500, stopOnLastSlide: false }}
        speed={500}
        modules={[Autoplay]}
      >
        {images.map((img) => (
          <SwiperSlide key={img.url}>
            <Image src={img.url} alt="" width={100} height={100}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
