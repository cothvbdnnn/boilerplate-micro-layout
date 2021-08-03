import Vue from 'vue';
import './assets/css/index.scss'
import singleSpaVue from 'single-spa-vue';
import store from "./store";
import router from './router'
import App from './App.vue';
import { globalFilters } from '@bizfly/shared'
import * as filters from './utils/filters'
import i18n from './utils/i18n'
import { BfButton, locale, languages } from 'bizfly-ui'

Vue.component('bf-button', BfButton);
locale(languages.vi)

Vue.config.productionTip = false;

const mergeFilters = { ...globalFilters, ...filters }
Object.keys(mergeFilters).forEach(key => {
  Vue.filter(key, mergeFilters[key])
})

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {},
      });
    },
    store,
    router,
    i18n
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
