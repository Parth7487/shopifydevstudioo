import { useLanguage } from '../contexts/LanguageContext';
import { translations, interpolate } from '../lib/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  const currentTranslations = translations[currentLanguage];

  const t = (key: string, vars?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = currentTranslations;

    for (const k of keys) {
      value = value?.[k];
      if (!value) {
        return key;
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    return vars ? interpolate(value, vars) : value;
  };

  return { t, currentLanguage };
};
