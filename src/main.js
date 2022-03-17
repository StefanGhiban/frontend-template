import { createApp } from "vue";
import { createI18n } from "./i18n";
import { createPinia } from "pinia";
import { faker } from "@faker-js/faker";
import router from "./router";
import App from "./App.vue";
import "@/assets/index.css";

const i18n = createI18n();
const pinia = createPinia();

faker.setLocale("ro");

createApp(App)
    .use(i18n)
    .use(router)
    .use(pinia)
    /** app wide injection of some state.
     * https://vuejs.org/guide/components/provide-inject.html
     */
    .provide("message", "hello")
    .mount("#app");
