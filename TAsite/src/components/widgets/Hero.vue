<script setup lang="ts">
import Picture from "@/components/core/Picture.vue";
import hero from '@/assets/images/hero.jpg';
const { t } = useI18n();

</script>
<template>

	<section>
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-12 md:py-20">
				<div class="text-center pb-12 md:pb-16">
					<h1 class="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4">
						<span class="wtext1">{{ t('projects.slogan1') }}</span>
						<span>{{ t('projects.slogan2') }}</span>
						<span class="wtext1 whitespace-nowrap">{{ t('projects.slogan3') }}</span>
					</h1>
					<div class="max-w-3xl mx-auto">
						<p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
							{{ t('projects.description') }}
						</p>
						<div class="max-w-none flex justify-center">
							<div>
								<a class="btn text-white bg-blue-600 hover:bg-blue-800 mb-4 sm:mb-0 font-bold" href="/" target="_blank" rel="noopener">{{ t('home.getToken') }}
								</a>
							</div>
							<div>
								<a class="btn text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800 ml-4" href="#">{{ t('home.LearnMore') }}
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="relative flex justify-center mb-8">
						<div class="flex flex-col justify-center">
							<Picture :src="hero" class="mx-auto rounded-md shadow-lg bg-gray-400 dark:bg-slate-700" :widths="[400, 768]" sizes=" (max-width: 767px) 400px, 768px" alt="Hero Image"
								aspectRatio="16:9" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
