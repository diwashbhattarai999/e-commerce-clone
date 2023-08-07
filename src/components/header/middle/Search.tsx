"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* laptop */}
      <div className="w-2/3 hidden laptop:block">
        <SearchBar />
      </div>

      {/* Tablet */}
      <div className="laptop:hidden flex flex-col items-end">
        <div onClick={() => handleSearch()}>
          <BiSearch
            size="20px"
            color="#613E98"
            className="cursor-pointer mr-4"
          />
        </div>
        <div
          className={`
            ${isSearchOpen ? "flex" : "hidden"}
            absolute top-16  
            bg-white
            z-50
            triangle
            w-1/2
        `}
        >
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Search;
