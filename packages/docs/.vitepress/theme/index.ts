import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import ErUI from "er-ui-element";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "@vitepress-demo-preview/component/dist/style.css";
import "er-ui-element/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("demo-preview", ElementPlusContainer);
        app.use(ErUI);
    },
};