"use client";

import { setFeatureFalse } from "@/store/slices/featureToggleSlice";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

interface HeadingProps {
  title: string;
}

const ModalHeading: React.FC<HeadingProps> = ({ title }) => {
  const dispatch = useDispatch();

  const close = () => {
    if (title === "Sign In") {
      dispatch(setFeatureFalse({ featureName: "signIn" }));
    } else if (title === "Sign Up") {
      dispatch(setFeatureFalse({ featureName: "signUp" }));
    } else if (title === "Forgot Password") {
      dispatch(setFeatureFalse({ featureName: "forgot" }));
    }
  };

  return (
    <div
      className="
        flex items-center justify-between 
        pb-2 tablet:pb-4 mb-4
        border-b-2 border-[#d4d4d4]
        text-primary-color 
    "
    >
      <h2 className="text-lg tablet:text-xl font-semibold">{title}</h2>
      <div onClick={close} className="cursor-pointer transition-all">
        <IoMdClose size="20" />
      </div>
    </div>
  );
};

export default ModalHeading;
