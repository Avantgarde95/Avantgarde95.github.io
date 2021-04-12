import * as React from 'react';
import { ReactNode, createRef, useContext, useEffect } from 'react';
import { css, cx, keyframes } from '@emotion/css';
import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.min.css';
import { ThemeContext } from './Theme';

export const Link = ({
    url = '',
    className = '',
    children = null as ReactNode
}) => {
    const theme = useContext(ThemeContext);

    return (
        <a
            className={cx(
                css({
                    wordBreak: 'break-all',
                    color: theme.lightColor,
                    '&:hover, &:active': {
                        color: theme.darkColor
                    }
                }),
                className
            )}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={url}
        >
            {children}
        </a>
    );
};

export const ImagePreview = ({ className = '', src = '', alt = '' }) => {
    const theme = useContext(ThemeContext);
    const ref = createRef<HTMLImageElement>();

    useEffect(() => {
        const element = ref.current;

        if (element !== null) {
            new Luminous(element, { sourceAttribute: 'src', caption: alt });
        }
    });

    return (
        <img
            className={cx(
                css([theme.boxStyle, theme.highlightStyle, {
                    cursor: 'pointer'
                }]),
                className
            )}
            ref={ref}
            src={src}
            alt={alt}
            title={alt}
        />
    );
};
