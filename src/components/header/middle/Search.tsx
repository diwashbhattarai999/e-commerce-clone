import {BiSearch} from "react-icons/bi"

const Search = () => {
    return (
        <div className="border-2 border-primary-color rounded-full w-2/3 flex items-center px-4 py-3 ">
            <BiSearch size="20px" color="#613E98" className="cursor-pointer"/>
            <input type="text" placeholder="Search entire store here..." className="ml-2 w-full" />
        </div>
    );
}

export default Search;