/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split(".")
  version2 = version2.split(".")
  let longItem = version2.length > version1.length ? version2 : version1
  let shortItem = version2.length < version1.length ? version2 : version1
  let length = shortItem.length
  for (let i = 0; i < length; i++) {
    // version1[i]和version2[i]肯定存在
    let m = 0
    let n = 0

    // 跳过0
    while (version1[i][m] === '0') {
      m++
    }
    while (version2[i][n] === '0') {
      n++
    }
    let number1 = version1[i].slice(m, version1[i].length)
    let number2 = version2[i].slice(n, version2[i].length)
    let result = number1 - number2
    if (result === 0) continue
    else if (result > 0) return 1
    else return -1
  }
  for (let j = shortItem.length; j < longItem.length; j++) {
    let k = 0
    while (k < longItem.length) {
      if (longItem[j][k] - 0 > 0) return longItem === version1 ? 1 : -1
      k++
    }
  }
  return 0
};

console.log(compareVersion('1.0', '1.0.0'));