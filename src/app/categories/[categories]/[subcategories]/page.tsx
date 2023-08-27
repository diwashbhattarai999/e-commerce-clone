import Container from "@/components/Container";
import ProductFilter from "../products/ProductFilter";
import ProductBanner from "../products/ProductBanner";
import Products from "../products/Products";

const page = ({ params }: { params: any }) => {
  const { categories, subcategories } = params;
  return (
    <div className="">
      <Container>
        <div className="flex gap-2 my-2">
          <div className="w-[33%] relative">
            <ProductFilter />
          </div>
          <div className="w-[67%]">
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
