/** @jsx jsx */

import {jsx} from '@emotion/core';
import {icon, IconDefinition} from '@fortawesome/fontawesome-svg-core';

export const Icon = (
    {
        definition = {} as IconDefinition,
        className = ''
    }
) => {
    const abstract = icon(definition).abstract[0];
    const svgAttributes = abstract.attributes;
    const pathAttributes = abstract.children!![0].attributes;

    svgAttributes.class += ' ' + className;

    return (
        <svg {...svgAttributes}>
            <path {...pathAttributes}/>
        </svg>
    );
};
