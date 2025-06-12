---
title: Creating a component compatible to CSS-in-JS
date: 2022-09-08
category: Computer
---

[styled-components](https://styled-components.com/), [Emotion](https://emotion.sh/) 등의 CSS-in-JS 라이브러리에서는 `styled`, `css` 등의 API를 제공하여 컴포넌트에 스타일을 입힐 수 있도록 한다.

CSS-in-JS libraries such as [styled-components](https://styled-components.com/), [Emotion](https://emotion.sh/) provides APIs such as `styled`, `css` to style the components.

```tsx
// ex. styled-components, Emotion.
const MyButton = styled.button`
  color: blue;
`;

// ex. Emotion.
const MyBox = () => (
  <div
    css={css`
      color: red;
    `}
  >
    Hello!
  </div>
);
```

우리가 만든 컴포넌트를 이 API들을 사용하여 스타일링할 수 있도록 하려면 어떻게 해야 할까?
이 API들은 일반적으로 아래와 같이 작동한다.

- className을 생성한다.
- 페이지에 CSS 코드를 삽입한다.
  - `<style>` 태그 안에 코드를 넣기, [CSSStyleSheet](https://developer.mozilla.org/ko/docs/Web/API/CSSStyleSheet)로 코드 넣기 등 여러 가지 방식이 있다.
- 컴포넌트에 해당 className을 설정한다.

How can we make our component styleable using these APIs?
These APIs generally work like the following:

- Create a className
- Inject CSS code into the page
  - There are several methods, such as putting the code inside `<style>` tag, registering the code using [CSSStyleSheet](https://developer.mozilla.org/en/docs/Web/API/CSSStyleSheet), etc.
- Set className of the component

![How CSS-in-JS libraries work](/image/css-in-js-work.png)

따라서, 우리는 그냥 `className` props를 제공하면 된다.

Therefore, we just need to provide `className` props.

```tsx
interface ButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
}

const Button = ({ className, label, onClick }) => (
  <button className={className} onClick={onClick}>
    {label}
  </button>
);
```

```tsx
import Button from "...";

const SubmitButton = styled(Button)`
  color: red;
`;

const CancelButton = () => (
  <Button
    css={css`
      color: blue;
    `}
    ...
  />
);
```
