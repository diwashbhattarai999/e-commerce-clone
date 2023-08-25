"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Sections from "./Sections";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/Redux/slices/featureToggleSlice";
import initialSections, { AccountList, SettingsList } from "./SideBarList";
import CategoryTitle from "@/components/categories/CategoryTitle";
import categoryData from "@/components/categories/CategoryList";
import Category from "@/components/categories/Category";

const SideBar = () => {
  const [sections, setSections] = useState(initialSections);

  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const isOpenSidebar = useSelector(selectToggleFeatureState("sidebar"));

  useClickOutside(sidebarRef, () => {
    if (isOpenSidebar) {
      dispatch(toggleFeature({ featureName: "sidebar" }));
    }
  });

  const handleSectionClick = (index: number) => {
    const updatedSections = sections.map((section, i) => {
      return { ...section, active: i === index };
    });
    setSections(updatedSections);
  };

  return (
    <div
      className={`
        fixed left-0 top-0 z-40 
        h-full w-sidebar-width mobile:w-[380px]
        bg-base-background-color shadow-2xl
        ${isOpenSidebar ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-500
        laptop:hidden 
      `}
      ref={sidebarRef}
    >
      <div className="flex relative">
        {sections.map(({ id, title, active, Icon }, index) => (
          <div key={id} className="flex flex-col w-full">
            <Sections
              title={title}
              Icon={Icon}
              active={active}
              onClick={() => handleSectionClick(index)}
            />
            {active && (
              <div
                className="
                absolute w-full top-[4.28rem] left-0
              "
              >
                {title === "Menu" && (
                  <>
                    {categoryData.map((category) => (
                      <CategoryTitle
                        key={category.id}
                        category={category}
                        uppercase
                        arrowDown
                      />
                    ))}
                  </>
                )}
                {title === "Account" && (
                  <>
                    {AccountList.map((category) => (
                      <CategoryTitle
                        key={category.id}
                        category={category}
                        uppercase
                        arrowDown
                      />
                    ))}
                  </>
                )}
                {title === "Settings" && (
                  <>
                    {SettingsList.map((category) => (
                      <CategoryTitle
                        key={category.id}
                        category={category}
                        uppercase
                        arrowDown
                      />
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
