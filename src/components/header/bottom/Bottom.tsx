"use client";

import MenuItem from "../MenuItem";
import { BsTag } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";

import { useState } from "react";
import Categories from "@/components/categories/Categories";
import Cart from "../Cart";

import SignIn from "@/components/signin/SignIn";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import MobileBottom from "./MobileBottom";

type BottomProp = {
  isScroll: boolean;
};

const Bottom: React.FC<BottomProp> = ({ isScroll }) => {
  const [openCategories, setOpenCategories] = useState(false);


  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const dispatch = useDispatch();

  const handleCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signIn" }));
  };


  return (
    <>
      <div
        className="
            hidden
            laptop:flex items-center w-full justify-center 
            text-sm 
            border-b-2 border-[#D5D5D5] 
            pb-2
          "
      >
        <div className="flex items-center w-full justify-center">
          <MenuItem Icon={BsTag} label="Brands" />
          <MenuItem Icon={BiStoreAlt} label="Stores" />
          <>
            <MenuItem
              Icon={MdOutlineCategory}
              IconRight={PiCaretDownThin}
              label="Categories"
              onClick={handleCategories}
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

      <MobileBottom isScroll={isScroll}/>
    </>
  );
};

export default Bottom;
