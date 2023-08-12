"use client";

import { toggleFeature } from "@/Redux/slices/featureToggleSlice";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

interface HeadingProps {
  title: string;
  name: string;
}

const RegisterHeading: React.FC<HeadingProps> = ({ title, name }) => {
  const dispatch = useDispatch();

  const close = () => {
    if (name === "signin") {
      dispatch(toggleFeature({ featureName: "signIn" }));
    } else if (name === "signup") {
      dispatch(toggleFeature({ featureName: "signUp" }));
    }
  };

  return (
    <div
      className="
        flex items-center justify-between 
        pb-4 
        border-b-2 border-[#d4d4d4]
        text-primary-color 
    "
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <div onClick={close} className="cursor-pointer">
        <IoMdClose size="20" />
      </div>
    </div>
  );
};

export default RegisterHeading;
