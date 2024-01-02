"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetValidation } from "@/components/modal/schemas";
import { Form, Formik } from "formik";

import { RootState } from "@/store/store";
import { setUser } from "@/store/slices/userSlice";

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";

import Input from "@/components/modal/Input";
import Button from "@/components/reusable/Button";
import Loader from "@/components/reusable/Loader";
import { setFeatureTrue } from "@/store/slices/featureToggleSlice";

interface ResetFormProps {
  id: string;
  jwt_error: boolean;
}

const ResetForm: React.FC<ResetFormProps> = ({ id, jwt_error }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const { reset_password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  const handleReset = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/api/auth/reset", {
        id,
        reset_password,
      });

      let options = {
        redirect: false,
        email: data.email,
        password: reset_password,
      };

      await signIn("credentials", options);
      window.location.reload();

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        dispatch(
          setUser({
            ...user,
            reset_error: error.response?.data.message,
          })
        );
      }
    }
  };

  const handleforgot = () => {
    dispatch(setFeatureTrue({ featureName: "forgot" }));
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      {jwt_error && (
        <>
          <div className="mb-2 px-2 py-4 bg-[#e5efe5] flex gap-2 items-center">
            <span>❌</span>
            <span className="text-red-500">
              Your password reset link has expired. Please goto{" "}
              <span
                onClick={handleforgot}
                className="text-blue-600 cursor-pointer"
              >
                forgot password
              </span>{" "}
              to get new link
            </span>
          </div>
        </>
      )}
      <div className={`${jwt_error && "cursor-not-allowed"}`}>
        <Formik
          enableReinitialize
          initialValues={user}
          validationSchema={resetValidation}
          onSubmit={() => {
            if (!jwt_error) {
              handleReset();
            }
          }}
        >
          {({ errors, handleBlur, touched }) => (
            <Form>
              <Input
                label="Password"
                type="password"
                name="reset_password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <Input
                label="Confirm Password"
                type="password"
                name="reset_confirm_password"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <Button buttonText="Reset Password" full error={jwt_error} />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ResetForm;
