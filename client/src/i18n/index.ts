import es from './es.json';
import en from './en.json';

export const translations = {
  es,
  en
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.es;
