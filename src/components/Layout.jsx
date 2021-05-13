import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-chalk-dark-gray flex-grow relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
