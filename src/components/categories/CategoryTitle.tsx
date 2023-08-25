import Link from "next/link";
import { HiMiniChevronRight } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { CategoryItem } from "./CategoryList";
import { List } from "../header/middle/sidebar/SideBarList";

interface CategoryTitleProps {
  category: CategoryItem | List;
  uppercase?: boolean;
  bold?: boolean;
  arrowDown?: boolean;
  arrowRight?: boolean;
  onClick?: () => void;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({
  category,
  uppercase,
  bold,
  arrowDown,
  arrowRight,
  onClick,
}) => {
  return (
    <Link href={category.link}>
      <div
        className={`
          flex items-center justify-between gap-6 
          px-4 py-3
          hover:bg-primary-color hover:text-white
          text-primary-color   
        `}
        onClick={() => onClick && onClick()}
      >
        <h5
          className={`
            text-base
            ${bold ? "font-semibold" : "font-medium"}
            ${uppercase && "uppercase"}
          `}
        >
          {category.name}
        </h5>

        {arrowDown && <BsChevronDown size="16px" />}
        {arrowRight && <HiMiniChevronRight size="18px" />}
      </div>
    </Link>
  );
};

export default CategoryTitle;
