import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative flex flex-col flex-grow bg-chalk-dark-gray">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
