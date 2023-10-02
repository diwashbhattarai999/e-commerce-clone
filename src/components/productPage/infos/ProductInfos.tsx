"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { TbPlus, TbMinus } from "react-icons/tb";

import { CustomProductType } from "@/app/product/[slug]/page";
import Star from "@/components/star/Star";
import Image from "next/image";
import Button from "@/components/Button";

interface ProductInfosProps {
  product: CustomProductType | undefined;
}

const ProductInfos: React.FC<ProductInfosProps> = ({ product }) => {
  const searchParams = useSearchParams();

  const productSize = searchParams.get("size");
  const style = searchParams.get("style");

  const [getSize, setGetSize] = useState(productSize);
  const [qty, setQty] = useState(1);

  // useEffect(() => {
  //   setGetSize("");
  //   setQty(1);
  // }, [style, productSize]);

  // useEffect(() => {
  //   if (product?.quantity && qty > product?.quantity) {
  //     setQty(product?.quantity);
  //   }
  // }, [productSize]);

  return (
    <div className="flex flex-col gap-[5px] flex-1">
      {/* Product Name */}
      <div className="font-bold text-xl text-primary-color">
        {product?.name}
      </div>

      {/* SKU */}
      {product?.sku && (
        <h2 className="font-normal text-gray-500 my-2">SKU: {product?.sku}</h2>
      )}

      {/* Rating */}
      <div className="flex items-baseline flex-wrap text-lg gap-2">
        <Star rating={product?.rating} />
        <span className="text-gray-500">
          {product?.numReviews}
          {product?.numReviews == 1 ? " review" : " reviews"}
        </span>
      </div>
      <span className="h-[1px] w-full bg-gray-200 my-2" />

      {/* Price */}
      <div className="flex items-center flex-wrap gap-2 text-lg font-semibold text-primary-color mt-2">
        {!productSize ? (
          <h2>{product?.priceRange}</h2>
        ) : (
          <h1>{product?.price}</h1>
        )}
        {product?.discount &&
          (product?.discount > 0 ? (
            <h3 className="text-gray-500 text-base">
              {productSize && (
                <span className="mr-1 line-through">
                  {product?.priceBefore}$
                </span>
              )}
              <span>(-{product?.discount}%)</span>
            </h3>
          ) : (
            <h3 className="text-gray-500 text-base">
              <span className="mr-1">{product?.priceBefore}$</span>
            </h3>
          ))}
      </div>

      {/* Shipping & Quantity */}
      <div className="flex flex-wrap gap-2 mb-2">
        {/* Shipping */}
        <div className="text-gray-500">
          {product?.shipping
            ? `+${product?.shipping}$ Shipping Fee`
            : "Free Shipping"}
        </div>

        {/* Quantity */}
        <div className="text-gray-900">
          {getSize
            ? product?.quantity
            : product?.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
          pieces available
        </div>
      </div>
      <span className="h-[1px] w-full bg-gray-200 my-2" />

      {/* Sizes */}
      <h1 className="text-lg font-semibold text-primary-color mt-2">Sizes:</h1>
      <div className="flex flex-wrap gap-2 my-2">
        {product?.sizes.map((size, index) => (
          <Link
            key={index}
            href={`/product/${product.slug}?style=${style}&size=${index}`}
          >
            <div
              className={`${
                productSize != null && index == parseFloat(productSize)
                  ? "bg-primary-color text-white"
                  : "bg-slate-100"
              }  py-1 px-4 rounded-sm transition duration-300`}
              onClick={() => setGetSize(size.size)}
            >
              {size.size}
            </div>
          </Link>
        ))}
      </div>

      {/* COLORS */}
      <h1 className="text-lg font-semibold text-primary-color mt-2">Colors:</h1>
      <div className="flex flex-wrap gap-3 my-2">
        {product?.colors &&
          product.colors.map((color, i) => (
            <span key={i}>
              <Link href={`/product/${product.slug}?style=${i}`}>
                <Image
                  src={color.image}
                  alt="color"
                  width={40}
                  height={40}
                  className={`
                      rounded-full w-[40px] h-[40px] cursor-pointer
                      object-cover shadow-md 
                      outline outline-offset-2 outline-[3px] hover:outline-primary-color
                      transition-all duration-500
                      ${
                        style &&
                        i == parseFloat(style) &&
                        "outline-primary-color"
                      } 
                  `}
                />
              </Link>
            </span>
          ))}
      </div>
      <span className="h-[1px] w-full bg-gray-200 my-2" />

      {/* Qty */}
      <div className="flex">
        <div className="flex gap-2 items-center justify-center border rounded-full px-2">
          <Button
            icon={TbPlus}
            outline
            onClick={() =>
              product?.quantity &&
              qty < product?.quantity &&
              setQty((prev) => prev + 1)
            }
          />
          <span className="my-2 px-4 py-1">{qty}</span>
          <Button
            icon={TbMinus}
            outline
            onClick={() => qty > 1 && setQty((prev) => prev - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfos;
