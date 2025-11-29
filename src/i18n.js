import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // языки, которые реально есть в проекте
    supportedLngs: ["en", "ru", "uk"],

    // запасной язык, если браузер вернул что-то левое
    fallbackLng: "ru",

    // порядок определения языка
    detection: {
      // методы определения языка
      order: ["localStorage"],

      // ключ, под которым хранится язык
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n

//   .use(Backend)

//   .use(LanguageDetector)

//   .use(initReactI18next)

//   .init({
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });

// export default i18n;
