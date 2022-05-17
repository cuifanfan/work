// function shuffle(arr) {
//   arr.sort(function() {
//     return Math.random() - 0.5
//   })
//   return arr
// }

function shuffle(arr) {

  for (let i = arr.length, j; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]
  }
  return arr
}



let arr = [1, 2, 3, 4, 5]
console.log(shuffle(arr));