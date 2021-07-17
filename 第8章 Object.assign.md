# 合并对象
Object.assign(目标对象, 待合并对象1, 待合并对象2, 待合并对象3 ...)
`浅拷贝`
```js
let person = {
  value: '222',
  year: ''
};
let person1 = {
  value: '12313'
};
Object.assign(person, {
  value: '2017',
  f: () => {
    console.log('asdf');
  },
  person1
});
person1.value = '鸿';
person.f();
console.log(person.person);  // {value: '鸿'}
```

# 对比 Object.create
Object.create(作为原型链上方的对象)，返回一个新对象
```js
const obj = Object.create({
  name:'shi'
})
obj.__proto__ // { name: 'shi' }
```