"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";

import { ChangeEvent, useState } from "react";
import { Formik, Form } from "formik";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../Button";

const initialValues = {
  register_firstname: "",
  register_lastname: "",
  register_email: "",
  register_password: "",
  register_confirm_password: "",
};

const RegisterModal = () => {
  const [user, setUser] = useState(initialValues);
  const {
    register_firstname,
    register_lastname,
    register_email,
    register_password,
    register_confirm_password,
  } = user;

  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const body = (
    <>
      <div className="my-6">
        <Input
          id={1}
          label="First Name"
          type="text"
          name="register_firstname"
          value={user.register_firstname}
          placeholder="First Name"
          onChange={handleChange}
        />
        <Input
          id={2}
          label="Last Name"
          type="text"
          name="register_lastname"
          value={user.register_lastname}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <Input
          id={3}
          label="Email"
          type="text"
          name="register_email"
          value={user.register_email}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <Input
          id={4}
          label="Password"
          type="password"
          name="register_password"
          value={user.register_password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Input
          id={5}
          label="Confirm Password"
          type="password"
          name="register_confirm_password"
          value={user.register_confirm_password}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
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
