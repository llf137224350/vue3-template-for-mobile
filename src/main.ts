import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './style/normalize.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
