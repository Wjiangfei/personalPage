import { createApp } from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import '@/assets/styles/index.scss';

// main.ts
import SvgIcon from '~virtual/svg-component';

const pinia=createPinia();
const app = createApp(App);
app.component(SvgIcon.name, SvgIcon);
app.use(router);
app.use(pinia);
app.mount('#app');
