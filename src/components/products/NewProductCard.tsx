"use client";

import { useEffect, useState } from "react";
import { Product } from "./NewArrivals";
import Link from "next/link";
import ProductSwiper from "./ProductSwiper";

interface NewProductCardProps {
  product: Product;
}

const NewProductCard: React.FC<NewProductCardProps> = ({ product }) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [styles, setStyles] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );

  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s) => {
          return s.price;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active, product.subProducts]);
//   console.log(images, prices, styles);

  return (
    <div className="mb-4">
      <div className="product-container">
        <Link href={`/product/${product.slug}?style=${active}`}>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewProductCard;
