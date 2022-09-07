import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import i18n from "@intlify/vite-plugin-vue-i18n";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoImport from "unplugin-auto-import/vite";
import components from "unplugin-vue-components/vite";
import markdown from "vite-plugin-md";
import meta from "@yankeeinlondon/meta-builder";
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";
import mdAnchor from "markdown-it-anchor";
import mdLinkAttr from "markdown-it-link-attributes";
import WindiCSS from "vite-plugin-windicss";
import type { RouteRecord } from "vue-router";

export default defineConfig(() => {
	const rootPath = path.resolve(process.cwd());
	const srcPath = `${rootPath}/src`;
	const routeMeta: Record<string, any> = {
		locale: "zh-CN",
		layout: "default",
	};
	return {
		resolve: {
			alias: {
				"~": rootPath,
				"@": srcPath,
			},
		},
		optimizeDeps: {
			include: [
				"@vueuse/core",
				"@vueuse/head",
				"vue-i18n",
				"vue-router",
				"vue",
			],
			exclude: ["vue-demi"],
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./src/styles/scss/global.scss" as *;`,
				},
			},
		},
		plugins: [
			vue({
				include: [/\.vue$/, /\.md$/],
				reactivityTransform: true,
			}),
			// https://github.com/antfu/vite-plugin-md
			markdown({
				wrapperComponent: 'page-content',
				wrapperClasses: 'md-body max-w-none',
				headEnabled: true,
				excerpt: true,
				style: {
					baseStyle: "github",
				},

				frontmatterDefaults: routeMeta,

				// see: https://markdown-it.github.io/markdown-it/
				markdownItOptions: {
					quotes: "\"\"''",
					html: true,
					linkify: true,
					typographer: true,
				},

				builders: [
					meta({
						routeProps: [
							"layout",
							"locale",
							"container",
							"title",
							"description",
						],
					}),
				],
				markdownItSetup(md: any) {
					// md.use(mdPrism)
					// add anchor links to your H[x] tags
					// md.use(require('markdown-it-anchor'))
					// add code syntax highlighting with Prism
					// md.use(require('markdown-it-prism'))

					md.use(mdAnchor, {
						permalink: mdAnchor.permalink.ariaHidden({
							renderAttrs: () => ({ "aria-hidden": "true" }),
						}),
					});

					md.use(mdLinkAttr, {
						matcher: (link: string) => /^(https?:\/\/|\/\/)/.test(link),
						attrs: {
							target: "_blank",
							rel: "noopener",
						},
					});
				},
			}),
			// https://github.com/hannoeru/vite-plugin-pages
			pages({
				extensions: ["vue", "md"],
				extendRoute: (route: RouteRecord) => {
					route.meta = Object.assign({}, routeMeta, route.meta);
					console.log(route); // eslint-disable-line no-console
					return route;
				},
			}),


			WindiCSS(),
			// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
			layouts(),

			// https://github.com/antfu/unplugin-auto-import
			autoImport({
				dts: "src/auto-imports.d.ts",
				dirs: ["src/composables", "src/store"],
				imports: [
					"@vueuse/head",
					"@vueuse/core",
					"vue-i18n",
					"vue-router",
					"vue/macros",
					"vue",
				],
				vueTemplate: true,
			}),
			vueJsx(),
			// https://github.com/antfu/unplugin-vue-components
			components({
				// allow auto load markdown components under `./src/components/`
				extensions: ["vue", "md"],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				dts: "src/components.d.ts",
			}),
			// https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
			i18n({
				runtimeOnly: true,
				compositionOnly: true,
				include: [path.resolve(__dirname, "locales/**")],
			}),
		],
		server: {
			host: "0.0.0.0",
			open: true,
		},
		build: {
			brotliSize: false,
			sourcemap: false,
			commonjsOptions: {
				ignoreTryCatch: false,
			},
		},
	};
});
