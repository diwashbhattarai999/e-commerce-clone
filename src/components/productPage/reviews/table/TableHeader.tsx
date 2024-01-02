"use client";

import { useState } from "react";

import { sizeType, styleType } from "../Select";
import { reviewsType } from "@/models/Products";

import TableFIlter from "./TableFilter";

export type ratingsType = {
  text: string;
  value: number;
};

export type orderType = {
  text: string;
  value: string;
};

interface TableHeaderProps {
  reviews: reviewsType[] | undefined;
  allSizes: sizeType[] | undefined;
  colors: styleType[] | undefined;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  reviews,
  allSizes,
  colors,
}) => {
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState("");
  const [style, setStyle] = useState<string | styleType>("");
  const [order, setOrder] = useState<string>("");

  return (
    <div className="flex justify-end items-center gap-4">
      {/* Rating */}
      <TableFIlter
        property={rating}
        selectText="Rating"
        selectTitle="Rating:"
        data={ratings.filter((x) => x.value !== rating)}
        handleClick={(newItem) => setRating(newItem)}
      />
      {/* Size */}
      <TableFIlter
        property={size}
        selectText="Size"
        selectTitle="Sizes:"
        data={(allSizes || []).filter((x) => x.size !== size) || []}
        handleClick={(newItem) => setSize(newItem)}
      />

      {/* Styles */}
      <TableFIlter
        property={style}
        selectText="Style"
        selectTitle="Styles:"
        data={(colors || []).filter((x) => x !== style) || []}
        handleClick={(newItem) => setStyle(newItem)}
      />

      {/* Order */}
      <TableFIlter
        property={order}
        selectText="Order"
        selectTitle="Orders:"
        data={(orderOptions || []).filter((x) => x.value !== order) || []}
        handleClick={(newItem) => setOrder(newItem)}
      />
    </div>
  );
};

export default TableHeader;

const ratings = [
  {
    text: "5 star",
    value: 5,
  },
  {
    text: "4 star",
    value: 4,
  },
  {
    text: "3 star",
    value: 3,
  },
  {
    text: "2 star",
    value: 2,
  },
  {
    text: "1 star",
    value: 1,
  },
  {
    text: "All",
    value: 0,
  },
];

const orderOptions = [
  {
    text: "Recommended",
    value: "Recommended",
  },
  {
    text: "Most recent to oldest",
    value: "Most recent to oldest",
  },
  {
    text: "Oldest to most recent",
    value: "Oldest to most recent",
  },
  {
    text: "All",
    value: "",
  },
];
