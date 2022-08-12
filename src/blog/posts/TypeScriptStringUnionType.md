타입스크립트에서 string의 union type을 enum과 유사한 용도로 쓸 수 있다.

In TypeScript, we can use the union type of string for a similar purpose to enum.

```typescript
type Category = 'Computer' | 'Music' | 'Misc';

const currentCategory: Category = 'Computer';
```

**Const assertion**을 활용하면, string의 배열을 만들고 그 배열에서 union type을 추출하는 방식으로 union type과 type의 배열을 동시에 얻을 수가 있다.

Using the **const assertion**, we can obtain a union type and an array of types at the same time by creating an array of strings and extracting the union type from the array.

```typescript
const allCategories = ['Computer', 'Music', 'Misc'] as const; // Const assertion.
type Category = (typeof allCategories)[number]; // 'Computer' | 'Music' | 'Misc'.

const currentCategory: Category = 'Computer';

allCategories.forEach(category => {
    console.log(category);
});
```

이 블로그에서도 카테고리, 테마 등의 타입들을 구현할 때 이 방법을 사용하였다.

This blog also used this method when implementing types such as categories and themes.
