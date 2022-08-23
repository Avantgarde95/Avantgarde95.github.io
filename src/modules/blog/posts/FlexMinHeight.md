CSS flex를 사용할 때, 한 자식의 높이가 너무 커서 overflow가 발생하는 경우가 있다.
이 때 시도해볼 수 있는 트릭 중 하나는 해당 자식의 `min-height`를 0으로 설정하는 것이다.

When using CSS flex, when the height of one child is too large, an overflow can occur.
One of the tricks you can try is set the child's `min-height` to 0.

```html
<div class="parent">
    <div class="header">...</div>
    <div class="content">...</div>
    <div class="footer">...</div>
</div>
```

```css
.parent {
    display: flex;
    flex-direction: column;
}

.header {
    ...
}

.content {
    flex: 1;

    /* Try this! */
    min-height: 0;
}

.footer {
    ...
}
```

간단한 [데모](https://codesandbox.io/s/flex-min-height-trick-8rvio?file=/css/style.css)를 만들어보았다.

I created a simple [demo](https://codesandbox.io/s/flex-min-height-trick-8rvio?file=/css/style.css).
