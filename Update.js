const fs = require('fs');
const fetch = require('node-fetch');

function getValue(object, key, defaultValue) {
    return object.hasOwnProperty(key) ? object[key] : defaultValue;
}

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
    'CppIntro'
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
    'guitarsayo': 'Screenshot.jpg'
};

fetch('https://api.github.com/users/Avantgarde95/repos', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
}).then(response => {
    return response.json();
}).then(repositories => {
    const projects = repositories
        .filter(({name}) => !excludedProjects.includes(name))
        .map(({name, description}) => ({
            name: getValue(alternativeProjectNames, name, name),
            description: description,
            repositoryURL: `https://github.com/Avantgarde95/${name}`,
            imageURL: `https://raw.githubusercontent.com/Avantgarde95/${name}/master/${getValue(alternativeProjectImagePaths, name, 'Screenshot.png')}`
        }));

    fs.writeFileSync('./src/app/Projects.json', JSON.stringify(projects, null, 4));
    console.log('Updated the list of the projects!');
});
