import * as React from 'react';
import {createContext, ReactNode} from 'react';

export interface Media {
    wideScreenMinWidth: number;
    wideScreenQuery: string;
    narrowScreenQuery: string;
}

export const MediaContext = createContext({} as Media);

export const MediaProvider = ({wideScreenMinWidth = 769, children = null as ReactNode}) => (
    <MediaContext.Provider value={{
        wideScreenMinWidth: wideScreenMinWidth,
        wideScreenQuery: `@media (min-width: ${wideScreenMinWidth}px)`,
        narrowScreenQuery: `@media (max-width: ${wideScreenMinWidth - 1}px)`
    }}>
        {children}
    </MediaContext.Provider>
);
