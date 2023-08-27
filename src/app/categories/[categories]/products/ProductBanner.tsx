"use client";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const ProductBanner = ({
  categories,
  subcategories,
}: {
  categories: any;
  subcategories?: any;
}) => {
  return (
    <div className="bg-white flex items-center gap-2 p-4 mb-2">
      <Link href="/">Home</Link>
      <BsChevronRight size="14px" />
      <Link href={`/categories/${categories}`} className="capitalize">
        {categories}
      </Link>
      {subcategories && (
        <>
          <BsChevronRight size="14px" />
          <Link
            href={`/categories/${categories}/${subcategories}`}
            className="capitalize"
          >
            {subcategories}
          </Link>
        </>
      )}
    </div>
  );
};

export default ProductBanner;
