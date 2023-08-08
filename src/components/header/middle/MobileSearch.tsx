"use client";

import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { toggleSearch } from "@/Redux/slices/searchSlice";

const MobileSearch = () => {
  const isSearchOpen = useSelector(
    (state: RootState) => state.searchReducer.isOpen
  );
  const dispatch = useDispatch();

  return (
    <div className="laptop:hidden flex flex-col items-end">
      <div onClick={() => dispatch(toggleSearch())}>
        <BiSearch size="20px" color="#613E98" className="cursor-pointer mr-4" />
      </div>
      <div
        className={`
            ${isSearchOpen ? "flex" : "hidden"}
            absolute top-16  
            bg-white
            z-50
            triangle
            w-1/2
            rounded-full
        `}
      >
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileSearch;
