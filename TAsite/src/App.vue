<template>
	<router-view />
</template>
<script setup lang="ts">
import 'uno.css';
import 'virtual:windi.css'
import "@/assets/styles/base.css";
import { onMounted } from 'vue'
const { locale } = useI18n()

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
  link: [
    {
      rel: 'mask-icon',
      color: '#388370',
      href: '/assets/safari-pinned-tab.svg',
    },
  ],
})
})
</script>
