[리액트 라우터](https://reactrouter.com/)를 사용할 때, 만약 웹페이지 내부에서 예외가 발생하면 라우팅이 정상적으로 작동하지 않는 경우가 있다. 라우팅을 방해하지 않으면서 예외가 콘솔에 출력되게
하려면, 에러를 처리하는 컴포넌트를 만들어서 각 경로(route)에 해당하는 컴포넌트를 덮어주면 된다.

When using [React Router](https://reactrouter.com/), routing may not work properly if an exception occurs inside a web
page. If you want the exceptions to be printed on the console without interfering routing, you can create an error
handler and wrap the components corresponding to each route.

```jsx
{path: '/menu', element: <MenuPage/>}
=> {path: '/menu', element: <ErrorHandler><MenuPage/></ErrorHandler>}
```

[리액트](https://reactjs.org/)에서 에러 핸들러는 다음과 같이 만들면 된다.
([타입스크립트](https://www.typescriptlang.org/)로 작성하였다.)

In [React](https://reactjs.org/), you can create an error handler like this:
(The code is written in [TypeScript](https://www.typescriptlang.org/).)

```typescript jsx
import {Component, ErrorInfo, ReactNode} from 'react';

class ErrorHandler extends Component<{ children: ReactNode }> {
    constructor({children = null}) {
        super({children});
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Print the exception.
        console.error(error?.toString());
        console.error(errorInfo?.componentStack);
    }

    render() {
        // Render the component.
        return this.props.children;
    }
}
```

에러 발생시에 에러 페이지 등 다른 컴포넌트를 렌더링하고 싶다면, 아래와 같이 하면 된다.

If you want to render other components such as error pages when an error occurs, you can do as follows.

```typescript jsx
import {Component, ErrorInfo, ReactNode} from 'react';

class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({children = null}) {
        super({children});
        // hasError = true when we have an exception.
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({hasError: true}, () => {
            console.error(error?.toString());
            console.error(errorInfo?.componentStack);
        });
    }

    render() {
        // If we have an exception, render <ErrorPage/> instead.
        return this.state.hasError ? <ErrorPage/> : this.props.children;
    }
}
```
