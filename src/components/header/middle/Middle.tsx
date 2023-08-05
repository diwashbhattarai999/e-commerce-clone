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
    <div className="flex justify-between items-center px-2 gap-4 mt-4 laptop:mt-1">
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
      <div className="hidden laptop:block">
        <Cart />
      </div>
    </div>
  );
};

export default Middle;
