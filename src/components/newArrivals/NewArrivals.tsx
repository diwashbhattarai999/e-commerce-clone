"use client";

import { BiTimeFive } from "react-icons/bi";

import Container from "../Container";
import Heading from "../Heading";
import ProductCard from "../products/productCard/ProductCard";
import { ProductType } from "@/models/Products";

interface NewArrivalsProps {
  products: ProductType[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
  return (
    <div>
      <Container>
        <Heading title="New Arrivals" Icon={BiTimeFive} />
        <div
          className="
            flex flex-wrap items-stretch
            -mx-[10px]
          "
        >
          {products.map((product: ProductType) => (
            <ProductCard
              key={product._id}
              product={product}
              buttonText="Add to Cart"
              icon
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
