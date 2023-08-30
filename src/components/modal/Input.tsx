import { useField } from "formik";
import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  // const [field, meta] = useField(props);

  return (
    <div className="w-full mb-4">
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
        value={value}
        onChange={onChange}
        className={`
          text-base
          border-[1px] 
          p-2 tablet:p-3
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-white
        `}
      />
    </div>
  );
};

export default Input;
