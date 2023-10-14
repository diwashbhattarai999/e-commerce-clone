"use client";

import * as React from "react";
import { useState } from "react";

import { CustomProductType } from "@/app/product/[slug]/page";

import Select, { styleType } from "./Select";
import Button from "@/components/reusable/Button";

import Rating from "@mui/material/Rating";
import UploadImage from "./UploadImage";

interface AddReviewProps {
  product: CustomProductType | undefined;
}

let fits = ["Small", "True to size", "Large"];

const AddReview: React.FC<AddReviewProps> = ({ product }) => {
  const [size, setSize] = useState<string | styleType>("");
  const [style, setStyle] = useState<string | styleType>("");
  const [fit, setFit] = useState<string | styleType>("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 bg-base-background-color p-5 tablet:p-10 rounded-md">
      <div className="flex flex-wrap gap-2">
        {/* Size */}
        <Select
          property={size}
          selectText="Size"
          selectTitle="Sizes:"
          data={(product?.allSizes || []).filter((x) => x.size !== size) || []}
          handleClick={(newItem) => setSize(newItem)}
        />

        {/* Style */}
        <Select
          property={style}
          selectText="Style"
          selectTitle="Styles:"
          data={(product?.colors || []).filter((x) => x !== style) || []}
          handleClick={(newItem) => setStyle(newItem)}
        />

        {/* Fit */}
        <Select
          property={fit}
          selectText="Fit"
          selectTitle="How does it fit:"
          data={fits.filter((x) => x !== fit)}
          handleClick={(newItem) => setFit(newItem)}
        />
      </div>

      <UploadImage images={images} setImages={setImages} />

      <textarea
        name="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={5}
        placeholder="Write your review here..."
        className="w-full p-4"
      />

      <div className="flex gap-2">
        <h2 className="font-semibold">Rate this product:</h2>
        <Rating
          name="half-rating-read"
          defaultValue={0}
          value={rating}
          onChange={(_, newValue: number | null) => {
            if (newValue !== null) {
              setRating(newValue);
            }
          }}
          precision={0.5}
          className="text-orange-500 w-fit"
        />
      </div>

      <Button buttonText="Submit Review" full rounded="md" normal />
    </div>
  );
};

export default AddReview;
