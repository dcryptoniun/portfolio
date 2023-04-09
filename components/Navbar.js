import Image from "next/image";
import Link from "next/link";
import React from "react";
import Links from "./Links";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <div className="navbar fixed z-20 bg-transperent backdrop-blur shadow border-b text-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className=" hover:text-accent" href="/">
                Home
              </Link>
            </li>
            <li><Link className=" hover:text-accent" href="/#services">
            Services
          </Link></li>
            <li>
              <Link className=" hover:text-accent" href="/#contact">
                Contact
              </Link>
            </li>
            {/*  --with submenu--
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
          </ul>
        </div>
        <Link href="/" className="btn">
          <Image src="/Images/mlogo.png" alt="Logo" width={25} height={25} />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className=" hover:text-accent" href="/">
              Home
            </Link>
          </li>
          <li><Link className=" hover:text-accent" href="/#services">
            Services
          </Link></li>
          <li>
            <Link className=" hover:text-accent" href="/#contact">
              Contact
            </Link>
          </li>
          {/* <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */}
        </ul>
      </div>
      <div className="navbar-end gap-2 pr-2">
        <Links />
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
