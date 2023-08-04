import MenuItem from "../MenuItem";
import { BsTag } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";

const Bottom = () => {
  return (
    <div className="flex items-center w-full justify-center text-sm border-b-2 border-[#D5D5D5] pb-2">
      <MenuItem Icon={BsTag} label="Brands" />
      <MenuItem Icon={BiStoreAlt} label="Stores" />
      <MenuItem Icon={MdOutlineCategory} IconRight={PiCaretDownThin} label="Categories" />
      <MenuItem border_right={true} label="Sign In" />
      <MenuItem label="Sign Up" />
    </div>
  );
};

export default Bottom;
