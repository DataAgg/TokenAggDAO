<template>
	<router-view />
</template>
<script setup lang="ts">
import 'virtual:windi.css'
import "@/assets/styles/base.css";
import { onMounted } from 'vue'

onMounted(() => {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
})
</script>
