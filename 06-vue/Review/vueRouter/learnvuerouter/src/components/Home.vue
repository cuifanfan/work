<template>
	<div>
		<h2>我是首页标题</h2>
		<p>我是首页的内容</p>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">文章</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Home',

	data() {
		return {}
	},

	mounted() {
		console.log('Home mounted')
	},

	methods: {},
}
</script>

<style scoped>
</style>