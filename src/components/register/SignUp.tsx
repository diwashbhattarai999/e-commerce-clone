"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import RegisterHeading from "./RegisterHeading";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

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
  const signUpRef = useRef(null);

  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  useClickOutside(signUpRef, () => {
    if (isOpenSignUp) dispatch(toggleFeature({ featureName: "signUp" }));
  });

  useEffect(() => {
    setIsTransitioning(isOpenSignUp);
  }, [isOpenSignUp]);

  return (
    <>
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
              transition-all duration-300 
              ${
                isTransitioning
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[-70px] opacity-0 "
              }
          `}
        >
          <div className="p-5 tablet:p-8" ref={signUpRef}>
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
      </div>
    </>
  );
};

export default SignUp;
