import Link from "next/link";
import { BsChevronDown, BsChevronUp, BsChevronRight } from "react-icons/bs";
import { CategoryItem } from "./CategoryList";
import { List } from "../header/middle/sidebar/SideBarList";

interface CategoryTitleProps {
  category: CategoryItem | List;
  uppercase?: boolean;
  bold?: boolean;
  arrow?: string;
  onClick?: () => void;
  onTitleClick?: () => void;
  onIconClick?: () => void;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({
  category,
  uppercase,
  bold,
  arrow,
  onClick,
  onTitleClick,
  onIconClick,
}) => {
  return (
    // <Link href={category.link}>
    <div
      className={`
          flex items-center justify-between gap-6 
          px-4 py-3
          hover:bg-primary-color hover:text-white
          text-primary-color  
          cursor-pointer 
        `}
      onClick={() => onClick && onClick()}
    >
      <h5
        className={`
            text-base
            ${bold ? "font-semibold" : "font-medium"}
            ${uppercase && "uppercase"}
        `}
        onClick={() => onTitleClick && onTitleClick()}
      >
        {category.name}
      </h5>

      {arrow === "arrowDown" && (
        <BsChevronDown
          size="18px"
          onClick={() => onIconClick && onIconClick()}
        />
      )}
      {arrow === "arrowRight" && (
        <BsChevronRight
          size="18px"
          onClick={() => onIconClick && onIconClick()}
        />
      )}
      {arrow === "arrowUp" && (
        <BsChevronUp size="18px" onClick={() => onIconClick && onIconClick()} />
      )}
    </div>
    // </Link>
  );
};

export default CategoryTitle;
