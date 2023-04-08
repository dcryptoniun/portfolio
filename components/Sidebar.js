import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import Photo from "../public/Images/photo.jpg";


function Sidebar() {
  return (
    <div className=" flex md:fixed  md:justify-start justify-center items-center pt-24 md:pt-0 md:w-fit  h-screen m-2">
      <div>
        
          <div className=" shadow-2xl border-b-4 border-t-2 border-primary p-16 rounded-xl backdrop-blur text-center space-y-2">
            <Image
              className="rounded-full w-[200px] h-[200px] shadow-2xl border"
              src={Photo}
              alt="photo"
            />
            <h1 className=" font-bold text-2xl">Mayank Meena</h1>
            <p className="font-bold text-xl">Freelancer</p>
            <Link
              className="text-red-600 font-bold text-xl hover:text-red-400"
              href="https://www.fiverr.com/mayankmeena"
              target="_blank"
              rel="noopener noreferrer"
            >
              hire me!
            </Link>
            <Links />
          </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
