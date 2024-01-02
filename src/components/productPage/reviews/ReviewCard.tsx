"use client";

import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

import { reviewsType } from "@/models/Products";
import Star from "@/components/reusable/Star";

interface ReviewCardProps {
  review: reviewsType;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { name, image } = review.reviewBy;

  return (
    <div className="bg-base-background-color  flex flex-col mobile:flex-row gap-2 mobile:gap-0 justify-between border-b rounded-md px-4 py-6 my-2">
      {/* Customer & product review details with product images */}
      <div>
        {/* Customer & product review details */}
        <div className="flex gap-4 items-center mb-4">
          {/* Customer details */}
          <div className="flex flex-col gap-1 items-center my-2">
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              className="rounded-full w-[35px] h-[35px]"
            />
            <h4>
              {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
            </h4>
          </div>

          {/* product review details */}
          <div className="flex flex-col gap-[1px]">
            <Star rating={parseFloat(review.rating)} readonly gap={1} />
            <p className="max-w-[210px]">{review.review}</p>
            <div>
              <span className="font-semibold mr-1">Overall Fit:</span>
              <span>
                {review.fit}
                &nbsp;&nbsp;
              </span>
              <span className="font-semibold mr-1">Size:</span>
              <span>
                {review.size}
                &nbsp;&nbsp;
              </span>
              <Image
                src={review.style.image}
                alt=""
                width={100}
                height={100}
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>
          </div>
        </div>

        {/* Review Images */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {review.images.length > 0 &&
              review.images.map((img) => (
                <div
                  key={img.url}
                  className={`${
                    img &&
                    "w-[90px] h-[120px] object-cover overflow-hidden rounded-md"
                  }`}
                >
                  <Image
                    src={img?.url}
                    alt=""
                    width={90}
                    height={90}
                    className="rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Review date & likes */}
      <div className="flex flex-col gap-6">
        <div>{review.likes && review.likes?.likes}</div>
        <AiOutlineLike size={20} className="cursor-pointer" />
        <div>{review.updatedAt.slice(0, 10)}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
