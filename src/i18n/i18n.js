import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationGR from './locales/gr/translation.json';

const resources = {
  en: { translation: translationEN },
  gr: { translation: translationGR },
};

const savedLang = localStorage.getItem('appLanguage') || 'gr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'gr',
    interpolation: { escapeValue: false },
  });

export default i18n;
