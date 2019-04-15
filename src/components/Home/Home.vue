<template>
  <div class="home">
    <mt-header fixed title="摩购">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!-- <mt-button @click="handleClose">关闭</mt-button> -->
      </router-link>
    </mt-header>
    <div class="f_nav" id="f_nav">
      <!-- 商品分类菜单 -->
      <div class="home_nav" :class="navbutt? 'on':''">
        <div class="home_nav_fl">
          <div
            class="home-nav_tit"
            :class="currentTab1==item.name? 'on':''"
            @click="navclick1(item.name)"
            v-for="(item,index) in nav"
            :key="index"
            :item="item"
            :data-id="item.id"
          >{{item.name}}</div>
        </div>
        <div class="home_nav_fr" :class="navbutt? 'on':''"  data-id="111111111" @click="navbutton($event)"></div>
      </div>
    </div>
    <!-- 商品排列条件 -->
    <div class="g-nav">
      <div
        class="g-nav-title"
        :class="currentTab2==item.name? 'on':''"
        @click="navclick2(item.name)"
        v-for="(item,index) in navs"
        :key="index"
        :item="item"
        :data-id="item.id"
      >
        <font :class="item.name == '价格'? 'on':''">{{item.name}}</font>
      </div>
    </div>

    <!-- banner -->
    <Banner></Banner>
    <!-- 点击搜索有优惠卷的商品 -->
    <div class="home_yhj_k">
      <div class="home_yhj_button">点击搜索有优惠券的商品</div>
    </div>
    <!-- 商品列表 -->
    <div class="goods_li">
      <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
    </div>
  </div>
</template>

<script>
import Banner from "../template/Banner";
import Goods from "../template/goods";
// import bank from "../../lib/api/bank.js";
// import means from "../../lib/means";
export default {
  name: "home",
  data() {
    return {
      navbutt: false,
      currentTab1: "优选", //商品菜单选中
      currentTab2: "综合", //商品筛选条件
      nav: [
        { name: "优选", id: 0 },
        { name: "女装", id: 1 },
        { name: "男装", id: 2 },
        { name: "内衣", id: 3 },
        { name: "美食", id: 4 },
        { name: "配饰", id: 5 },
        { name: "家电", id: 6 }
      ],
      navs: [
        { name: "综合", id: 0 },
        { name: "摩力", id: 1 },
        { name: "销量", id: 2 },
        { name: "价格", id: 3 }
      ]
    };
  },
  components: {
    Banner,
    Goods
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //控制顶部导航渐变显示隐藏
    handleScroll() {
      var h = document.documentElement.scrollTop || document.body.scrollTop;
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      var headerTop = document.getElementById("f_nav");
      if(h>0){
        headerTop.style.padding = "40px 0px 0px 0px";
        headerTop.style.position = "fixed";
      }else{
        headerTop.style.padding = "0px 0px 0px 0px";
        headerTop.style.position = "unset";
      }
    },
    navbutton(e) {
      console.log(e)
      this.navbutt = !this.navbutt;
    },
    navclick1(e) {
      this.currentTab1 = e;
    },
    navclick2(e) {
      this.currentTab2 = e;
    }
  },
  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.home {
  padding-top: 40px;
  background-color: #f7f7f7;
}
/* 控制是否悬浮导航 */
.f_nav {
  width: 100%;
  top: 0px;
  z-index: 99;
}
/* 商品菜单导航 */
.home_nav {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  height: 30px;
}
.home_nav.on {
  height: auto;
}
.home_nav_fl {
  float: left;
  width: 92%;
  font: 14px/30px Helvetica;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
.home_nav_fl .home-nav_tit {
  width: 16%;
  color: #999999;
  position: relative;
}
.home_nav_fl .home-nav_tit.on:after {
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
.home_nav_fr {
  padding: 10px 26px 20px 0px;
  position: absolute;
  right: 0px;
  background: url("../../images/down.png") no-repeat scroll left center
    transparent;
  background-size: 14px;
}
.home_nav_fr.on {
  background: url("../../images/up.png") no-repeat scroll left center
    transparent;
  background-size: 14px;
}
/* 商品排序条件导航 */
.g-nav {
  margin-top: 5px;
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.g-nav .g-nav-title {
  flex: 1;
  text-align: center;
  font: 14px/30px Helvetica;
  color: #999999;
  position: relative;
}

.g-nav .g-nav-title font.on {
  display: inline-block;
  padding-right: 14px;
  background: url("../../images/jiage.png") no-repeat scroll right center
    transparent;
  background-size: 8px;
}

.g-nav .g-nav-title.on:after {
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
/* 商品筛选是否有优惠卷按钮 */
.home_yhj_k {
  overflow: hidden;
  margin: 15px auto;
}
.home_yhj_k .home_yhj_button {
  margin: 0 auto;
  width: 80%;
  height: 27px;
  border: 1px solid #f94c00;
  border-radius: 27px;
  color: #f94c00;
  font: 13px/27px Helvetica;
  text-align: center;
}
.goods_li {
  display: flex;
  overflow: hidden;
  padding: 0px 8px;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
