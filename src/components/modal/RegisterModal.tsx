"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import {
  selectToggleFeatureState,
  setFeatureFalse,
  toggleFeature,
} from "@/store/slices/featureToggleSlice";
import { RootState } from "@/store/store";
import { setUser } from "@/store/slices/userSlice";

import { Formik, Form } from "formik";
import axios from "axios";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../reusable/Button";

import { registerValidation } from "./schemas";

const RegisterModal = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const isOpenSignUp = useSelector(selectToggleFeatureState("signUp"));

  const dispatch = useDispatch();
  const router = useRouter();

  const { name, email, password, confirm_password, sucess, error } = user;

  const formikInitialValues = {
    name: name || '',
    email: email || '',
    password: password || '',
    confirm_password: confirm_password || '',
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  const handleSignIn = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const handleSignUp = async () => {
    console.log("hello");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      dispatch(setUser({ ...user, sucess: data.message, error: "" }));
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          password: password,
        };
        await signIn("credentials", options);
        dispatch(setFeatureFalse({ featureName: "signUp" }));
        router.push("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        dispatch(
          setUser({
            ...user,
            sucess: "",
            error: error.response?.data?.message,
          })
        );
      }
    }
  };

  const body = (
    <>
      {error && (
        <div className="mb-2 px-2 py-4 bg-[#e5efe5] flex gap-2 items-center">
          <span>❌</span>
          <span className="text-red-500">{error}</span>
        </div>
      )}
      {sucess && (
        <div className="mb-2 px-2 py-4 bg-[#e5efe5] flex gap-2 items-center">
          <span>✅</span>
          <span className="text-green-500">{sucess}</span>
        </div>
      )}
      <Formik
        enableReinitialize
        initialValues={formikInitialValues}
        onSubmit={handleSignUp}
        validationSchema={registerValidation}
      >
        {({ errors, touched, handleBlur }) => (
          <Form className="my-6">
            <Input
              label="Full Name"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Email"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <Button buttonText="Create an Account" normal/>
          </Form>
        )}
      </Formik>
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
        loading={loading}
      />
    </>
  );
};

export default RegisterModal;
