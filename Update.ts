import fs from 'fs';
import fetch from 'node-fetch';

import Secret from './Secret.json';

/*
 * Secret.json
 *
 * {
 *     "GitHub": {
 *         "id": ...,
 *         "key": ...
 *     }
 *     "YouTube": {
 *         "key": ...
 *     }
 * }
 */

function getValue<Target, Value>(object: Target, key: PropertyKey, defaultValue: Value) {
    return object.hasOwnProperty(key) ? object[key] : defaultValue;
}

async function request<Value>(
    url: string,
    parameterMap: Record<string, string | number | boolean>,
    headerMap: Record<string, string>
) {
    const query = Object.getOwnPropertyNames(parameterMap)
        .map(key => key + '=' + encodeURIComponent(parameterMap[key]))
        .join('&');

    const response = await fetch(url + '?' + query, {
        method: 'get',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headerMap)
    });

    return response.json() as Promise<Value>;
}

function toBase64(value: string) {
    return Buffer.from(value).toString('base64');
}

/**
 * Information of each GitHub repository.
 */
interface Repository {
    name: string;
    description: string;
}

/**
 * Map about how much each programming is used.
 */
type LanguageMap = Record<string, number>;

/**
 * (Final) information of each project constructed from the inputs.
 */
interface Project {
    name: string;
    description: string;
    repositoryURL: string;
    imageURL: string;
    languageMap: LanguageMap;
}

/**
 * Information of each YouTube video.
 */
interface Video {
    snippet: {
        resourceId: {
            videoId: string;
        }
    }
}

/**
 * Information of each YouTube playlist.
 */
interface PlayList {
    items: Array<Video>;
}

/**
 * Download the projects' information from GitHub.
 */
async function updateProjects() {
    const excludedProjects = [
        'Avantgarde95',
        'christmas_tree',
        'gitignore',
        'kotlinjstest',
        'JOGLObjTest',
        'DuktapeTest',
        'DeutschOracle',
        'JythonSieve',
        'MiniSat4Win',
        'CppIntro',
        'MyHaskell',
        'SchoolLaTeX',
        'slre',
        'webpack-es6-sass-setup',
        'Windows',
        'SetTerm',
        'ExtractMailFiles',
        'jsoncpp',
        'cpp-practice',
        'gh4a'
    ];

    const alternativeProjectNames = {
        'Avantgarde95.github.io': 'MyPage',
        'kaist_cs482_2016_team4': 'Blowing Bubble'
    };

    const alternativeProjectImagePaths = {
        'Avantgarde95.github.io': 'image/AboutApp.png',
        'LiKo': 'TestExample.png',
        'LangtonAnt': 'ScreenshotSimple.png',
        'ArchiPi': 'Screenshot7.png',
        'asciirain': 'image/Screenshot.png',
        'asciisnow': 'image/Screenshot.png',
        'guitarsayo': 'Screenshot.jpg',
        'PaintTalk': 'extra/TreeDemo.png'
    };

    const allProjects = await request<Array<Repository>>(`https://api.github.com/users/Avantgarde95/repos`, {
        per_page: 100
    }, {
        'Authorization': `Basic ${toBase64(Secret.GitHub.id + ':' + Secret.GitHub.key)}`
    });

    const projects: Array<Project> = await Promise.all(
        allProjects
            .filter(({ name }) => !excludedProjects.includes(name))
            .map(async ({ name, description }) => {
                const imagePath = getValue(alternativeProjectImagePaths, name, 'Screenshot.png');

                const languageMap = await request<LanguageMap>(`https://api.github.com/repos/Avantgarde95/${name}/languages`, {}, {
                    'Authorization': `Basic ${toBase64(Secret.GitHub.id + ':' + Secret.GitHub.key)}`
                });

                return {
                    name: getValue(alternativeProjectNames, name, name),
                    description,
                    repositoryURL: `https://github.com/Avantgarde95/${name}`,
                    imageURL: `https://raw.githubusercontent.com/Avantgarde95/${name}/master/${imagePath}`,
                    languageMap
                };
            })
    );

    fs.writeFileSync('./src/data/Projects.json', JSON.stringify(projects, null, 4));
    console.log(`Got ${projects.length} projects from GitHub!`);
}

/**
 * Get the videos of the playlist.
 */
async function getVideos(playlistId) {
    const result = await request<PlayList>('https://www.googleapis.com/youtube/v3/playlistItems', {
        playlistId: playlistId,
        part: 'snippet',
        maxResults: 50,
        key: Secret.YouTube.key
    }, {});

    console.log(`Got ${result.items.length} videos from the YouTube playlist ${playlistId}!`);

    return result.items.map(item => item.snippet.resourceId.videoId);
}

/**
 * Download the videos' information from YouTube.
 */
async function updateMusics() {
    const musics = {
        myGuitarPlayings: await getVideos('PLosnnDHctFV1rm0K7jrSsQeCDBj04Eb70'),
        myPianoPlayings: await getVideos('PLosnnDHctFV1_0yMUtQH830uaOg87c5J0'),
        myPieces: await getVideos('PLosnnDHctFV1iZeOtf4AzJMc2K6RTMCC1')
    };

    fs.writeFileSync('./src/data/Musics.json', JSON.stringify(musics, null, 4));
}

(async () => {
    await updateProjects();
    await updateMusics();
    console.log('Done!');
})();
