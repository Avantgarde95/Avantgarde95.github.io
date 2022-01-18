import React, { ReactNode } from 'react';

import { Topic } from 'model/about/Topic';
import { Korean, English } from 'component/common/Language';
import { AutoLink } from 'component/common/AutoLink';
import { TextMessage, ImageMessage } from 'component/about/Message';

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
 * Map of {topic: Messges element}.
 */
export const answerMap: Record<Topic, ReactNode> = {
    Job: (
        <>
            <TextMessage>
                <Korean>개발자로 일하고 있습니다.</Korean>
                <English>I&apos;m working as a developer.</English>
            </TextMessage>
            <TextMessage>
                <Korean>컴퓨터 그래픽스와 웹에 관심이 있습니다.</Korean>
                <English>I&apos;m interested in computer graphics and web.</English>
            </TextMessage>
            <ImageMessage title={'컴퓨터 그래픽스 Computer graphics'} src={'/image/RayTracing.png'} />
            <ImageMessage title={'웹 Web'} src={'/image/Code.png'} />
        </>
    ),
    Hobbies: (
        <>
            <TextMessage>
                <Korean>취미로 피아노와 기타를 연주합니다.</Korean>
                <English>I play piano and guitar as a hobby.</English>
            </TextMessage>
            <ImageMessage title={'기타 Guitar'} src={'/image/Guitar.jpg'} />
            <ImageMessage title={'공연 Concert'} src={'/image/Concert.jpg'} />
        </>
    ),
    Contacts: (
        <TextMessage>
            <Korean>이메일</Korean>
            <English>Email</English>
            :&nbsp;
            <AutoLink href={'mailto:mathematicianscott@gmail.com'}>mathematicianscott@gmail.com</AutoLink>
        </TextMessage>
    ),
};
