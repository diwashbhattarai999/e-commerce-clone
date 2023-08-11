"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { IoMdClose } from "react-icons/io";
import Input from "./Input";

interface items {
  id: number;
  title: string;
}

const itemLists: items[] = [
  {
    id: 1,
    title: "Email",
  },
  {
    id: 2,
    title: "Password",
  },
];

const SignIn = () => {
  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const dispatch = useDispatch();

  const closeSignIn = () => {
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  return (
    <>
      {isOpenSignIn && (
        <div
          className="
            w-full h-screen 
            fixed top-0 left-0 
            bg-black/[0.6]
            z-50
          "
        >
          <Container>
            <div
              className="
              bg-white text-black 
              my-14 mx-auto
              w-auto max-w-[600px]
            "
            >
              <div className="p-8">
                <div
                  className="
                  flex items-center justify-between 
                  pb-4 
                  border-b-2 border-[#d4d4d4]
                  text-primary-color 
                "
                >
                  <h2 className="text-xl font-semibold">Sign In</h2>
                  <div onClick={closeSignIn} className="cursor-pointer">
                    <IoMdClose size="20" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="pt-4 pr-6">
                    <h3
                      className="
                      text-dark-color 
                      font-semibold text-sm
                      pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
                    "
                    >
                      Registered Customers
                    </h3>
                    <div>
                      <Input items={itemLists} />
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default SignIn;
