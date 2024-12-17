[깃허브](https://github.com/)에서는 [깃허브 페이지](https://pages.github.com/)를 통하여 웹사이트를 호스팅하는 기능을 제공한다. 이
때 [React Router](https://reactrouter.com/) 등의 라우팅 라이브러리를 사용하여 웹사이트가 마치 여러 개의 페이지로 이루어진 것처럼 하위 경로들을 만들어주고 싶다고 하자
([SPA: Single Page Application](https://ko.wikipedia.org/wiki/싱글_페이지_애플리케이션)).

In [GitHub](https://github.com/), we can host a website through
[GitHub Pages](https://pages.github.com/). Suppose that you want to create the sub-paths as if your website consists of
several pages
([SPA: Single Page Application](https://en.wikipedia.org/wiki/single_page_application))
using a routing library such as [React Router](https://reactrouter.com/).

```
Webpage: user.github.io

user.github.io/about -> Show the 'About' component.
user.github.io/music -> Show the 'Musics' component.
user.github.io/project -> Show the 'Projects' component.
```

하지만 깃허브 페이지는 SPA를 지원하지 않는다. 하위 경로를 요청시 `index.html`을 반환하지 못하고 404 에러 페이지를 반환한다.

However, GitHub pages do not support SPA. When requesting a sub-path, the website returns a 404 error page instead
of `index.html`.

![GitHub404](https://imgur.com/eA72EXd.png)

해결법 중 하나는 해쉬 기반 라우팅을 사용하는 것이다. 리액트 라우터에서는 `<HashRouter/>`를 사용해주면 된다.

One of the solutions is to use hash-based routing. In React router, you can use `<HashRouter/>`.

```
Webpage: user.github.io

user.github.io/#about -> Show the 'About' component.
user.github.io/#music -> Show the 'Musics' component.
user.github.io/#project -> Show the 'Projects' component.
```

만약 해쉬 기반 라우팅을 사용하고 싶지 않다면, 404 페이지를 이용한 트릭을 사용하면 된다
([spa-github-pages](https://github.com/rafgraph/spa-github-pages)). 404 페이지에 스크립트를 삽입하여, 하위 경로에 접속시 주소(`/...`)를 파라미터 형태(
ex. `/?p=/...`로 바꾸어 주는 아이디어이다. 저장소에 `404.html`을 추가하고, 다음과 같은 자바스크립트 코드를 추가한다.

If you don't want to use hash-based routing, you can use the 404 page trick
([spa-github-pages](https://github.com/rafgraph/spa-github-pages)). It is an idea to insert a script into the 404 page
and change the address (`/...`)
to the parameter form (ex. `/?p=/...`) when accessing the sub-path. Add `404.html` to the repository, and add the
following JavaScript code.

```javascript
var segmentCount = 0;
var l = window.location;

l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
    l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
    (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
);
```

이 때 웹사이트의 기본 주소가 `.../github.io` 형태이면 `segmentCount = 0`,
`.../github.io/xxx` 형태이면 `segmentCount = 1`로 설정하면 된다.

If the base address of the website is in the form of `.../github.io`, set `segmentCount = 0`. If the base address of the
website is in the form of `.../github.io/xxx`, set `segmentCount = 1`.

그리고 `index.html`에 다음과 같은 자바스크립트 코드를 추가한다.

And add the following JavaScript code in `index.html`.

```javascript
(function (l) {
    if (l.search) {
        var q = {};

        l.search.slice(1).split('&').forEach(function (v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
        });

        if (q.p !== undefined) {
            window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + (q.p || '') +
                (q.q ? ('?' + q.q) : '') +
                l.hash
            );
        }
    }
}(window.location))
```

이 방법을 쓰면 깃허브 페이지에서도 다음과 같은 라우팅이 가능해진다. 다만 이 방법을 사용하면 웹사이트의
[검색 엔진 최적화](https://ko.wikipedia.org/wiki/검색_엔진_최적화)
가 잘 되지 않을 수 있다.

Using this method, routing like the following becomes possible on the GitHub page. However, if you use this method, the
[Search Engine Optimization](https://en.wikipedia.org/wiki/search_engine_optimization)
of the website may not work well.

```
Webpage: user.github.io

user.github.io/about -> Show the 'About' component.
user.github.io/music -> Show the 'Musics' component.
user.github.io/project -> Show the 'Projects' component.
```
