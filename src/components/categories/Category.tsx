import { HiMiniChevronRight } from "react-icons/hi2";
import { CategoryItem } from "./CategoryList";
import Link from "next/link";
import MenuCategory from "./MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { setActiveStates } from "@/Redux/slices/categorySlice";

interface CategoryProps {
  category: CategoryItem;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const dispatch = useDispatch();
  const activeStates = useSelector(
    (state: RootState) => state.categoryReducer.activeStates
  );

  const hanldeMouseEnter = () => {
    dispatch(setActiveStates(category.id));
  };

  const handleMouseLeave = () => {
    dispatch(setActiveStates(1));
  };

  return (
    <li
      className="
        border-t-2 w-full cursor-pointer
        hover:bg-primary-color hover:text-white
      "
      onMouseEnter={hanldeMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={category.link} className=" ">
        <div
          className="
          flex items-center justify-between gap-6 
          px-4 py-2
        "
        >
          <h5 className="font-semibold text-base">{category.name}</h5>
          <HiMiniChevronRight size="18px" />
        </div>
      </Link>
      <MenuCategory
        menu={category.menu}
        isActive={activeStates === category.id}
      />
    </li>
  );
};

export default Category;
