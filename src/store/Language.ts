import { StrictReducer } from 'store/Common';

/**
 * Supported languages.
 */
export type Language = 'Korean' | 'English';

/**
 * State related to the current language.
 */
export interface LanguageState {
    currentLanguage: Language;
}

export const languageActions = {
    setLanguage: 'language/SET_LANGUAGE',
} as const;

export const languageActionCreators = {
    setLanguage: (language: Language) => ({
        type: languageActions.setLanguage,
        payload: { language },
    }),
} as const;

const languageReducer: StrictReducer<LanguageState, typeof languageActionCreators> = (
    state = { currentLanguage: 'Korean' },
    action
) => {
    switch (action.type) {
        case languageActions.setLanguage:
            return { currentLanguage: action.payload.language };
        default:
            return state;
    }
};

export default languageReducer;
