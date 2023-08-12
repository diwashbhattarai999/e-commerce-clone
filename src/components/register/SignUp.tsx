"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import Heading from "./RegisterHeading";
import Input from "./Input";

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
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  return (
    <>
      {isOpenSignUp && (
        <div
          className="
            w-full min-h-screen
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
                <Heading title="Create New Account" name="signup" />
                <div className="mt-6">
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
          </Container>
        </div>
      )}
    </>
  );
};

export default SignUp;
