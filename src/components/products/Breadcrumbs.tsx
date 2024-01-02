"use client";

import { CustomProductType } from "@/app/product/[slug]/page";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface BreadCrumbsProps {
  product: CustomProductType | undefined;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ product }) => {

  return (
    <div className="bg-white p-2 tablet:p-4 mb-2">
      <ul className="flex items-center gap-1 text-sm tablet:text-base italic flex-wrap">
        {/* ----- */}
        <li className="flex items-center gap-2 capitalize">
          <Link href="/" className="text-secondary-color">
            Home
          </Link>
          <BsChevronRight size="14px" className="mt-[2px]" />
        </li>

        {/* ----- */}
        <li className="flex items-center gap-2 capitalize">
          <Link
<<<<<<< HEAD
            href="/categories/${product?.category?.slug}"
            className="text-secondary-color"
          >
            {product?.category?.name}
=======
            href="/categories/${product?.category.slug}"
            className="text-secondary-color"
          >
            {product?.category.name}
>>>>>>> 34f42bb5f3b8800d6e0a2ff8f1efe6f5a57946bf
          </Link>
          <BsChevronRight size="14px" className="mt-[2px]" />
        </li>

        {/* ----- */}
        {product?.subCategories &&
          product?.subCategories?.length > 1 &&
<<<<<<< HEAD
          product?.subCategories?.map((sub) => (
            <li key={sub.slug} className="flex items-center gap-2 capitalize">
              <Link
                href="categories/${product?.category.slug}/${product?.subCategories?.slug}"
=======
          product?.subCategories.map((sub) => (
            <li key={sub.slug} className="flex items-center gap-2 capitalize">
              <Link
                href="categories/${product?.category.slug}/${product?.subCategories.slug}"
>>>>>>> 34f42bb5f3b8800d6e0a2ff8f1efe6f5a57946bf
                className="text-secondary-color"
              >
                {sub.name}
              </Link>
              <BsChevronRight size="12px" className="mt-[2px]" />
            </li>
          ))}

        {/* ----- */}
        <li className="flex items-center gap-2 capitalize">{product?.name}</li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
