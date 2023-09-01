"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";

import { ChangeEvent, useState } from "react";
import { Formik, Form, useFormik } from "formik";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../Button";
import { registerValidation } from "./schemas";

export interface MyRegisterFormValues {
  register_firstname: string;
  register_lastname: string;
  register_email: string;
  register_password: string;
  register_confirm_password: string;
}

const initialValues: MyRegisterFormValues = {
  register_firstname: "",
  register_lastname: "",
  register_email: "",
  register_password: "",
  register_confirm_password: "",
};

const RegisterModal = () => {
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const { errors, handleChange, handleSubmit, handleBlur, values, touched } =
    useFormik({
      initialValues,
      onSubmit: (_, action) => {
        action.resetForm();
      },
      validationSchema: registerValidation,
    });

  const body = (
    <>
      <form onSubmit={handleSubmit} className="my-6">
        <Input
          label="First Name"
          type="text"
          name="register_firstname"
          value={values.register_firstname}
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Input
          label="Last Name"
          type="text"
          name="register_lastname"
          value={values.register_lastname}
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Input
          label="Email"
          type="text"
          name="register_email"
          value={values.register_email}
          placeholder="Email Address"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Input
          label="Password"
          type="password"
          name="register_password"
          value={values.register_password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Input
          label="Confirm Password"
          type="password"
          name="register_confirm_password"
          value={values.register_confirm_password}
          placeholder="Confirm Password"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Button buttonText="Create an Account" />
      </form>
    </>
  );

  const footer = (
    <>
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
