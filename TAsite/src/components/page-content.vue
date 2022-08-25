<script lang="ts" setup>

</script>

<template>

	<Header />
	<main>
		<section class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-12 md:py-20">
				<slot />
			</div>
		</section>
	</main>
	<Footer />
</template>

<style lang="postcss">
.prose {
	z-index: inherit;

	.header-anchor {
		@apply text-gray-400 inline-block;
		text-decoration: none;
		left: -2rem;
		line-height: inherit;
		visibility: hidden;
	}

	h1,
	h2,
	h3,
	h4 {
		scroll-margin-top: 80px;
		position: relative;

		&:hover .header-anchor {
			/* display: block; */
			visibility: visible;
		}
	}

	.dark h1,
	h2,
	h3,
	h4 {
		@apply text-xl;
	}
}
</style>
