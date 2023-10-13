"use client";

import { useState } from "react";
import { reviewsType } from "@/models/Products";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/reusable/Pagination";

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
        <div className="flex flex-col">
          {_DATA.currentData().map((review: reviewsType, index: number) => (
            <span key={index}>{review.review}</span>
          ))}
        </div>
        <div>
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
