import { CategoryItem } from "./CategoryList";
import MenuCategory from "./MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { setActiveStates } from "@/Redux/slices/categorySlice";
import CategoryTitle from "./CategoryTitle";

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
      className="border-t-2 w-full cursor-pointer"
      onMouseEnter={hanldeMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CategoryTitle category={category} bold/>
      <MenuCategory
        menu={category.menu}
        isActive={activeStates === category.id}
      />
    </li>
  );
};

export default Category;
