import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko.json';

const resource = {
  ko: {
    translation: ko,
  },
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: resource,
  lng: 'ko',
  fallbackLng: 'ko',

  interpolation: {
    escapeValue: false
  }
});
