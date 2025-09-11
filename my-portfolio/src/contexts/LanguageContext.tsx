// Language context and hook for managing translations
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/translations';
import type { TranslationData } from '../data/translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const translation: TranslationData[string] = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation.pt || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Utility function to get translated content from data objects
export const getTranslatedContent = <T extends Record<string, any>>(
  obj: T,
  language: Language,
  key: string
): string => {
  const content = obj[key];
  if (typeof content === 'object' && content !== null) {
    return content[language] || content.pt || '';
  }
  return content || '';
};