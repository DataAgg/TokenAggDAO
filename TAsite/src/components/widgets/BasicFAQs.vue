<script setup lang="ts">
import { Icon } from '@iconify/vue';
const { t } = useI18n();
</script>
<template>

	<div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
		<div class="max-w-xl sm:mx-auto lg:max-w-2xl">
			<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<h2 class="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
					{{ t('faq.name') }}
				</h2>
			</div>
		</div>
		<div class="max-w-screen-xl sm:mx-auto">
			<div class="grid grid-cols-1 gap-8 lg:gap-16 row-gap-8 md:grid-cols-2">
				<div class="space-y-8">
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q1') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a1') }}
						</p>
					</div>
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q3') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a3') }}
						</p>
					</div>
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q5') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a5') }}
						</p>
					</div>
				</div>
				<div class="space-y-8">
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q2') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a2') }}
						</p>
					</div>
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q4') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a4') }}
						</p>
					</div>
					<div>
						<p class="mb-4 text-xl font-bold">
							<Icon icon="akar-icons:arrow-down-right" class="wicon text-blue-500" />{{ t('faq.q6') }}
						</p>
						<p class="text-gray-700 dark:text-gray-400 mb-2">
							{{ t('faq.a6') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
