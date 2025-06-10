import fs from "fs";
import dotenv from "dotenv";

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

  fs.writeFileSync("./src/features/musics/data/Musics.json", JSON.stringify(musics, null, 4));
}

dotenv.config();
await updateMusics();
console.log("Done!");
