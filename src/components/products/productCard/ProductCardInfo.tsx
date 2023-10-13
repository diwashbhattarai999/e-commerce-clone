"use client";

import Button from "@/components/reusable/Button";
import { ProductType as ProductType } from "@/models/Products";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProductCardInfoProps {
  product: ProductType;
  buttonText: string;
  icon?: IconType;
  prices: number[];
  active: number;
  styles: {
    color: string;
    image: string;
  }[];
  setImages: React.Dispatch<
    React.SetStateAction<{ url: string; public_url: string }[]>
  >;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  options?: boolean;
}

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  product,
  buttonText,
  icon,
  prices,
  active,
  styles,
  setImages,
  setActive,
  options,
}) => {
  const productName =
    product?.name.length > 45
      ? `${product?.name.substring(0, 42)}...`
      : product?.name;

  const productPrice = prices
    ? prices?.length === 1
      ? `${prices[0]}$`
      : `${prices[0]}$ - ${prices[prices.length - 1]}$`
    : null;

  return (
    <>
      <div className="pb-1 px-4 text-left text-primary-color relative">
        <Link href={`/product/${product?.slug}?style=${active}`}>
          <div className="mb-2 text-lg font-normal block cursor-pointer h-[56px]">
            {productName}
          </div>
        </Link>
        <div className="mb-5">
          <span className="text-lg">{productPrice}</span>
          {/* <s className="text-sm text-gray-color">Rs 423</s> */}
        </div>
        {!options && (
          <div className="flex gap-2 mb-4">
            {styles &&
              styles.map((style, i) =>
                style.image ? (
                  <Image
                    key={i}
                    src={style.image}
                    alt=""
                    width={30}
                    height={30}
                    className={`
                      rounded-full w-[30px] h-[30px] cursor-pointer
                      object-cover shadow-md 
                      outline-offset-2 outline hover:outline-primary-color
                      transition-all duration-500
                      ${i == active && "outline-primary-color"} 
                    `}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  />
                ) : (
                  <span
                    key={i}
                    className={`
                    bg-white 
                    w-[30px] h-[30px] rounded-full
                    shadow-md overflow-hidden
                  `}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  ></span>
                )
              )}
          </div>
        )}
        <Button buttonText={buttonText} full icon={icon} normal/>
      </div>
    </>
  );
};

export default ProductCardInfo;
