// in操作符:在可以通过对象访问该属性时返回true,不管该属性在对象上还是在其原型上
// hasOwnProperty():只有属性存在于实例上才返回true

// 枚举属性：
// 1. for in： 该对象上能访问的可枚举属性都会被返回
// 2. Object.getOwnPropertyNames():返回所有的实例属性，无论是否可以枚举
// 3. Object.getOwnPropertySymbols():返回实例上所有的符号属性
// 4. Object.keys():返回实例自身可枚举属性的一个数组
// 5. Object.assign(a,b):把b中所有的可枚举属性全部复制到a

// Object.assign、Object.getOwnPropertyNames、Object.getOwnPropertyNames的枚举属性是特定的：
// 先以升序枚举数值键、再以插入顺序枚举字符串和符号键