import "./assets/main.css"

import { ViteSSG } from "vite-ssg/single-page"
import App from "./App.vue"

// @ts-nocheck
export const createApp = ViteSSG(App)
