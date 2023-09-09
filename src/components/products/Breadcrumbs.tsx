"use client";

import { CustomProductType } from "@/app/product/[slug]/page";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface BreadCrumbsProps {
  product: CustomProductType | undefined;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ product }) => {
  console.log(product);

  return (
    <div className="bg-white p-4 mb-2">
      <ul className="flex items-center gap-1">
        {/* ----- */}
        <li className="flex items-center gap-2">
          <Link href="/">Home</Link>
        </li>

        {/* ----- */}
        <li className="flex items-center gap-2">
          <BsChevronRight size="14px" className="mt-[2px]" />
          <Link href="/categories/${product?.category.slug}">
            {product?.category.name}
          </Link>
        </li>

        {/* ----- */}
        {product?.subCategories &&
          product?.subCategories?.length > 1 &&
          product?.subCategories.map((sub) => (
            <li key={sub.slug} className="flex items-center gap-2">
              <BsChevronRight size="14px" className="mt-[2px]" />
              <Link href="categories/${product?.category.slug}/${product?.subCategories.slug}">
                {sub.name}
              </Link>
            </li>
          ))}

        {/* ----- */}
        <li className="flex items-center gap-2">
          <BsChevronRight size="14px" className="mt-[2px]" />
          <Link href="" className="capitalize">
            {product?.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
