import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "../components/locales/en/translation.json";
import translationSpanish from "../components/locales/es/translation.json";
import translationFrench from "../components/locales/fr/translation.json";

//Import translation2 file
// import translationEnglishSecondFile from "../public/locales/en";

//---Using translation
const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
  fr: {
    translation: translationFrench,
  },
};

//---Using different namespaces
// const resources = {
//   en: {
//     home: translationEnglish,
//     main: translationEnglishSecondFile,
//   },
//   es: {
//     home: translationSpanish,
//   },
//   fr: {
//     home: translationFrench,
//   },
// };

i18next.use(initReactI18next).init({
  resources,
  lng: "es", //default language
});

export default i18next;
