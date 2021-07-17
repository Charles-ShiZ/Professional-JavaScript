# Map
## 基本用法
```js
const map = new Map([
  ['a', 'a'], 
  ['b', 'b'], 
  ['c', 'c']
]) // 创建
map.has('a') // 判断
map.get('a') // 获取
map.set('a','aaaaa') // 修改
map.delete('a') // 删除
map.clear() // 删除全部
map.size // 数量
```

## 迭代
map.entries 与 map[Symbol.iterator] 相同 
```js
const map = new Map([
  'a':'a',
  'b':'b',
  'c':'c'
])
map.entries === map[Symbol.iterator] // true
for(let pair of m.entries()){
  console.log(pair)
}
```
## Map与Object的区别
1. 属性名方面：Object的属性名只能是`string`和`number`；Map的属性名可以使`任何`Javascript类型。
2. 内存方面：Map比Object更省内存
3. 插入性能：Map性能更佳
4. 查找速度：差别不大。当属性名是整数时，Object会快一点
5. 删除性能：Map性能更加。Object的delete操作一直以来都是饱受诟病。
综合所述，Map更佳。

## 特别之处
1. 如果Map的属性名是一个引用类型，那么Map是将其`引用`作为key。
    
    *例子：*
    ```js
    const map1 = new Map();
    const objKey = {},
      objVal = { '123': '12' };
    map1.set(objKey, objVal);
    console.log(map1.get(objKey));
    objKey.afsd = 'asdf';
    console.log(map1.get(objKey) === map1.get(objKey));
    ```

# WeakMap
## WeakMap与Map的不同点：
1. WeakMap的`键`只能是Object或者是继承自Object的类型，如Object、Array以及function；而Map的`键`可以是任何值。
2. WeakMap没有`clear()`，不能`迭代`(for...of...)。
3. WeakMap的`键`是弱引用。弱引用可以更快速地让垃圾回收机制回收。

   *代码对比：*

   *WeakMap: 只需要清除WeakMap自身之外的引用，垃圾回收机制就会马上回收*
   ```js
    // 使用 `node --expose_gc index.js` 执行
    console.log('初始的内存',process.memoryUsage().heapUsed);
    let map = new WeakMap();
    let key = new Array(5 * 1024 * 1024);
    map.set(key, 1);
    console.log('现在使用的内存',process.memoryUsage().heapUsed);
    key = null;

    global.gc() // 手动执行垃圾回收
    console.log('垃圾回收之后的内存',process.memoryUsage().heapUsed);
   ```

   *Map: Map需要清除自身以及自身之外的所有引用，垃圾回收机制才会回收*
   ```js
    // 使用 `node --expose_gc index.js` 执行
    console.log('初始内存',process.memoryUsage().heapUsed);

    let map = new WeakMap();
    let key = new Array(5 * 1024 * 1024);
    map.set(key, 1);

    console.log('现在使用的内存',process.memoryUsage().heapUsed);

    map.delete(key);
    key = null;

    global.gc()
    console.log('垃圾回收之后的内存',process.memoryUsage().heapUsed);
   ```