import React, { ReactNode } from 'react';

import { Korean, English } from 'component/common/Language';
import { WrappedLink } from 'component/common/WrappedLink';

export const topics = ['Job', 'Hobbies', 'Contacts'] as const;

/**
 * Topic of each question.
 */
export type Topic = typeof topics[number];

/**
 * Map of {topic: Question element}.
 */
export const questionMap: Record<Topic, ReactNode> = {
    Job: (
        <>
            <Korean>직업이 무엇인가요?</Korean>
            <English>What is your job?</English>
        </>
    ),
    Hobbies: (
        <>
            <Korean>취미가 무엇인가요?</Korean>
            <English>What are your hobbies?</English>
        </>
    ),
    Contacts: (
        <>
            <Korean>연락처가 무엇인가요?</Korean>
            <English>What are your contacts?</English>
        </>
    ),
};

/**
 * Map of {topic: {messages: [Elements], images: [URLs]}}.
 */
export const answerMap: Record<Topic, { messages: Array<ReactNode>; images: Array<string> }> = {
    Job: {
        messages: [
            <>
                <Korean>개발자로 일하고 있습니다.</Korean>
                <English>I&apos;m working as a developer.</English>
            </>,
            <>
                <Korean>컴퓨터 그래픽스와 웹에 관심이 있습니다.</Korean>
                <English>I&apos;m interested in computer graphics and web.</English>
            </>,
        ],
        images: ['/image/RayTracing.png', '/image/Code.png'],
    },
    Hobbies: {
        messages: [
            <>
                <Korean>취미로 피아노와 기타를 연주합니다.</Korean>
                <English>I play piano and guitar as a hobby.</English>
            </>,
        ],
        images: ['/image/Guitar.jpg', '/image/Concert.jpg'],
    },
    Contacts: {
        messages: [
            <>
                <Korean>이메일</Korean>
                <English>Email</English>
                :&nbsp;
                <WrappedLink href={'mailto:mathematicianscott@gmail.com'}>mathematicianscott@gmail.com</WrappedLink>
            </>,
        ],
        images: [],
    },
};
