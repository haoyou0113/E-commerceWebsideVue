import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
// import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
// !使用的时候把元素的src更换为v-lazy
import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';
// !引入swiper自带的css样式
// fastclick.attach(document.body);
Vue.use(VueLazyload, {
  preLoad: 1,
  // !还差多少的时候开始加载 1表示完全显示以后再加载
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
  // !尝试加载几次
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
