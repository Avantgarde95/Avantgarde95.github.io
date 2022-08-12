웹페이지에서 iframe의 src를 변경하면 브라우저의 히스토리가 변경될 수 있다. 이를 방지하는 방법 중 하나는, src가 변경되면 iframe 요소를 지우고 새로 렌더링하는 것이다.
만약 [리액트](https://reactjs.org/)를 사용중이라면,
[key](https://reactjs.org/docs/lists-and-keys.html)를 사용하여 간단하게 해결할 수 있다.

If you change the src of iframe, the browser history can be modified. One of the methods to prevent this is to delete
the iframe element and render a new one when the src is changed. If you are using [React](https://reactjs.org/), it can
be solved simply by using the [key](https://reactjs.org/docs/lists-and-keys.html).

예를 들어, 아래 코드를 사용하여 유튜브 비디오를 표시하려고 한다. 이 때 새로운 비디오를 렌더링하고자 기존과 다른 `id`의 값을 주면, 기존에 렌더링된 iframe 요소는 그대로 남아있고 src만 변경되므로
브라우저 히스토리가 변경될 수 있다.

For example, we want to display a YouTube video using the code below. If you give a different `id` value to render a new
video, since the previously rendered iframe element is still alive and only the src is changed, the browser history can
be modified.

```typescript jsx
const Video = ({id = ''}) => (
    <iframe
        frameBorder={0}
        allowFullScreen={true}
        src={`https://www.youtube.com/embed/${id}`}
    />
);
```

아래와 같이 key를 사용하여 리액트가 iframe을 새로 렌더링하도록 강제하면 히스토리에 영향을 미치지 않고 비디오를 변경할 수 있다.

If you force React to render a new iframe using the key as shown below, You can change the video without affecting the
history.

```typescript jsx
const Video = ({id = ''}) => (
    <iframe
        key = {id} // Or a counter, a random value, ...
        frameBorder={0}
        allowFullScreen={true}
        src={`https://www.youtube.com/embed/${id}`}
    />
);
```
