import { MdOutlineShoppingCart } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";

const Cart = () => {
  return (
    <div
      className="
                 
        after:block after:content-[''] after:border-b-[3px] after:h-2 
        after:border-b-primary-color after:scale-x-0 after:transition 
        after:duration-500
        hover:after:scale-x-100
        after:origin-[0%_50%]
        hover:text-primary-color
        cursor-pointer
    "
    >
      <div className="flex items-center relative px-2 ">
        <h5 className="mr-2">Cart</h5>
        <MdOutlineShoppingCart size="20px" />
        <span className="rounded-full bg-secondary-color w-6 h-6 absolute bottom-3 right-4 flex items-center justify-center overflow-hidden text-white">
          0
        </span>
        <PiCaretDownThin size="18px" />
      </div>
    </div>
  );
};

export default Cart;
