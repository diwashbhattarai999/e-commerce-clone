import Button from "../Button";

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
        <div key={id} className="mb-4 tablet:mb-5">
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
                p-2 tablet:p-3 
                w-full min-h-[43px] tablet:min-h-[58px]
              "
            />
          </div>
        </div>
      ))}
      <Button buttonText={buttonText} center full />
    </form>
  );
};

export default Input;
