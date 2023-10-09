"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { styleType } from "./AddReview";

import Image from "next/image";

type sizeType = {
  size: string;
  qty: number;
  price: number;
  _id: string;
};

interface SelectProps {
  property: string | styleType;
  selectText: string;
  data: sizeType[] | styleType[] | undefined;

  handleClick: (newItem: string | styleType) => void;
}

const Select: React.FC<SelectProps> = ({
  property,
  selectText,
  data,
  handleClick,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative ">
      <div
        className="flex items-center justify-center gap-4 border-2 p-2 min-w-[100px] max-w-[170px] hover:bg-gray-50 rounded-md cursor-pointer font-medium text-lg"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{
          background: `${
            selectText == "Style" &&
            typeof property === "object" &&
            property.color
          }`,
          color: `${
            selectText == "Style" && typeof property === "object" && "white"
          }`,
        }}
      >
        <span className="text-ellipsis overflow-hidden">
          {selectText == "Size" && typeof property === "string" ? (
            property || `Select ${selectText}`
          ) : selectText == "Style" && typeof property === "object" ? (
            <Image
              src={property.image}
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
          ) : (
            `Select ${selectText}`
          )}
        </span>
        <IoIosArrowDown />
      </div>

      <ul
        className={`
            absolute bg-gray-50 mt-[1px] text-center w-full shadow-lg rounded-md 
            ${
              visible
                ? "max-h-[320px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
            transition-all duration-300 ease-in-out
        `}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {data?.map((item, index) => {
          if (selectText == "Size" && "size" in item) {
            return (
              <li
                key={index}
                className="hover:bg-gray-200 cursor-pointer p-1 border-b border-gray-100 transition-all duration-300"
                onClick={() => {
                  handleClick(item.size);
                }}
              >
                {item.size}
              </li>
            );
          }

          if (selectText == "Style" && "color" in item) {
            return (
              <li
                key={index}
                className="hover:opacity-90 cursor-pointer p-1 border-b border-gray-100 rounded-md transition-all duration-300"
                style={{ background: `${item.color}` }}
                onClick={() => handleClick(item)}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Select;
