<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header" />
      <!-- //! header-transition 头部动画是否开启  -->
    </header>
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <!-- //!监听事件pull-down-transition-end 查看是否在最后 控制backtop是否可用  -->
      <home-slider ref="slider" />
      <home-nav />
      <home-recommend @loaded="getRecommends" ref="recommend" />
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MeScroll from "base/scroll";
import MeBacktop from "base/backtop";
import HomeHeader from "./header";
import HomeSlider from "./slider";
import HomeNav from "./nav";
import HomeRecommend from "./recommend";
import { HEADER_TRANSITION_HEIGHT } from "./config";
// !超过100触发 HEADER_TRANSITION_HEIGHT
export default {
  name: "Home",
  components: {
    MeScroll,
    HomeHeader,
    HomeSlider,
    HomeNav,
    HomeRecommend,
    MeBacktop
  },
  data() {
    return {
      recommends: [],
      isBacktopVisible: false,
      isHeaderTransition: false
    };
  },
  // created() {
  //   //!设施backtop的函数
  //   setTimeout(() => {
  //     this.isBacktopVisible = true;
  //   }, 1000);
  // },
  methods: {
    updateScroll() {},
    getRecommends(recommends) {
      this.recommends = recommends;
    },
    pullToRefresh(end) {
      this.$refs.slider.update().then(end);
      // setTimeout(() =>{
      //   console.log('下拉刷新');
      //   end();
      // },1000);
    },
    pullToLoadMore(end) {
      this.$refs.recommend
        .update()
        .then(end)
        .catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
    },
    scroll(translate) {
      this.changeHeaderStatus(translate);
    },
    scrollEnd(translate, scroll, pulling) {
      if (!pulling) {
        this.changeHeaderStatus(translate);
      }
      // ! 判断下来显示的内容 决定backtop是否显示
      this.isBacktopVisible = translate < 0 && -translate > scroll.height;
    },
    pullDownTransitionEnd() {
      this.$refs.header.show();
    },
    backToTop() {
      this.$refs.scroll && this.$refs.scroll.scrollToTop();

      // ! 判断 this.$refs.scroll是否存在如果不存在 执行后面 scrolltotop 用来自动返回顶部
    },
    changeHeaderStatus(translate) {
      if (translate > 0) {
        // !大于0表示正在上拉
        this.$refs.header.hide();
        return;
      }

      this.$refs.header.show();

      this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
