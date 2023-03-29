import Image from "next/image";
import Link from "next/link";
import React from "react";
import fiverr from "../public/Images/fiverr.png";
import twitter from "../public/Images/twitter.svg";
import wgithub from "../public/Images/github-white.png";
import bgithub from "../public/Images/github.svg";

function Links() {
  return (
    <div className="flex p-2 space-x-3">
      <Link
        className=" shadow-md hover:outline rounded-full text-green-300"
        href="https://www.fiverr.com/mayankmeena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="w-[25px] h-[25px]" src={fiverr} alt="fiverr link" />
      </Link>
      <Link
        className=" shadow-md hover:outline rounded-full text-blue-300  hover:bg-blue-300"
        href="https://twitter.com/0xmynk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="w-[25px] h-[25px]" src={twitter} alt="twitter link" />
      </Link>
      <Link
        className=" shadow-md hover:outline rounded-full text-blue-300 hover:bg-blue-300"
        href="https://github.com/dcryptoniun?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="hidden dark:block w-[25px] h-[25px]"
          src={wgithub}
          alt="github link"
        />
        <Image
          className="dark:hidden w-[25px] h-[25px]"
          src={bgithub}
          alt="github link"
        />
      </Link>
    </div>
  );
}

export default Links;
