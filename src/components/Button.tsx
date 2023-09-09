import { BsFillCartPlusFill } from "react-icons/bs";

interface ButtonProps {
  buttonText: string;
  center?: boolean;
  full?: boolean;
  error?: boolean;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  center,
  full,
  buttonText,
  error,
  icon,
}) => {
  return (
    <div className={`my-2 ${center && "text-center"}`}>
      <button
        type="submit"
        className={`
            ${full && "w-full"}
            ${error && "cursor-not-allowed"}
            ${icon && "flex justify-between items-center"}
          text-white text-base
            bg-accent-color 
            py-3 px-5
            rounded-full
            min-h-[40px]
            tracking-[0.01em]
            hover:bg-secondary-color
            transition duration-500
          `}
      >
        {buttonText}
        {icon && <BsFillCartPlusFill size={22} />}
      </button>
    </div>
  );
};

export default Button;
