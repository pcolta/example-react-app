import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en/translation.json';
import translationPL from '../public/locales/pl/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    pl: {
        translation: translationPL
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "pl",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
