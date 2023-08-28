"use client";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface ProductBannerProps {
  categories: string;
  subcategories?: string;
  category?: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  categories,
  subcategories,
  category,
}) => {
  return (
    <div className="bg-white flex items-center gap-2 p-4 mb-2">
      <Link href="/">Home</Link>
      <BsChevronRight size="14px" />
      <Link href={`/categories/${categories}`} className="capitalize">
        {categories}
      </Link>
      {subcategories && subcategories.length > 0 && (
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
      {category && (
        <>
          <BsChevronRight size="14px" />
          <Link
            href={`/categories/${categories}/${subcategories}/${category}`}
            className="capitalize"
          >
            {category}
          </Link>
        </>
      )}
    </div>
  );
};

export default ProductBanner;
