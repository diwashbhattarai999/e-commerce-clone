"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import sb1 from "/public/images/banner/subbanner.png";
import sb2 from "/public/images/banner/subbanner2.png";
import sb3 from "/public/images/banner/subbanner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    src: sb1,
    alt: "subbanner1",
  },
  {
    id: 2,
    src: sb2,
    alt: "subbanner2",
  },
  {
    id: 3,
    src: sb3,
    alt: "subbanner3",
  },
  {
    id: 4,
    src: sb1,
    alt: "subbanner1",
  },
  {
    id: 5,
    src: sb2,
    alt: "subbanner2",
  },
  {
    id: 6,
    src: sb3,
    alt: "subbanner3",
  },
];

const BannerSwiper = () => {
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
        {slides.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <Image src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSwiper;
