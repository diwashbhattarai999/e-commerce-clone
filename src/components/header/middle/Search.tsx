"use client";

import SearchBar from "./SearchBar";
import MobileSearch from "./MobileSearch";

const Search = () => {
  return (
    <>
      {/* laptop */}
      <div className="w-2/3 hidden laptop:block">
        <SearchBar />
      </div>

      {/* Tablet */}
      <MobileSearch />
    </>
  );
};

export default Search;
