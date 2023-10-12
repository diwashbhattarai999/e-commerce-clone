"use client";

import { useEffect, useState } from "react";
import Container from "../reusable/Container";
import Bottom from "./bottom/Bottom";
import Middle from "./middle/Middle";
import Top from "./top/Top";

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  //On scroll --------------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        pt-2 bg-content-background-color w-full top-0 z-30
        transition-all duration-300 ease-in-out
        fixed  
      `}
    >
      <Container>
        <div className="flex flex-col gap-4">
          {isScroll ? (
            <Bottom isScroll={isScroll} />
          ) : (
            <>
              <Top />
              <Middle />
              <Bottom />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
