var lengthOfLongestSubstring = function(s) {
  let l = r = 0,
    maxLen = 0;
  let myMap = new Map();
  while (r < s.length) {
    let pos = myMap.get(s[r]);
    if (pos >= l && pos <= r) {
      l = pos + 1;
    }
    myMap.set(s[r], r);
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};