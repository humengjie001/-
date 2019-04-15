<template>
  <div class="store">
    <Headers :title="title"></Headers>
    <div class="store_con">
      <shopmain :dp="false"></shopmain>
      <div class="store_nav">
        <span
          :class="currentTab2==item.name? 'on':''"
          @click="navclick2(item.name)"
          v-for="(item,index) in navb"
          :key="index"
          :item="item"
          :data-id="item.id"
        >{{item.name}}</span>
      </div>

      <div class="goods_cont">
        <template v-if="currentTab2=='首页'">
          <div class="tjsp_tit">推荐商品</div>
          <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
        </template>
        <template v-else>
          <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
import Goods from "../template/goods";
import shopmain from "../template/shop-main";
export default {
  name: "",
  data() {
    return {
      currentTab2: "首页",
      title: "店铺",
      navs: [{}, {}, {}],
      navb: [{ name: "首页", id: 0 }, { name: "商品", id: 1 }]
    };
  },
  mounted() {},
  methods: {
    navclick2(e) {
      this.currentTab2 = e;
    }
  },
  components: {
    Goods,
    shopmain,
    Headers
  }
};
</script>

<style>
.mint-header,
.mint-header.is-fixed {
  background: #fff;
  z-index: 100;
  color: #333;
}
.mintui {
  color: #333;
  font-size: 20px;
}
.store {
  overflow: hidden;
  padding: 40px 0px 0px;
}
.store_con {
  overflow: hidden;
}
.store_nav {
  display: flex;
  font: 14px/30px Helvetica;
  color: #999999;
  text-align: center;
  background-color: #fff;
  margin-top: 5px;
}
.store_nav span {
  position: relative;
  flex: 1;
}
.store_nav span.on:after {
  position: absolute;
  bottom: 25rpx;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  content: " ";
  height: 4px;
  width: 13px;
  border-bottom: 1px solid #f94c00;
}
.goods_cont{padding: 15px 10px;}
.tjsp_tit {
  background: url("../../images/biaoti_bj.png") no-repeat scroll center center
    transparent;
  background-size:100px;
  text-align: center;
  font: bold 15px/50px Helvetica;
  color: #f9560d;
}
</style>
