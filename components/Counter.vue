<script setup>
import { ref } from 'vue'
const a = ref(3)
const changeA = () => { a.value++ }
</script>

<template>
	<h3>Counter</h3>
	<p @click="changeA">A: {{ a }}</p>
</template>