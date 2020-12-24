# mypage

My website!

P.S I'm currently developing [my blog](https://avantgarde95.github.io/blog/) at
the [separate repository](https://github.com/Avantgarde95/blog).

### About

The home screen is designed similar to the home screen of a smartphone.

![Smartphone](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/Smartphone.png)

![HomeScreen](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/HomeScreen.png)

Each app is designed with a 'neon' concept.

![AboutApp](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/AboutApp.png)

The website supports Korean and English. Press the language button to change the language.

![HomeScreenKorean](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/HomeScreenKorean.png)

### Screenshots

#### Home screen

![HomeScreen](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/HomeScreen.png)

#### 'About' app

![AboutApp](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/AboutApp.png)

![AboutAppLightbox](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/AboutAppLightbox.png)

#### 'CV' app

![CVApp](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/CVApp.png)

#### 'Project' app

![ProjectApp](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/ProjectApp.png)

#### 'Music' app

![MusicApp](https://github.com/Avantgarde95/Avantgarde95.github.io/blob/master/image/MusicApp.png)

### Technologies

#### [React.js](https://reactjs.org/) ([Preact.js](https://preactjs.com/))

- For re-using the components such as app button, app template, etc.
- Use [state](https://reactjs.org/docs/hooks-state.html) for managing the local states such as lock and time.
- Use [context](https://reactjs.org/docs/context.html) for managing the global states such as language and theme.

#### [React Router](https://reacttraining.com/blog/react-router-v6-pre/)

- For navigating the 'apps'
- Root(`/`): Home screen
- Child routes(`/about`, `/project`, ...): Each app

#### [Emotion](https://emotion.sh/)

- For constructing the dynamic styles
- And re-using the styles

#### [Luminous](https://github.com/imgix/luminous)

- For attaching the 'lightbox' to each image

#### [Webpack](https://webpack.js.org/)

- For handling the imports and compiling the code

#### [Typescript](https://www.typescriptlang.org/)

- For writing & debugging the code easier

### How to build

- Run `npm install` to install the dependencies.
- Run `npm run update` to update the projects' information.
- Run `npm run debug` to build & debug the website.
- Run `npm run build` to build & deploy the website.

### How to test

- Run `npm run server` to run the test server.
- Open <http://localhost:8080> or <http://your-ip:8080> on the web browser.
