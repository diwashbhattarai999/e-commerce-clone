interface Items {
  id: number;
  title: string;
  type: string;
}

interface InputProps {
  items: Items[];
  buttonText: string;
}

const Input: React.FC<InputProps> = ({ items, buttonText }) => {
  return (
    <form>
      {items.map(({ id, title, type }) => (
        <div key={id} className="mb-5">
          <label
            className="
              text-sm after:content-['*'] after:ml-1 
              after:text-[#e02b27] after:text-base
            "
          >
            {title}
          </label>
          <div>
            <input
              type={type}
              className="
                text-base 
                border-[1px] border-[#686b6f]
                p-3 
                w-full min-h-[58px]
              "
            />
          </div>
        </div>
      ))}
      <div className="my-2 text-center">
        <button
          type="submit"
          className="
            w-full 
          text-white text-base
            bg-accent-color 
            py-2 px-5
            rounded-full
            min-h-[40px]
            tracking-[0.01em]
            hover:bg-secondary-color
            transition duration-500
          "
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default Input;
