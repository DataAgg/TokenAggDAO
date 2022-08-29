<script setup lang="ts">
const { t } = useI18n();
const statsData = ref({
	stat1: '132K',
	stat2: '24.8K',
	stat3: '10.3K',
	stat4: '48.4K',

});
</script>
<template>
	<div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-6xl">
		<div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
			<div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
				<div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500"> {{ statsData.stat1 }} </div>
				<p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base"> {{ t('stats.title1') }} </p>
			</div>
			<div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
				<div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500"> {{ statsData.stat2 }} </div>
				<p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">{{ t('stats.title2') }} </p>
			</div>
			<div class="text-center md:border-r dark:md:border-slate-500">
				<div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500"> {{ statsData.stat3 }} </div>
				<p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">{{ t('stats.title3') }} </p>
			</div>
			<div class="text-center">
				<div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500"> {{ statsData.stat4 }} </div>
				<p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">{{ t('stats.title4') }} </p>
			</div>
		</div>
	</div>
</template>
