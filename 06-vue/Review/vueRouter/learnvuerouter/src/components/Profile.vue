<template>
	<div>
		<h2>我是传递参数页面</h2>
		<p>参数为：{{$route.params}}</p>
		<p>参数为：{{$route.query}}</p>
		<p>{{$route.path}}</p>
	</div>
</template>

<script>
export default {
	name: 'Profile',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
</style>