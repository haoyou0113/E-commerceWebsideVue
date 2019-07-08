<template>
  <div>Recommend</div>
</template>
<script>
import { getHomeRecommend } from "../../api/home.js";
export default {
  name: "HomeRecommend",
  created() {
    getHomeRecommend(1);
  }
};
</script>
<style lang="scss" scoped>
</style>