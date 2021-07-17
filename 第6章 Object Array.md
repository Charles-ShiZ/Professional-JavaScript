# ES6为Array新增的方法：
1. Array.isArray(): 判断是否为数组
2. array.keys()、array.values()、array.entries()
   ```js
   const array = ["foo","bar","baz","qux"]
   const arrayKeys = Array.from(array.keys())
   const arrayValues = Array.from(array.values())
   const arrayEntries = Array.from(array.entries())
   arrayKeys // [0,1,2,3]
   arrayValues // ["foo","bar","baz","qux"]
   arrayEntries // [[0,"foo"],[1,"bar"],[2,"baz"],[3,"qux"]]

   for(const [idx, element] of a.entries()){
     console.log(idx, element)
   }
   ```
3. fill
4. copyWithin
