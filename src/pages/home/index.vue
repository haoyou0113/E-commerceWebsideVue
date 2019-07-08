<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <me-scroll>
      <Homeslider></Homeslider>
      <home-nav></home-nav>
      <home-recommend></home-recommend>
    </me-scroll>

    <div class="g-backtop-container">home</div>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from "./header";
import Homeslider from "./slider";
import MeScroll from "base/scroll";
import HomeNav from "./nav";
import HomeRecommend from "./recommend";
export default {
  name: "home",
  components: { HomeHeader, Homeslider, MeScroll, HomeNav, HomeRecommend }
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