import { IconType } from "react-icons";
import { BsFillCartPlusFill } from "react-icons/bs";

interface ButtonProps {
  buttonText?: string;
  center?: boolean;
  full?: boolean;
  error?: boolean;
  icon?: IconType;
  outline?: boolean;
  small?: boolean;
  normal?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  rounded?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  center,
  full,
  buttonText,
  error,
  icon: Icon,
  outline,
  small,
  normal,
  secondary,
  onClick,
  rounded,
  disabled,
}) => {
  return (
    <div
      className={`${small ? "my-0" : "my-2"} ${center && "text-center"} ${
        full && "w-full"
      }`}
      onClick={onClick}
    >
      <button
        type="submit"
        className={`
            ${full ? "w-full" : ""}
            ${error ? "cursor-not-allowed" : ""}
            ${
              disabled
                ? "pointer-events-none text-gray-300 border-gray-300"
                : ""
            }
            ${Icon ? "flex justify-between items-center p-1" : ""}
            ${
              outline ? "py-1 px-2 border border-solid border-accent-color" : ""
            }
            ${small ? "py-1 px-2" : ""}
            ${normal ? "text-white bg-accent-color px-5 py-3 min-h-[40px]" : ""}
            ${
              secondary
                ? "text-white bg-secondary-color hover:bg-primary-color px-5 py-3 min-h-[40px]"
                : "hover:bg-secondary-color "
            }
            ${rounded ? `rounded-${rounded}` : "rounded-full"}
            hover:text-white
            text-base
            tracking-[0.01em]
            transition duration-500
        `}
        disabled={disabled}
      >
        {buttonText}
        {Icon && <Icon size={22} />}
      </button>
    </div>
  );
};

export default Button;
