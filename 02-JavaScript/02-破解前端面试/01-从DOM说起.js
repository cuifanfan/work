// <!-- 文章链接：https://juejin.cn/post/6844903474547671047 -->

// 1. 变量命名：结点类的变量，加上nd前缀
// 2. 选择符命名，给JS用的添加上'js-',提高可读性
// 3. 容错能力：对结点的存在性做检查，单个地方的JS代码出错会导致后续代码不执行
// 4. 最小作用域原则：把代码包含在立即执行函数里面，避免创建全局变量。这是维护遗留代码谨记的。可以防止变量名冲突的危险同时可以避免使用全局变量

(() => {
  var ndContainer = document.getElementById('js-list');
  if (!ndContainer) {
    return;
  }

  for (let i = 0; i < 300; i++) {
    const ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndContainer.appendChild(ndItem);
  }

  ndContainer.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === 'LI') {
      alert(target.innerHTML);
    }
  });
})();

// 当要页面中插入大量DOM元素的时候怎么处理？
// 此时页面体验不太流畅,甚至会出现明显的卡顿


// 现代浏览器提供了requestAnimationFrame来解决非常耗时的代码段对渲染的阻塞问题执行的事件太长,浏览器的渲染帧率太低.

// 综合上面分析, 可以从两个方面减少主线程阻塞的时间:
//   减少DOM操作次数-- > 使用DocumentFragment;
// 缩短循环时间-- > 把原本的大量插入DOM任务分批次插入, 使用requestAnimationFrame