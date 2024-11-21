const fs = require("fs");

// https://stackoverflow.com/a/69331469.
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

require("dotenv").config();

function getValue(object, key, defaultValue) {
  return object.hasOwnProperty(key) ? object[key] : defaultValue;
}

async function request(url, parameterMap, headerMap) {
  const query = Object.getOwnPropertyNames(parameterMap)
    .map(key => key + "=" + encodeURIComponent(parameterMap[key]))
    .join("&");

  const response = await fetch(url + "?" + query, {
    method: "get",
    headers: Object.assign({ "Content-Type": "application/json" }, headerMap),
  });

  return response.json();
}

function toBase64(value) {
  return Buffer.from(value).toString("base64");
}

async function updateProjects() {
  const excludedProjects = [
    "Avantgarde95",
    "christmas_tree",
    "gitignore",
    "kotlinjstest",
    "JOGLObjTest",
    "DuktapeTest",
    "DeutschOracle",
    "JythonSieve",
    "MiniSat4Win",
    "CppIntro",
    "MyHaskell",
    "SchoolLaTeX",
    "slre",
    "webpack-es6-sass-setup",
    "Windows",
    "SetTerm",
    "ExtractMailFiles",
    "jsoncpp",
    "cpp-practice",
    "avant-assignment-movie-awards",
    "avant-assignment-stopwatch",
    "avant-assignment-todos-and-movies",
    "avant-assignment-weather",
    "code-splitting-example",
    "LGTM3D",
    "mini-electron-app",
    "react-popup-example",
    "simple-schedule-app",
    "react-scoped-css",
    "study",
  ];

  const alternativeProjectNames = {
    "Avantgarde95.github.io": "MyPage",
    kaist_cs482_2016_team4: "Blowing Bubble",
  };

  const alternativeProjectImagePaths = {
    LiKo: "TestExample.png",
    LangtonAnt: "ScreenshotSimple.png",
    ArchiPi: "Screenshot7.png",
    asciirain: "image/Screenshot.png",
    asciisnow: "image/Screenshot.png",
    guitarsayo: "Screenshot.jpg",
    PaintTalk: "extra/TreeDemo.png",
  };

  const allProjects = await request(
    `https://api.github.com/users/Avantgarde95/repos`,
    {
      per_page: 100,
    },
    {
      Authorization: `Basic ${toBase64(process.env.GITHUB_ID + ":" + process.env.GITHUB_KEY)}`,
    }
  );

  const projects = await Promise.all(
    allProjects
      .filter(({ name }) => !excludedProjects.includes(name))
      .map(async ({ name, description }) => {
        const imagePath = getValue(alternativeProjectImagePaths, name, "Screenshot.png");

        const languageMap = await request(
          `https://api.github.com/repos/Avantgarde95/${name}/languages`,
          {},
          {
            Authorization: `Basic ${toBase64(process.env.GITHUB_ID + ":" + process.env.GITHUB_KEY)}`,
          }
        );

        return {
          name: getValue(alternativeProjectNames, name, name),
          description: description,
          repositoryURL: `https://github.com/Avantgarde95/${name}`,
          imageURL: `https://raw.githubusercontent.com/Avantgarde95/${name}/master/${imagePath}`,
          languageMap: languageMap,
        };
      })
  );

  fs.writeFileSync("./src/common/data/Projects.json", JSON.stringify(projects, null, 4));
  console.log(`Got ${projects.length} projects from GitHub!`);
}

async function getVideos(playlistId) {
  const result = await request("https://www.googleapis.com/youtube/v3/playlistItems", {
    playlistId: playlistId,
    part: "snippet",
    maxResults: 50,
    key: process.env.YOUTUBE_KEY,
  });

  console.log(`Got ${result.items.length} videos from the YouTube playlist ${playlistId}!`);

  return result.items.map(item => item.snippet.resourceId.videoId);
}

async function updateMusics() {
  const musics = {
    myGuitarPlayings: await getVideos("PLosnnDHctFV1rm0K7jrSsQeCDBj04Eb70"),
    myPianoPlayings: await getVideos("PLosnnDHctFV1_0yMUtQH830uaOg87c5J0"),
    myPieces: await getVideos("PLosnnDHctFV1iZeOtf4AzJMc2K6RTMCC1"),
  };

  fs.writeFileSync("./src/common/data/Musics.json", JSON.stringify(musics, null, 4));
}

(async () => {
  await updateProjects();
  await updateMusics();
  console.log("Done!");
})();
