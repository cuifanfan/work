function objectFactory() {
  var obj = {}
  let Constrcutor = [].shift.call(arguments)
  obj.__proto__ = Constrcutor.prototype
  let result = Constrcutor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

function Person(uname, age) {
  this.uname = uname
  this.age = age
}

let cuifan = objectFactory(Person, '崔帆', 20)
console.log(cuifan);