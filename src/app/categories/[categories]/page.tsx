import Container from "@/components/Container";
import ProductBanner from "./products/ProductBanner";
import ProductFilter from "./products/ProductFilter";
import Products from "./products/Products";
import { NextPage } from "next";

interface PageParams {
  categories: string;
}

const page: NextPage<{ params: PageParams }> = ({ params }) => {
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
