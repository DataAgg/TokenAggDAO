<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
	<section>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
			<div class="py-12 md:py-20">
				<div class="py-4 sm:py-6 lg:py-8">
					<div class="flex flex-wrap md:-mx-8">
						<div class="w-full lg:w-1/2 px-0 sm:px-8">
							<div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
								<h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading">{{ t('StepsFeatures.title') }} </h2>
								<p class="mb-8 text-xl text-gray-600 dark:text-slate-400">{{ t('StepsFeatures.description') }} </p>
								<div class="w-full">
									<a class="btn bg-blue-600 hover:bg-blue-700 text-white font-bold" href="#" target="_blank" rel="noopener"> {{ t('home.getToken') }} </a>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-1/2 px-0 sm:px-8">
							<ul class="space-y-12">
								<li class="flex md:-mx-4">
									<div class="pr-4 sm:pl-4">
										<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
											1
										</span>
									</div>
									<div class="px-4">
										<h3 class="mb-4 text-xl font-semibold">{{ t('StepsFeatures.item1') }} </h3>
										<p class="text-gray-500 dark:text-gray-400">{{ t('StepsFeatures.item1description') }} </p>
									</div>
								</li>
								<li class="flex md:-mx-4">
									<div class="pr-4 sm:pl-4">
										<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
											2
										</span>
									</div>
									<div class="px-4">
										<h3 class="mb-4 text-xl font-semibold">{{ t('StepsFeatures.item2') }} </h3>
										<p class="text-gray-500 dark:text-gray-400">{{ t('StepsFeatures.item2description') }} </p>
									</div>
								</li>
								<li class="flex md:-mx-4">
									<div class="pr-4 sm:pl-4">
										<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
											3
										</span>
									</div>
									<div class="px-4">
										<h3 class="mb-4 text-xl font-semibold">{{ t('StepsFeatures.item3') }} </h3>
										<p class="text-gray-500 dark:text-gray-400">{{ t('StepsFeatures.item3description') }} </p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
