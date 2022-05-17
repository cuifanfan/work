var dailyTemperatures = function(T) {
  const len = T.length;
  const stack = [],
    res = new Array(len).fill(0);
  for (let i = 0; i < len; ++i) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const lowerIndex = stack.pop();
      res[lowerIndex] = i - lowerIndex;
    }
    stack.push(i);
  }
  return res;
};