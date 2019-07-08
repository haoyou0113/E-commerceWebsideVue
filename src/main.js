// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'assets/scss/index.scss';
import fastclick from 'fastclick';
import 'swiper/dist/css/swiper.css';
// !引入swiper自带的css样式
import VueLazyload from 'vue-lazyload';
// !使用的时候把元素的src更换为v-lazy
fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1,
  // !还差多少的时候开始加载 1表示完全显示以后再加载
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
  // !尝试加载几次
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// import 'babel-polyfill';
// import Vue from 'vue';
// import App from './App';
// import router from './router';
// // import fastclick from 'fastclick';
// import VueLazyload from 'vue-lazyload';
// import 'assets/scss/index.scss';
// import 'swiper/dist/css/swiper.css';
// // fastclick.attach(document.body);
// Vue.use(VueLazyload, {
//   preLoad: 1,
//   error: require('assets/img/error.png'),
//   loading: require('assets/img/loading.gif'),
//   attempt: 1
// });

// Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
