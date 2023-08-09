"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Bottom from "./bottom/Bottom";
import Middle from "./middle/Middle";
import Top from "./top/Top";

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);


  //On scroll --------------------
  useEffect(() => {
    const handleScroll = () => {
      if (
        typeof window !== "undefined" &&
        headerRef.current &&
        bottomRef.current
      ) {
        if (window.scrollY === 0) {
          setIsScroll(false);
          headerRef.current.style.display = "block";
          bottomRef.current.style.paddingTop = "0";
        } else {
          setIsScroll(true);
          headerRef.current.style.display = "none";
          bottomRef.current.style.paddingTop = "1rem";
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
    <div className="pt-2 bg-content-background-color sticky top-0">
      <Container>
        <div className="flex flex-col gap-4">
          <div ref={headerRef}>
            <Top />
            <Middle />
          </div>
          <div ref={bottomRef}>
            <Bottom isScroll={isScroll} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
