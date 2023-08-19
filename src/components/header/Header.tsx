"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Bottom from "./bottom/Bottom";
import Middle from "./middle/Middle";
import Top from "./top/Top";

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  //On scroll --------------------
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY <= 50) {
          setIsScroll(false);
        } else {
          setIsScroll(true);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // CleanUp Function
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isScroll]);

  return (
    <div
      className="
        pt-2 bg-content-background-color fixed w-full top-0 z-50
        transition-all duration-300 ease-in-out
      "
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
