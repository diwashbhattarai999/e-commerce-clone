"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Sections from "./Sections";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleFeatureState,
  toggleFeature,
} from "@/store/slices/featureToggleSlice";
import initialSections from "./SideBarList";

import SectionsList from "./SectionsList";

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
                absolute top-[4.28rem] left-0
                w-full overflow-y-auto
                max-h-[93vh]
                pb-8 pt-[1px]
              "
              >
                <SectionsList title={title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
