"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { CustomProductType } from "@/app/product/[slug]/page";
import Star from "@/components/star/Star";

interface ProductInfosProps {
  product: CustomProductType | undefined;
}

const ProductInfos: React.FC<ProductInfosProps> = ({ product }) => {
  const searchParams = useSearchParams();

  const productSize = searchParams.get("size");
  const style = searchParams.get("style");

  const [getSize, setGetSize] = useState(productSize);

  return (
    <div className="flex flex-col gap-[5px]">
      {/* Product Name */}
      <h1 className="font-bold text-xl text-primary-color">{product?.name}</h1>

      {/* SKU */}
      {product?.sku && (
        <h2 className="font-normal text-gray-500">SKU: {product?.sku}</h2>
      )}

      {/* Rating */}
      <div className="flex items-baseline flex-wrap text-lg gap-2">
        <Star rating={product?.rating} />
        <span className="text-gray-500">
          {product?.numReviews}
          {product?.numReviews == 1 ? " review" : " reviews"}
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center flex-wrap gap-2 text-lg font-semibold text-primary-color">
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
      <div className="flex gap-2">
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

      {/* Sizes */}
      <div className="flex gap-1">
        {product?.sizes.map((size, index) => (
          <Link
            key={index}
            href={`/product/${product.slug}?style=${style}&size=${index}`}
          >
            <div
              className={`${
                productSize != null &&
                index == parseFloat(productSize) &&
                "bg-primary-color text-white"
              } py-1 px-2 rounded-sm transition duration-300`}
              onClick={() => setGetSize(size.size)}
            >
              {size.size}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductInfos;