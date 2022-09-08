import { createApp } from "vue";
import "virtual:windi-devtools";
import "virtual:windi.css";
import "@/assets/styles/base.css";
import "@/assets/styles/tadao.scss";
import { setupAssets, setupi18n } from "@/plugins";
import { setupStore } from "@/stores";
import { setupRouter } from "@/router";
import { createHead } from "@vueuse/head";

import hljs from "highlight.js";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';

VMdPreview.use(githubTheme, { Hljs: hljs, });
VMdPreview.use(createMermaidPlugin());
VMdPreview.use(createKatexPlugin());

import App from "@/App.vue";

async function setupApp() {
	// import assets: js、css
	setupAssets();
	// create app instance
	const app = createApp(App);
	const head = createHead();

	// install store plugin: pinia
	setupStore(app);
	setupi18n(app);
	app.use(head);
	app.use(VMdPreview);

	// vue router
	await setupRouter(app);

	// mount app on the dom
	app.mount("#app");
}

setupApp();
