"use client";

import Image from "next/image";
import logo from "../../../../public/logo.svg";
import mobileLogo from "../../../../public/mobile-logo.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="hidden tablet:block cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="tablet:hidden cursor-pointer">
        <Link href="/">
          <Image src={mobileLogo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
