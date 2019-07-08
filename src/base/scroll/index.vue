<template>
  <swiper :options="swiperOption" ref="swiper">
    <!-- 下拉 -->
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading" />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <!-- 上拉 -->
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <me-loading :text="pullUpText" inline ref="pullUpLoading" />
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
<script>
import { swiperSlide, swiper } from "vue-awesome-swiper";
export default {
  name: "MeScroll",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
      //
    },
    pullDown: {
      type: Boolean,
      default: false
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 下拉参数设置
      pulling: false,
      pullDownText: PULL_DOWN_TEXT_INIT,
      pullUpText: PULL_DOWN_TEXT_INIT, //没有
      swiperOption: {
        direction: "vertical", //!垂直滚动的滚动条
        slidesPerView: "auto",
        freeMode: true, //!自由模式 滚动时
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? ".swiper-scrollbar" : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd,
          transitionEnd: this.scrollEnd
        }
      }
    };
  },
  watch: {
    data() {
      this.update();
    }
  },
  methods: {
    update() {
      this.$refs.swiper && this.$refs.swiper.swiper.update();
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  //!设置可视区的高度
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  //!设施内内容的高度 当内容高度大于可视区的时候滚动才可以实现
  height: auto;
}
</style>
