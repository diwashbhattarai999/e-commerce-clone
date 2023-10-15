"use client";

import { useState } from "react";
import { reviewsType } from "@/models/Products";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/reusable/Pagination";
import ReviewCard from "../ReviewCard";
import TableHeader from "./TableHeader";
import { sizeType, styleType } from "../Select";

interface TableProps {
  reviews: reviewsType[] | undefined;
  allSizes: sizeType[] | undefined;
  colors: styleType[] | undefined;
}

const Table: React.FC<TableProps> = ({ reviews, allSizes, colors }) => {
  const [page, setPage] = useState(1);

  const PER_PAGE = 3;
  const count = reviews ? Math.ceil(reviews.length / PER_PAGE) : 0;
  const _DATA = usePagination(reviews, PER_PAGE);

  const newAllSizes = allSizes
    ? [{ size: "All", qty: 0, price: 0, _id: "all" }, ...allSizes]
    : [{ size: "All", qty: 0, price: 0, _id: "all" }];

  const newColors = colors
    ? [{ color: "", image: "" }, ...colors]
    : [{ color: "", image: "" }];

  const handleChange = (p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      {/* Title */}
      <h2 className="font-semibold text-2xl text-primary-color my-4">
        Product Reviews
      </h2>

      {/* Review Filter */}
      <TableHeader
        reviews={reviews}
        allSizes={newAllSizes}
        colors={newColors}
      />

      {/* Review Card */}
      <div className="flex flex-col">
        {_DATA.currentData().map((review: reviewsType, index: number) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end my-2">
        <Pagination
          currentPage={page}
          maxPage={count}
          onPageChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Table;
