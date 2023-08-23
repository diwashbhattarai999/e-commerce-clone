import { MenuItem } from "./CategoryList";

interface subcategoryProps {
  menu: MenuItem[];
  isActive: boolean;
}

const SubCategory: React.FC<subcategoryProps> = ({ menu, isActive }) => {
  return (
    <div
      className={`
        absolute left-full top-0 
        bg-white w-subcategory-width
        px-5 pt-5 border-l-2 border-accent-color
        overflow-hidden overflow-y-auto
        text-primary-color
        ${isActive ? "" : "hidden"}
    `}
    >
      <div className="max-w-[970px] ml-0 px-[10px]">
        <div className="flex -mx-[10px]">
          <ul>
            {menu.map(({ id, name, link, subMenu }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
