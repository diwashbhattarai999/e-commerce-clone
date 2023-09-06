"use client";

import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/store/slices/featureToggleSlice";

const MobileSearch = () => {
  const isSearchOpen = useSelector(selectToggleFeatureState("search"));
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(toggleFeature({ featureName: "search" }));
  };

  return (
    <div className="laptop:hidden flex flex-col items-end">
      <div onClick={handleSearch}>
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
