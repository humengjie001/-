<template>
  <div class="goods" @click="goodsvi()">
    <div class="goods_img">
      <img src="../../img/timg2.png">
    </div>
    <div class="goods_cont">
      <div class="goods_title">年少的那少的可怜难看了你看老大说了尼可拉省的</div>
      <div class="goods_ico">
        <div class="goods_yj">预估赚0.06摩力</div>
        <div class="goods_yhj">10元券</div>
      </div>
      <div class="goods_price">
        <div class="goods_prices">
          券后
          <span>￥</span>
          <font>85.9</font>
        </div>
        <div class="goods_sales">已售7113件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goodsvi() {
      
      this.$router.push("/coupons_lq");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods {
  width: 46%;
  float: left;
  background-color: #fff;
  margin: 2%;
}
.goods_img img {
  max-width: 100%;
  display: block;
}
.goods_cont {
  overflow: hidden;
  padding: 0px 9px;
}
.goods_title {
  font: 14px/30px Helvetica;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods_ico {
  display: flex;
  justify-content:space-between
}
.goods_yj {
  background: url("../../images/yugumoli_bj.png") no-repeat scroll right center
    transparent;
  background-size:100%;
  width: 100px;
  height: 17px;
  text-align: center;
  color: #fff;
  font: 12px/18px Helvetica;
}
.goods_yhj {
  text-align: center;
  font: 12px/18px Helvetica;
  background: url("../../images/youhuiquan_bj.png") no-repeat scroll right
    center transparent;
  color: #fff;
  margin-left: 5%;
  background-size:100%;
  width: 64px;
  height: 17px;
}

.goods_price {
  display: flex;
  justify-content:space-between;
}
.goods_prices {
  font: 12px/30px Helvetica;
  text-align: left;
  color: #333333;
}
.goods_prices span {
  color: #f94c00;
}
.goods_prices font {
  color: #f94c00;
  font-size: 16px;
}
.goods_sales {
  text-align:right;
  font: 12px/30px Helvetica;
  color: #999999;
}
</style>
