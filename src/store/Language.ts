import { writable } from 'svelte/store';

/**
 * Supported languages.
 */
export type Language = 'Korean' | 'English';

export const currentLanguage = writable<Language>('Korean');
