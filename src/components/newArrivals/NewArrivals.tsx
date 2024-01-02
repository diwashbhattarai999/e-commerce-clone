"use client";

import { BiTimeFive } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
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
              icon={BsFillCartPlusFill}
              imgHeight="h-[376px]"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
