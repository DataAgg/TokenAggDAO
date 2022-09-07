<script setup lang="ts">
import { SITE } from "@/config";
import { Icon } from '@iconify/vue';
import Logo from "@/components/widgets/Logo.vue";


const tgMenu = function (elem: any) {
	elem.target.classList.toggle("expanded");
	document.getElementById("menu")?.classList.toggle("hidden");
};
const tgDark = function (elem: any) {
	document.documentElement.classList.toggle("dark");
	localStorage.theme = document.documentElement.classList.contains("dark")
		? "dark"
		: "light";
};
</script>
<template>

	<header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b dark:border-b-0">
		<div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
			<div class="flex justify-between">
				<a class="flex items-center" href="/">
					<Logo />
				</a>
				<div class="flex items-center md:hidden">
					<button type="button"
						class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
						aria-label="Toggle between Dark and Light mode" data-aw-toggle-color-scheme @click="tgDark">
						<Icon icon="mdi:white-balance-sunny" class="w-6 h-6" />
					</button>
					<button
						class="ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition"
						aria-label="Toggle Menu" data-aw-toggle-menu @click="tgMenu">
						<Icon icon="mdi:menu" class="w-6 h-6" />
					</button>
				</div>
			</div>
			<nav class="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200" aria-label="Main navigation" id="menu">
				<ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center collapse w-full md:w-auto collapsed text-xl md:text-base">
					<!-- <li v-for="(item, idx) in SITE.menus" :key="idx">
						<a class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out" :aria-label="item.name" :href="item.link">{{ item.name }}
						</a>
					</li> -->
					<li class="md:hidden">
						<a class="font-bold hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out" :href="SITE.links.Github" target="_blank">
							Github
						</a>
					</li>
				</ul>
				<div class="md:self-center flex items-center mb-4 md:mb-0 collapse collapsed">
					<div class="hidden items-center mr-3 md:flex">
						<button type="button"
							class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
							aria-label="Toggle between Dark and Light mode" data-aw-toggle-color-scheme @click="tgDark">
							<Icon icon="mdi:white-balance-sunny" class="w-5 h-5" />
						</button>
						<a :href="SITE.links.Github" target="_blank"
							class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
							aria-label="Github">
							<Icon icon="mdi:github" class="w-5 h-5" />
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>

</template>

<style>
[data-aw-toggle-menu].expanded .line1 {
	transform: rotate(-45deg) translate(-12px, 8px);
}

[data-aw-toggle-menu].expanded .line2 {
	transform: rotate(45deg) translate(4px, -16px);
}
</style>
