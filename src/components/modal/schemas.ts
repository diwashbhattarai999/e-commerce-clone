import * as Yup from "yup";

export const loginValidation = Yup.object({
  login_email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid address."),
  login_password: Yup.string().required("Please enter a password."),
});

export const registerValidation = Yup.object({
  firstname: Yup.string()
    .required("Enter your firstname.")
    .min(2, "First name must be between 2 and 16 characters.")
    .max(16, "First name must be between 2 and 16 characters.")
    .matches(/^[aA-aZ]/, "Numbers and special characters are not allowed."),

  lastname: Yup.string()
    .required("Enter your lastname.")
    .min(2, "Last name must be between 2 and 32 characters.")
    .max(32, "Last name must be between 2 and 32 characters.")
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
    .oneOf([Yup.ref("register_password")], "Passwords must match."),
});
