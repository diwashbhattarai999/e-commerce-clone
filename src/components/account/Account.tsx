"use client";

import { signOut } from "next-auth/react";

const Account = () => {
  return (
    <ul
      className="
        absolute left-[60%] top-full right-0 -translate-x-1/2
        mt-[1px] p-5 min-w-[505px] h-auto
        bg-white shadow-md
        flex flex-col items-center
    "
    >
      <li className="mb-2 p-2 w-full border-b-2 border-[#d5d5d5] cursor-pointer">
        My Account
      </li>
      <li className="mb-2 p-2 w-full border-b-2 border-[#d5d5d5] cursor-pointer">
        My Wishlist
      </li>
      <li
        onClick={() => signOut()}
        className="p-2 w-full border-b-2 border-[#d5d5d5] cursor-pointer"
      >
        Sign Out
      </li>
    </ul>
  );
};

export default Account;
