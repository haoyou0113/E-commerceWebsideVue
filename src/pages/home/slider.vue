<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders.length" />
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <!--//!v-if 来判断是否有sliders数据 如果有的话在开始初始化渲染  -->
      <!-- //!分开传参可以分别校验并且清晰 -->
      <!--//!这里写的内容会被自动放置到base组件中的slot -->
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img" />
          <!-- //!这里如果想要引用图片的话需要在下方的data中引用数据 -->
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from "base/slider";
import { swiperSlide } from "vue-awesome-swiper";
import { sliderOptions } from "./config";
import { getHomeSlider } from "../../api/home";
import MeLoading from "base/loading";

export default {
  name: "HomeSlider",
  components: {
    MeSlider,
    MeLoading,
    swiperSlide
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
      // {
      //  'linkUrl':'https://www.imooc.com',
      //  'picUrl':require('./1.jpg')
      // },
      // {
      //  'linkUrl':'https://www.imooc.com',
      //  'picUrl':require('./2.jpg')
      // },
      // {
      //  'linkUrl':'https://www.imooc.com',
      //  'picUrl':require('./3.jpg')
      // },{
      //  'linkUrl':'https://www.imooc.com',
      //  'picUrl':require('./4.jpg')
      // }
    };
  },
  created() {
    this.getSliders();
  },
  methods: {
    update() {
      return this.getSliders();
    },
    getSliders() {
      return getHomeSlider().then(data => {
        this.sliders = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-wapper {
  width: 100%;
  height: 183px;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
