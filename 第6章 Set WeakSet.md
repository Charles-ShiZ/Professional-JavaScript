# Set
与Map类似，不同的是，Set中的`键`是唯一的，Set中的值是有序的。
Set可以作去重功能。
## 基本用法
```js
const set = new Set([
  ['a', 'a'], 
  ['b', 'b'], 
  ['c', 'c']
]) // 创建
map.has('a') // 判断
map.get('a') // 获取
map.add(['a','aaaaa']) // 修改
map.delete(['a','aaaaa']) // 删除
map.clear() // 删除全部
map.size // 数量
```
## 浅复制
```js
let arr1 = [{}]
let arr2 = [...arr1]
arr1[0].foo = 'bar'
arr2[0] // { foo: 'bar'} 
```
# WeakSet
与WeakMap类似