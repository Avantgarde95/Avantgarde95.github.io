자바스크립트 또는 타입스크립트를 이용하여 HTML 텍스트에서 태그 등을 제외한 순수한 텍스트들만 뽑아내야 할 때가 있다.
브라우저 환경이라면, DOM API들을 이용하여 이를 간단하게 구현할 수 있다.
HTML element를 하나 만들고, 그 안에 HTML 텍스트를 집어넣은다음 innerText로 텍스트 정보를 꺼내면 된다.

Sometimes we have to extract only pure texts excluding tags, etc. from HTML text using JavaScript or TypeScript.
In a browser environment, you can implement it simply by using the DOM APIs.
Create an HTML element, put HTML text in it, and then pull out text information with innerText.

```typescript
const html = '...';
const element = document.createElement('div');
element.innerHTML = html;
const text = element.innerText;
```

이 블로그에서도 포스트 검색과 포스트 미리보기 기능을 구현할 때 해당 트릭을 사용하였다.
포스트 HTML 텍스트에서 순수한 텍스트만 추출하여 검색어와 비교하거나 앞부분만 잘라서 미리보기용으로 사용하였다.

This blog also used this trick when implementing the post search and post preview functions.
I extracted only pure text from the post HTML text, and compared it with the search word or cut out its front part to preview the post.
