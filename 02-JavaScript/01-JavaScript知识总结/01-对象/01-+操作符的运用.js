let obj = {
  valueOf() {
    console.log('valueOf被调用');
    return {
      uname: 'valueOfReturnedObj',
      toString() {
        console.log('valueOfReturnedObj 被调用');
        return 'valueOfReturnedObj -> toString'
      }
    }
  },
  toString() {
    console.log('toString 被调用');
    // return 'toString'
    return '1'
  }
}

console.log(typeof(+obj));