import Container from "@/components/reusable/Container";
import ProductFilter from "../../../../components/products/ProductFilter";
import ProductBanner from "../products/ProductBanner";
import Products from "../products/Products";
import { NextPage } from "next";

interface PageParams {
  categories: string;
  subcategories: string;
}

const page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { categories, subcategories } = params;
  return (
    <div className="">
      <Container>
        <div className="flex gap-2 my-2">
          <div className="w-[30%] relative">
            <ProductFilter />
          </div>
          <div className="w-full">
            <ProductBanner
              categories={categories}
              subcategories={subcategories}
            />
            <Products />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
