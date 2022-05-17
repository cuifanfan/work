class VueRouter {
  constructor() {

  }

  // vue.use(VueRouter)就是执行VueRouter对象的install方法


  // 关于Vue.use(plugin)
  // （1）参数：(Object|Function) plugin
  // （2）用法：如果插件是一个对象，必须提供install方法。如果插件是一个函数，它会被作为install方法。调用install方法时，会把Vue作为参数传入。install方法被同一插件多次调用时，插件也只会安装一次。
  // （3）作用：注册插件，只需要调用install方法并将Vue作为参数传入即可，细节上：
  // 1.插件的类型
  // 2.插件只能被安装一次，保证插件列表中不能有重复的插件

  // 实现：
  static install() {

  }
}

Vue.use = function(plugin) {

}

export default VueRouter