<template>
	<div>
		<div>
			<ul>
				<li v-for="item in arr">{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeNews',

	data() {
		return {
			arr: ['news', 'news', 'news'],
		}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped>
</style>