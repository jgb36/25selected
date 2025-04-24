import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScrollActive(window.scrollY > 20);
      });
    }, []);
    return (
        <>
          <header
            className={
              "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
              (scrollActive ? " shadow-md pt-0" : " pt-4")
            }
          >
            
          </header>
          {/* Mobile Navigation */}
    
        </>
      );
    };
    
    export default Header;
    