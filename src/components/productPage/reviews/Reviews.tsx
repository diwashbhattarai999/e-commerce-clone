"use client";

import { CustomProductType } from "@/app/product/[slug]/page";
import Star from "@/components/star/Star";

interface ReviewsProps {
  product: CustomProductType | undefined;
}

const Reviews: React.FC<ReviewsProps> = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-primary-color mt-6 mb-3">
        Customer Reviews ({product?.reviews.length}+)
      </h1>
      <div className="bg-lime-50 p-5 tablet:p-10 flex gap-4 tablet:items-center justify-between flex-col tablet:flex-row">
        {/* Stats Overview */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Average Rating</h2>
          <div className="flex flex-col mobile:flex-row mobile:items-center mobile:gap-4 text-xl">
            <Star rating={product?.rating} readonly />
            {product?.rating == 0
              ? "No review yet"
              : `${product?.rating} ${
                  product?.rating == 1 ? "review" : "reviews"
                }`}
          </div>
        </div>

        {/* Stats Reviews */}
        <div>
          {product?.ratings.map((rating, index) => (
            <div
              key={index}
              className="flex flex-col mobile:flex-row mobile:items-center gap-2"
            >
              <Star rating={5 - index} readonly />
              <div className="flex items-center gap-2">
                <div className="h-[6px] w-[50vw] tablet:w-[20vw] bg-gray-200 relative rounded-md">
                  <span
                    className={`bg-orange-600 h-full absolute left-0`}
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <p>{rating.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
