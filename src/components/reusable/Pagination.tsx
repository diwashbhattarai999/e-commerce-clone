import React from "react";
import Button from "./Button";

import {
  MdOutlineFirstPage,
  MdOutlineLastPage,
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: maxPage },
      (_, index) => index + 1
    );
    return pageNumbers.map((pageNumber) => (
      <Button
        buttonText={pageNumber.toString()}
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        rounded="sm"
        outline
        disabled={currentPage === pageNumber}
      />
    ));
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        icon={MdOutlineFirstPage}
      />
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        icon={MdOutlineNavigateBefore}
      />
      {renderPageNumbers()}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        icon={MdOutlineNavigateNext}
        disabled={currentPage === maxPage}
      />
      <Button
        onClick={() => onPageChange(maxPage)}
        icon={MdOutlineLastPage}
        disabled={currentPage === maxPage}
      />
    </div>
  );
};

export default Pagination;
