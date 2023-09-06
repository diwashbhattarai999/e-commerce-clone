"use client";

import categoryData, {
  CategoryItem,
} from "@/components/categories/CategoryList";
import CategoryTitle from "@/components/categories/CategoryTitle";
import { AccountList, List, SettingsList } from "./SideBarList";
import { useDispatch } from "react-redux";
import { toggleFeature } from "@/store/slices/featureToggleSlice";
import MenuCategoryItems from "@/components/categories/MenuCategoryItems";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SectionsListProps {
  title: string;
}

const SectionsList: React.FC<SectionsListProps> = ({ title }) => {
  const [activeState, setActiveState] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAccountClick = (category: List) => {
    dispatch(toggleFeature({ featureName: "sidebar" }));

    if (category.name === "Sign In") {
      dispatch(toggleFeature({ featureName: "signIn" }));
    } else if (category.name === "Sign Up") {
      dispatch(toggleFeature({ featureName: "signUp" }));
    }
  };

  const handleMenuClick = (category: CategoryItem) => {
    if (activeState === category.id) {
      setActiveState(null);
    } else setActiveState(category.id);
  };

  const MenuContent = (
    <>
      {categoryData.map((category) => {
        const arrow = activeState === category.id ? "arrowUp" : "arrowDown";

        const handleNavigate = () => {
          router.push(`/categories/${category.link}`);
          dispatch(toggleFeature({ featureName: "categories" }));
          dispatch(toggleFeature({ featureName: "sidebar" }));
        };

        return (
          <div key={category.id}>
            <CategoryTitle
              category={category}
              uppercase
              arrow={arrow}
              onTitleClick={handleNavigate}
              onIconClick={() => handleMenuClick(category)}
            />

            <ul
              className={`
                ${activeState === category.id ? "" : "hidden"} 
                px-4
              `}
            >
              <MenuCategoryItems category={category} leftArrow small />
            </ul>
          </div>
        );
      })}
    </>
  );

  const AccountContent = (
    <>
      {AccountList.map((category) => (
        <CategoryTitle
          key={category.id}
          category={category}
          uppercase
          onClick={() => handleAccountClick(category)}
        />
      ))}
    </>
  );

  const SettingContent = (
    <>
      {SettingsList.map((category) => (
        <CategoryTitle
          key={category.id}
          category={category}
          uppercase
          arrow="arrowRight"
        />
      ))}
    </>
  );

  return (
    <>
      {title === "Menu" && MenuContent}
      {title === "Account" && AccountContent}
      {title === "Settings" && SettingContent}
    </>
  );
};

export default SectionsList;
