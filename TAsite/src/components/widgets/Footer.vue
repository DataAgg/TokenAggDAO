<script setup lang="ts">
import {
	IconTwitter,
	IconFacebook
} from "@/components/icons";

import { SITE } from "@/config";
</script>
<template>

	<footer>
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-slate-800">
				<div class="col-span-12 lg:col-span-3">
					<div class="mb-2">
						<a class="inline-block font-bold text-xl" href="/">{{SITE.name}}</a>
					</div>
					<div class="text-sm text-gray-600">
						<span class="text-gray-600 hover:text-gray-700 dark:text-gray-400 transition duration-150 ease-in-out">{{SITE.description}}
						</span>
					</div>
				</div>
				<div class="col-span-6 md:col-span-3 lg:col-span-2" v-for="(group,idx) in SITE.allLinks" :key="idx">
					<div class="text-gray-800 dark:text-gray-300 font-medium mb-2">
						{{group.name}}
					</div>
					<ul class="text-sm">
						<li class="mb-2" v-for="(item,idx) in group.items" :key="idx">
							<a class="text-gray-600 hover:text-gray-700 dark:text-gray-400 transition duration-150 ease-in-out" :href="item.link">{{item.name}}
							</a>
						</li>
					</ul>
				</div>

			</div>
			<div class="md:flex md:items-center md:justify-between py-4 md:py-8">
				<ul class="flex mb-6 md:order-1 md:ml-4 md:mb-0">
					<li class="ml-4" v-for="(n,k,idx) in SITE.links" :key="idx">
						<a class="flex justify-center items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out dark:bg-gray-800 dark:text-gray-400 p-1.5"
							:aria-label="k" :href="n" target="_blank">
							<IconGithub v-if="k=='Github'"/>
							<IconTwitter v-if="k=='Twitter'"/>
							<IconEmail v-if="k=='Email'"/>
							<IconFacebook v-if="k=='Mirror'"/>
							<!-- <IconInstagram v-if="k=='Instagram'"/>
							<IconFacebook v-if="k=='Facebook'"/> -->
						</a>
					</li>
				</ul>
				<div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
					Made by <a class="text-blue-600 hover:underline dark:text-gray-200" :href="SITE.orgSite">
						{{SITE.orgName}}
					</a>. All rights reserved.
				</div>
			</div>
		</div>
	</footer>
</template>
