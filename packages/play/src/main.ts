import { createApp } from 'vue';
import App from './App.vue';
import ErUiElement, { zhCn } from 'er-ui-element';
import "er-ui-element/dist/index.css";

createApp(App).use(ErUiElement, { locale: zhCn }).mount('#app')
