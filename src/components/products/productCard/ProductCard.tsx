"use client";

import { useEffect, useState } from "react";
import { ProductType } from "@/models/Products";
import ProductCardImg from "./ProductCardImg";
import ProductCardInfo from "./ProductCardInfo";
import { IconType } from "react-icons";

interface NewProductCardProps {
  product: ProductType;
  w_full?: boolean;
  buttonText: string;
  icon?: IconType;
  imgHeight?: string;
  options?: boolean;
}

const ProductCard: React.FC<NewProductCardProps> = ({
  product,
  w_full,
  buttonText,
  icon,
  imgHeight,
  options,
}) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product?.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product?.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [styles, setStyles] = useState(
    product?.subProducts.map((p) => {
      return p.color;
    })
  );

  useEffect(() => {
    setImages(product?.subProducts[active]?.images);
    setPrices(
      product?.subProducts[active]?.sizes
        .map((s) => {
          return s.price;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active, product?.subProducts]);

  return (
    <div
      className={`
        p-[10px] mb-[10px] w-full 
        ${!w_full && "mobile:w-1/2 tablet:w-1/3 desktop:w-1/4"}
        
      `}
    >
      <div className="relative bg-content-background-color h-full text-center transition-all duration-1000 ease-in-out">
        <ProductCardImg
          product={product}
          images={images}
          active={active}
          imgHeight={imgHeight}
        />
        <ProductCardInfo
          product={product}
          buttonText={buttonText}
          icon={icon}
          prices={prices}
          active={active}
          styles={styles}
          setImages={setImages}
          setActive={setActive}
          options={options}
        />
      </div>
    </div>
  );
};

export default ProductCard;
