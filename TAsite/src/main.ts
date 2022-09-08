import { createApp } from 'vue';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import "@/assets/styles/base.css";
import "@/assets/styles/tadao.scss";
import { setupAssets, setupi18n } from '@/plugins';
import { setupStore } from '@/stores';
import { setupRouter } from '@/router';
import { createHead } from "@vueuse/head";
import App from '@/App.vue';

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

  // vue router
  await setupRouter(app);

  // mount app on the dom
  app.mount('#app');
}

setupApp();
