import create from 'zustand';

/**
 * Supported languages.
 */
export type Language = 'Korean' | 'English';

/**
 * Store related to the current language.
 */
export interface LanguageStore {
    currentLanguage: Language;
    setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageStore>(set => ({
    currentLanguage: 'Korean',
    setLanguage: language => set({ currentLanguage: language }),
}));
