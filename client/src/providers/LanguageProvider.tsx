import { createContext, useContext, useState, useMemo, useCallback } from 'react';

type Language = 'es' | 'en';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  initial?: Language;
  children: React.ReactNode;
}

export function LanguageProvider({ initial = 'es', children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Language>(initial);
  const availableLanguages: Language[] = ['es', 'en'];

  const setLang = useCallback((newLang: Language) => {
    if (availableLanguages.includes(newLang)) {
      setLangState(newLang);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    availableLanguages,
  }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
