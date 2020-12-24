/** @jsx jsx */

import {jsx} from '@emotion/core';

export interface Project {
    name: string;
    url: string;
    image: string;
    description: { korean: string, english: string };
}

export const allProjects: Project[] = [
    {
        name: 'C3DMB',
        url: 'https://github.com/Avantgarde95/C3DMB',
        image: require('./image/C3DMB'),
        description: {
            korean: '블록체인에 기반한 협업 3D 모델링 시스템 (Pacific Graphics 2019 포스터)',
            english: 'Collaborative 3D modeling system based on blockchain (Pacific Graphics 2019 poster)'
        }
    },
    {
        name: 'PaintTalk',
        url: 'https://github.com/Avantgarde95/PaintTalk',
        image: require('./image/PaintTalk'),
        description: {
            korean: '자연어를 이용한 그림 그리기',
            english: 'Draw a picture by using natural language'
        }
    },
    {
        name: 'CGLab',
        url: 'https://github.com/Avantgarde95/CGLab',
        image: require('./image/CGLab'),
        description: {
            korean: '간단한 OpenGL 예제들 (KAIST CS580 프로젝트들)',
            english: 'Simple OpenGL examples (KAIST CS580 projects)'
        }
    },
    {
        name: 'LiKo',
        url: 'https://github.com/Avantgarde95/LiKo',
        image: require('./image/LiKo'),
        description: {
            korean: '한국어를 배워보자! (KAIST CS374 팀 프로젝트)',
            english: 'Let\'s learn Korean! (KAIST CS374 team project)'
        }
    },
    {
        name: 'WhereToGoNow',
        url: 'https://github.com/Avantgarde95/WhereToGoNow',
        image: require('./image/WhereToGoNow'),
        description: {
            korean: '여행 경로 계획 서비스 (KAIST CS408 팀 프로젝트)',
            english: 'Travel route planning service (KAIST CS408 team project)'
        }
    },
    {
        name: 'TeX2Hwp',
        url: 'https://github.com/Avantgarde95/TeX2Hwp',
        image: require('./image/TeX2Hwp'),
        description: {
            korean: 'LaTeX 수식을 아래아 한글 수식으로 변환하는 프로그램 (KAIST CS495 프로젝트)',
            english: 'Program that converts LaTeX formula into Hwp formula (KAIST CS495 project)'
        }
    },
    {
        name: 'SimpleLang',
        url: 'https://github.com/Avantgarde95/SimpleLang',
        image: require('./image/SimpleLang'),
        description: {
            korean: '스킴(Scheme)과 비슷한 문법 및 지연 연산(lazy evaluation) 기반의 프로그래밍 언어',
            english: 'Programming language based on Scheme-like grammar and lazy evaluation'
        }
    },
    {
        name: 'PySIC',
        url: 'https://github.com/Avantgarde95/PySIC',
        image: require('./image/PySIC'),
        description: {
            korean: '베이직(BASIC)과 유사한 문법의 프로그래밍 언어',
            english: 'Programming language with BASIC-like grammar'
        }
    },
    {
        name: 'LangtonAnt',
        url: 'https://github.com/Avantgarde95/LangtonAnt',
        image: require('./image/LangtonAnt'),
        description: {
            korean: '랭턴의 개미(Langton\'s ant) 시뮬레이터',
            english: 'Langton\'s ant simulator'
        }
    },
    {
        name: 'PathFinder',
        url: 'https://github.com/Avantgarde95/PathFinder',
        image: require('./image/PathFinder'),
        description: {
            korean: '유전 알고리즘을 이용한 길찾기 프로그램',
            english: 'Path finding program that uses genetic algorithm'
        }
    },
    {
        name: 'MorseSimulator',
        url: 'https://github.com/Avantgarde95/MorseSimulator',
        image: require('./image/MorseSimulator'),
        description: {
            korean: '간단한 모스 코드 시뮬레이터',
            english: 'Simple Morse code simulator'
        }
    },
    {
        name: 'Image2Term',
        url: 'https://github.com/Avantgarde95/Image2Term',
        image: require('./image/Image2Term'),
        description: {
            korean: '터미널 위에 그림 그리기.',
            english: 'Draw an image on the terminal.'
        }
    },
    {
        name: 'archipi-web',
        url: 'https://github.com/Avantgarde95/archipi-web',
        image: require('./image/ArchiPi4Web'),
        description: {
            korean: '아르키메데스의 원주율(π) 계산법. π 데이 (2019.03.14) 기념으로 만듬.',
            english: 'Archimedes\' method for approximating π. Created for celebrating π day! (2019.03.14)'
        }
    },
    {
        name: 'Mandelbrot',
        url: 'https://github.com/Avantgarde95/Mandelbrot',
        image: require('./image/Mandelbrot'),
        description: {
            korean: '만델브로트(Mandelbrot) 프랙탈 생성기',
            english: 'Mandelbrot fractal generator'
        }
    },
    {
        name: 'pyMalbolge',
        url: 'https://github.com/Avantgarde95/pyMalbolge',
        image: require('./image/pyMalbolge'),
        description: {
            korean: '말레볼제(Malbolge) 프로그래밍 언어 해석기',
            english: 'Malbolge programming language interpreter'
        }
    },
    {
        name: 'HQ9',
        url: 'https://github.com/Avantgarde95/HQ9',
        image: require('./image/HQ9'),
        description: {
            korean: 'HQ9+ 프로그래밍 언어 해석기',
            english: 'HQ9+ programming language interpreter'
        }
    },
    {
        name: 'HandyClock',
        url: 'https://github.com/Avantgarde95/HandyClock',
        image: require('./image/HandyClock'),
        description: {
            korean: '파이썬으로 제작한 간단한 시계',
            english: 'Simple clock written in python'
        }
    },
    {
        name: 'Lucky',
        url: 'https://github.com/Avantgarde95/Lucky',
        image: require('./image/Lucky'),
        description: {
            korean: '당신의 오늘의 운세를 예측해 드립니다.',
            english: 'I\'ll predict your luck today.'
        }
    }
];
