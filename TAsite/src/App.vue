<template>
	<n-config-provider :theme="appStore.dark?darkTheme:null">
		<router-view />
	</n-config-provider>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { darkTheme } from 'naive-ui';
import { useAppStore } from '@/stores';

const { locale } = useI18n();

const appStore = useAppStore();

onMounted(() => {
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
