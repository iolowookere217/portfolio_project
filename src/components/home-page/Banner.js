import React from "react";
import BannerIcon from "./BannerIcon";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto framer-animation">
      <div className=" text-white min-h-screen  flex flex-col justify-center items-start py-16 md:py-36">
        <div className="grid grid-cols-2 md:flex items-center md:justify-between w-full">
          <div className="flex py-8 items-center justify-between gap-4">
            <Avatar className="flex-shrink-0 size-32">
              <AvatarImage
                src={"/assets/img/isaac.png"}
                alt={"profile picture"}
              />
              <AvatarFallback>{"CN"}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-wrap md:space-x-6 gap-4 text-gray-400 text-sm font-medium">
            <a
              href="https://github.com/iolowookere217"
              className="hover:text-white text-lg   ">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-olowookere"
              className="hover:text-white text-lg  ">
              Linkedin
            </a>
            <a
              href="mailto:olowookere.isaaco@gmail.com"
              className="hover:text-white text-lg ">
              Email
            </a>
            <a
              href="https://x.com/isaaco_olowo"
              className="hover:text-white text-lg ">
              X
            </a>
          </div>
        </div>
        {/* Introductory Text */}
        <p className="text-[#C8C8CF]  font-semibold mb-2 text-xl pt-8">
          Hello! I&apos;m Isaac Olowookere.
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5] mb-16">
          A Frontend Software Engineer <br />
          with basic understanding of Backend and Devops <br />
        </h1>

        {/* logo animation */}
        <BannerIcon></BannerIcon>
      </div>
    </div>
  );
};

export default Banner;
