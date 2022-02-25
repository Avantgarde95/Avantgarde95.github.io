import React, { ReactNode, useEffect, useState } from 'react';

/**
 * Delay props.
 */
interface DelayProps {
    delay: number;
    children: ReactNode;
}

/**
 * Util component for delaying the rendering of a component.
 */
export const Delay = ({ delay, children }: DelayProps) => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRender(true);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [delay, render]);

    return render && <>{children}</>;
};
