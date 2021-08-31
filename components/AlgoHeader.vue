// https://v3.vuejs.org/api/sfc-script-setup.html#typescript-only-features

<script setup>
import { defineProps } from 'vue'
const msg = 'hello'
function log() {
  console.log(`🟢  msg `, msg)
}

defineProps({
	title: String
})
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="slot">
  	<slot name="header" />
  </div>
	<!-- <p @click="log">{{ title }}</p>
	<slot name="dumb" /> -->
  <div class="row">
    <label>Time Complexity:</label><img src="/katex/nlogn.svg" alt="yes" width="70"/>
  </div>
</template>	

<style scoped>
.slot {
  margin: 0;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
}
label {
  font-family: Menlo;
  font-size: .75rem;
}

</style>