import * as Yup from "yup";

export const loginValidation = Yup.object({
  login_email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid address."),

  login_password: Yup.string().required("Please enter a password."),
});

export const registerValidation = Yup.object({
  name: Yup.string()
    .required("Enter your fullname.")
    .min(2, "First name must be between 2 and 16 characters.")
    .max(16, "First name must be between 2 and 16 characters.")
    .matches(/^[aA-aZ]/, "Numbers and special characters are not allowed."),

  email: Yup.string()
    .required(
      "You'll need this when you log in and if you ever need to reset your password."
    )
    .email("Please enter a valid address."),

  password: Yup.string()
    .required("Please enter a password.")
    .min(6, "Password must be atleast 6 characters.")
    .max(36, "Password can't be more than 36 characters."),

  confirm_password: Yup.string()
    .required("Confirm your password.")
    .oneOf([Yup.ref("password")], "Passwords must match."),
});

export const forgotValidation = Yup.object({
  forgot_email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid address."),
});

export const resetValidation = Yup.object({
  reset_password: Yup.string()
    .required("Please enter a new password.")
    .min(6, "Password must be atleast 6 characters.")
    .max(36, "Password can't be more than 36 characters."),

  reset_confirm_password: Yup.string()
    .required("Confirm your new password.")
    .oneOf([Yup.ref("reset_password")], "Passwords must match."),
});
