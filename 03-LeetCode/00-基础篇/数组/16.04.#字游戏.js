// var tictactoe = function(board) {
//   let len = board.length
//   console.log(len);
//   // 1.行（分出胜负）
//   for (let i = 0; i < len; i++) {
//     if (board[i][0]) {
//       // 本行首位字符存在
//       // 判断本行所有字符是否一致
//       let flag = [...board[i]].every(item => item === board[i][0])
//       if (flag) return board[i][0]
//     }
//   }

//   // 2.列（分出胜负）
//   for (let i = 0; i < len; i++) {
//     if (board[0][i]) {
//       let flag = true
//       for (let j = 1; j < len; j++) {
//         if (board[j][i] !== board[0][i]) flag = false
//       }
//       if (flag) return board[0][i]
//     }
//   }

//   // 3.对角线（分出胜负）
//   if (board[0][0]) {
//     let flag = true
//     for (let i = 1; i < len; i++) {
//       if (board[i][i] !== board[0][0]) flag = false
//     }
//     if (flag) return board[0][0]
//   }

//   if (board[0][len - 1]) {
//     let flag = true
//     for (let i = len - 1; i >= 0; i--) {
//       if (board[len - 1 - i][i] !== board[0][len - 1]) flag = false
//     }
//     if (flag) return board[0][len - 1]
//   }

//   // 4. 平局
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (board[i][j] === ' ') return 'Pending'
//     }
//   }
//   return 'Draw'
// };

// // let board = [" O    X", " O     ", "     O ", "XXXXXXX", "  O    ", " O   O ", "O  X OO"]
// let board = ["   X O  O ", " X X    O ", "X  X    O ", "X    OX O ", "X   XO  O ", "X  X O  O ", "O  X O  O ", "     O  OX", "     O  O ", "   X XXXO "]
// console.log(tictactoe(board));



var tictactoe = function(board) {
  let hasBlank
  board = board.map(item => {
    // 遍历，转换字符串成数组，如果有空位，记录
    if (item.includes(' ')) {
      hasBlank = true
    }
    return item.split('')
  })
  let len = board.length
  let result

  // 第一行的元素只能向下行动
  // 第一列的元素只能向右行动
  for (let i = 0; i < len; i++) {
    dfs(0, i, 1, board[0][i], [1, 0])
    dfs(i, 0, 1, board[i][0], [0, 1])
  }
  // 特殊处理，[0, 0]可以向右下，[0, len - 1]可以向走下
  dfs(0, 0, 1, board[0][0], [1, 1])
  dfs(0, len - 1, 1, board[0][len - 1], [1, -1])
  return result ? result : hasBlank ? 'Pending' : 'Draw'
    /**
     * @desc: 
     * @param {Number} row  行坐标
     * @param {Number} col  列坐标
     * @param {Number} index  统计一样的棋子数量
     * @param {String} target 上一步的棋子（X、O）
     * @param {Array} step  棋子移动方向
     * @return {voild}
     */
  function dfs(row, col, index, target, step) {
    // 裁剪
    if (target === ' ') {
      return
    }
    if (index === len) {
      result = target
      return
    }
    let [r, c] = step
    let nextRow = row + r
    let nextCol = col + c
      // 可以继续下一步的条件判断
    if (nextRow < len && nextCol < len && nextCol > -1 && nextRow > -1 && board[nextRow][nextCol] === target) {
      dfs(nextRow, nextCol, index + 1, target, step)
    }
  }
};

var tictactoe = function(board) {
  let colSum = [] // 列的和
  let rowSum = [] // 行的和
  let tangleSum = [] // 对角线的和
  let status = 'Pending'
  let len = board.length

  // 把每个字符串都转换为数组
  board = board.map(item => {
    return item.split("")
  })

  // 行
  for (let i = 0; i < len; i++) {
    let oSum = board[i].filter(item => item === 'X').length
    let xSum = board[i].filter(item => item === 'O').length
    rowSum.push([oSum, xSum])
  }

  // 列
  for (let i = 0; i < len; i++) {
    let oSum = 0
    let xSum = 0
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] === 'X') {
        xSum++
      } else if (board[j][i] === 'O') {
        oSum++
      }
    }
    colSum.push([oSum, xSum])
  }

  // 对角线
  let tOSum = 0
  let tXSum = 0
  for (let i = 0; i < len; i++) {
    if (board[i][i] === 'X') {
      tXSum++
    } else if (board[i][i] === 'O') {
      tOSum++
    }
  }
  tangleSum.push(tOSum, tXSum);

  // 得出结果(X或者O获胜)
  [...colSum, ...rowSum].forEach(item => {
    if (item.includes(len)) {
      status = item[0] === len ? 'O' : 'X'
    }
  })

  if (tangleSum.includes(len)) status = tangleSum[0] === len ? 'O' : 'X'

  // 平局
  let total = rowSum.reduce((prev, curr) => {
    return prev + curr[0] + curr[0]
  }, 0)

  if (total === len * len) {
    status = 'Draw'
  }

  return status
}

var tictactoe = function(board) {
  let N = board.length
  let arr = board.join('').split('');
  for (let i = 0; i < arr.length - N + 1; i++) {
    if (arr[i] !== ' ' && isOK(i, arr, N)) { //空格不应该加到判断里去 
      return arr[i]
    }
  }
  if (arr.includes(' ')) {
    return 'Pending'
  } else {
    return 'Draw'
  }
};

function isOK(index, arr, N) {
  let tempN = N
  let tempIndex = index
  if (index % N == 0) {
    while (--N) {
      if (arr[index] == arr[index + 1]) {
        index += 1;
      } else {
        break
      }
    }
    if (N == 0) return true
    N = tempN
    index = tempIndex
  }
  if (index >= 0 && index <= N - 1) {
    while (--N) {
      if (arr[index] == arr[index + tempN]) {
        index += tempN;
      } else {
        break
      }
    }
    if (N == 0) return true
    N = tempN
    index = tempIndex
  }
  if (index == 0) {
    while (--N) {
      if (arr[index] == arr[index + tempN + 1]) {
        index += tempN + 1;
      } else {
        break
      }
    }
    if (N == 0) return true
  }
  if (index == N - 1) {
    while (--N) {
      if (arr[index] == arr[index + tempN - 1]) {
        index += tempN - 1;
      } else {
        break
      }
    }
    if (N == 0) return true
  }
  return false
}