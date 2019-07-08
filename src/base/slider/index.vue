<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <slot></slot>
      <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper } from "vue-awesome-swiper";
export default {
  name: "Meslider",
  components: {
    swiper
  },
  props: {
    direction: {
      typr: String,
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
      swiperOption: {
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
        pagination: {
          el: this.pagination ? ".swiper-pagination" : null
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  widows: 100%;
  height: 100%;
}
</style>