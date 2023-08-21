"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import sb1 from "@/images/banner/subbanner.png";
import sb2 from "@/images/banner/subbanner2.png";
import sb3 from "@/images/banner/subbanner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        loop={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={sb1} alt="subbanner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sb2} alt="subbanner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sb3} alt="subbanner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sb1} alt="subbanner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sb2} alt="subbanner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sb3} alt="subbanner1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSwiper;
