"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Form, Formik } from "formik";

import {
  selectToggleFeatureState,
  setFeatureFalse,
  setFeatureTrue,
} from "@/store/slices/featureToggleSlice";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../reusable/Button";
import { forgotValidation } from "./schemas";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import { RootState } from "@/store/store";
import { setUser } from "@/store/slices/userSlice";
import axios from "axios";

const ForgotModal = () => {
  const [loading, setLoading] = useState(false);

  const user = useSelector((state: RootState) => state.user);

  const { forgot_email, forgot_error, forgot_sucess } = user;

  const isOpenForgot = useSelector(selectToggleFeatureState("forgot"));
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(setFeatureTrue({ featureName: "signIn" }));
    dispatch(setFeatureFalse({ featureName: "forgot" }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "forgot_email") {
      dispatch(setUser({ ...user, [name]: value }));
    }
  };
  const handleForgot = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post("/api/auth/forgot", {
        forgot_email,
      });
      dispatch(
        setUser({ ...user, forgot_sucess: data.message, forgot_error: "" })
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        dispatch(
          setUser({
            ...user,
            forgot_sucess: "",
            forgot_error: error.response?.data?.message,
          })
        );
      }
    }
  };

  const body = (
    <>
      {forgot_error && (
        <div className="mb-2 px-2 py-4 bg-[#e5efe5] flex gap-2 items-center">
          <span>❌</span>
          <span className="text-red-500">{forgot_error}</span>
        </div>
      )}

      {forgot_sucess && (
        <div className="mb-2 px-2 py-4 bg-[#e5efe5] flex gap-2 items-center">
          <span>✅</span>
          <span className="text-[#006400]">{forgot_sucess}</span>
        </div>
      )}

      <div className="mb-5 text-gray-color text-sm">
        Please enter your email address below to receive a password reset link.
      </div>
      <Formik
        enableReinitialize
        initialValues={user}
        validationSchema={forgotValidation}
        onSubmit={() => {
          handleForgot();
        }}
      >
        {({ errors, handleBlur, touched }) => (
          <Form>
            <Input
              label="Email"
              type="text"
              name="forgot_email"
              placeholder="Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            {/* <Input
              label="Please type the letters and numbers below"
              type="text"
              name="forgot_captcha"
              placeholder="Captcha here"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            /> */}
            <div className="flex items-center gap-4">
              <Button buttonText="Submit" normal/>
              <div
                className="
                  flex items-center justify-center gap-1 
                  text-base text-accent-color font-semibold
                  cursor-pointer
                "
              >
                <BsFillArrowLeftCircleFill />
                <span onClick={handleGoBack}>Go back</span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );

  const footer = <></>;

  return (
    <>
      <Modal
        title="Forgot Password"
        isOpen={isOpenForgot}
        body={body}
        footer={footer}
        loading={loading}
      />
    </>
  );
};

export default ForgotModal;
