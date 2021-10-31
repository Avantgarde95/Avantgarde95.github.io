import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

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
export const useStoreDispatch: () => typeof store.dispatch = useDispatch;

/**
 * Type-safe wrapper of useSelector().
 */
export const useStoreSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
