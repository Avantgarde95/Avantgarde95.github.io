import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Supported languages.
 */
export type Language = 'Korean' | 'English';

/**
 * Store related to the current language.
 */
export interface LanguageState {
    currentLanguage: Language;
}

const initialState: LanguageState = {
    currentLanguage: 'Korean',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<{ language: Language }>) => {
            state.currentLanguage = action.payload.language;
        },
    },
});
