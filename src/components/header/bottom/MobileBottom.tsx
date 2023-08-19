"use client";

import { useState } from "react";
import Cart from "../Cart";
import MobileSearch from "../middle/MobileSearch";
import { VscAccount } from "react-icons/vsc";
import { MdFavoriteBorder } from "react-icons/md";

type BottomProp = {
  isScroll?: boolean;
};

const MobileBottom: React.FC<BottomProp> = ({ isScroll }) => {
  const [slider, setSlider] = useState(false);

  const handleSlider = () => {
    setSlider(!slider);
  };

  return (
    <>
      <div
        className={`
          laptop:hidden flex items-center justify-between pb-3 text-sm
          ${isScroll ? "pt-2" : "pt-0"}
        `}
      >
        <div className="text-[#777] flex flex-col">
          <p className="font-bold text-xs mobile:text-sm">Crossborder</p>
          <div
            className="
              relative 
              mobile:py-1 
              bg-blue-color 
              rounded-full 
              flex items-center justify-center 
              text-white
              cursor-pointer
          "
            onClick={() => handleSlider()}
          >
            <span className="text-[0.7rem] mobile:text-xs">
              {slider ? "ON" : "OFF"}
            </span>
            <span
              className={`
                absolute w-3 h-3 mobile:w-4 mobile:h-4 bg-white rounded-full
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

export default MobileBottom;
