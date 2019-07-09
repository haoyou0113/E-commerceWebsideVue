<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic" />
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navItems } from "./config";
//!引入数据
export default {
  name: "HomeNav",
  //!将数据放置到config中 然后使用export 暴露一个常量之后再在这里赋值
  //!所有需要相应和变化的数据才放到data中 因为dota中会自动添加一个get set属性
  //!所以向这样的属性可以放置到created中
  // data() {
  // return {
  // navs: navItems
  // 放到config.js中
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-1.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-2.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-3.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-4.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-5.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-6.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-7.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-8.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-9.png'),
  // text: '拍卖'
  // },
  // {
  // linkUrl: 'https://www.imooc.com',
  // picUrl: require('./img/nav-item-10.png'),
  // text: '拍卖'
  // }
  // };
  // },
  created() {
    this.navs = navItems;
    // console.log(this);
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.nav {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 20%;
    margin-bottom: 15px;
  }

  &-link {
    @include flex-center(column);
  }

  &-pic {
    width: 60%;
    margin-bottom: 8px;
  }
}
</style>
