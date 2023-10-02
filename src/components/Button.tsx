import { IconType } from "react-icons";
import { BsFillCartPlusFill } from "react-icons/bs";

interface ButtonProps {
  buttonText?: string;
  center?: boolean;
  full?: boolean;
  error?: boolean;
  icon?: IconType;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  center,
  full,
  buttonText,
  error,
  icon: Icon,
  outline,
  onClick,
}) => {
  return (
    <div className={`my-2 ${center && "text-center"}`} onClick={onClick}>
      <button
        type="submit"
        className={`
            ${full && "w-full"}
            ${error && "cursor-not-allowed"}
            ${Icon && "flex justify-between items-center"}
            ${
              outline
                ? "py-1 px-2"
                : "text-white bg-accent-color px-5 py-3 min-h-[40px]"
            }
            text-base
            rounded-full
            tracking-[0.01em]
            hover:bg-secondary-color hover:text-white
            transition duration-500
          `}
      >
        {buttonText}
        {Icon && <Icon size={22} />}
      </button>
    </div>
  );
};

export default Button;
