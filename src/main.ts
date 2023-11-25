import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(ToastPlugin);
});
