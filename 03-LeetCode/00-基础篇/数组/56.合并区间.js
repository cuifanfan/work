/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let len = intervals.length
  intervals.sort((x, y) => x[0] - y[0])
  let arr = [] // 返回数组
  arr.push(intervals[0])
    // 哪种情况不需要合并？(1)左[1]<右[0] (2)左[1]>=右[0]、右[1]>左[1]
  for (let i = 1; i < len; i++) {
    // 现在情况是右[0]>=左[0]
    let j = arr.length - 1
    if (arr[j][1] < intervals[i][0]) {
      arr.push(intervals[i])
    } else if ((arr[j][1] >= intervals[i][0] && arr[j][1] >= intervals[i][1])) {} else {
      // 合并的情况
      arr[j] = [arr[j][0], Math.max(arr[j][1], intervals[i][1])]
    }
  }
  return arr
};