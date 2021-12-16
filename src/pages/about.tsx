import React, { useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';

import { Card, cardNames } from 'component/about/Cards';
import styles from 'style/about/Page.module.scss';

/**
 * 'About' page.
 * There are some cards on the table.
 * Each card represents the information such as interests, contacts, ...
 * The page provides the buttons which moves or zooms the camera.
 */
const Page = () => {
    const [focusedCardIndex, setFocusedCardIndex] = useState(0);
    const [zoom, setZoom] = useState(1);

    const onClickMoveButton = (diff: number) => {
        setFocusedCardIndex((focusedCardIndex + diff + cardNames.length) % cardNames.length);
    };

    const onClickZoomButton = (diff: number) => {
        setZoom(zoom + diff * 0.1);
    };

    return (
        // TODO: Use fewer divs...
        <div className={styles.page}>
            <div className={styles.table}>
                <div className={styles.scrollLayer}>
                    <div className={styles.zoomLayer} style={{ transform: `scale(${zoom})` }}>
                        {cardNames.map((name, index) => (
                            <Card key={name} name={name} focus={index === focusedCardIndex} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button
                    className={styles.moveButton}
                    type={'button'}
                    title={'이전 Previous'}
                    onClick={() => {
                        onClickMoveButton(-1);
                    }}
                >
                    <Icon definition={faChevronLeft} />
                </button>
                <button
                    className={styles.moveButton}
                    type={'button'}
                    title={'다음 Next'}
                    onClick={() => {
                        onClickMoveButton(1);
                    }}
                >
                    <Icon definition={faChevronRight} />
                </button>
                <button
                    className={styles.zoomButton}
                    type={'button'}
                    title={'화면 확대 Zoom in'}
                    onClick={() => {
                        onClickZoomButton(1);
                    }}
                >
                    <Icon definition={faPlus} />
                </button>
                <button
                    className={styles.zoomButton}
                    type={'button'}
                    title={'화면 축소 Zoom out'}
                    onClick={() => {
                        onClickZoomButton(-1);
                    }}
                >
                    <Icon definition={faMinus} />
                </button>
            </div>
        </div>
    );
};

export default Page;
