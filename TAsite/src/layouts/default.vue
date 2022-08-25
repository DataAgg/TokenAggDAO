<template>
	<Header />
	<main>
		<router-view :key="$route.fullPath" :route="$route" />
	</main>
	<Footer />
</template>
<script lang="ts" setup>
</script>
