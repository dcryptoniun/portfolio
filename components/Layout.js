import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <div className="page-bg" />
      <div className="grain" />
      <main className="site-main">{children}</main>
      <div className="container-wrap">
        <Footer />
      </div>
    </div>
  );
}
