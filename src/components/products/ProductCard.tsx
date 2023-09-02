"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Button from "../Button";

interface ProductCardProps {
  link: string;
  imgSrc: string;
  savedPrice: number;
  oldPrice: number;
  newPrice: number;
  title: string;
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  link,
  imgSrc,
  savedPrice,
  newPrice,
  oldPrice,
  title,
  buttonText,
}) => {
  const [active, setActive] = useState(false);
  const handleWishList = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="p-[10px] mb-[10px]">
      <div className="relative bg-content-background-color h-full w-full max-w-full text-center">
        {/* --------------- IMAGE --------------- */}
        <div className="min-h-0 pb-[100%] relative overflow-hidden mb-4">
          {/* --------------- IMAGE --------------- */}
          <Link href={link} className="absolute inset-0 mt-3">
            <Image
              src={imgSrc}
              alt={title}
              fill={true}
              className="w-full h-full object-contain m-auto"
            />
          </Link>
          {/* --------------- WISHLIST --------------- */}
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleWishList}
          >
            <AiOutlineHeart
              size={28}
              className={`${active ? "fill-transparent" : "fill-primary-color"}
                 absolute inset-0
              `}
            />
            <AiFillHeart
              size={28}
              className={`${active ? "fill-red-600" : "fill-white"}`}
            />
          </div>
          {/* --------------- SAVEUPTO --------------- */}
          <div
            className="
            text-primary-color text-base text-left 
          bg-[#cdb9fa] 
            py-[6px] px-4 w-full
            absolute bottom-0 
            "
          >
            <span>Save upto Rs {savedPrice}</span>
          </div>
        </div>
        {/* --------------- DETAILS --------------- */}
        <div className="pb-1 px-4 text-left text-primary-color">
          <Link
            href=""
            className="mb-2 text-lg font-normal text-ellipsis overflow-hidden block"
          >
            {title}
          </Link>
          <div className="mb-5">
            <span className="text-lg">Rs {newPrice} </span>
            <s className="text-sm text-gray-color">Rs {oldPrice}</s>
          </div>
          <Button buttonText={buttonText} full />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
