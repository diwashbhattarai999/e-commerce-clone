"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { Formik, Form } from "formik";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../Button";

const initialValues = {
  login_email: "",
  login_password: "",
};

const RegisterModal = () => {
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;

  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const body = (
    <>
      <div className="my-6">
        <Input id={1} label="First Name" formatPrice/>
        <Input id={2} label="Last Name" />
        <Input id={3} label="Email" />
        <Input id={4} label="Password" />
        <Input id={5} label="Confirm Password" />
      </div>
    </>
  );

  const footer = (
    <>
      <Button buttonText="Create an Account" />
      <div className="pt-2 pl-2 text-lg">
        Already registered?{" "}
        <span
          className="text-primary-color font-semibold cursor-pointer"
          onClick={handleSignIn}
        >
          Sign In
        </span>
      </div>
    </>
  );

  return (
    <>
      <Modal
        title="Sign Up"
        isOpen={isOpenSignUp}
        body={body}
        footer={footer}
      />
    </>
  );
};

export default RegisterModal;
