const fs = require('fs');
const fetch = require('node-fetch');
const Secret = require('./Secret.json');

/*
 * Secret.json
 *
 * {
 *     "github": {
 *         "id": ...,
 *         "key": ...
 *     }
 *     "youtube": {
 *         "key": ...
 *     }
 * }
 */

function getValue(object, key, defaultValue) {
    return object.hasOwnProperty(key) ? object[key] : defaultValue;
}

async function request(url, parameterMap, headerMap) {
    const query = Object.getOwnPropertyNames(parameterMap)
        .map(key => key + '=' + encodeURIComponent(parameterMap[key]))
        .join('&');

    const response = await fetch(url + '?' + query, {
        method: 'get',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headerMap)
    });

    return response.json();
}

function toBase64(value) {
    return Buffer.from(value).toString('base64');
}

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
        'ExtractMailFiles'
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

    const allProjects = await request(`https://api.github.com/users/Avantgarde95/repos`, {
        per_page: 100
    }, {
        //'Authorization': `Basic ${toBase64(Secret.github.id + ':' + Secret.github.key)}`
    });

    const projects = await Promise.all(
        allProjects
            .filter(({ name }) => !excludedProjects.includes(name))
            .map(async ({ name, description }) => {
                const imagePath = getValue(alternativeProjectImagePaths, name, 'Screenshot.png');
                const languages = await request(`https://api.github.com/repos/Avantgarde95/${name}/languages`, {}, {});

                return {
                    name: getValue(alternativeProjectNames, name, name),
                    description: description,
                    repositoryURL: `https://github.com/Avantgarde95/${name}`,
                    imageURL: `https://raw.githubusercontent.com/Avantgarde95/${name}/master/${imagePath}`,
                    languages: languages
                };
            })
    );

    fs.writeFileSync('./src/app/Projects.json', JSON.stringify(projects, null, 4));
    console.log(`Got ${projects.length} projects from GitHub!`);
}

async function getVideos(playlistId) {
    const result = await request('https://www.googleapis.com/youtube/v3/playlistItems', {
        playlistId: playlistId,
        part: 'snippet',
        maxResults: 50,
        key: Secret.youtube.key
    });

    console.log(`Got ${result.items.length} videos from the YouTube playlist ${playlistId}!`);

    return result.items.map(item => item.snippet.resourceId.videoId);
}

async function updateMusics() {
    const musics = {
        myGuitarPlayings: await getVideos('PLosnnDHctFV1rm0K7jrSsQeCDBj04Eb70'),
        myPianoPlayings: await getVideos('PLosnnDHctFV1_0yMUtQH830uaOg87c5J0'),
        myPieces: await getVideos('PLosnnDHctFV1iZeOtf4AzJMc2K6RTMCC1')
    };

    fs.writeFileSync('./src/app/Musics.json', JSON.stringify(musics, null, 4));
}

(async () => {
    await updateProjects();
    await updateMusics();
    console.log('Done!');
})();
