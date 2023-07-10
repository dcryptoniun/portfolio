import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div className="font-mono">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-2 pt-10 rounded-b-3xl lg:flex-row">
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
        <div className="z-10 w-full h-screen lg:w-1/3">
          <Sidebar />
        </div>
        <div className="h-screen gap-2 lg:w-2/3">{children}</div>
      </div>
    </div>
  );
}
