<template>
	<div>
		<ul>
			<li v-for="item in arr">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'WorkHomemessage',

	data() {
		return {
			arr: ['message', 'message', 'message'],
		}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
</style>