<script setup lang="ts">
// import { Icon } from '@iconify/vue';
const { t } = useI18n();
</script>
<template>

	<section class="relative">
		<div class="absolute inset-0 bg-blue-50 dark:bg-slate-800 pointer-events-none mb-32" aria-hidden="true"></div>
		<div class="relative max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-4 pt-8 sm:py-6 lg:py-8 lg:pt-12">
				<div class="mb-8 text-center">
					<h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">{{ t('features.title2') }}</h2>
					<p class="max-w-3xl mx-auto text-center text-xl text-gray-600 dark:text-slate-400">{{ t('features.subTitle') }}</p>
				</div>
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start my-12 dark:text-white">
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature1Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature1Description') }}
						</p>
					</div>
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature2Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature2Description') }}
						</p>
					</div>
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature3Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature3Description') }}
						</p>
					</div>
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature4Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature4Description') }}
						</p>
					</div>
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature5Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature5Description') }}
						</p>
					</div>
					<div class="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800">
						<div class="flex items-center mb-4">
							<div class="ml-4 text-xl font-bold">{{ t('features.feature6Title') }}</div>
						</div>
						<p class="text-gray-500 dark:text-gray-400 text-md min-h-18">
							{{ t('features.feature6Description') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
