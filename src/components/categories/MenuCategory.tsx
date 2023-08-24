import Link from "next/link";
import { MenuItem } from "./CategoryList";

interface subcategoryProps {
  menu: MenuItem[];
  isActive: boolean;
}

const MenuCategory: React.FC<subcategoryProps> = ({ menu, isActive }) => {
  return (
    <div
      className={`
        absolute left-full top-0 
        bg-white w-subcategory-width
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
