let str = ''
let n = 2
for (let i = 0; i < n; i++) {
  for (let k = 0; k < (n - i); k++) {
    str += ' '
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    str += '*'
  }
  str += '\n'
}

for (let i = n; i >= 0; i--) {
  for (let k = 0; k < (n - i); k++) {
    str += ' '
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    str += '*'
  }
  if (i) str += '\n'
}
console.log(str);