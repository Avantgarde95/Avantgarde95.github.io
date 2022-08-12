[Next.js](https://nextjs.org/) 등의 도구들을 이용하여 SSR(Server-Side Rendering)을 할 때,
`window` 객체를 사용하면 아래와 같은 에러가 날 때가 있다.

When we use `window` object while performing SSR (Server-Side Rendering) using tools such as [Next.js](https://nextjs.org/),
, we sometimes get the error like the message below.

```typescript
window.addEventListener('resize', () => {
    console.log('Hello!');
});
```

```text
Server Error
ReferenceError: window is not defined

This error happened while generating the page. Any console logs will be displayed in the terminal window.
```

아래와 같이 `window` 객체가 존재하는가 체크해주면 해결된다.

We can solve that problem by checking whether `window` object exists before using it.

```typescript
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        console.log('Hello!');
    });
}
```
