[marked.js](https://marked.js.org/) 라이브러리를 사용하면 마크다운 문서를 HTML로 변환할 수 있다. 이 블로그도 마크다운으로 포스트를 작성하고 해당 라이브러리로 포스트를 HTML로
변환해서 렌더링하는 방식으로 작동한다.

We can convert a Markdown document to HTML by using [marked.js](https://marked.js.org/) library. This blog also works by
writing a post in Markdown, converting the post to HTML with the library, and rendering it.

```html
# Hello, world! => <h1>Hello, world!</h1>
```

이 때 HTML 변환 과정을 수정하고 싶으면 어떻게 하면 될까? marked.js의 `Renderer` 클래스를 이용하여 커스텀 렌더러를 작성해주면 된다.

What should we do if we want to modify HTML converting process? We can do it by writing a custom renderer by
using `Renderer` class of marked.js.

```javascript
const {Renderer} = require('marked');

class MyRenderer extends Renderer {
    ...
}
```

[여기서](https://github.com/markedjs/marked/blob/master/src/Renderer.js) `Renderer`가 마크다운의 구성요소들을 어떻게 변환하는지 볼 수 있다. 원하는
구성요소에 해당하는 메서드를 오버라이드하면 된다. 예를 들어, 아래의 커스텀 렌더러는 이미지를 변환할 때 HTML 태그에 `Image`라는 클래스를 붙일 것이다.

We can see how marked.js handles the components of Markdown
at [here](https://github.com/markedjs/marked/blob/master/src/Renderer.js). Override the method which corresponds to the
component you want. For example, the custom renderer below will add `Image` class to the HTML tag when converting a
image.

```javascript
const {Renderer} = require('marked');

class MyRenderer extends Renderer {
    image(href, title, text) {
        const out = super.image(href, title, text);
        return `<img class="Image"${out.substr(4)}`;
    }
}
```

만약 [웹팩](https://webpack.js.org/)을 사용한다면, 아래와 같이 커스텀 렌더러를 적용해줄 수 있다.

If you use [Webpack](https://webpack.js.org/), you can apply the custom renderer like the following.

```javascript
module: {
    rules: [
        {
            test: /\.md$/,
            use: [
                {loader: 'html-loader'},
                {loader: 'markdown-loader', options: {renderer: MyRenderer}}
            ]
        }
    ]
}
```
