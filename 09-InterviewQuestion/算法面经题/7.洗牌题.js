//rand(0, i) 生成 [0, i] 之间的随机整数

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}