import { useEffect } from "react";

const useBodyOverflow = (overflow: "hidden" | "auto") => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = overflow;

    // Clean up: Reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [overflow]);
};

export default useBodyOverflow;
