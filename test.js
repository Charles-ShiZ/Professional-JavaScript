function* createGenerator(){
  yield 1;
  yield 2;
  yield 3;
}
const generator = createGenerator()
// 生成器即是 可迭代对象
console.log(...generator) // 1,2,3
// 也是 迭代器
console.log(generator.next().value) // 1
console.log(generator.next().value) // 2
console.log(generator.next().value) // 3