"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Formik, Form } from "formik";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../Button";

const initialValues = {
  login_email: "",
  login_password: "",
};

const LoginModal = () => {
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;

  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const body = (
    <>
      <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-0 my-8">
        <div className="tablet:w-7/12 tablet:pr-6">
          <h3
            className="
              text-dark-color
              font-semibold text-sm
              pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
            "
          >
            Registered Customers
          </h3>
          <Input id={1} label="Email" />
          <Input id={2} label="Password" />
        </div>
        <div className="tablet:w-5/12 tablet:pl-6">
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
                cursor-pointer
            "
              onClick={() => signIn("facebook")}
            >
              <FaFacebookF color="white" />
            </div>
            <div
              className="
                mt-2 p-4
                rounded-full w-[60px] h-[60px]
                text-2xl bg-[#dd4b39]
                flex items-center justify-center
                cursor-pointer
            "
              onClick={() => signIn("google")}
            >
              <FaGoogle color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const footer = (
    <>
      <Button buttonText="Login" center full />
      <div className="flex flex-col tablet:flex-row items-center justify-center gap-4 mt-4 text-sm text-accent-color font-semibold">
        <span className="cursor-pointer" onClick={handleSignUp}>
          Create New Account?
        </span>
        <span className="cursor-pointer">Forgot Your Password?</span>
      </div>
    </>
  );

  return (
    <>
      <Modal
        title="Sign In"
        isOpen={isOpenSignIn}
        body={body}
        footer={footer}
      />
    </>
  );
};

export default LoginModal;
