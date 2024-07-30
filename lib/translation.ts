import translations from '../public/translations.json';

export const useTranslation = (locale: keyof typeof translations, key: keyof typeof translations[('fi' | 'sve' | 'en')]): string => {
  return translations[locale][key] || translations['en'][key];
};
