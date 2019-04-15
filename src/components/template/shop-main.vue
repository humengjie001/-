<template>
  <div class="shop_main">
    <div class="shop_ico">
      <img src>
    </div>
    <div class="shop_tit">
      <div class="shop_tit_top">
        <span class="shop_name">耐克旗舰店</span>
        <span class="pingfen">
          <span class="button_shop" v-if="dp" @click="store()">进店逛逛</span>
        </span>
      </div>
      <div class="shop_nr">
        <div class="shop_ms">宝贝描述 <span>4.9</span></div>
        <div class="shop_fw">卖家服务 <span>4.9</span></div>
        <div class="shop_wl">物流服务 <span>4.9</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["dp"],
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {
    // 跳转到店铺
    store() {
      this.$router.push("/store");
    },
  },
};
</script>
<style scoped>
.shop_main {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  padding: 15px 20px;
}
.shop_main .shop_ico {
  width:43px;
  margin-right: 9px;
  display: flex;
  align-items: center;
}
.shop_main .shop_ico img {
  width: 43px;
  height: 43px;
  background-color: #999;
}
.shop_main .shop_tit {
  flex: 1;
}
.shop_main .shop_tit .shop_tit_top {
  display: flex;
}
.shop_main .shop_tit .shop_tit_top .shop_name,
.shop_main .shop_tit .shop_tit_top .pingfen {
  flex: 1;
  font-size: 16px;
  color: #333333
}
.shop_main .shop_tit .shop_tit_top .pingfen .button_shop {
  float:right;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(249, 86, 13, 1);
  border-radius: 20px;
  width: 70px;
  color: #f9560d;
  font: 12px/20px Helvetica;
  text-align: center;
  height: 20px;
  display: inline-block;
}
.shop_main .shop_tit .shop_nr {
  padding-top: 8px;
  font: 12px/20px Helvetica;
  color: #999999;
  overflow: hidden;
  display: flex;
}
.shop_main .shop_tit .shop_nr > div {
  flex: 1;
}
.shop_main .shop_tit .shop_nr span {
  color: #f9560d;
}
.shop_fw {
  text-align: center;
}
.shop_wl {
  text-align: right;
}
</style>

