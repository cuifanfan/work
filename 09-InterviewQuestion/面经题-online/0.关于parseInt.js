console.log(['0', '0', '0'].map(str => parseInt(str)));
console.log(['1', '0', '1'].map(Number));
function (params) {
    
}

// map把(value,index)传递给parseInt
// ('0', 0), ('0', 1), ('0', 2)
// ('1', 0), ('0', 1), ('1', 2)

// parseInt(string, radix)

// parseInt会根据后面指定的radix来解析string
// radix默认区间范围为 【2-36】，如果radix为0, 则以十进制解析
// 如果忽略该参数：
// (1) 如果string以 "0x"开头， parseInt() 会把string其他部分解析为十六进制的整数，parseInt('0xf') => 15
// (2) 如果string以0开头，其后的字符被解析为八进制或者十六进制的数字
// (3) 如果以1~9的数字开头，解析为十进制的整数
// (4) 第一个字符不难转换为数字，返回NaN