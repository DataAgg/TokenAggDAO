<script setup lang="ts">
import { SITE } from "@/config";
const { t } = useI18n();
</script>
<template>

	<section class="relative">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-12 md:py-20">
				<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
					<h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
						<span class="whitespace-nowrap">{{ t('projects.name') }}</span>
					</h2>
					<p class="text-xl text-gray-600 dark:text-slate-400">
						Be very surprised by these huge fake numbers you are seeing on this
						page. <br class="hidden md:inline" />Don't waste more time! :P
					</p>

					<div class="mt-6">
						<a class="btn text-white bg-blue-600 hover:bg-blue-800 sm:mb-0 font-bold" :href="SITE.domain" target="_blank" rel="noopener">{{ t('home.getToken') }} </a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
