"use client";

import MenuItem from "../MenuItem";
import { BsTag } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";

import Categories from "@/components/categories/Categories";
import Cart from "../Cart";

import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import MobileBottom from "./MobileBottom";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import SignIn from "@/components/register/SignIn";

type BottomProp = {
  isScroll?: boolean;
};

const Bottom: React.FC<BottomProp> = ({ isScroll }) => {
  const isOpenCategories = useSelector(selectToggleFeatureState("categories"));

  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  useBodyOverflow(isOpenSignIn || isOpenSignUp ? "hidden" : "auto");

  const handleCategories = () => {
    dispatch(toggleFeature({ featureName: "categories" }));
  };

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signIn" }));
  };
  const handleSignUp = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
  };

  return (
    <>
      <div
        className="
            hidden
            laptop:flex items-center w-full justify-center 
            text-sm 
            border-b-2 border-[#D5D5D5] 
            pt-4
            relative
          "
      >
        <div className="flex items-center flex-1 justify-center">
          <div className="pb-2">
            <MenuItem Icon={BsTag} label="Brands" />
          </div>
          <div className="pb-2">
            <MenuItem Icon={BiStoreAlt} label="Stores" />
          </div>
          <div
            className="pb-2"
            onMouseEnter={handleCategories}
            onMouseLeave={handleCategories}
          >
            <MenuItem
              Icon={MdOutlineCategory}
              IconRight={PiCaretDownThin}
              label="Categories"
              onClick={handleCategories}
            />
            {isOpenCategories && <Categories />}
          </div>
          <div className="pb-2">
            <MenuItem
              border_right
              label="Sign In"
              onClick={handleSignIn}
            />
          </div>
          <div className="pb-2">
            <MenuItem label="Sign Up" onClick={handleSignUp} />
          </div>
        </div>
        <div className="hidden laptop:block">{isScroll && <Cart />}</div>
      </div>

      <MobileBottom isScroll={isScroll} />
    </>
  );
};

export default Bottom;
