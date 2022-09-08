<template>
	<Header />
	<main>
		<router-view :key="$route.fullPath" :route="$route" />
	</main>
</template>
<script lang="ts" setup>
</script>
