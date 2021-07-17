# 到底什么是iterable？
iterable指可迭代的，目前所有内置可迭代对象是：`6个`
`String`、`Array`、`TypedArray`、`Map` 、`Set` 以及 `生成器`

也可以自己实现迭代器：
*迭代器方式*
```js
function makeIterator(array) {
    let nextIndex = 0;
    return {
       next: function () {
           return nextIndex < array.length ? {
               value: array[nextIndex++],
               done: false
           } : {
               done: true
           };
       }
    };
}

let it = makeIterator(['哟', '呀']);

console.log(it.next().value); // '哟'
console.log(it.next().value); // '呀'
console.log(it.next().done);  // true
```
*生成器方式*
```js
const obj = {
  name: 'shizhanhong',
  gender: 'male'
};
obj[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...obj]); // [1, 2, 3]
```

# iterable可以使用的语法
1. `for...of`
2. `...展开语法`
3. `yield*`
    ```js
    function* gen() {
      yield* ["a", "b", "c"];
    }

    gen().next(); // { value: "a", done: false }
    ```
4. `解构赋值`
    ```js
    const [a, b, c] = new Set(["a", "b", "c"]);
    a // "a"
    ```