<template>
	<div>
		<h2 class="title">{{uname}}</h2>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			uname: '我是。vue的App组件',
		}
	},
}
</script>

<style scoped>
.title {
	color: blue;
}
</style>