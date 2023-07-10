import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";

function Sidebar() {
  return (
    <div className="flex items-center justify-center h-screen pt-24 m-2 lg:fixed lg:justify-start md:pt-0 lg:w-fit">
      <div>
        <div className="relative p-16 space-y-2 text-center border-t-2 border-b-4 shadow-2xl border-primary rounded-xl backdrop-blur overflow-clip hover:scale-105">
          <div className="absolute rounded-full animate-pulse bg-secondary/10 w-52 h-52 -top-32 -right-32 blur-md "></div>
          <div className="absolute rounded-full bg-accent/10 w-52 h-52 -bottom-32 -left-32 blur-md animate-pulse"></div>
          <Image
            className="rounded-full w-[200px] h-[200px] shadow-2xl border"
            src="/Images/photo.jpg"
            width={200}
            height={200}
            alt="photo"
          />
          <h1 className="text-2xl font-bold ">Mayank Meena</h1>
          <p className="text-xl font-bold">developer</p>
          <div className="grid">
            <Link
              className="text-xl font-bold text-red-600 hover:text-red-400"
              href="https://www.fiverr.com/mayankmeena"
              target="_blank"
              rel="noopener noreferrer"
            >
              hire me!
            </Link>
            <Link
              className="text-xl font-bold text-red-600 hover:text-red-400"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
