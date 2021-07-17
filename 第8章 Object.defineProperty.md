# 对象的属性分两种
1. 数据属性
   数据属性有4个特性：
   1. configurable:
      1. 默认为`true`
      2. 表示该属性是否可以`通过delete关键字删除`
      3. 表示是否可以`修改该属性的特性`
      4. 表示是否可以`切换该属性为访问器属性`
   2. enumerable:
      1. 默认为`true`
      2. 表示该属性是否可以`通过for-in循环返回`
   3. writable:
      1. 默认为`true`
      2. 表示该属性是否可以`修改`
   4. value: 表示该属性的值
2. 访问器属性
   访问器属性有4个特性：
   1. configurable:
      1. 默认为`true`
      2. 表示该属性是否可以`通过delete关键字删除`
      3. 表示是否可以`修改该属性的特性`
      4. 表示是否可以`切换该属性为数据属性`
   2. enumerable:
      1. 默认为`true`
      2. 表示该属性是否可以`通过for-in循环返回`
   3. get: 函数，在读取属性时使用
   4. set: 函数，在修改属性时使用
   
# 修改属性特性
  使用Object.defineProperty和Object.defineProperties，注意：

  这两个函数`只能修改已经存在的属性值，并不能添加属性值`

  ## 修改数据属性的特性
  ```js
  const obj = {
    name:'shizhanhong',
    gender:'male'
  }
  Object.defineProperty(obj, 'name', {
    configurable:false,
    enumerable:false,
    writable:false,
    value:'liujiating'
  })
  Object.defineProperties(obj, {
    gender: {
      configurable:false,
      enumerable:false,
      writable:false,
      value:'male'
    }
  })
  ```

  ## 修改数据属性的特性
  ```js
  const obj = {
    name:'shizhanhong',
    gender:'male'
  }
  Object.defineProperty(obj, 'name', {
    configurable:false,
    enumerable:false,
    get(){
      return this.name;
    },
    set(newValue){
      if(newValue === 'liujiating') {
        this.name = 'liujiating'
      }
    },
  })
  ```

# 读取属性特性
使用Object.getOwnPropertyDescriptor()和Object.getOwnPropertyDescriptors()
`注意：这两个方法都只对对象的自身属性有效，对对象的原型属性无效`
```js
const obj = {
  name:'shizhanhong',
  gender:'mal'
}
Object.getOwnPropertyDescriptor(obj, 'name') 
// {
//    configurable: true,
//    enumerable: true,
//    value: "222",
//    writable: true
// }
Object.getOwnPropertyDescriptors(obj)
```
