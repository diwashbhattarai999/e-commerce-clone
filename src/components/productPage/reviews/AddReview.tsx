"use client";

import { CustomProductType } from "@/app/product/[slug]/page";
import Select, { styleType } from "./Select";
import { useState } from "react";

interface AddReviewProps {
  product: CustomProductType | undefined;
}

let fits = ["Small", "True to size", "Large"];

const AddReview: React.FC<AddReviewProps> = ({ product }) => {
  const [size, setSize] = useState<string | styleType>("");
  const [style, setStyle] = useState<string | styleType>("");
  const [fit, setFit] = useState<string | styleType>("");

  return (
    <div>
      <div className="flex gap-2 justify-end">
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
    </div>
  );
};

export default AddReview;
