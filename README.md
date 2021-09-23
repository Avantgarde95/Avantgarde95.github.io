# mypage

Rewriting from the scratch...

## Plan

- Replace npm 6 to npm 7
  - For the scripts' speed & utilization of the new features
- Replace emotion.js to SASS + CSS modules
  - For the readability of .tsx files
- Better coding style
  - ESLint + StyleLint + Git hook
  - Define the interfaces for the props
  - 1 component for 1 file
- Replace Preact.js to React.js
  - For using react-devtools

## Project structure

```
.
+-- config // Configurations. (ex. Webpack, ESLint, ...)
+-- docs // Output files. (These files will be served to the users.)
+-- src
|  +-- component // React components.
|  |  +-- device // Virtual 'device'.
|  |  +-- Main.tsx // Entry point.
|  |  +-- Template.html // Template HTML file.
|  +-- style // Styles. (CSS & SCSS)
|  |  +-- (Almost same as the 'component' folder)
+-- package.json, tsconfig.json, ...
```
