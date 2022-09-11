<script setup lang="ts">
import Picture from "@/components/core/Picture.vue";
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
			title: 'OlympusDAO 资料收集',
			img: '/imgs/blogs/ohm1.png',
			description: 'OlympusDAO 资料收集',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/7xvjiAj_M8wwB40VpokcObXVMaqMNQbiodCImesyaXA',
		},
		{
			title: 'AMM和流动池',
			img: '/imgs/blogs/amm.png',
			description: 'AMM和流动池',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/SIqkX69Qd8-yK_ncuu4yxAt2gG9bL7Mdvz2RdoOoWwI',
		},
		{
			title: 'Ethereum stratum mining protocol v1.0.0',
			img: '/imgs/steps.jpg',
			description: 'Ethereum stratum mining protocol v1.0.0',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/y1h14JZFqQcGauRyAsvVPt4B8fpdahSuS602rY1i_3Q',
		},
		{
			title: 'Stratum Mining Protocol(slushpool)',
			img: '/imgs/hero.jpg',
			description: 'Stratum Mining Protocol(slushpool)',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/LiCll74wWdNb1sofluZLZTtQe4mySQHMV58HM6VJ0OY',
		},
		{
			title: '以太坊stratum协议原理',
			img: '/imgs/colors.jpg',
			description: '以太坊stratum协议原理',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/aXZtJGRPeEqHa1AoXxV36Da-kO7rkQdOxQdaECsJ7MM',
		},
		{
			title: 'Network protocol specification - Stratum platform(draft)',
			img: '/imgs/tools.jpg',
			description: 'Stratum Network protocol specification',
			url: 'https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31/5KV88nR8e6jjcRH7SD_Jc_oiCB-szCaZih_sZmng_gw',
		},
	];
})

</script>
<template>

	<section class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
		<div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
			<h2 class="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none lg:mb-5 group">
				<a href="https://mirror.xyz/0x94C0e8Cf59e644fA76d4Fa83164B9F2030d07F31" target="_blank"><span class="inline-block mb-1 sm:mb-4">{{ t('home.blogTitle') }} </span></a>
			</h2>
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
