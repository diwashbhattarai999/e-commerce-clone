"use client";

import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiCaretDownThin } from "react-icons/pi";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/store/slices/featureToggleSlice";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const cart = useSelector(selectToggleFeatureState("cart"));
  const counter = useSelector(
    (state: RootState) => state.cartCounterReducer.value
  );
  const dispatch = useDispatch();

  const carthandler = () => {
    dispatch(toggleFeature({ featureName: "cart" }));
  };

  const handleOpenCartPage = () => {
    router.push("/cart");
    dispatch(toggleFeature({ featureName: "cart" }));
  };

  return (
    <>
      <div
        className="          
          after:block after:content-[''] after:border-b-[3px] after:h-2 after:border-b-primary-color after:scale-x-0 after:transition after:duration-500 after:origin-[0%_50%] 
          hover:after:scale-x-100 hover:text-primary-color cursor-pointer
        "
        onClick={carthandler}
      >
        <div className="flex items-center relative px-2 ">
          <h5 className="mr-2">Cart</h5>
          <MdOutlineShoppingCart size="20px" />
          <span className="rounded-full bg-secondary-color w-6 h-6 absolute bottom-3 right-4 flex items-center justify-center overflow-hidden text-white">
            {counter}
          </span>
          <PiCaretDownThin size="18px" />
        </div>
      </div>
      {cart && (
        <>
          <div className="bg-white shadow-xl rotate-45 h-4 w-4 right-6 top-9 absolute"></div>
          <div
            className="
            bg-white absolute top-16 tablet:top-11 right-3 py-[60px] px-[20px] tablet:pt-[100px] tablet:pb-[90px] tablet:px-[32px]
            shadow-md w-[242px] mobile:w-[370px] tablet:w-[520px] text-center z-40 border border-gray-100
          "
          >
            You have no items in your shopping cart.
            <div
              className="
                right-8 bottom-3 absolute text-text-primary-color border-b-2 text-lg cursor-pointer transition-all duration-400
                hover:border-primary-color hover:text-secondary-color 
                "
              onClick={handleOpenCartPage}
            >
              View all Products
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
