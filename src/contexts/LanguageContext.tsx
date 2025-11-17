import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'zh' | 'ja' | 'ar' | 'ru';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  languages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
];

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferredLanguage') as Language;
    if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
      return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  useEffect(() => {
    const detectAndSetLanguage = async () => {
      const hasVisitedBefore = localStorage.getItem('geoLanguageDetected');
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language;

      if (hasVisitedBefore || (savedLanguage && SUPPORTED_LANGUAGES.some(l => l.code === savedLanguage))) {
        return;
      }

      try {
        const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
        const data = await response.json();
        const countryCode = data.country_code?.toUpperCase();

        if (countryCode && COUNTRY_TO_LANGUAGE[countryCode]) {
          const detectedLanguage = COUNTRY_TO_LANGUAGE[countryCode];
          setCurrentLanguageState(detectedLanguage);
          localStorage.setItem('geoLanguageDetected', 'true');
        } else {
          const browserLang = navigator.language.split('-')[0].toLowerCase() as Language;
          const supportedLangs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ar', 'ru'];
          if (supportedLangs.includes(browserLang)) {
            setCurrentLanguageState(browserLang as Language);
          }
          localStorage.setItem('geoLanguageDetected', 'true');
        }
      } catch {
        const browserLang = navigator.language.split('-')[0].toLowerCase() as Language;
        const supportedLangs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ar', 'ru'];
        if (supportedLangs.includes(browserLang)) {
          setCurrentLanguageState(browserLang as Language);
        }
        localStorage.setItem('geoLanguageDetected', 'true');
      }
    };

    detectAndSetLanguage();
  }, []);

  const setLanguage = (language: Language) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === language)) {
      setCurrentLanguageState(language);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
