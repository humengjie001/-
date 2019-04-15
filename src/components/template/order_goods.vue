<template>
  <div class="order-good">
    <div class="goods_img">
      <img src="../../img/11.jpg">
    </div>
    <div class="goods_title">
      <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
      <div class="goods_titles">
        <span>
          ￥
          <font>39.00</font>
        </span>
        <font class="fr" style="color:#999999">X1</font>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
/* 列表内容 */
.order-good {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
}

.goods_img {
  width: 85px;
  float: left;
}
.goods_title {
  width: 80%;
  float: left;
  padding-left: 15px;
  font: 14px/20px Helvetica;
}
.goods_title p {
  color: #333333;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods_title .goods_titles {
  padding-top: 20px;
  font: 12px/30px Helvetica;
  height: 43px;
}
.goods_title .goods_titles span {
  color: #f94c00;
}
.goods_title .goods_titles span font {
  font-size: 16px;
}
.gooods_price {
  float: right;
  width: 15%;
  text-align: right;
}
.gooods_price span {
  font: 12px/20px Helvetica;
  color: #333333;
}
.gooods_price font {
  font: 12px/20px Helvetica;
  color: #999999;
}
</style>
