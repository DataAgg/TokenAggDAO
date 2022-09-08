import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import routes from "~pages";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import ProjectInfo from "@/components/projectInfo.vue";

const routes = setupLayouts(generatedRoutes);
routes.push({
	path: "/project/:id",
	component: ProjectInfo
});

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export async function setupRouter(app: App) {
	app.use(router);
	await router.isReady();
}
