"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import Input from "./Input";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Heading from "./RegisterHeading";

interface items {
  id: number;
  title: string;
  type: string;
}

const itemLists: items[] = [
  {
    id: 1,
    title: "Email",
    type: "email",
  },
  {
    id: 2,
    title: "Password",
    type: "password",
  },
];

const SignIn = () => {
  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  return (
    <>
      {isOpenSignIn && (
        <div
          className="
            w-full min-h-screen 
            flex justify-center
            absolute top-0 left-0 
            bg-black/[0.6]
            z-50
          "
        >
          <div
            className="
              bg-white text-black 
              w-full max-w-[600px]
              my-auto h-fit tablet:my-14 mx-auto
              p-5 tablet:p-8
            "
          >
            <Heading title="Sign In" name="signin" />
            <div className="flex flex-col tablet:flex-row">
              <div className="pt-4 tablet:pr-6 tablet:w-7/12">
                <h3
                  className="
                      text-dark-color 
                      font-semibold text-sm
                      pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
                    "
                >
                  Registered Customers
                </h3>
                <Input items={itemLists} buttonText="Login" />

                <div className="flex justify-center gap-4 mt-4 text-sm text-accent-color font-semibold">
                  <div className="w-24 cursor-pointer" onClick={handleSignUp}>
                    Create New Account?
                  </div>
                  <div>Forgot Your Password?</div>
                </div>
              </div>
              <div className="pt-4 tablet:pl-6 text-center tablet:text-left tablet:w-5/12">
                <div
                  className="
                      text-dark-color font-semibold text-sm 
                      pb-3 mb-2 mt-1
                      border-b-[1px] border-[#ccc]

                    "
                >
                  Or Sign In With
                </div>
                <div className="flex justify-center tablet:justify-start">
                  <div
                    className="
                        mr-4 mt-2 p-4 
                        rounded-full w-[60px] h-[60px]
                        text-2xl bg-[#3b5998]
                        flex items-center justify-center
                      "
                  >
                    <FaFacebookF color="white" />
                  </div>
                  <div
                    className="
                        mr-4 mt-2 p-4 
                        rounded-full w-[60px] h-[60px]
                        text-2xl bg-[#dd4b39]
                        flex items-center justify-center
                      "
                  >
                    <FaGoogle color="white" />
                  </div>
                  <div className="mr-4 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
