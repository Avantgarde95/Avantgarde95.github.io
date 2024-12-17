드롭다운 같은 커스텀 UI를 만들 때 겪을 수 있는 이슈가 있다.
`onClick()`을 사용해서 드롭다운의 옵션을 클릭하면 값이 바뀌며,
`onBlur()`를 사용해서 드롭다운 밖을 클릭하면 드롭다운이 닫히게 하고 싶다고 하자.

There is an issue we can face when creating custom UIs like dropdowns.
Suppose that you want to change the current value by attaching `onClick()` on the option buttons,
and you want to close the dropdown by clicking outside the dropdown by attaching `onBlur()` on the container.

- Container -> onBlur(): Close the dropdown if it is open
  - Value button
  - Option group
    - Option 1 -> onClick(): Updates the current value
    - Option 2
    - Option 3
    - ...

이 때 드롭다운의 옵션을 클릭해도 값이 바뀌지 않는 경우가 있다.
이는 `onBlur()` 때문에 드롭다운이 `onClick()`이 불리기도 전에 닫혀버리기 때문이다.

Sometimes the value does not change when you click the option in the dropdown.
This is because `onBlur()` closes the dropdown **before** `onClick()` is called.

이는 하위의 `onMouseDown()`으로 `preventDefault()`를 날려서 상위에 마우스 이벤트가 안 가게 하는 방법으로 막을 수 있다.

You can prevent that issue by attaching `onMouseDown()` to the option buttons and let them call `preventDefault()` to prevent the mouse event from going to the upper level.

- Container -> onBlur(): Close the dropdown if it is open
  - Value button
  - Option group
    - Option 1 -> onClick(): Updates the current value / onMouseDown(): Prevents **event bubbling**
    - Option 2
    - Option 3
    - ...

[데모](https://codesandbox.io/s/dropdown-onblur-issue-zcnfr?file=/src/App.tsx)에서 `onOptionMouseDown()`의 `event.preventDefault()`를 주석처리해보면 옵션을 클릭해도 값이 바뀌지 않음을 알 수 있다.

If we comment out `event.preventDefault()` inside `onOptionMousedown()` in the [demo](https://codesandbox.io/s/dropdown-onblur-issue-zcnfr?file=/src/App.tsx), the option buttons will not work.
