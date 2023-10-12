import Container from "@/components/reusable/Container";
import ProductBanner from "./products/ProductBanner";
import ProductFilter from "../../../components/products/ProductFilter";
import Products from "./products/Products";
import { NextPage } from "next";

interface PageParams {
  params: {
    categories: string;
  };
}

const page = ({ params }: PageParams) => {
  const { categories } = params;
  return (
    <div className="">
      <Container>
        <div className="flex gap-2 my-2">
          <div className="w-[30%] relative">
            <ProductFilter />
          </div>
          <div className="w-full">
            <ProductBanner categories={categories} />
            <Products />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
