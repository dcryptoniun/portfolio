import Image from "next/image";
import Link from "next/link";
import React from "react";
import fiverr from "../public/Images/fi.svg";
import github from "../public/Images/github.svg";


function Links() {
  return (
    <div className="flex p-2 justify-center items-center  space-x-5 ">
      <Link
        className=" hover:bg-primary rounded-full bg-white tooltip tooltip-bottom "  data-tip="fiverr"
        href="https://www.fiverr.com/mayankmeena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="w-[25px] h-[25px]" src={fiverr} alt="fiverr link" />
      </Link>
      <Link
        className=" hover:text-primary rounded-full text-blue-500 tooltip tooltip-bottom "  data-tip="twitter"
        href="https://twitter.com/0xmynk"
        target="_blank"
        rel="noopener noreferrer"
      >
       

        <svg
          
          fill="currentColor"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          
          width="25"
          height="25"
        >
          <path
            id="Logo_00000038394049246713568260000012923108920998390947_"
            d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"
          />
        </svg>
      </Link>
      <Link
        className=" bg-slate-300 rounded-full  hover:bg-primary tooltip tooltip-bottom "  data-tip="github"
        href="https://github.com/dcryptoniun?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="   w-[25px] h-[25px]"
          src={github}
          alt="github link"
        />
      
      </Link>
    </div>
  );
}

export default Links;
