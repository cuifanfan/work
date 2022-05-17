<template>
	<div id="app">
		<h1>我是网站的标题</h1>
		<!-- router-link是一个内置的组件，会被渲染为a标签，router-view会i根据当前的路径，动态渲染出不同的组件 -->
		<!-- tag可以指定为router-link渲染为一个什么标签 -->
		<!-- <router-link
			to="/home"
			tag="button"
		>首页</router-link>
		<router-link
			to="/about"
			replace
		>关于</router-link> -->
		<button @click="linkToHome">首页</button>
		<button @click="linkToAbout">关于</button>
		<router-link to="/user/1">用户</router-link>
		<!-- 传递参数主要有两种方式，params和query -->
		<!-- <router-link :to="{path:'/profile/'+123,query:{name:'why',age:18}}">传递参数</router-link> -->
		<button @click="sendMessage">传递参数</button>
		<keep-alive exclude="About">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},

	methods: {
		linkToHome() {
			this.$router.push('/home')
		},
		linkToAbout() {
			this.$router.push('/about')
		},
		sendMessage() {
			this.$router.push({
				path: '/profile/' + 123,
				query: { uname: 'cuifan', age: 18 },
			})
		},
	},
}
</script>

<style>
.cuifan {
	font-size: 60px;
}
</style>
