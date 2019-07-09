<template>
  <swiper :options="swiperOption" :key="keyId">
    <!--<swiper-slide v-for="item in sliders">-->
    <!--<a href="">-->
    <!--<img src="" alt=""/>-->
    <!--</a>-->
    <!--</swiper-slide>-->
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper } from "vue-awesome-swiper";
export default {
  name: "MeSlider",
  components: {
    swiper
  },
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        //!验证 whether arry including these elements
        return ["horizontal", "vertical"].indexOf(value) > -1;
      }
    },
    interval: {
      //!Switch
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0;
      }
    },
    loop: {
      //!无缝滚动
      type: Boolean,
      default: true
    },
    pagination: {
      //!分页器
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      keyId: Math.random()
    };
  },
  watch: {
    data(newData) {
      if (newData.length === 0) {
        return;
      }
      this.swiperOption.loop = newData.length === 1 ? false : this.loop;
      this.keyId = Math.random();
    }
  },
  created() {
    this.init();
    //!初始化参数
  },
  methods: {
    init() {
      this.swiperOption = {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval
          ? {
              delay: this.interval,
              disableOnInteraction: false
            }
          : false,
        slidesPerView: 1,
        loop: this.data.length <= 1 ? false : this.loop,
        // !防止只有一张slide时候 因为loop的原因自动前后添加
        pagination: {
          el: this.pagination ? ".swiper-pagination" : null
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
