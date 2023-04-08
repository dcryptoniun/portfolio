import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <div className="font-mono">
      <Navbar />
      <div className="flex rounded-b-3xl justify-center flex-col md:flex-row items-center w-full bg-gradient-to-tr from-emerald-500 to-sky-500">
      <ToastContainer
        className="font-mono font-bold "
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <div className="   h-screen md:w-1/3 w-full m-3 ">
         < Sidebar/>
        </div>
        <div className=" h-screen  md:w-2/3">{children}</div>
      </div>
    </div>
  );
}
