<script setup lang="ts">
import Picture from "@/components/core/Picture.vue";
import hero from '@/assets/images/hero.jpg';
import steps from '@/assets/images/steps.jpg';
import colors from '@/assets/images/colors.jpg';
import tools from '@/assets/images/tools.jpg';
const { t } = useI18n();

interface PostItem {
	title: string;
	description: string;
	img: string;
	url: string;
}

const postsData = ref<PostItem[]>([]);

onMounted(() => {
	postsData.value = [
		{
			title: 'blog1',
			img: steps,
			description: 'descriptiondescription',
			url: '/',
		},
		{
			title: 'blog2',
			img: hero,
			description: 'descriptiondescriptiondescription',
			url: '/',
		},
		{
			title: 'blog3',
			img: colors,
			description: 'descriptiondescriptiondescriptiondescription',
			url: '/',
		},
		{
			title: 'blog4',
			img: tools,
			description: 'descriptiondescriptiondescriptiondescriptiondescription',
			url: '/',
		},
	];
})

</script>
<template>

	<section class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
		<div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
			<h2 class="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none lg:mb-5 group">
				<span class="inline-block mb-1 sm:mb-4">{{ t('home.blogTitle') }} </span>
			</h2>
			<p class="text-gray-700 dark:text-slate-400 lg:text-sm lg:max-w-md">{{ t('home.blogDescription') }} </p>
		</div>

		<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">
			<div class="mb-6 transition" v-for="(pitem, idx) in postsData" :key="idx">
				<Picture :src="pitem.img" class="object-cover w-full h-64 mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700" :widths="[400, 768]" sizes="(max-width: 767px) 400px, 768px" alt="Post 2 Image"
					aspectRatio="16:9" />
				<h3 class="mb-2 text-xl font-bold leading-snug sm:text-2xl">
					<a :href="pitem.url" class="hover:text-blue-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200">{{ pitem.title }} </a>
				</h3>
				<p class="text-gray-700 dark:text-gray-400">{{ pitem.description }} </p>
			</div>
		</div>
	</section>
</template>
