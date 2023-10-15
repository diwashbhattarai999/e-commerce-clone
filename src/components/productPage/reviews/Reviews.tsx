"use client";

import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import { CustomProductType } from "@/app/product/[slug]/page";

import Button from "@/components/reusable/Button";
import Star from "@/components/reusable/Star";
import { toggleFeature } from "@/store/slices/featureToggleSlice";
import AddReview from "./AddReview";
import Table from "./table/Table";

interface ReviewsProps {
  product: CustomProductType | undefined;
}

const Reviews: React.FC<ReviewsProps> = ({ product }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-2xl font-semibold text-primary-color mt-6 mb-3">
        Customer Reviews {product?.reviews && `(${product.reviews.length}+)`}
      </h1>
      {/* Review Stats */}
      <div className="bg-base-background-color p-5 tablet:p-10 flex gap-4 tablet:items-center justify-between flex-col tablet:flex-row rounded-md">
        {/* Stats Overview */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Average Rating</h2>
          <div className="flex flex-col mobile:flex-row mobile:items-center mobile:gap-4 text-xl">
            <Star rating={product?.rating} readonly gap={1} />
            {product?.rating &&
              (product?.rating == 0
                ? "No review yet"
                : `${product?.rating} ${
                    product?.rating == 1 ? "review" : "reviews"
                  }`)}
          </div>
        </div>

        {/* Stats Reviews */}
        <div>
          {product?.ratings.map((rating, index) => (
            <div
              key={index}
              className="flex flex-col mobile:flex-row mobile:items-center gap-2"
            >
              <Star rating={5 - index} readonly gap={3} />
              <div className="flex items-center gap-2">
                <div className="h-[5px] w-[40vw] tablet:w-[20vw] bg-gray-200 relative rounded-md">
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

      {/* Add Review */}
      <div className="my-4">
        {session ? (
          <AddReview product={product} />
        ) : (
          <Button
            buttonText="Login In to add review"
            rounded="md"
            full
            normal
            onClick={() => {
              dispatch(toggleFeature({ featureName: "signIn" }));
            }}
          />
        )}

        <Table
          reviews={product?.reviews}
          allSizes={product?.allSizes}
          colors={product?.colors}
        />
      </div>
    </>
  );
};

export default Reviews;
