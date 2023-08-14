"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import RegisterHeading from "./RegisterHeading";
import Input from "./Input";
import { useEffect, useState } from "react";

interface items {
  id: number;
  title: string;
  type: string;
}

const itemLists: items[] = [
  {
    id: 1,
    title: "First Name",
    type: "text",
  },
  {
    id: 2,
    title: "Last Name",
    type: "text",
  },
  {
    id: 3,
    title: "Email",
    type: "email",
  },
  {
    id: 4,
    title: "Password",
    type: "password",
  },
  {
    id: 5,
    title: "Confirm Password",
    type: "password",
  },
];

const SignUp = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  useEffect(() => {
    setIsTransitioning(isOpenSignUp);
  }, [isOpenSignUp]);

  return (
    <>
      {/* {isOpenSignUp && ( */}
      <div
        className={`
            w-full h-screen 
            flex justify-center
            fixed left-0 
            bg-black/[0.7]
            z-50 overflow-x-hidden overflow-y-auto inset-0
            ${isOpenSignUp ? "" : "hidden"}
        `}
      >
        <div
          className={`
              bg-white text-black 
              w-full max-w-[600px] h-fit
              my-auto tablet:my-14 mx-auto
              p-5 tablet:p-8
              duration-300
              ${isTransitioning ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
          <RegisterHeading title="Create New Account" name="signup" />
          <div className="mt-5 tablet:mt-6">
            <Input items={itemLists} buttonText="Create an Account" />
            <div className="pt-2 pl-2 text-lg">
              Already registered?{" "}
              <span
                className="text-primary-color font-semibold cursor-pointer"
                onClick={handleSignIn}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default SignUp;
