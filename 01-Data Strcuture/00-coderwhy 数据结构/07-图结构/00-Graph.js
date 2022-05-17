let Dictionay = require('../04-字典结构/00-Dictionary')
let Queue = require('../01-队列结构/00-Queue')

class Graph {
  constructor() {
    this.vertexes = [] // 存储顶点
    this.adjList = new Dictionay() // 存储边
  }

  // 1.添加顶点
  addVertex(v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
  }

  // 2.添加边
  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  // 3.打印图
  toString() {
    let resultStr = ""
    for (let i = 0; i < this.vertexes.length; i++) {
      resultStr += this.vertexes[i] + '->'
      let adjArray = this.adjList.get(this.vertexes[i])
      for (let j = 0; j < adjArray.length; j++) {
        resultStr += adjArray[j] + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }

  // 4.初始化颜色
  initializeColor() {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }

  // 5.广度优先搜索
  bfs(v, handler) {
    // 1.初始化颜色(一个存储了每个结点状态的数组)[白色表示未访问过,可以加入对列,黑色表示已经访问过,不能加入队列]
    let colors = this.initializeColor()

    // 2. 创建队列
    let queue = new Queue()

    // 3.将传入的顶点放入队列
    queue.enqueue(v)

    // 将已经加入队列的顶点改为黑色
    colors[v] = 'black'

    while (!queue.isEmpty()) {
      // 4.从队列中取出一个顶点
      let qv = queue.dequeue()

      // 5.遍历该顶点的所有相连的顶点,根据颜色决定是否加入队列
      this.adjList.get(qv).forEach(adj => {
        if (colors[adj] === 'white') {
          colors[adj] = 'black'
          queue.enqueue(adj)
        }
      })

      if (handler) handler(qv)
    }

  }

  // 6.深度优先搜索
  dfs(v, handler) {
    // 初始化颜色
    let colors = this.initializeColor()

    //从某个顶点开始访问
    this.dfsVisit(v, colors, handler)

  }

  dfsVisit(v, colors, handler) {
    // 1.访问该顶点
    if (handler) handler(v)

    // 2.访问完的结点设置为黑色
    colors[v] = 'black'

    // 3. 获得所有相连的顶点
    let vAdj = this.adjList.get(v)

    // 4.递归访问所有的白色结点
    for (let i = 0; i < vAdj.length; i++) {
      if (colors[vAdj[i]] === "white") {
        this.dfsVisit(vAdj[i], colors, handler)
      }
    }
  }
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.dfs('A', item => {
  console.log(item);
})