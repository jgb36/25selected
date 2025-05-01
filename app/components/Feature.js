import Image from "next/image";
import React, { useMemo } from "react";
//import { motion } from "framer-motion";
//import getScrollAnimation from "../utils/getScrollAnimation";
//import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const features = [
    "Learn about upcoming events near you.",
    "Reach out to potential coaches",
    "Engage with other Rugby players",
    "Learn what is needed to elevate your game to the next level",
  ];

const Feature = () => {
return(
<>
<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <div className="h-full w-full p-4">
           <Image
              src="/25logos/homepage.png"
              alt="Person showing what can be learned"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            /> 
          </div>
          <div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We are your new Rugby home.
            </h3>
            <p className="my-2 text-black-500">
              You can explore all of the benefits of
              a <strong>XVSelect</strong> Membership
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <li
                  className="relative circle-check custom-list"
                  key={feature}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <p className="my-2 text-black-500">
              Learn more about the impact it has on our community by clicking{" "}
              {/* <Link href="/community">
                <a style={{ color: "green" }}>here</a>
              </Link> */}
              .
            </p>
          </div>
      </div>
</>
);
};

export default Feature;
