import { HiMiniChevronRight } from "react-icons/hi2";
import { MenuItem } from "./CategoryList";
import Link from "next/link";
import SubCategory from "./SubCategory";
import { useState } from "react";

interface CategoryProps {
  title: string;
  link: string;
  menu: MenuItem[];
}

const Category: React.FC<CategoryProps> = ({ title, link, menu }) => {
  const [isActive, setIsActive] = useState(true);

  const handleCategoryClick = () => {
    setIsActive(!isActive);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <li
      className="
        border-t-2 w-full
        hover:bg-primary-color hover:text-white
        cursor-pointer
      "
      onClick={handleCategoryClick}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Link href={link}>
        <div
          className="
          flex items-center justify-between gap-6 
          px-4 py-2
        "
        >
          <h5 className="font-semibold text-base">{title}</h5>
          <HiMiniChevronRight size="18px" />
        </div>
      </Link>
      {isActive && <SubCategory menu={menu} />}
    </li>
  );
};

export default Category;
