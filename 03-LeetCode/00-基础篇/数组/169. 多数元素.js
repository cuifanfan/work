/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 看到时间复杂度压缩到n，空间复杂度压缩到1，首选摩尔投票法
  // 不清楚摩尔投票算法的可以看看这个视频：https://www.bilibili.com/video/BV1Co4y1y7LL?spm_id_from=333.337.search-card.all.click
  let count = 0
    // 选出的元素
  let target = 0
  for (let num of nums) {
    if (count === 0) target = num
    count += target === num ? 1 : -1
  }
  return target
};