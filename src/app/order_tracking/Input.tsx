import { AiOutlineGift } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IconType } from "react-icons";
import Button from "@/components/reusable/Button";

interface InputListsType {
  id: number;
  title: string;
  icon: IconType;
  type: string;
}

const InputLists: InputListsType[] = [
  {
    id: 1,
    title: "Order id or Tracking Number",
    icon: AiOutlineGift,
    type: "text",
  },
  {
    id: 2,
    title: "Shipping email or phone",
    icon: GoPerson,
    type: "text",
  },
];

const Input = () => {
  return (
    <form>
      <div className="">
        {InputLists.map(({ id, title, icon: Icon, type }) => (
          <div
            key={id}
            className="flex items-center gap-2 mb-6 text-[#000000d9]"
          >
            <span>
              <Icon size="20" />
            </span>
            <input
              placeholder={title}
              type={type}
              className="
                w-full h-auto min-h-[48px] p-2 
                text-base text-lightgrey-color
                text-ellipsis
              "
            />
          </div>
        ))}
      </div>
      <Button buttonText="Track Now" />
    </form>
  );
};

export default Input;
