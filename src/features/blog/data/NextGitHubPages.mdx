---
title: Creating GitHub pages using Next.js
date: 2022-09-19
category: Computer
---

[Next.js](https://nextjs.org/)는 기본적으로 서버 사이드 렌더링(SSR)을 위한 프레임워크이지만,
정적 사이트 생성 (SSG) 기능도 제공한다.
(이 블로그와 같이) 이 기능을 이용하여 GitHub pages를 만들 수 있다.
다만 이를 위해서는 자잘한 설정이 필요하다.

[Next.js](https://nextjs.org/) is basically a framework for server-side rendering (SSR),
but it also provides static site generation (SSG).
You can use that feature to create GitHub pages (like this blog).
There are some configurations we need to set.

## 생성 위치 설정 Configure output folder

GitHub pages를 사용하려면, 웹사이트의 index.html 파일이 프로젝트 루트 또는 "docs" 폴더에 위치하게 하면 된다.
"docs" 폴더에 위치하게 하고 싶다고 가정하자.
그러면 `next build`를 사용해서 **우선 빌드를 한 뒤**, `next export -o docs`를 이용해서 정적 사이트 생성을 해주면 된다.

To use GitHub pages, we need to place index.html at the project root or "docs" folder.
Suppose that we want to place it at "docs" folder.
**Build the website first** using `next build`, and generate the static website using `next export -o docs`.

## Jekyll 비활성화 Disable Jekyll

이대로 GitHub pages를 생성해보면, 웹사이트가 잘 작동하지 않는 경우가 있다.
GitHub pages에는 기본적으로 [Jekyll](https://jekyllrb.com/)이 깔려있는데, 이것이 Next.js가 사용하려고 만드는 \_next 폴더를 무시해버리기 때문이다.
해결법은 간단하다. docs 폴더에 .nojekyll이라는 이름의 파일을 하나 만들어 주면 된다. (내용물은 비어도 된다.)
아래처럼 스크립트를 작성해서 자동화해주면 편리하다.

Sometimes the website does not work well after performing the previous processes.
This is because [Jekyll](https://jekyllrb.com/), installed on GitHub pages by default, ignores the \_next folder Next.js creates to use.
The solution is simple. Just create a file named .nojekyll in the docs folder. (The contents can be empty.)
It is convenient to write a automation script like the one below.

PostBuild.js

```javascript
const fs = require("fs");

fs.writeFileSync("docs/.nojekyll", "Turn off Jekyll!");
```

package.json

```json
{
  "scripts": {
    "deploy": "next build && next export -o docs && node PostBuild"
  }
}
```

## 경로 설정 Path configuration

GitHub 레포지토리가 사용자 사이트용 레포지토리(`[username].github.io`)가 아니라 특정 프로젝트용 레포지토리(`[username].github.io/[projectname]`)인 경우에는 추가적인 설정이 필요하다.
예컨대 레포지토리 이름이 my-app이라면, next.config.js 파일을 생성하고 아래처럼 `basePath`를 추가해주면 된다.

If your GitHub repository is for a specific project (`[username].github.io/[projectname]`) rather than for your site (`[username].github.io`), additional setups are required.
For example, if the repository name is my-app, create a file next.config.js and add `basePath` like below.

```javascript
module.exports = {
  basePath: "/my-app",
};
```

public 폴더를 통해 이미지 등의 정적 파일들을 사용할때도, 경로 지정이 필요하다.
아래처럼 URL에 레포지토리 이름을 넣어주면 된다.

When using static files such as images through the public folder, you need to specify the path, too.
Put the repository name in the URL like below.

```jsx
const basePath = "/my-app";

const Icon = () => <img src={`${basePath}/my-image.png`} alt="My image">;
```
