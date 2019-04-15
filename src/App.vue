<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <mt-tabbar v-model="message" fixed class="tab_bottom" v-if="buttontab">
      <mt-tab-item id="MainPage">
        <img slot="icon" :src="tabs[0]" v-if="message!='MainPage'">
        <img slot="icon" :src="tabs[1]" v-if="message=='MainPage'">
        首页
      </mt-tab-item>

      <mt-tab-item id="MogouCart">
        <img slot="icon" :src="tabs[2]" v-if="message!='MogouCart'">
        <img slot="icon" :src="tabs[3]" v-if="message=='MogouCart'">
        购物车
      </mt-tab-item>

      <mt-tab-item id="UserCenter">
        <img slot="icon" :src="tabs[4]" v-if="message!='UserCenter'">
        <img slot="icon" :src="tabs[5]" v-if="message=='UserCenter'">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left",
      titles: "摩购",
      message: "MainPage",
      buttontab: true, //true底部导航显示否就隐藏
      tabs: [
        require("../src/images/index_wuse.png"),
        require("../src/images/index_caise.png"),
        require("../src/images/gouwuche_wuse.png"),
        require("../src/images/gouwuche_caise.png"),
        require("../src/images/my_wuse.png"),
        require("../src/images/my_caise.png")
      ]
    };
  },
  mounted() {},
  watch: {
    $route(to, from) {
      switch (this.$route.meta.title) {
        case "摩购":
          this.message = "MainPage";
          this.buttontab = true;
          break;
        case "个人中心":
          this.message = "UserCenter";
          this.buttontab = true;
          break;
        case "购物":
          this.message = "MogouCart";
          this.buttontab = true;
          break;
        case "产品详情":
          this.buttontab = false;
          break;
        case "订单详情":
          this.buttontab = false;
          break; 
    
        default:
          this.buttontab = false;
      }
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      this.titles = this.$route.meta.title;
    },
    $goRoute(b, a) {},
    message: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "MainPage":
          console.log("摩购");
          this.$router.push("/");
          break;
        case "MogouCart":
          console.log("购物");
          this.$router.push("/MogouCart");
          break;
        case "UserCenter":
          console.log("个人中心");
          this.$router.push("/personal-center");
          break;
      }
    }
  }
};
</script >
<style src='mint-ui/lib/style.css'></style>
<style>
@import url("./css/base");
@import url("./css/Pubic");
.mintui {
  font-size: 20px;
}
.child-view {
  position: absolute;
  padding: 0px 0 55px;
  top: 0;
  left: 0;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1);
}
.child-view.on {
  padding: 0px 0 55px;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-80px, 0);
  transform: translate(-80px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.mint-tabbar.is-fixed {
  background: rgba(255, 255, 255, 0.9);
  border-top: 1px solid #F6F6F6
}
.mint-tab-item {
  color: #999999;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background: none;
  color: #f76d18;
}
</style>
