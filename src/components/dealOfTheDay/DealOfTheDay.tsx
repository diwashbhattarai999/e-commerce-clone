import Link from "next/link";
import Container from "../reusable/Container";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../products/productCard/ProductCard";
import { ProductType } from "@/models/Products";
import Timer from "../banner/Timer";

interface DealOfTheDayProps {
  products: ProductType[];
}

const DealOfTheDay: React.FC<DealOfTheDayProps> = ({ products }) => {
  const product = products[0];

  return (
    <div className="py-8">
      <Container>
        <div
          className="
          p-8 pt-[40px] pb-[20px] 
          bg-deal-of-the-day bg-cover bg-center bg-no-repeat 
          relative
        "
        >
          {/* --------------- TIMER --------------- */}
          <div className="hidden laptop:flex absolute laptop:bottom-[110px] laptop:right-[33%]">
            <Timer date={new Date(2023, 9, 21)} />
          </div>
          {/* --------------- PRODUCTS --------------- */}
          <div className="max-w-[252px] ml-auto mb-4">
            <ProductCard
              product={product}
              w_full
              buttonText="Options"
              imgHeight="h-[191px]"
              options
            />
          </div>
          {/* --------------- ACTIONS --------------- */}
          <Link
            href=""
            className="
              text-white text-xl 
              flex items-center justify-end gap-2
              mr-2
            "
          >
            <span>Go to Deals page</span>
            <BsArrowRight />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default DealOfTheDay;
