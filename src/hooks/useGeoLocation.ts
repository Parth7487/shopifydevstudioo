import { useEffect } from 'react';
import { Language } from '../contexts/LanguageContext';

const COUNTRY_TO_LANGUAGE: Record<string, Language> = {
  ES: 'es', AR: 'es', MX: 'es', CL: 'es', CO: 'es', PE: 'es', VE: 'es', BO: 'es', EC: 'es', PY: 'es', UY: 'es',
  FR: 'fr', BE: 'fr', CH: 'fr', CD: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', LU: 'fr', ML: 'fr', HT: 'fr',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  IT: 'it', SM: 'it', VA: 'it',
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt', TL: 'pt', GW: 'pt', ST: 'pt',
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  JP: 'ja',
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', KW: 'ar', BH: 'ar', OM: 'ar', YE: 'ar', JO: 'ar', LB: 'ar', SY: 'ar', IQ: 'ar', PS: 'ar', IS: 'ar', MA: 'ar', TN: 'ar', DZ: 'ar', LY: 'ar', SD: 'ar', SO: 'ar',
  RU: 'ru', BY: 'ru', KZ: 'ru', UZ: 'ru', KG: 'ru',
  GB: 'en', US: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en', IN: 'en', PK: 'en', NG: 'en', GH: 'en', KE: 'en', ZW: 'en', SG: 'en', MY: 'en', TH: 'en', PH: 'en',
};

interface GeolocationData {
  country_code?: string;
  country?: string;
}

export const useGeoLocation = (onLanguageDetected: (language: Language) => void) => {
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data: GeolocationData = await response.json();
        const countryCode = data.country_code?.toUpperCase();

        if (countryCode && COUNTRY_TO_LANGUAGE[countryCode]) {
          const detectedLanguage = COUNTRY_TO_LANGUAGE[countryCode];
          onLanguageDetected(detectedLanguage);
        } else if (!localStorage.getItem('preferredLanguage')) {
          const browserLang = navigator.language.split('-')[0].toLowerCase() as Language;
          const supportedLangs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ar', 'ru'];
          if (supportedLangs.includes(browserLang)) {
            onLanguageDetected(browserLang as Language);
          }
        }
      } catch {
        if (!localStorage.getItem('preferredLanguage')) {
          const browserLang = navigator.language.split('-')[0].toLowerCase() as Language;
          const supportedLangs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ar', 'ru'];
          if (supportedLangs.includes(browserLang)) {
            onLanguageDetected(browserLang as Language);
          }
        }
      }
    };

    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      detectLanguage();
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [onLanguageDetected]);
};
