import { CategoryItem } from "./CategoryList";
import MenuCategoryItems from "./MenuCategoryItems";

interface subcategoryProps {
  category: CategoryItem;
  isActive: boolean;
}

const MenuCategory: React.FC<subcategoryProps> = ({ category, isActive }) => {
  return (
    <div
      className={`
        absolute left-full top-0 
        bg-white
        w-subcategory-width
        px-5 pt-5 border-l-2 border-accent-color
        overflow-hidden overflow-y-auto
        text-primary-color
        h-full
        ${isActive ? "" : "hidden"}
    `}
    >
      <div className="max-w-[970px] ml-0 px-[10px] h-full">
        <div className="flex -mx-[10px]">
          <ul className="columns-4 gap-4 max-h-[800px]">
            <MenuCategoryItems category={category} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
