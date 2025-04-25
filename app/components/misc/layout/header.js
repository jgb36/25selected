'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import twentyFiveLogo from '../../../../public/25logos/IG.PNG';
import styles from "./header.css";
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
              "fixed top-0 w-full  z-10 bg-white-500 transition-all height-100 " +
              (scrollActive ? " shadow-md pt-0" : " pt-4")
            } id="top"
          >

        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <twentyFiveLogo className="h-12 w-auto" /> */}
            
            <Link href = '/'>
            <Image
            className = "headerPic"
            src="/25Logos/IG.png"
            alt="25 Select Logo"
            height={50}
            width={50}
        />
        </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {/* <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-green-500 animation-active "
                  : " text-black-500 hover:text-green-500 a")
              }
            >
              About Us
            </LinkScroll> */}

          <li>
            <Link href = "team" id='navLink' className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
              <span> About Us</span>
            </Link>
          </li>
          <li>
            <Link href = "dashboard/profile" id='navLink' className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
          <Link href = "/mission" id='navLink' className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
              <span> Our Mission</span>
            </Link>
          </li>
            </ul>
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/"
               className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-green-500 transition-all">
                 Sign In
            </Link>
            <Link href="/"
               className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-green-500 transition-all">
                 Sign Up
            </Link>
          </div>
        </nav>
            
          </header>
          {/* Mobile Navigation */}
    
        </>
      );
    };
    
    export default Header;
    