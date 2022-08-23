[Storybook](https://storybook.js.org/)을 사용할 때 Storybook의 기본 Webpack 세팅에 나의 세팅을 합쳐서 사용하는 경우가 있다.

We sometimes merge our Webpack configuration to the default Storybook Webpack configuration when we use [Storybook](https://storybook.js.org/).

```JavaScript
// ex. .storybook/main.js

const createOurConfig = require('../webpack.config.js');

const ourConfig = createOurConfig();

module.exports = {
    ...,
    webpackFinal: config => {
        config.resolve = {
            ...config.resolve,
            ...ourConfig.resolve
        };

        config.module.rules = [
            ...config.module.rules,
            ...ourConfig.module.rules
        ];

        return config;
    }
};
```

이 때 기본 Webpack 세팅에 css-loader 등의 스타일 세팅을 합치면 빌드 시 에러가 나는 경우가 있다.

이는 기본 Webpack 세팅에 이미 스타일 관련 loader들이 들어있어 이미 변환이 된 결과물에 나의 loader들이 적용되기 때문이다.
이 문제는 아래와 같이 기본 loader들을 제거해주고 (ex. 정규 표현식에 css가 들어가는 것들만 제외) 나의 loader들을 쓰도록 하는 방법으로 해결 가능하다.

If we merge our style configuration such as css-loader, we sometimes get the errors.

The reasons is Storybook's default Webpack configuration already defines the loaders related to style.
We can solve that problem by excluding the those loaders (ex. Exclude the loaders whose regex includes 'css') and using our loaders instead.

```JavaScript
// ex. .storybook/main.js

const createOurConfig = require('../webpack.config.js');

const ourConfig = createOurConfig();

module.exports = {
    ...,
    webpackFinal: config => {
        config.resolve = {
            ...config.resolve,
            ...ourConfig.resolve
        };

        config.module.rules = [
            // Exclude default style rules.
            ...config.module.rules.filter(rule => !rule.test.toString().includes('css')),
            ...ourConfig.module.rules
        ];

        return config;
    }
};
```


