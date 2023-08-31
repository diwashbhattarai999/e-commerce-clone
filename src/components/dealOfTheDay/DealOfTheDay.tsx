import Link from "next/link";
import Container from "../Container";
import ProductCard from "../products/ProductCard";
import { BsArrowRight } from "react-icons/bs";

const DealOfTheDay = () => {
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
          <div className="timer"></div>
          {/* --------------- PRODUCTS --------------- */}
          <div className="max-w-[252px] ml-auto mb-4">
            <ProductCard
              imgSrc="/images/kid t2.jpg"
              link=""
              savedPrice={520}
              buttonText="Options"
              newPrice={180}
              oldPrice={700}
              title="Kid Tshirt"
            />
          </div>
          {/* --------------- ACTIONS --------------- */}
          <Link
            href=""
            className="
              text-white text-xl 
              flex items-center justify-end gap-2
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
