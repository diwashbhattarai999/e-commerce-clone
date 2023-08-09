"use client";

import { useState } from "react";
import Cart from "../Cart";
import Logo from "./Logo";
import Search from "./Search";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./sidebar/SideBar";

const Middle = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <div className="
      flex justify-between items-center gap-4 
      px-2 
      mt-4 mb-2 tablet:mb-0 laptop:mt-2
    ">
      <div className="flex items-center gap-4">
        <div
          className="laptop:hidden cursor-pointer relative"
          onClick={() => handleSidebar()}
        >
          <GiHamburgerMenu size="20" />

          {isOpenSidebar && <SideBar />}
        </div>
        <Logo />
      </div>
      <Search />
      <div className="hidden laptop:block relative">
        <Cart />
      </div>
    </div>
  );
};

export default Middle;
