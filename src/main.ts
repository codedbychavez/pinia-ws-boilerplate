import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";

const pinia = createPinia();

// Init App
createApp(App)
  .use(BoilerplatePlugin)
  .use(pinia)
  .mount("#app");
