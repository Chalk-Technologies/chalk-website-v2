import { useState, useEffect } from "react";
import { i18n } from "@lingui/core";
import { messages as messagesEn } from "../lang/en/messages";
import { messages as messagesFr } from "../lang/fr/messages";

const useLanguage = () => {
  const [lang, setLang] = useState<"en" | "fr">("en");

  const getCatalog = (language: "fr" | "en") => {
    switch (language) {
      case "fr":
        return messagesFr;
      case "en":
        return messagesEn;
      default:
        return messagesEn;
    }
  };

  useEffect(() => {
    console.log("here");
    i18n.load(lang, getCatalog(lang));
    i18n.activate(lang);
  }, [lang]);

  return { lang, setLang };
};

export default useLanguage;
