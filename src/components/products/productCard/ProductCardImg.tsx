"use client";

import { ProductType } from "@/models/Products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductSwiper from "../ProductSwiper";

interface ProductCardImg {
  product: ProductType;
  images: {
    url: string;
    public_url: string;
  }[];
  active: number;
  imgHeight?: string;
}

const ProductCardImg: React.FC<ProductCardImg> = ({
  product,
  images,
  active,
  imgHeight,
}) => {
  const [heartActive, setHeartActive] = useState(false);
  const handleWishList = () => {
    setHeartActive((prev) => !prev);
  };

  const discountAmt = product?.subProducts[active].discount;

  return (
    <>
      <div className="min-h-0 relative overflow-hidden mb-4">
        {/* --------------- IMAGE --------------- */}
        <Link
          href={`/product/${product?.slug}?style=${active}`}
          className="z-0"
        >
          <ProductSwiper images={images} imgHeight={imgHeight} />
        </Link>
        {/* --------------- WISHLIST --------------- */}
        <div
          className="absolute top-2 right-2 cursor-pointer z-10"
          onClick={handleWishList}
        >
          <AiOutlineHeart
            size={28}
            className={`fill-gray-400 absolute inset-0 `}
          />
          <AiFillHeart
            size={28}
            className={`${heartActive ? "fill-red-600" : "fill-white"}`}
          />
        </div>
        {/* --------------- SAVEUPTO --------------- */}
        {discountAmt > 0 && (
          <div
            className="
              text-red-700 font-semibold text-base text-left 
              bg-[#cdb9fa] 
              py-[6px] px-4 w-full
              absolute bottom-0 z-10
            "
          >
            <span>Discount upto {discountAmt}$</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCardImg;
