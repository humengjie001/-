<template>
  <div class="order_details">
    <Headers :title="title"></Headers>
    <div class="order_details_bj"></div>
    <!-- 收货地址 -->
    <div class="order_details_con">
      <div class="order_details_k1">卖家已发货</div>
      <div class="order_details_address">
        <div class="ico"></div>
        <div class="fl">
          <div class="order_name">
            <span class="fl">收货人: 小七</span>
            <span class="fr">18810627788</span>
          </div>
          <div class="order-address">收货地址：北京市朝阳区望京街道京利泽中园101号 启明国际大厦3层</div>
        </div>
      </div>
    </div>
    <!-- 订单商品 -->
    <div class="order_goods_cont">
      <div class="order_goods_li">
        <div class="order-good" >
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="goods_title">
            <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
            <div class="goods_titles">
              <!-- <span>已发货</span> -->
              <div class="goods_but">
                <font class="h" @click="exchange('11')">换货</font>
                <font class="j" @click="refund('11')">退货</font>
              </div>
            </div>
          </div>
          <div class="gooods_price">
            <span>￥39.00</span>
            <font>X1</font>
          </div>
        </div>
      </div>

      <div class="order_goods_li">
        <div class="order-good" >
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="goods_title">
            <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
            <div class="goods_titles">
              <!-- <span>已发货</span> -->
              <div class="goods_but">
                <font class="h">换货</font>
                <font class="j">退货</font>
              </div>
            </div>
          </div>
          <div class="gooods_price">
            <span>￥39.00</span>
            <font>X1</font>
          </div>
        </div>
      </div>

      <div class="goods_heji">
        <font>共2件商品</font> 小计：
        <span>
          ￥
          <b>85.9</b>
        </span>
      </div>
    </div>
    <!-- 订单编码 -->
    <div class="order_tit">
      <p>订单编号：123456789</p>
      <p>创建时间：2018-05-05 20:00:00</p>
      <p>发货时间：2018-05-05 20:00:00</p>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      title:'订单详情'
    };
  },
  components:{
    Headers
  },
  mounted() {
    console.log("id", this.userData);
  },
  methods: {
    // 跳到评价页面
    evaluation(e){
      this.$router.push("/published_evaluation?orid=" + e);
    },
    // 跳到换货页面
    exchange(e){
      this.$router.push("/exchange_goods?orid=" + e+"&orcs=2");
    },
    // 跳到退款页面
    refund(e){
      this.$router.push("/exchange_goods?orid=" + e+"&orcs=1");
    }
    
  },
  computed: {
    ...mapGetters({
      userData: "userData"
    })
  }
};
</script>

<style scoped>
.mint-header,
.mint-header.is-fixed {
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1),
    rgba(249, 76, 0, 1)
  );
  z-index: 100;
  color: #fff;
}
.mintui {
  color: #fff;
  font-size: 20px;
}
.order_details_bj {
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1),
    rgba(249, 76, 0, 1)
  );
  height: 15vh;
}
.order_details {
  padding-top: 40px;
  width: 100%;
  height: 100%;
}
.order_details_con {
  margin-top: -15vh;
  width: 100%;
}
.order_details_k1 {
  width: 60%;
  margin: 0 auto;
  height: 70px;
  font: 16px/70px Helvetica;
  color: #fff;
  background: url("../../images/huoche.png") no-repeat scroll right center
    transparent;
  background-size: 60px;
}
.order_details_address {
  border-radius: 5px;
  padding: 10px;
  width: 93%;
  margin: 0px auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  font: 14px/20px Helvetica;
  color: #333333;
}
.order_details_address .ico {
  background: url("../../images/shouhuodizhi.png") no-repeat scroll center
    center transparent;
  background-size: 20px;
  width: 50px;
  height: 40px;
}
.order_name {
  overflow: hidden;
}
.order-address {
  padding-top: 10px;
  overflow: hidden;
}
/* 订单商品信息 */
.order_goods_cont {
  overflow: hidden;
  margin: 15px auto 0px;
  border-radius: 5px;
  padding: 10px;
  width: 93%;
  background-color: #fff;
}

.order_goods_li {
  overflow: hidden;
  padding: 15px;
  background-color: #fff;
  padding: 15px 15px 10px 15px;
  border-radius: 5px;
  border-bottom: 1px solid #f6f6f6;
  margin-bottom: 15px;
}
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
  width: 56%;
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
  height: 43px;
}
.goods_title .goods_titles span {
  color: #f94c00;
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
.order_buttom {
  width: 100%;
  text-align: right;
  font: 12px/35px Helvetica;
  color: #333333;
}
.order_buttom font {
  font-size: 14px;
}
.goods_bottom {
  width: 100%;
}
.goods_bottom p {
  float: left;
  font: 12px/30px Helvetica;
  color: #999999;
  width: 50%;
  display: block;
}
.goods_bottom .order_butt {
  float: right;
}
.goods_bottom .order_butt span {
  border-radius: 25px;
  font: 12px/25px Helvetica;
  display: inline-block;
  padding: 0px 10px;
  margin: 0 4px;
}
.goods_bottom .order_butt span.h {
  border: 1px solid rgba(102, 102, 102, 1);
  color: #666666;
}
.goods_bottom .order_butt span.l {
  border: 1px solid rgba(249, 76, 0, 1);
  color: #f94c00;
}
.goods_but {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 140px;
}
.goods_but font {
  font: 12px/22px Helvetica;
  display: block;
  margin: 0px 0px 0px 8%;
  padding: 0px 15px;
  border-radius: 20px;
  float: left;
}
.goods_but font.h {
  color: #f18f17;
  border: 1px solid #f18f17;
}
.goods_but font.j {
  color: #f18f17;
  border: 1px solid #f94c00;
}

.goods_heji {
  overflow: hidden;
  font: 14px/27px Helvetica;
  color: #333333;
  text-align:right
}
.goods_heji font {
  padding-right: 10px;
  display: inline-block
}
.goods_heji span {
  font-size: 12px;
  color: #F94C00
}
.goods_heji span b {
  font-size: 16px
}
.order_tit {
  font: 14px/27px Helvetica;
  color: #333;
  overflow: hidden;
  margin: 15px auto 20px;
  border-radius: 5px;
  padding: 10px 15px;
  width: 93%;
  background-color: #fff;
}
.order_tit p {
  display: block;
}
</style>
