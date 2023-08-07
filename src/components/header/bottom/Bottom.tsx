"use client";

import MenuItem from "../MenuItem";
import { BsTag } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineCategory, MdFavoriteBorder } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import Categories from "@/components/categories/Categories";
import Cart from "../Cart";

const Bottom = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [slider, setSlider] = useState(false);

  const handleClick = () => {
    setOpenCategories(!openCategories);
  };

  const handleSlider = () => {
    setSlider(!slider);
  };

  return (
    <div>
      <div
        className="
      hidden
      laptop:flex items-center w-full justify-center 
      text-sm 
      border-b-2 border-[#D5D5D5] 
      pb-2
      "
      >
        <MenuItem Icon={BsTag} label="Brands" />
        <MenuItem Icon={BiStoreAlt} label="Stores" />
        <div className="">
          <MenuItem
            Icon={MdOutlineCategory}
            IconRight={PiCaretDownThin}
            label="Categories"
            onClick={() => handleClick()}
          />
          {openCategories && <Categories />}
        </div>
        <MenuItem border_right={true} label="Sign In" />
        <MenuItem label="Sign Up" />
      </div>

      <div className="laptop:hidden flex items-center justify-between pb-3 text-sm">
        <div className="text-[#777] flex flex-col">
          <p className="font-bold">Crossborder</p>
          <div
            className="
              relative 
              py-1 
              bg-blue-color 
              rounded-full 
              flex items-center justify-center 
              text-white
              cursor-pointer
          "
            onClick={() => handleSlider()}
          >
            <span className="text-xs">{slider ? "ON" : "OFF"}</span>
            <span
              className={`
                absolute w-4 h-4 bg-white rounded-full
                ${slider ? "right-1" : "left-1"}
                transition ease-in-out duration-500
              `}
            ></span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#4B4453]">
          <div className="mr-2 cursor-pointer">
            <MdFavoriteBorder size="20" />
          </div>
          <div className="cursor-pointer">
            <VscAccount size="20" />
          </div>
          <div className="mt-2 relative">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
