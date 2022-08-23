[Webpack](https://webpack.js.org/) 등의 번들러를 이용하여 프론트엔드 코드를 작성할 때,
url-loader, file-loader, [@svgr/webpack](https://react-svgr.com/docs/webpack/), Webpack 5의 [asset modules](https://webpack.js.org/guides/asset-modules/) 등의 기능들을 이용하여 아래와 같이 이미지를 마치 JavaScript/TypeScript처럼 import하는 코드를 작성할 수 있다.

When writing front-end code using a bundler, you can write code that imports images like JavaScript/TypeScript using the functions such as [Webpack](https://webpack.js.org/),
url-loader, file-loader, [@svgr/webpack](https://react-svgr.com/docs/webpack/), and [asset modules](https://webpack.js.org/guides) in Webpack 5.

```typescript
import Apple from 'image/Apple.png';

const MyImage = () => <img src={Apple}/>;
```

[Jest](https://jestjs.io/)를 사용하여 프론트엔드 코드의 단위 테스트를 작성하고 실행할 때, 이들을 처리하지 못하여 오류가 나는 경우가 있다.
이는 Jest가 Webpack 세팅과는 별개의 환경에서 동작하기 때문이다.

간단한 해결방법 중 하나는, 아래와 같이 해당 파일들을 더미값으로 바꿔주는 [custom transformer](https://jestjs.io/docs/next/code-transformation)를 작성해주는 것이다.
예컨대, png, jpg 등의 리소스들을 더미 URL로 바꾸고자 한다면, 아래와 같이 transformer를 하나 제작해주고 Jest config에서 해당 transformer를 매핑해주면 된다.

When writing and executing unit tests of front-end code using [Jest](https://jestjs.io/), there are cases where an error occurs while processing those resources.
This is because Jest operates in a separate environment from Webpack settings.

One of the simple solutions is to write a [custom transformer](https://jestjs.io/docs/next/code-transformation) that converts the files into dummy values as shown below.
For example, if you want to transform resources such as png, jpg, etc. to a dummy URL, create a transformer as shown below and map the transformer in Jest config.

**jestURLtransformer.js**

```javascript
// Convert the resource to the dummy URL.

module.exports = {
    process() {
        return 'module.exports = \'Pikachu.png\';';
    }
};
```

**jest.config.js**

```javascript
module.exports = {
    ...
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest'],
        '^.+\\.(png|jpg|jpeg)$': [`${configPath}/jestURLtransformer.js`)]
    }
};
```

svg 등의 이미지들을 더미 React 컴포넌트로 바꾸고자 한다면, 아래와 같이 transformer를 하나 제작해주고 Jest config에서 해당 transformer를 매핑해주면 된다.

If you want to transform resources such as svg to a dummy React component, create a transformer as shown below and map the transformer in the jest config.

**jestComponentTransformer.js**

```javascript
// Convert the resource to the dummy React component.

module.exports = {
    process() {
        return 'module.exports = () => \'Pikachu\';';
    }
};
```

**jest.config.js**

```javascript
module.exports = {
    ...
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest'],
        '^.+\\.(png|jpg|jpeg)$': [`${configPath}/jestURLtransformer.js`)],
        '^.+\\.svg$': [`${configPath}/jestComponentTransformer.js`)]
    }
};
```
