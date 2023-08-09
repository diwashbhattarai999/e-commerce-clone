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
import MobileSearch from "../middle/MobileSearch";
import SignIn from "@/components/signin/SignIn";

type BottomProp = {
  isScroll: boolean;
};

const Bottom: React.FC<BottomProp> = ({ isScroll }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const [slider, setSlider] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(true);

  const handleCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };

  const handleSlider = () => {
    setSlider(!slider);
  };
  return (
    <>
      <div className="flex">
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
          <>
            <MenuItem
              Icon={MdOutlineCategory}
              IconRight={PiCaretDownThin}
              label="Categories"
              onClick={() => handleCategories()}
            />
            {openCategories && <Categories />}
          </>
          <MenuItem
            border_right={true}
            label="Sign In"
            onClick={handleSignIn}
          />
          <MenuItem label="Sign Up" />
        </div>
        <div className="hidden laptop:block">{isScroll && <Cart />}</div>
        {isOpenSignIn && <SignIn />}
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
          {isScroll && <MobileSearch />}
        </div>
      </div>
    </>
  );
};

export default Bottom;
