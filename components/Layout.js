import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div className="font-mono">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full rounded-b-3xl md:flex-row bg-gradient-to-tr from-fuchsia-800 to-indigo-600">
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
        <div className="w-full h-screen md:w-1/3">
          <Sidebar />
        </div>
        <div className="h-screen md:w-2/3">{children}</div>
      </div>
    </div>
  );
}
