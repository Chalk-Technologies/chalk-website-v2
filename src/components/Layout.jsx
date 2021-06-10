import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Seo />
      <Navbar />
      <main className="relative flex flex-col flex-grow bg-chalk-dark-gray">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
