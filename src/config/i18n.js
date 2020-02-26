import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';
import translationBY from '../locales/by/translation.json';
import translationInterfaceEN from '../locales/en/interface.json';
import translationInterfaceRU from '../locales/ru/interface.json';
import translationInterfaceBY from '../locales/by/interface.json';
import translationTeamEN from '../locales/en/team.json';
import translationTeamRU from '../locales/ru/team.json';
import translationTeamBY from '../locales/by/team.json';

const resources = {
  en: {
    tr: translationEN,
    in: translationInterfaceEN,
    te: translationTeamEN,
  },
  ru: {
    tr: translationRU,
    in: translationInterfaceRU,
    te: translationTeamRU,
  },
  be: {
    tr: translationBY,
    in: translationInterfaceBY,
    te: translationTeamBY,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  // ns: ['translation'],
  defaultNS: 'in',

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
