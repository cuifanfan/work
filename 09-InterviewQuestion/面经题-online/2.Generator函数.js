function* another() {
  yield '人月神话'
}

function* gen() {
  yield* another() // 移交控制权
  const a = yield 'hello'
  console.log(a);
  const b = yield a
  yield b
}

const g = gen() // 迭代器对象
console.log(g.next());
console.log(g.next());
console.log(g.next('world'));
console.log(g.next('!'));
console.log(g.next());