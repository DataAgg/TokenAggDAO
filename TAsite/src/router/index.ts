import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";
// import routes from 'virtual:generated-pages';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export async function setupRouter(app: App) {
	app.use(router);
	await router.isReady();
}
