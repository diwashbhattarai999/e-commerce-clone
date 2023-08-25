import Link from "next/link";
import { MenuItem } from "./CategoryList";

interface MenuCategoryItemsProps {
  menu: MenuItem[];
}

const MenuCategoryItems: React.FC<MenuCategoryItemsProps> = ({ menu }) => {
  return (
    <>
      {menu.map(({ id, name, link, subMenu }) => (
        <li key={id} className="w-full mb-5 break-inside-avoid-column">
          <Link
            href={link}
            className="
                py-2 mb-4 block 
                border-b-2 border-[#d5d5d5]
                max-w-[95%] min-w-[95%]
            "
          >
            <span className="font-medium text-base text-dark-color">
              {name}
            </span>
          </Link>
          <ul className="pb-1">
            {subMenu.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className="
                    block text-base text-dark-color pb-4 
                    hover:text-primary-color capitalize
                "
                >
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default MenuCategoryItems;
