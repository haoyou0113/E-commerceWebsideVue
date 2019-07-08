<template>
  <MeNavbar class="header" title="Title">
    <i class="iconfont icon-scan" slot="left"></i>
    <!-- <div slot="center">Searching bar</div> -->
    <i class="iconfont icon-msg" slot="right"></i>
  </MeNavbar>
</template>
<script>
import MeNavbar from "base/navbar";
export default {
  name: "HomeHeader",
  components: { MeNavbar }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
  &.mine-navbar {
    background-color: $header-bgc-translucent !important;
  }
  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
