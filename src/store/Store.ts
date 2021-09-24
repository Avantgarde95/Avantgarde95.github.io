import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import language from 'store/Language';
import time from 'store/Time';

const reducer = combineReducers({ language, time });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global = window as any;

// eslint-disable-next-line no-underscore-dangle
export const store = createStore(reducer, global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__());

export const useStrictDispatch: () => typeof store.dispatch = useDispatch;

export const useStrictSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
