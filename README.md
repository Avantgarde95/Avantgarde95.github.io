# mypage

Rewriting from the scratch...

## Previous version vs New version

- SPA (Single Page Application) -> MPA (Multi Page Application)
  - For enabling SEO (Search Engine Optimization) easily
- Pre-render each page using SSG (Static Site Generation) tool
  - Currently we're trying to use [Next.js](https://nextjs.org/)
- CSS-in-JS ([Emotion](https://emotion.sh)) -> SCSS
  - For readability

## Project structure

```
.
+-- docs // Output files. (These files will be served to the users.)
+-- src
|  +-- component // React components.
|  +-- style // Styles. (CSS & SCSS)
|  +-- pages // Components which represent the routes.
+-- package.json, tsconfig.json, ...
```
