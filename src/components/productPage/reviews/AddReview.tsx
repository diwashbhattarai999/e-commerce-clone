"use client";

import { CustomProductType } from "@/app/product/[slug]/page";
import Select from "./Select";
import { useState } from "react";

interface AddReviewProps {
  product: CustomProductType | undefined;
}

export type styleType = {
  color: string;
  image: string;
};

const AddReview: React.FC<AddReviewProps> = ({ product }) => {
  const [size, setSize] = useState<string | styleType>("");
  const [style, setStyle] = useState<string | styleType>("");

  return (
    <div>
      <div className="flex gap-2">
        {/* Size */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          Size:
          <Select
            property={size}
            selectText="Size"
            data={product?.allSizes.filter((x) => x.size !== size)}
            handleClick={setSize}
          />
        </div>

        {/* Style */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          Styles:
          <Select
            property={style}
            selectText="Style"
            data={product?.colors.filter((x) => x !== style)}
            handleClick={setStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
