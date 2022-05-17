<template>
	<div>
		<h2>{{$route.params}}</h2>
	</div>
</template>

<script>
export default {
	name: 'WorkUser',

	data() {
		return {}
	},

	mounted() {
		console.log('User mounted')
	},

	methods: {},
}
</script>

<style scoped>
</style>