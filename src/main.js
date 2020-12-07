import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';

import { NavbarPlugin } from 'bootstrap-vue';
import { BNav } from 'bootstrap-vue';
import { BContainer } from 'bootstrap-vue';
import { BEmbed } from 'bootstrap-vue';
import { FormPlugin } from 'bootstrap-vue';
import { FormInputPlugin } from 'bootstrap-vue';
import { FormGroupPlugin } from 'bootstrap-vue';
import { FormCheckboxPlugin } from 'bootstrap-vue';
import { FormSelectPlugin } from 'bootstrap-vue';
import { IconsPlugin } from 'bootstrap-vue';

import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);
Vue.component('b-nav', BNav);
Vue.component('b-container', BContainer);
Vue.component('b-embed', BEmbed);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormSelectPlugin);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }

  if (user) {
    store.dispatch('fetchUserProfile', user);
  }
});
