import './public-path';
import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import routes from '../router/index'

let instance = null;
let router = null;
let history = null;


function render(props = {}) {
  const {container} = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/');
  router = createRouter({
    history,
    routes
  });
  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log(props);
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}

