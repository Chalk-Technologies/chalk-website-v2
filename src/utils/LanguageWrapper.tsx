import * as React from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

const LanguageWrapper = ({ children }: { children: React.ReactChildren }) => {

  return (
    <I18nProvider i18n={i18n}>
      <div>{children}</div>
    </I18nProvider>
  );
};

export default LanguageWrapper;

// Only support french and english ... if it is not french then display in english.
export const storedLang:'en'|'fr'= typeof window !== 'undefined' && window.localStorage.getItem('lang')? 
  window.localStorage.getItem('lang') as 'en'|'fr':
  typeof navigator !== 'undefined' ? navigator.language.match('fr-.*') ? 'en':'fr' : 'en';
  