import Container from "@/components/reusable/Container";
import ProductBanner from "../../products/ProductBanner";
import { NextPage } from "next";

interface PageParams {
  categories: string;
  subcategories: string;
  category: string;
}

const page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { categories, subcategories, category } = params;
  return (
    <div className="">
      <Container>
        <div className="flex gap-2 my-2">
          <div className="w-full">
            <ProductBanner
              categories={categories}
              subcategories={subcategories}
              category={category}
            />
            <div className="bg-white p-4">{category}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
