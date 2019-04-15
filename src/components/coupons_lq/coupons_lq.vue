<template>
  <div class="coupons">
    <Headers :title="title"></Headers>
    <div class="coupns_con">
      <div class="coupns_k">
        <div class="pic">10</div>
        <div class="coupns_sm">
          <p>满88元使用</p>
          <span class="yhj_butt">立即领取</span>
        </div>
      </div>
      <div class="conpus_goods" @click="Goodsvi(111)">
        <div class="goods_img">
          <img src="../../img/11.jpg">
        </div>
        <div class="goods_tit">
          <div class="title">
            <img src="../../images/tianmao_zhengfangxing.png">大家看了很多书的看来大数据的艰苦拉萨机按时艰苦拉萨结案时间来看就
          </div>
          <div class="pico">
            <span>
              ￥
              <font>85.9</font>
            </span>
            <del>￥10.00</del>
          </div>
          <div class="ico">预估赚0.06摩力</div>
        </div>
      </div>
    </div>
    <div class="tuijian_goods">
      <div class="tjsp_tit">推荐商品</div>
      <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header";
import Goods from "../template/goods";
export default {
  data() {
    return {
      title:'领取优惠卷',
      navs: [{}, {}, {}]
    };
  },
  mounted() {},
  methods: {
      Goodsvi(goodsID){
          this.$router.replace("/Goodsdetails?goodsID="+goodsID);
      },
      yhj_lq(){
          this.$router.replace("/Goodsdetails?goodsID="+goodsID);
      }
  },
  components: {
    Goods,
    Headers
  }
};
</script>

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
.coupons {
  padding-top: 40px;
}
.coupns_con {
  padding: 15px;
  overflow: hidden;
  background-color: #fff;
}
.coupns_k {
  overflow: hidden;
  display: flex;
  background: url("../../images/youhuiquan.png") no-repeat scroll center center
    transparent;
  background-size: 100%;
  height: 21vh;
}
.coupns_k .pic {
  flex: 1;
  font: bold 70px/21vh Helvetica;
  color: #fff;
  text-align: center;
  padding-left: 5%;
}
.coupns_k .coupns_sm {
  overflow: hidden;
  flex: 1;
  text-align: center;
  padding: 4vh 4% 0px 0px;
}
.coupns_k .coupns_sm p {
  color: #fff;
  font: 24px/50px Helvetica;
}
.coupns_k .coupns_sm .yhj_butt {
  background: rgba(255, 250, 227, 1);
  border-radius: 33px;
  display: inline-block;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font: 16px/30px Helvetica;
  color: #ff4b47;
}
/* 商品 */
.conpus_goods {
  overflow: hidden;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
}
.conpus_goods .goods_img {
  width: 107px;
  padding-right: 10px;
}
.conpus_goods .goods_tit {
  overflow: hidden;
  width: 70%;
}
.conpus_goods .goods_tit .title {
  font: 15px/20px Helvetica;
  color: #333333;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.conpus_goods .goods_tit .title img {
  width: 14px;
  height: 14px;
  display: inline-block;
}
.conpus_goods .goods_tit .pico {
  padding-top: 10px;
  color: #f94c00;
  font: 12px/20px Helvetica;
}
.conpus_goods .goods_tit .pico font {
  font-size: 16px;
}
.conpus_goods .goods_tit .pico del {
  color: #999999;
}
.conpus_goods .goods_tit .ico {
  font: 12px/30px Helvetica;
  width: 53%;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1),
    rgba(249, 76, 0, 1)
  );
  border-radius: 19px;
  text-align: center;
}
.tuijian_goods {
  overflow: hidden;
}
.tjsp_tit {
  background: url("../../images/biaoti_bj.png") no-repeat scroll center center
    transparent;
  background-size:100px;
  overflow: hidden;
  text-align: center;
  font: bold 15px/50px Helvetica;
  color: #f9560d;
}
</style>
