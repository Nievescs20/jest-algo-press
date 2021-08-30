<script setup>
import { defineProps } from 'vue'
defineProps({
	title: String
})
</script>

<template>
	<h2>{{ title }}</h2>
	<div class="col-container">
		<slot name="header"></slot>
	</div>
</template>	

<style scoped>
.col-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1rem;
	row-gap: 1rem;
	justify-items: stretch;
}
@media only screen and (max-width: 600px) {
	body {
		background-color: lightblue;
	}
}
h2 {
	text-align: center;
}
</style>