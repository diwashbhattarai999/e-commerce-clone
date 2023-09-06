import { CategoryItem } from "./CategoryList";
import MenuCategory from "./MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveStates } from "@/store/slices/categorySlice";
import CategoryTitle from "./CategoryTitle";
import { useRouter } from "next/navigation";
import { setFeatureFalse } from "@/store/slices/featureToggleSlice";

interface CategoryProps {
  category: CategoryItem;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const router = useRouter();
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

  const handleNavigate = () => {
    router.push(`/categories/${category.link}`);
    dispatch(setFeatureFalse({ featureName: "categories" }));
    dispatch(setFeatureFalse({ featureName: "sidebar" }));
  };

  return (
    <li
      className="border-t-2 w-full cursor-pointer"
      onMouseEnter={hanldeMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CategoryTitle
        category={category}
        bold
        arrow="arrowRight"
        onClick={handleNavigate}
      />
      <MenuCategory
        category={category}
        isActive={activeStates === category.id}
      />
    </li>
  );
};

export default Category;
