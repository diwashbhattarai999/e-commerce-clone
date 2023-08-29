"use client";

import { useEffect, useRef, useState } from "react";

import ModalHeading from "./ModalHeading";
import { useDispatch } from "react-redux";
import {
  FeatureToggleState,
  setFeatureFalse,
} from "@/Redux/slices/featureToggleSlice";
import useClickOutside from "@/hooks/useClickOutside";

interface ModalProps {
  isOpen: any;
  title: string;
  body: any;
  footer: any;
  //   disabled: any;
  //   onSubmit: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, body, footer }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const modalBoxRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsTransitioning(isOpen);
  }, [isOpen]);

  let featureName: keyof FeatureToggleState = "signIn";
  if (title === "Sign Up") featureName = "signUp";

  useClickOutside(modalBoxRef, () => {
    if (isOpen) dispatch(setFeatureFalse({ featureName }));
  });

  //   const handleSubmit = useCallback(() => {
  //     if (disabled) {
  //       return;
  //     }

  //     onSubmit();
  //   }, [disabled, onSubmit]);

  return (
    <>
      <div
        className={`
            w-full min-h-screen h-full
            flex justify-center
            fixed -top-0 -left-0
            bg-black/[0.6]
            z-50 overflow-x-hidden overflow-y-auto inset-0
            ${isOpen ? "" : "hidden"}
          `}
      >
        <div
          className={`
            bg-white text-black
            w-full max-w-[600px]
            my-auto h-fit tablet:my-14 mx-auto       
            transition-all duration-300
            ${
              isTransitioning
                ? "translate-y-0 opacity-100"
                : "translate-y-[-70px] opacity-0 "
            }
          `}
        >
          <div className="p-5 tablet:p-8" ref={modalBoxRef}>
            {/* Header */}
            <ModalHeading title={title} />
            {/* Body */}
            {body}
            {/* Footer */}
            {footer}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
