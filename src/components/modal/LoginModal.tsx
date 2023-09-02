"use client";

import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import { useDispatch, useSelector } from "react-redux";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Form, Formik } from "formik";
import { loginValidation } from "./schemas";

import Input from "./Input";
import Modal from "./Modal";
import Button from "../Button";
import { RootState } from "@/Redux/store";
import { setUser } from "@/Redux/slices/userSlice";
import { ChangeEvent, useState } from "react";

export interface MyLoginFormValues {
  login_email: string;
  login_password: string;
}

const initialValues: MyLoginFormValues = {
  login_email: "",
  login_password: "",
};

interface LoginModalProps {
  providers: ClientSafeProvider[];
}

const LoginModal: React.FC<LoginModalProps> = ({ providers }) => {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);

  const isOpenSignIn = useSelector(selectToggleFeatureState("signIn"));
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(toggleFeature({ featureName: "signUp" }));
    dispatch(toggleFeature({ featureName: "signIn" }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "login_email" || name === "login_password") {
      dispatch(setUser({ ...user, [name]: value }));
    }
  };

  const handleSignIn = async () => {};

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
          <Formik
            enableReinitialize
            initialValues={user}
            validationSchema={loginValidation}
            onSubmit={() => {
              handleSignIn();
            }}
          >
            {({ errors, handleBlur, touched }) => (
              <Form>
                <Input
                  label="Email"
                  type="text"
                  name="login_email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Password"
                  type="password"
                  name="login_password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Button buttonText="Login" full />
              </Form>
            )}
          </Formik>
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
          <div className="flex justify-center tablet:justify-start gap-4">
            {providers.map((provider: ClientSafeProvider) => {
              let providerIcon;
              if (provider.id === "google") {
                providerIcon = <FaGoogle color="white" size="24" />;
              } else if (provider.id === "facebook") {
                providerIcon = <FaFacebookF color="white" size="24" />;
              }

              return providerIcon ? (
                <div
                  key={provider.id}
                  className={`
                      mt-2 p-4
                      rounded-full w-[60px] h-[60px]
                      text-2xl 
                      ${provider.id === "google" && "bg-[#dd4b39]"}
                      ${provider.id === "facebook" && "bg-[#3b5998]"}
                      flex items-center justify-center
                      cursor-pointer
                    `}
                  onClick={() => signIn(provider.id)}
                >
                  {providerIcon}
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );

  const footer = (
    <>
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
        loading={loading}
      />
    </>
  );
};

export default LoginModal;
