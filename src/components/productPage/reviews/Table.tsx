"use client";

import { useState } from "react";
import { reviewsType } from "@/models/Products";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/reusable/Pagination";
import ReviewCard from "./ReviewCard";

interface TableProps {
  reviews: reviewsType[] | undefined;
}

const Table: React.FC<TableProps> = ({ reviews }) => {
  const [page, setPage] = useState(1);

  const PER_PAGE = 3;
  const count = reviews ? Math.ceil(reviews.length / PER_PAGE) : 0;
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl text-primary-color my-4">
          Product Reviews
        </h2>
        <div className="flex flex-col">
          {_DATA.currentData().map((review: reviewsType, index: number) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        <div className="flex justify-end my-2">
          <Pagination
            currentPage={page}
            maxPage={count}
            onPageChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
