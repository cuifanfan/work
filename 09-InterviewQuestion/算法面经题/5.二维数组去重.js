let arr = [
  [1, 2, 3],
  [2, 3, 4],
  [2, 1, 3],
  [5, 6, 7]
]

let arr1 = [
    ['1', '2', '3'],
    ['2', '3', '4'],
    ['2', '1', '3'],
    ['5', '6', '7']
  ]
  // console.log(unique(arr));

function unique(matrix) {
  let res = {}
  matrix.forEach((item, index) => {
    item.sort((x, y) => x - y)
    res[item] = item
  })
  return Object.values(res)
}

console.log(unique(arr));