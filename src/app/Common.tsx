import * as React from 'react';
import { ReactNode, createRef, useContext, useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { css, cx } from '@emotion/css';
import { Luminous } from 'luminous-lightbox';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import 'luminous-lightbox/dist/luminous-basic.min.css';
import { ThemeContext } from './Theme';
import { Icon } from '../common/Icon';

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
            {(children === null) ? url : children}
        </a>
    );
};

export const RouterLink = ({
    url = '',
    className = '',
    children = null as ReactNode
}) => {
    const theme = useContext(ThemeContext);

    return (
        <ReactRouterLink
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
            to={url}
        >
            {(children === null) ? url : children}
        </ReactRouterLink>
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

export const YouTube = ({ id = '' }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={css({
            position: 'relative',
            height: 0,
            paddingBottom: '56.25%'
        })}>
            <iframe
                className={css([theme.boxStyle, theme.highlightStyle, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }])}
                key={id} // Force React to recreate iframe to prevent it from messing the browser history!
                frameBorder={0}
                allowFullScreen={true}
                src={`https://www.youtube.com/embed/${id}`}
            />
        </div>
    );
};

export const List = ({ children = null as ReactNode }) => (
    <ul className={css({
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: '1.5rem'
    })}>
        {children}
    </ul>
);

export const ListItem = ({ children = null as ReactNode }) => (
    <li className={css({
        marginBottom: '0.5rem'
    })}>
        <div className={css({
            display: 'inline-block',
            marginLeft: '0.5rem',
            width: '1.5rem',
            height: '0.9rem',
            fontSize: '0.6rem'
        })}>
            <Icon definition={faStar} />
        </div>
        <div className={css({
            display: 'inline-block',
            verticalAlign: 'top',
            width: 'calc(100% - 2rem)'
        })}>
            {children}
        </div>
    </li>
);
