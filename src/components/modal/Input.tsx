import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";
import { UserState } from "@/store/slices/userSlice";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<UserState>;
  touched: FormikTouched<UserState>;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  name,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  const error = errors[name as keyof UserState];
  const isTouched = touched[name as keyof UserState];

  return (
    <div className={`w-full ${errors ? "" : "mb-4"}`}>
      <label
        className={`
          text-sm after:content-['*'] after:ml-1
          after:text-[#e02b27] after:text-base
      `}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={`
          text-base
          border
          p-2 tablet:p-3
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-white
          ${
            errors && error && touched && isTouched
              ? "border-rose-500 focus:border-rose-500 mb-0"
              : "border-neutral-300 focus:border-black mb-5"
          }
        `}
      />
      {errors && error && touched && isTouched && (
        <p className="mb-5 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
