import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
// import routes from 'virtual:generated-pages';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export async function setupRouter(app: App) {
	app.use(router);
	await router.isReady();
}
