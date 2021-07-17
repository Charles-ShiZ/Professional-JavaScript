# Object.is
与 `===` 类似，不同的是，它能区分+0与-0，-0与0，能判定NaN与NaN相等
```js
+0 === 0 // true
-0 === 0 // true
+0 === -0 // true

Object.is(+0, 0) // true
Object.is(-0, 0) // false
Object.is(+0, -0) // false

undefined === undefined // true
null === null // true
NaN === NaN // false
Object.is(NaN, NaN) // true
```