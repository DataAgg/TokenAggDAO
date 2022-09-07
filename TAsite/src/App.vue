<template>
	<router-view />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const { locale } = useI18n();

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

	useHead({
  htmlAttrs: {
    lang: locale,
  },
  // bodyAttrs: {
  //   class: bodyClass,
  // },
  meta: [
    {
      rel: 'msapplication-TileColor',
      content: '#388370',
    },
  ],
})
})
</script>
