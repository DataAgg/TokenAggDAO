<script setup lang="ts">
import Picture from "@/components/core/Picture.vue";
import astronaut from '@/assets/images/astronaut.jpg';
import { Icon } from '@iconify/vue';
const { t } = useI18n();
</script>
<template>
	<section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl">
		<div class="grid gap-6 row-gap-10 md:grid-cols-2">
			<div class="md:py-6 md:pr-16 text-gray-700 dark:text-gray-400">
				<div class="flex">
					<div class="flex flex-col items-center mr-4">
						<div>
							<div class="flex items-center justify-center w-10 h-10 rounded-full border-pink-500 border-2">
								<Icon icon="akar-icons:arrow-down-thick" class="w-5 h-5" />
							</div>
						</div>
						<div class="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
					</div>
					<div class="pt-1 pb-8">
						<p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{{ t('Steps.item1') }} </p>
						<p>{{ t('Steps.item1description') }} </p>
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col items-center mr-4">
						<div>
							<div class="flex items-center justify-center w-10 h-10 rounded-full border-pink-500 border-2">
								<Icon icon="akar-icons:arrow-down-thick" class="w-5 h-5" />
							</div>
						</div>
						<div class="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
					</div>
					<div class="pt-1 pb-8">
						<p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{{ t('Steps.item2') }} </p>
						<p>{{ t('Steps.item2description') }} </p>
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col items-center mr-4">
						<div>
							<div class="flex items-center justify-center w-10 h-10 rounded-full border-pink-500 border-2">
								<Icon icon="akar-icons:arrow-down-thick" class="w-5 h-5" />
							</div>
						</div>
						<div class="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
					</div>
					<div class="pt-1 pb-8">
						<p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{{ t('Steps.item3') }} </p>
						<p>{{ t('Steps.item3description') }} </p>
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col items-center mr-4">
						<div>
							<div class="flex items-center justify-center w-10 h-10 rounded-full border-blue-600 border-2">
								<Icon icon="akar-icons:check" class="w-5 h-5" />
							</div>
						</div>
					</div>
					<div class="pt-1">
						<p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{{ t('Steps.item4') }} </p>
						<p>{{ t('Steps.item4description') }} </p>
					</div>
				</div>
			</div>
			<div class="relative">
				<Picture class="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700" :src="astronaut" :widths="[400, 768]"
					sizes="(max-width: 768px) 100vw, 432px" alt="Astronaut" aspectRatio="432:768" />
			</div>
		</div>
	</section>
</template>
