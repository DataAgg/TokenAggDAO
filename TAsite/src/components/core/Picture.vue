<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
interface SourceType {
	src?: string;
	type?: string;
}

defineProps({
	src: String,
	alt: String,
	sizes: String,
	widths: Array<Number>,
	aspectRatio: String,
	sources: Array<SourceType>,
	className: String,
});

const parseData = function (lst: any, idx = 0, dft = 0) {
	if (lst && lst.length > idx) {
		return lst[idx];
	}
	return dft;
}

</script>
<template>
	<template v-if="src">
		<img loading="auto" :alt="alt" :class="attrs.class" :src="src" :width="parseData(widths, 1)" :height="parseData(widths, 0)" />
	</template>
</template>

<style scoped>
img {
	content-visibility: auto;
}
</style>
