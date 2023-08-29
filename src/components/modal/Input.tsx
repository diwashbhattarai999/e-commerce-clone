import { useField } from "formik";
import { ChangeEvent } from "react";

interface InputProps {
  id: number;
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  errors,
}) => {
  // const [filed, meta] = useField(props)

  return (
    <div className="w-full mb-4">
      <label
        className={`
          text-sm after:content-['*'] after:ml-1
          after:text-[#e02b27] after:text-base
          ${errors && errors[id] ? "text-rose-500" : ""}
      `}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          text-base
          border-[1px] 
          p-2 tablet:p-3
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-white
          ${errors && errors[id] ? "border-rose-500" : "border-[#686b6f]"}
          ${
            errors && errors[id]
              ? "focus:border-rose-500"
              : "focus:border-black"
          }
        `}
      />
    </div>
  );
};

export default Input;
