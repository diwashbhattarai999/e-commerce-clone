"use client";

//Import Swiper React Components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

//Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Import required modules
import { Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

import { simillar_products } from "@/data/products";

const SimilarSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={4}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className=""
    >
      {simillar_products.map((p, index) => (
        <SwiperSlide key={index}>
          <Link href="">
            <Image src={p} alt="" width={340} height={340} className=""/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarSwiper;
