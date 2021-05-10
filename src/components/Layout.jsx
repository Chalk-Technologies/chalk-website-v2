import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-chalk-dark-gray">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
