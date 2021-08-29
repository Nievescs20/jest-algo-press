<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
	<Layout>
		<template #sidebar-top>
			<img src="/profile.png" alt="face" />
		</template>
	</Layout>
</template>

<style scoped>
img {
	width: 70px;
	margin-left: 1rem;
	margin-top: 0.5rem;
}
</style>