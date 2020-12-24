const fs = require('fs');
const fetch = require('node-fetch');

const excludedProjects = [
    'Avantgarde95',
    'christmas_tree',
    'gitignore',
    'kotlinjstest',
    'JOGLObjTest'
];

const alternativeProjectNames = {
    'Avantgarde95.github.io': 'MyPage',
    'kaist_cs482_2016_team4': 'Blowing Bubble'
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
            name: alternativeProjectNames.hasOwnProperty(name) ? alternativeProjectNames[name] : name,
            description: description,
            repositoryURL: `https://github.com/Avantgarde95/${name}`,
            imageURL: `https://raw.githubusercontent.com/Avantgarde95/${name}/master/Screenshot.png`
        }));

    fs.writeFileSync('./src/app/Projects.json', JSON.stringify(projects, null, 4));
    console.log('Updated the list of the projects!');
});
