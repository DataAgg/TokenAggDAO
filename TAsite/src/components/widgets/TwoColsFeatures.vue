<script setup lang="ts">
import { Icon } from '@iconify/vue';
const { t } = useI18n();
</script>
<template>

	<section class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20 bg-blue-50 dark:bg-slate-800">
		<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
			<p class="text-base text-blue-600 dark:text-blue-200 font-semibold tracking-wide uppercase">{{ t('features.title') }}</p>
			<h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
				{{ t('features.title2') }}
			</h2>
			<p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">{{ t('features.subTitle') }}
			</p>
		</div>
		<div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
			<div class="space-y-8 sm:px-8">
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature1Title') }} </h3>
						<p> {{ t('features.feature1Description') }} </p>
					</div>
				</div>
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature3Title') }} </h3>
						<p> {{ t('features.feature3Description') }} </p>
					</div>
				</div>
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature5Title') }} </h3>
						<p> {{ t('features.feature5Description') }} </p>
					</div>
				</div>
			</div>
			<div class="space-y-8 sm:px-8">
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature2Title') }} </h3>
						<p> {{ t('features.feature2Description') }} </p>
					</div>
				</div>
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature4Title') }} </h3>
						<p> {{ t('features.feature4Description') }} </p>
					</div>
				</div>
				<div class="flex flex-row max-w-md">
					<div class="mb-4 mr-4">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
							<Icon icon="mdi:star-circle" class="w-12 h-12 text-blue-600" />
						</div>
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold"> {{ t('features.feature6Title') }} </h3>
						<p> {{ t('features.feature6Description') }} </p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
