"use client";

import { selectToggleFeatureState } from "@/Redux/slices/featureToggleSlice";
import { useSelector } from "react-redux";

const SignIn = () => {
  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));


  return (
    <>
      {isOpenSignIn && (
        <div
          className="
            w-full h-screen 
            fixed top-0 left-0 
            bg-dark-color opacity-60
            z-50
          "
        >
          Sign In
        </div>
      )}
    </>
  );
};

export default SignIn;
