import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import globalProperties from "./globalProperties";

createApp(App).use(globalProperties).mount("#app");
