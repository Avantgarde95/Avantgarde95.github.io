이 웹사이트를 실행했을 때, 작동은 잘 되는 것 같은데 콘솔에 아래와 같은 에러 메시지들이 뜨는 문제가 있었다.

When I run this website, it seems to work fine, but I got following error messages appearing on the console.

```text
Uncaught Error: Minified React error #425; visit https://reactjs.org/docs/error-decoder.html?invariant=425 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

Uncaught Error: Minified React error #418; visit https://reactjs.org/docs/error-decoder.html?invariant=418 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

Uncaught Error: Minified React error #423; visit https://reactjs.org/docs/error-decoder.html?invariant=423 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
```

위 에러 메시지들에 나온 링크를 방문해보면 아래와 같은 메시지들이 나온다.

- Text content does not match server-rendered HTML.
- Hydration failed because the initial UI does not match what was rendered on the server.
- There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.

이 웹사이트는 Next.js로 정적 사이트 생성(SSG - Static Site Generation)을 하여 만들었다.
Next.js로 미리 생성한 HTML을 일단 유저에게 보여주고, 그 후에 React로 hydration & CSR(Client-side Rendering)을 하는 방식이다.
따라서, 위의 메시지들은 미리 렌더링한 HTML과 클라이언트에서 렌더링한 HTML 간에 내용물이 불일치한다는 것을 의미한다.
이 문제는 SSR 뿐만 아니라 SSR 상황에서도 동일하게 발생한다.

I created this website by using SSG (Static Site Generation) with Next.js
It works by showing the pre-generated HTML to the user first, and performing hydration & CSR (Client-side Rendering) with React.
Therefore, the above messages mean that there is a content mismatch between the pre-rendered HTML and the client-rendered HTML.
This problem can occur not only SSG but also SSR, too.

원인은 두 곳에 있었다.
하나는 페이지 상단의 시계 UI이다.

There were two reasons.
One is the clock UI at the top of the page.

```typescript
import { useEffect, useState } from "react";

export default function useNow() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    monthDay: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}
```

시계 기능을 구현하기 위해 위와 같은 custom hook을 작성했었다.
그런데 `const [now, setNow] = useState(new Date());`에서 `new Date()`의 값은 서버 렌더링 시와, 클라이언트 렌더링 시에 **서로 다르다**.
이로 인하여 시계 텍스트가 두 상황에서 불일치하여 에러가 났던 것이다.
CSR 전까지는 실제 시간을 사용하지 않고 더미 값을 쓰도록 하여 해결하였다.

I wrote the above custom hook to implement the clock.
However, in `const [now, setNow] = useState(new Date());`, the value of `new Date()` is **different** between server rendering and client rendering.
This inconsistency of the clock text caused the error.
I solved this problem by using a dummy value until we perform CSR.

다만 이러면 초반에 시간이 더미 값으로 떠서 이상해 보이는 문제가 있다.
적절한 로딩 UI를 부여하면 좀 낫지 않을까 한다.

However, we get a problem that the user sees a dummy value at the beginning.
We may fix that problem by using appropriate loading UI.

```typescript
import { useEffect, useState } from "react";

interface Time {
  year: number;
  month: number;
  monthDay: number;
  hour: number;
  minute: number;
  second: number;
}

export default function useNow(): Time {
  // If we use new Date() at here, server HTML and client HTML won't match.
  // So we don't compute date before useEffect().
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return now === null
    ? {
        year: 0,
        month: 0,
        monthDay: 0,
        hour: 0,
        minute: 0,
        second: 0,
      }
    : {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        monthDay: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      };
}
```

다른 하나는 이 글처럼 코드를 렌더링 할 때 쓰는 react-syntax-highlighter 라이브러리이다.
해당 라이브러리는 내부적으로 [Prism.js](https://prismjs.com/)(또는 [highlight.js](https://highlightjs.org/))를 호출한다.
이들은 코드를 읽고 **DOM을 변경**하여 코드 하이라이팅을 한다.
이것이 mismatch를 만들어낸 것으로 추정한다.

이와 같은 상황에서 특정 동작을 클라이언트에서만 하도록 하고 싶으면, `useEffect()`를 활용할 수 있다.
`useEffect()` 안의 코드는 항상 **클라이언트에서만 실행**된다.
`useEffect()`가 처음 불리는 시점은 컴포넌트가 마운트된 이후, 즉 DOM이 생성된 이후이기 때문이다.

The other is the react-syntax-highlighter library used when rendering code like this article.
The library calls [Prism.js](https://prismjs.com/) (or [highlight.js](https://highlightjs.org/)) internally.
They read the code and **change the DOM** to highlight the code.
It seems that that behavior created mismatches.

In such a situation, if you want to make certain actions executed only for the client, you can use `useEffect()`.
Code in `useEffect()` is always executed **only on the client**.
This is because the first time `useEffect()` is called is after the component is mounted i.e after the DOM is created.

우선 아래와 같은 custom hook을 하나 만들었다.
`isClient`는 클라이언트에서만 true이 된다.

I created the following custom hook first.
`isClient` can be true only on the client.

```typescript
import { useEffect, useState } from "react";

export default function useClient() {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return { isClient };
}
```

이를 이용하여, 아래와 같이 CSR 전까지는 react-syntax-highlighter를 적용하지 않도록 하여 에러를 해결하였다.
(가독성을 위해 일부 props는 생략하였다.)

Using this, I solved the errors by preventing the component from applying react-syntax-highlighter before starting CSR.
(I omitted some props for readability.)

```tsx
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

...

const PostView = () => (
  <ReactMarkdown
    components={{
      code: MarkdownCode,
      a: MarkdownLink,
      img: MarkdownImage,
    }}
  >
    ...
  </ReactMarkdown>
);

...

const MarkdownCode = () => {
  const { isClient } = useClient();

  ...

  return isClient && ... ? (
    <SyntaxHighlighter>
      ...
    </SyntaxHighlighter>
  ) : (
    <InlineCode>
      ...
    </InlineCode>
  );
};
```
