타입스크립트에서 값의 '종류'를 표현하는 방식은 여러 가지가 있다.  
[enum](https://www.typescriptlang.org/docs/handbook/enums.html)을 사용할 수도 있고, string literal의 union type(여기서는 편의상 'string union type'이라고 하자)을 사용할 수도 있다.

There are several ways to express the 'category' of a value in TypeScript.  
You can use [enum](https://www.typescriptlang.org/docs/handbook/enums.html) or the union type of string literals (Let's call it 'string union type' for convenience).

```typescript
// enum.
enum Color {
    Red,
    Green,
    Blue
}

// string union type.
type Color = 'Red' | 'Green' | 'Blue';
```

두 방식을 다양한 측면에서 비교해 보자.

Let's compare the two methods in various aspects.

## 생성되는 자바스크립트 코드 Generated JavaScript code

enum의 경우 컴파일 시 어떤 객체(일종의 map)를 생성하는 자바스크립트 코드로 변환된다.
해당 객체에는 \{값: 이름\}들과 \{이름: 값\}들이 모두 들어가 있다.

enum is converted into JavaScript code that creates an object (which works as a map) at compile time.
The object contains both \{value: name\} and \{name: value\}.

```typescript
// enum.

// Original TypeScript code.
enum Color {
    Red,
    Green,
    Blue
}

// Result JavaScript code.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

// Actual value of Color.
{
    '0': 'Red',
    '1': 'Green',
    '2': 'Blue',
    'Red': 0,
    'Green': 1,
    'Blue': 2
}
```

이런 특이한 객체를 생성하는 건, 아마도 값에서 이름을 얻는 기능([reverse mapping](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings))을 위한 것으로 생각된다.

I think the purpose of this unusual object is probably supporting the [reverse mapping](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings) (getting the name from the value).

```typescript
const x = Color.Red;
const xName = Color[x]; // 'Red'.
```

enum에 string 값을 직접 붙일 경우는 생성되는 코드가 조금 다르다.

When we map the strings on the enum, the generated code is slightly different.

```typescript
// enum.

// Original TypeScript code.
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'LightSkyBlue'
}

// Result JavaScript code.
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "LightSkyBlue";
})(Color || (Color = {}));

// Actual value of Color.
{
    'Red': 'Red',
    'Green': 'Green',
    'Blue': 'LightSkyBlue'
}
```

enum의 변형판인 [const enum](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums)의 경우, 별도의 객체를 생성하지 않고 enum 값을 상수로 변환한다.
(생성되는 코드가 간단한 대신, reverse mapping 등 몇 가지 기능들이 제한된다.)

In the case of [const enum](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums), a variant of enum, the enum value is converted into a constant without creating a separate object.
(The generated code is simpler, but some features such as reverse mapping are disabled.)

```typescript
// const enum.

// Original TypeScript code.
const enum Color {
    Red,
    Green,
    Blue
}

const x = Color.Red;

// Result JavaScript code.
var x = 0 /* Red */;
```

string union type의 경우는 타입 정의는 날아가고 로직만 남는다.

After compiling a string union type, the type definition is blown away and only the logic remains.

```typescript
// string union type.

// Original TypeScript code.
type Color = 'Red' | 'Green' | 'Blue';

const x: Color = 'Red';

// Result JavaScript code.
var x = 'Red';
```

string union type이 타입스크립트 코드와 생성되는 자바스크립트 코드가 동일하다는 점, 즉 원본 코드가 보이는 그대로 작동한다는 점에서 작동 방식이 **가장 직관적**으로 보인다.

It seems that the way the string union type works is **the most intuitive** in that the TypeScript code and the generated JavaScript code are the same, that is, the original code works as it appears.

## 성능 Performance

enum, const enum, string union type의 값 비교 성능을 측정하는 프로그램을 만들어 보았다.
비슷한 역할을 하는 함수를 5000000번씩 실행하여 소요 시간의 합을 측정한다.
**[코드 링크](https://www.typescriptlang.org/play?target=1#code/GYVwdgxgLglg9mABAWwKYEMDOIBOqAUY6aAXIplDjGAOYA0iAVnAEZn4CUiAvAHyIA3ODAAmDSjHQAbAMJxwUHogCsABnUauAbwBQifYimpFsNAGUQyJaoDcOvQeBwcifEcUxrNxJ4A8iCWk5BW9PAGpuRABGbQcDAwgECnIodBwoABUYNCUAB1QcJxxkdEhUADowOAB3Tjt4+OYWOriGxLBk1DARLJzI-MLnErLKmpaGg1NUCysIxC6e7NREAFoUtMyl+oMAX3t49sw4I3KpOBp8AAMAEi0iNB2yDLhUqQClpVupmYB6KI1yqodpgGAA5SwsAqIODAAJUaSYMhfeGyeRgKA7S4cOx7HT4Tg8fi6eJdSyIORnFzEiaIABKqDErXiAHE8F06EyDAAhKQgVCtXEHJKKARKCnOcr0kTbfTuchefYGNBYXAEADkAFVMMtSVYANaoACe1WcIjVDAJfEQ1ImMFh+FF3Cd5OOEqlsRpDUwSiiMoaO3mUm1Pntjud4pw5VZqC6Hs9Bm9kQATH74gHUEHlnbXGHIhHyjy+XH4-LIgBmVO7AXYnQ7DgtPGWomtQ6KXUuynWzn6KUcz3R9ndxCF-lpxX6VuCMWuyNSv1yxOIWzjlAYbB4fCa4OT9sG42m82uLhWm0NbMOnjhmeShnF+OL31D9OZkM5y9568DsB3z2LlNPwNg3PXMOwlEcfxpRcKyfascXrGtG2PZt4igQ18lAlxIjVKU1UQAAfRA1S-XCCLVEc1TsFthUEMgIyUbCGQo1oFwVVplXXdUtWWCgqFoRBwHgMBDybLtPWA99CJwiCJgfSt9GfIDQwkoi2SE6SvSUf9PQUrMlKdLDyPU+IoLkxA9jTGs6wbQ5jgqM4LjVAARBBUAAQjVGsgA)**

프로그램을 여러 번 실행해 보면, 세 방식 중 가장 빠른 방식, 가장 느린 방식이 그때그때 다르게 나온다.
즉 성능적으로는 **세 방식 모두 큰 차이를 보이지 않는 것으로 보인다.**

I made a program to measure the value comparison performance of enum, const enum, and string union types.
Measure the sum of the time required by executing the function with a similar role 5,000,000 times.
**[Code link](https://www.typescriptlang.org/play?target=1#code/GYVwdgxgLglg9mABAWwKYEMDOIBOqAUY6aAXIplDjGAOYA0iAVnAEZn4CUiAvAHyIA3ODAAmDSjHQAbAMJxwUHogCsABnUauAbwBQifYimpFsNAGUQyJaoDcOvQeBwcifEcUxrNxJ4A8iCWk5BW9PAGpuRABGbQcDAwgECnIodBwoABUYNCUAB1QcJxxkdEhUADowOAB3Tjt4+OYWOriGxLBk1DARLJzI-MLnErLKmpaGg1NUCysIxC6e7NREAFoUtMyl+oMAX3t49sw4I3KpOBp8AAMAEi0iNB2yDLhUqQClpVupmYB6KI1yqodpgGAA5SwsAqIODAAJUaSYMhfeGyeRgKA7S4cOx7HT4Tg8fi6eJdSyIORnFzEiaIABKqDErXiAHE8F06EyDAAhKQgVCtXEHJKKARKCnOcr0kTbfTuchefYGNBYXAEADkAFVMMtSVYANaoACe1WcIjVDAJfEQ1ImMFh+FF3Cd5OOEqlsRpDUwSiiMoaO3mUm1Pntjud4pw5VZqC6Hs9Bm9kQATH74gHUEHlnbXGHIhHyjy+XH4-LIgBmVO7AXYnQ7DgtPGWomtQ6KXUuynWzn6KUcz3R9ndxCF-lpxX6VuCMWuyNSv1yxOIWzjlAYbB4fCa4OT9sG42m82uLhWm0NbMOnjhmeShnF+OL31D9OZkM5y9568DsB3z2LlNPwNg3PXMOwlEcfxpRcKyfascXrGtG2PZt4igQ18lAlxIjVKU1UQAAfRA1S-XCCLVEc1TsFthUEMgIyUbCGQo1oFwVVplXXdUtWWCgqFoRBwHgMBDybLtPWA99CJwiCJgfSt9GfIDQwkoi2SE6SvSUf9PQUrMlKdLDyPU+IoLkxA9jTGs6wbQ5jgqM4LjVAARBBUAAQjVGsgA)**

If we run the program several times, the fastest method and the slowest method out of the these methods come out differently each time.
So, in terms of performance, **all three methods do not seem to show a significant difference.**

```text
[LOG]: "Use enum keyword: Total time = 2.3028000013828276s, Number of trials: 5000000" 
[LOG]: "Use const enum keyword: Total time = 2.3270000000298023s, Number of trials: 5000000" 
[LOG]: "Use string union: Total time = 2.2881999993622304s, Number of trials: 5000000" 
[LOG]: "Done!" 
[LOG]: "Use enum keyword: Total time = 2.219400003194809s, Number of trials: 5000000" 
[LOG]: "Use const enum keyword: Total time = 2.296300001144409s, Number of trials: 5000000" 
[LOG]: "Use string union: Total time = 2.303600000649691s, Number of trials: 5000000" 
[LOG]: "Done!" 
[LOG]: "Use enum keyword: Total time = 2.328300001323223s, Number of trials: 5000000" 
[LOG]: "Use const enum keyword: Total time = 2.288400000244379s, Number of trials: 5000000" 
[LOG]: "Use string union: Total time = 2.304799998611212s, Number of trials: 5000000" 
[LOG]: "Done!" 
```

## 안전성 Safety

enum, string union type 모두 컴파일러가 잘못된 값의 대입을 막아준다.

The compiler prevents the developer from assigning incorrect values to both enum and string union type.

```typescript
// enum.

enum Color {
    Red,
    Green,
    Blue
}

function printColor(color: Color) {
    console.log(color);
}

printColor(Color.Red); // OK.
printColor(Color.Black); // Compile error.
```

```typescript
// string union type.

type Color = 'Red' | 'Green' | 'Blue';

function printColor(color: Color) {
    console.log(color);
}

printColor('Red'); // OK.
printColor('Black'); // Compile error.
```

다만 enum의 경우 아래와 같이 **정수값**을 직접 대입하는 경우 **컴파일러가 체크해주지 못하는 이슈가 있다.**

However, in the case of enum, there is an issue that the compiler cannot check if we directly assign **integer value** to enum as shown below.

```typescript
// enum.

enum Color {
    Red,
    Green,
    Blue
}

function printColor(color: Color) {
    console.log(color);
}

printColor(0); // OK.
printColor(4); // OK. (Not compile error!)
```

## 편의성 Convenience

enum, string union type을 사용하다 보면 값들의 **배열**이 필요하거나 값들을 가지고 **루프**를 돌아야 할 때가 종종 있다.  
(ex. 아래와 같이 값들을 쭉 돌면서 React component들을 자동 생성하는 경우)

When using enum and string union types, we often need to create an **array** of values or iterate those values.  
(ex. Automatically creating React components by iterating the elements)

```typescript
const ColorButtons = () => {
    const colorNames = ...; // ['Red', 'Green', 'Blue'].

    return (
        <div>
            {colorNames.map(color => <button>Select {color}</button>)}
        </div>
    );
}
```

enum의 경우 내부적으로 생성하는 객체를 이용한 아래와 같은 [트릭](https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons)이 존재한다.  
(const enum은 이것이 불가능하다.)

In the case of enum, we have the following [trick](https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons) which uses internally created object.  
(We can't use this trick for const enum.)

```typescript
// enum.

enum Color {
    Red,
    Green,
    Blue
}

// Actual value of color is...
// {
//     '0': 'Red',
//     '1': 'Green',
//     '2': 'Blue',
//     'Red': 0,
//     'Green': 1,
//     'Blue': 2
// }
// Trick: Check whether each key is not convertible to number (ex. 'Red': Not convertible, '0': Convertible)
for (let color in Color) {
    if (isNaN(Number(color))) {
        console.log(color); // Prints 'Red', 'Green', and 'Blue'.
    }
}
```

string union type의 경우 배열을 먼저 만들고 배열로 자료형을 생성할 수 있어, 이런 경우에 좀 더 **간편하고 직관적**으로 보인다.

It seems that string union type looks more **simple and intuitive** in this case, since we can create an array first and then generate the type from that array.

```typescript
// string union type.

// Create an array first, and extract the type from it.
const colorNames = ['Red', 'Green', 'Blue'] as const;
type Color = typeof colorNames[number]; // Color = 'Red' | 'Green' | 'Blue'.

colorNames.forEach(color => {
    console.log(color); // Prints 'Red', 'Green', and 'Blue'.
});
```

## 확장성 Extensibility

enum의 경우 기존의 자료형을 확장하여 더 큰 자료형을 만드는 것은 자연스럽게 되지 않는다.
아래와 같이 union type을 활용할 수는 있으나, 이름이 같은 값이 있으면 처리가 복잡해진다.

In the case of enums, it is not easy to extend it to create a wider data type.
You can use the union type as shown below, but if there are values with the same name, it becomes complicated to handle.

```typescript
// enum.

enum Color1 {
    Red,
    Green,
    Blue
}

enum Color2 {
    Blue,
    Black
}

type AllColor = Color1 | Color2;

const x: AllColor = Color1.Blue;
const y: AllColor = Color2.Blue;

console.log(x === y); // false.
```

string union type의 경우 자연스럽게 합집합이 된다.

We can easily create the union set of the string union types.

```typescript
// string union type.

type Color1 = 'Red' | 'Green' | 'Blue';
type Color2 = 'Blue' | 'Black';

type AllColor = Color1 | Color2; // 'Red' | 'Green' | 'Blue' | 'Black'.

const x: AllColor = 'Blue';
const y: AllColor = 'Black';
```

## 디버깅 Debugging

enum의 각 값들은 (값을 `enum Color { Red = 'Red' }` 이런 식으로 string으로 따로 지정하지 않았을 경우) C++처럼 내부적으로 정수값을 가진다.

따라서, (C++에서 gdb 쓸 때처럼) 브라우저 디버거에서 breakpoint를 걸고 변수의 값을 조사할 경우, enum으로 만든 변수들은 값이 정수로 찍히기 때문에 이게 enum에서 어떤 거에 해당하는지 알아내는 데에 어려움이 있다.

When each value is not mapped a string (ex. `enum Color { Red = 'Red' }`), it has an integer value internally like in C++.

Therefore, when you set a breakpoint in the browser debugger and examine the value of a variable (like when using gdb in C++), it is difficult to find out which enum corresponds to because the values are printed as integers.

```typescript
// enum.

enum Color {
    Red,
    Green,
    Blue
}

const x = Color.Red;

myFancyFunction(x); // In the debugger: x = 0.
```

string union type은 이 부분에서 좀 더 유리하다.

The string union type is more advantageous in this case.

```typescript
// string union type.

type Color = 'Red' | 'Green' | 'Blue';

const x: Color = 'Red';

myFancyFunction(x); // In the debugger: x = 'Red'.
```

## 번들링 Bundling

Webpack, Rollup 등의 번들러들은 사용되지 않은 (i.e import되지 않은) 코드들을 제거하는 [tree shaking](https://webpack.js.org/guides/tree-shaking/) 기능을 제공한다.
이 기능은 번들(결과물 자바스크립트 파일)의 사이즈를 줄여서 로딩 속도 개선 등의 장점을 준다.

그런데 enum의 경우는 [**tree shaking이 되지 않는 이슈**](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)가 있다.

예를 들어, 아래와 같은 두 타입스크립트 파일이 있다고 하자.

Bundlers such as Webpack and Rollup provide [tree shaking](https://webpack.js.org/guides/tree-shaking/) that removes unused (i.e. not imported) codes.
This feature reduces the size of the bundle (result JavaScript file), so we can gain some advantages such as improvement of the loading speed.

However, there is an issue about **tree shaking** in bundling enum.

For example, let's say we have the following two TypeScript files:

(1) Fancy.ts

```typescript
export enum Color1 {
    Red,
    Green,
    Blue
}

export type Color2 = 'Red' | 'Green' | 'Blue';

export const color3Names = ['Red', 'Green', 'Blue'] as const;
export type Color3 = typeof color3Names[number];

export function foo() {
    console.log(1);
}

export function bar() {
    console.log(2);
}
```

(2) index.ts (Main entry)

```typescript
import { foo } from './Fancy';

foo();
```

Webpack으로 이 두 파일을 (production mode로) 빌드할 경우 아래와 같은 자바스크립트 파일이 나온다.

If you build these two files with Webpack (in production mode), the following JavaScript files are generated.

```javascript
!function(){"use strict";var e;!function(e){e[e.Red=0]="Red",e[e.Green=1]="Green",e[e.Blue=2]="Blue"}(e||(e={})),console.log(1)}();
```

보기 좋게 정리하면 아래와 같다.

Prettifying it gives the following code.

```javascript
!function() {
    "use strict";
    var e;
    !function(e) {
        e[e.Red = 0] = "Red",
        e[e.Green = 1] = "Green",
        e[e.Blue = 2] = "Blue"
    }(e||(e={})), console.log(1)
}();
```

import하여 사용한 foo를 제외하고 color3Names, bar는 번들에 포함되지 않았다
하지만 Color1는 사용하지 않았음에도 번들에 여전히 남아있는 것을 알 수 있다.

이런 문제가 발생하는 이유는, 타입스크립트 enum은 함수를 만들고 그 자리에서 호출하는 자바스크립트 코드([IIFE](https://developer.mozilla.org/ko/docs/Glossary/IIFE) 패턴)로 변환이 되는데, Webpack이 이 코드가 side effect이 있는지 없는지 확신하지 못하여 번들에서 제외시키지 못하는 것으로 추측한다.

Except for foo that was imported and used, color3Names and bar were not included in the bundle.
However, you can see that Color1 is still included in the bundle even though it has not been used.

The reason this problem occurs is that TypeScript enums are converted into JavaScript code ([IIFE](https://developer.mozilla.org/en/docs/Glossary/IIFE) pattern) that creates functions and calls them on the spot.
We think that the reason is that Webpack can't determine whether such code have side effects or not.

```typescript
// Original TypeScript code.
enum Color {
    Red,
    Green,
    Blue
}

// Result JavaScript code.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
```

## 대체 구현 Alternatives

기본적인 enum의 경우, string union type으로 대체하여 사용할 수 있다.

When we use enum in basic usage, we can replace it with a string union type.

```typescript
enum Color {
    Red,
    Green,
    Blue
}

// Alternative.
type Color = 'Red' | 'Green' | 'Blue';
```

만약 값들의 배열이 필요한 경우, 위에서 언급했듯이 `as const`([const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions))을 사용하면 된다.

If we need an array of values, we can use `as const` ([const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)) as mentioned above.

```typescript
const colorNames = ['Red', 'Green', 'Blue'] as const;
type Color = typeof colorNames[number]; // 'Red' | 'Green' | 'Blue'.
```

enum처럼 이름과 값을 매핑시키고 싶은 경우, object에 const assertion을 사용하면 된다.

If we want to map names to values, we can use const assertions on objects.

```typescript
enum Color {
    Red = 'MyRed',
    Green = 'MyGreen',
    Blue = 'MyBlue'
}

// Alternative.
const colorMap = {
    Red: 'MyRed',
    Green: 'MyGreen',
    Blue: 'MyBlue'
} as const;

type Color = keyof typeof colorMap; // 'Red' | 'Green' | 'Blue'.
```

## References

몇몇 링크들은 위 글에도 포함되어 있다.

Some links are also mentioned in this article.

- <https://code-masterjung.tistory.com/114>
- <https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/>
- <https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant>
- <https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums>
