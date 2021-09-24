import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { languageSlice } from 'store/Language';
import { timeSlice } from 'store/Time';
import { isDevelopmentMode } from 'util/DebugUtils';

/**
 * Global Redux store.
 */
export const store = configureStore({
    reducer: {
        [languageSlice.name]: languageSlice.reducer,
        [timeSlice.name]: timeSlice.reducer,
    },
    devTools: isDevelopmentMode(),
});

/**
 * Type-safe wrapper of useDispatch().
 */
export const useStrictDispatch: () => typeof store.dispatch = useDispatch;

/**
 * Type-safe wrapper of useSelector().
 */
export const useStrictSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
