<template>
	<section class="max-w-6xl mx-auto px-4 sm:px-6">
		<div class="py-12 md:py-20">
			<div class="about">
				<h1>This is an admin page</h1>
			</div>
		</div>
	</section>
</template>
<route lang="json">
{
	"meta": {
		"layout": "admin"
	}
}
</route>
<style>
@media (min-width: 1024px) {
	.about {
		/* min-height: 100vh; */
		display: flex;
		align-items: center;
	}
}
</style>
