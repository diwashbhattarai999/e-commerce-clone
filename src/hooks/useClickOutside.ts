import { RefObject, useEffect } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  loading: boolean = false
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && !loading) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, loading]);
};

export default useClickOutside;
