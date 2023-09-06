"use client";

import { resetValidation } from "@/components/modal/schemas";
import { Form, Formik } from "formik";

import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";

import Input from "@/components/modal/Input";
import Button from "@/components/Button";
import { ChangeEvent } from "react";
import { setUser } from "@/Redux/slices/userSlice";
import { JwtPayload } from "jsonwebtoken";

interface ResetFormProps {
  user_id: string | JwtPayload;
}

const ResetForm: React.FC<ResetFormProps> = ({ user_id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const { password, confirm_password } = user;

  console.log(user_id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password" || name === "confirm_password") {
      dispatch(setUser({ ...user, [name]: value }));
    }
  };

  const handleReset = () => {};

  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={resetValidation}
      onSubmit={() => {
        handleReset();
      }}
    >
      {({ errors, handleBlur, touched }) => (
        <Form>
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
          <Button buttonText="Reset Password" full />
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;
