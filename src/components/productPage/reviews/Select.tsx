"use client";

import { useState } from "react";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";

export type sizeType = {
  size: string;
  qty: number;
  price: number;
  _id: string;
};

export type styleType = {
  color: string;
  image: string;
};

interface SelectProps {
  property: string | styleType;
  selectText: string;
  selectTitle: string;
  data: (sizeType | styleType | string)[] | undefined;
  handleClick: (newItem: string | styleType) => void;
}

const Select: React.FC<SelectProps> = ({
  property,
  selectText,
  selectTitle,
  data,
  handleClick,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <h2 className=" font-medium text-xs tablet:text-base">{selectTitle}</h2>
      <div className="relative">
        <div
          className="flex items-center justify-center gap-4 border-2 p-[5px] min-w-[90px] max-w-[150px] hover:bg-gray-50 rounded-md cursor-pointer font-medium text-sm tablet:text-lg"
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
            {selectText == "Size" && typeof property === "string"
              ? property || `Select ${selectText}`
              : selectText == "Style" && typeof property === "object"
              ? (
                  <Image
                    src={property.image}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full w-[32px] h-[32px]"
                  />
                ) || `Select ${selectText}`
              : selectText == "Fit" && typeof property === "string"
              ? property || `Select ${selectText}`
              : `Select ${selectText}`}
          </span>
          <IoIosArrowDown />
        </div>

        <ul
          className={`
            absolute z-40 bg-gray-50 mt-[1px] text-center w-full shadow-lg rounded-md font-normal text-base
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
            if (
              selectText == "Size" &&
              typeof item === "object" &&
              "size" in item
            ) {
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

            if (
              selectText == "Style" &&
              typeof item === "object" &&
              "color" in item
            ) {
              return (
                <li
                  key={index}
                  className="flex items-center justify-center hover:opacity-90 cursor-pointer p-1 border-b border-gray-100 rounded-md transition-all duration-300"
                  style={{ background: `${item.color}` }}
                  onClick={() => handleClick(item)}
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full w-[32px] h-[32px]"
                  />
                </li>
              );
            }

            if (selectText == "Fit" && typeof item == "string") {
              return (
                <li
                  key={index}
                  className="hover:bg-gray-200 cursor-pointer p-1 border-b border-gray-100 transition-all duration-300"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
