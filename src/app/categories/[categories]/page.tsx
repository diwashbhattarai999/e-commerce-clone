import Container from "@/components/Container";
import ProductBanner from "./products/ProductBanner";
import ProductFilter from "./products/ProductFilter";
import Products from "./products/Products";

const page = ({ params }: { params: any }) => {
  const { categories } = params;
  return (
    <div className="">
      <Container>
        <div className="flex gap-2 my-2">
          <div className="w-[33%] relative">
            <ProductFilter />
          </div>
          <div className="w-[67%]">
            <ProductBanner categories={categories} />
            <Products />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
