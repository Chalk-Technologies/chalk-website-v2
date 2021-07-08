import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";
import LanguageWrapper from "../utils/LanguageWrapper";
import useLanguage from "../hooks/useLanguage";

const Layout = ({ children }) => {
  const { setLang, lang } = useLanguage();

  const changeLanguage = (lang) => {
    setLang(lang);
  };

  return (
    <LanguageWrapper>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Seo />
        <Navbar />
        <main className="relative flex flex-col flex-grow bg-chalk-dark-gray">
          {children}
        </main>
        <Footer />
      </div>
      <div className="fixed z-50 bg-white bottom-4 right-4">
        <div className="flex font-heading">
          <button
            className={`px-2 py-2 hover:bg-chalk-orange ${
              lang === "fr"
                ? "text-white bg-chalk-dark-gray border-2 border-chalk-orange"
                : ""
            } `}
            onClick={() => {
              changeLanguage("fr");
            }}
          >
            🇫🇷 FR
          </button>
          <button
            className={`px-2 py-2 hover:bg-chalk-orange ${
              lang === "en"
                ? "text-white bg-chalk-dark-gray border-2 border-chalk-orange"
                : ""
            } `}
            onClick={() => changeLanguage("en")}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    </LanguageWrapper>
  );
};

export default Layout;
