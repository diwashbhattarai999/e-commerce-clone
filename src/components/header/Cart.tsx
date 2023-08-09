"use client";

import { RootState } from "@/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";
import { toggleCart } from "@/Redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cartReducer.isOpen);
  const counter = useSelector(
    (state: RootState) => state.cartCounterReducer.value
  );
  const dispatch = useDispatch();

  return (
    <>
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
        onClick={() => dispatch(toggleCart())}
      >
        <div className="flex items-center relative px-2 ">
          <h5 className="mr-2">Cart</h5>
          <MdOutlineShoppingCart size="20px" />
          <span
            className="
              rounded-full 
              bg-secondary-color 
              w-6 h-6 
              absolute bottom-3 right-4 
              flex items-center justify-center 
              overflow-hidden 
              text-white
            "
          >
            {counter}
          </span>
          <PiCaretDownThin size="18px" />
        </div>
      </div>
      {cart && (
        <>
          <div
            className="
            bg-white
            rotate-45 
            h-4 
            w-4 
            right-6 
            top-9 
            absolute
          "
          ></div>
          <div
            className="
            bg-white
            absolute 
            top-16 
            tablet:top-11
            right-3 
            py-[30px] px-[20px]
            tablet:pt-[40px] tablet:pb-[30px] tablet:px-[32px]
            shadow-md
            w-[242px]
            mobile:w-[370px]
            tablet:w-[520px]
            text-center
          "
          >
            You have no items in your shopping cart.
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
