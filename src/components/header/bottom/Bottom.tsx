"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

import MenuItem from "../MenuItem";
import { BsTag } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";

import Categories from "@/components/categories/Categories";
import Cart from "../Cart";

import { useDispatch, useSelector } from "react-redux";
import {
  FeatureToggleState,
  selectToggleFeatureState,
  toggleFeature,
} from "@/store/slices/featureToggleSlice";
import MobileBottom from "./MobileBottom";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import Account from "@/components/account/Account";

type BottomProp = {
  isScroll?: boolean;
};

const Bottom: React.FC<BottomProp> = ({ isScroll }) => {
  const dispatch = useDispatch();

  const isOpenCategories = useSelector(selectToggleFeatureState("categories"));
  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const isOpenAccount = useSelector(selectToggleFeatureState("account"));
  const isOpenForgot = useSelector(selectToggleFeatureState("forgot"));

  useBodyOverflow(
    isOpenSignIn || isOpenSignUp || isOpenForgot ? "hidden" : "auto"
  );

  const handleMenuItem = (name: keyof FeatureToggleState) => {
    dispatch(toggleFeature({ featureName: name }));
  };

  const { data: session } = useSession();

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
          <MenuItem Icon={BsTag} label="Brands" />
          <MenuItem Icon={BiStoreAlt} label="Stores" />

          <div
            onMouseEnter={() => handleMenuItem("categories")}
            onMouseLeave={() => handleMenuItem("categories")}
          >
            <MenuItem
              Icon={MdOutlineCategory}
              IconRight={PiCaretDownThin}
              label="Categories"
              onClick={() => handleMenuItem("categories")}
            />
            {isOpenCategories && <Categories />}
          </div>
          {!session?.user && (
            <>
              <MenuItem
                border_right
                label="Sign In"
                onClick={() => handleMenuItem("signIn")}
              />
              <MenuItem
                label="Sign Up"
                onClick={() => handleMenuItem("signUp")}
              />
            </>
          )}
          {session?.user && (
            <>
              <div
                onMouseEnter={() => handleMenuItem("account")}
                onMouseLeave={() => handleMenuItem("account")}
                className=""
              >
                <MenuItem
                  Icon={MdOutlineCategory}
                  IconRight={PiCaretDownThin}
                  label="Account"
                  onClick={() => handleMenuItem("account")}
                />
                {isOpenAccount && <Account />}
              </div>
              <MenuItem label="Sign Out" onClick={() => signOut()} />
            </>
          )}
        </div>
        <div className="hidden laptop:block">{isScroll && <Cart />}</div>
      </div>

      <MobileBottom isScroll={isScroll} />
    </>
  );
};

export default Bottom;
