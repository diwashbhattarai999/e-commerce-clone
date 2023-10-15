"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { orderType, ratingsType } from "./TableHeader";
import { sizeType, styleType } from "../Select";
import Image from "next/image";

interface SelectProps {
  property: number | string | styleType;
  selectText: string;
  selectTitle: string;
  data: ratingsType[] | sizeType[] | styleType[] | orderType[] | undefined;
  handleClick: (newItem: any) => void;
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
          className="flex items-center justify-center gap-4 border-2 p-1 min-w-[90px] max-w-[230px] hover:bg-gray-50 rounded-md cursor-pointer font-medium text-sm tablet:text-lg"
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
          <span>
            {(selectText == "Rating" && typeof property === "number") ||
            (selectText == "Size" && typeof property === "string") ||
            (selectText == "Order" && typeof property === "string")
              ? property || `Select ${selectText}`
              : selectText == "Style" &&
                typeof property === "object" &&
                property.image
              ? (
                  <Image
                    src={property.image}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full w-[32px] h-[32px]"
                  />
                ) || `Select ${selectText}`
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
            // Rating
            if (
              selectText == "Rating" &&
              typeof item == "object" &&
              "value" in item
            ) {
              return (
                <li
                  key={index}
                  className="hover:bg-gray-200 cursor-pointer p-1 border-b border-gray-100 transition-all duration-300"
                  onClick={() => handleClick(item.value)}
                >
                  {item.text}
                </li>
              );
            }

            // Size
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
                    if (item.size === "All") {
                      handleClick("");
                    } else handleClick(item.size);
                  }}
                >
                  {item.size}
                </li>
              );
            }

            // Style
            if (
              selectText == "Style" &&
              typeof item === "object" &&
              "color" in item
            ) {
              return (
                <li
                  key={index}
                  className="flex items-center justify-center hover:opacity-90 cursor-pointer p-1 border-b border-gray-100 rounded-md transition-all duration-300"
                  style={{ background: item.image ? `${item.color}` : "" }}
                  onClick={() => {
                    if (!item.image) {
                      handleClick("");
                    } else handleClick(item);
                  }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full w-[32px] h-[32px]"
                    />
                  ) : (
                    <span className="bg-slate-50">All Colors</span>
                  )}
                </li>
              );
            }

            // Order
            if (
              selectText == "Order" &&
              typeof item === "object" &&
              "value" in item
            ) {
              return (
                <li
                  key={index}
                  className="hover:bg-gray-200 cursor-pointer p-1 border-b border-gray-100 transition-all duration-300"
                  onClick={() => {
                    handleClick(item.value);
                  }}
                >
                  {item.text}
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
