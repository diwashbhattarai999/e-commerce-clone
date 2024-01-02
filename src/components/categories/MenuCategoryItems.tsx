import Link from "next/link";
import { CategoryItem } from "./CategoryList";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFeatureFalse } from "@/store/slices/featureToggleSlice";

interface MenuCategoryItemsProps {
  category: CategoryItem;
  leftArrow?: boolean;
  small?: boolean;
}

const MenuCategoryItems: React.FC<MenuCategoryItemsProps> = ({
  category,
  leftArrow,
  small,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNavigate = (link: string) => {
    router.push(`/categories/${category.link}/${link}`);
    dispatch(setFeatureFalse({ featureName: "categories" }));
    dispatch(setFeatureFalse({ featureName: "sidebar" }));
  };

  return (
    <>
      {category?.menu.map(({ id, name, link, subMenu }) => (
        <li key={id} className="w-full mb-5 break-inside-avoid-column">
          <div
            onClick={() => handleNavigate(link)}
            className={`
              py-2 mb-4  
              border-b-2 border-[#d5d5d5]
              max-w-[95%] min-w-[95%]
              flex items-center gap-1
              cursor-pointer
              ${
                small
                  ? "font-light text-[#777]"
                  : "font-medium text-base text-dark-color"
              }
              ${small && "hover:text-primary-color"}
            `}
          >
            {leftArrow && <BsChevronRight size="12" />}
            <span>{name}</span>
          </div>
          <ul className="pb-1">
            {subMenu.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className={`
                    pb-4 
                    hover:text-primary-color capitalize
                    flex items-center 
                    ${
                      small
                        ? "font-light text-[#777] text-sm ml-4"
                        : "text-base text-[#4c4c4c]"
                    }
                  `}
                >
                  {leftArrow && <BsChevronRight size="10" />}
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
