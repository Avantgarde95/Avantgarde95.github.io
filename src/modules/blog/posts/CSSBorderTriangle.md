고전적인 CSS 트릭 한 가지를 소개하고자 한다.

CSS border를 이용하면 삼각형을 그릴 수 있다.
이를 박스에 붙여서 아래 이미지와 같이 말풍선 모양을 만들수도 있고,
[링크](https://codesandbox.io/s/simple-christmas-tree-c6jjj)와 같이 크리스마스 트리를 만들수도 있다.

I'd like to introduce you to one classic CSS trick.

You can draw a triangle using CSS border.
You can attach it to the box to make a speech bubble like the image below,
you can also make a Christmas tree like [link](https://codesandbox.io/s/simple-christmas-tree-c6jjj).

![SpeechBubbleExample](https://imgur.com/xwSCif7.png)

원리는 간단하다. Border들이 모두 양수 width를 가지고 있으면, border들은 사다리꼴 모양이 된다.

The principle is simple. If all borders have positive widths, the borders become trapezoidal.

![Borders](https://imgur.com/I4WiilA.png)

위 사진에서 A 부분의 크기를 0으로 하고 border B1 ~ B4 중 원하는 것을 빼고 투명화시켜주면 삼각형 하나만 남게 된다.
[데모 링크](https://codesandbox.io/s/css-border-triangle-7unfo?file=/css/style.css)

Set the size of A to 0 and make the borders B1 ~ B4 transparent except the border you want, then a triangle will be left.
[Demo link](https://codesandbox.io/s/css-border-triangle-7unfo?file=/css/style.css)
