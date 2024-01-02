import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="
        flex items-center 
        border-[3px] border-primary-color rounded-full  
        px-4 py-3 
        w-full
    ">
      <BiSearch size="20px" color="#613E98" className="cursor-pointer" />
      <input
        type="text"
        placeholder="Search entire store here..."
        className="ml-2 w-full text-ellipsis"
      />
    </div>
  );
};

export default SearchBar;
