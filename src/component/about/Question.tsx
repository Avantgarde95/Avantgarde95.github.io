import React, { ReactNode } from 'react';

import { LanguageFilter } from 'component/common/LanguageFilter';
import { WrappedLink } from 'component/common/WrappedLink';

export const topics = ['Job', 'Hobbies', 'Contacts'] as const;

/**
 * Topic of each question.
 */
export type Topic = typeof topics[number];

/**
 * Map of {topic: Question component}.
 */
export const questionMap: Record<Topic, ReactNode> = {
    Job: (
        <>
            <LanguageFilter language={'Korean'}>직업이 무엇인가요?</LanguageFilter>
            <LanguageFilter language={'English'}>What is your job?</LanguageFilter>
        </>
    ),
    Hobbies: (
        <>
            <LanguageFilter language={'Korean'}>취미가 무엇인가요?</LanguageFilter>
            <LanguageFilter language={'English'}>What are your hobbies?</LanguageFilter>
        </>
    ),
    Contacts: (
        <>
            <LanguageFilter language={'Korean'}>연락처가 무엇인가요?</LanguageFilter>
            <LanguageFilter language={'English'}>What are your contacts?</LanguageFilter>
        </>
    ),
};

/**
 * Map of {topic: Array of the message & images}.
 */
export const answerMap: Record<Topic, Array<ReactNode>> = {
    Job: [
        <>
            <LanguageFilter language={'Korean'}>개발자로 일하고 있습니다.</LanguageFilter>
            <LanguageFilter language={'English'}>I&apos;m working as a developer.</LanguageFilter>
        </>,
        <>
            <LanguageFilter language={'Korean'}>컴퓨터 그래픽스와 웹에 관심이 있습니다.</LanguageFilter>
            <LanguageFilter language={'English'}>I&apos;m interested in computer graphics and web.</LanguageFilter>
        </>,
    ],
    Hobbies: [
        <>
            <LanguageFilter language={'Korean'}>취미로 피아노와 기타를 연주합니다.</LanguageFilter>
            <LanguageFilter language={'English'}>I play piano and guitar as a hobby.</LanguageFilter>
        </>,
    ],
    Contacts: [
        <>
            <LanguageFilter language={'Korean'}>이메일</LanguageFilter>
            <LanguageFilter language={'English'}>Email</LanguageFilter>
            :&nbsp;
            <WrappedLink href={'mailto:mathematicianscott@gmail.com'}>mathematicianscott@gmail.com</WrappedLink>
        </>,
    ],
};
