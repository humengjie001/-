<template>
  <div class="my_con">
    <div class="my_bj"></div>
    <div class="my_cont">
      <!-- 头像信息 -->
      <div class="my_information">
        <div class="my_img">
          <img src>
        </div>
        <div class="name">努力努力再努力</div>
        <div class="my_moli">余额：12.3摩力</div>
      </div>
      <!-- 订单选项 -->
      <div class="order_nav">
        <div class="order_tit">
          <span>我的订单</span>
          <font @click="ornterURL(0)">全部订单</font>
        </div>
        <div class="order_n">
          <div class="order_nav_li" @click="ornterURL(1)">
            <img src="../../images/daifukuan.png">待付款
          </div>
          <div class="order_nav_li" @click="ornterURL(2)">
            <img src="../../images/daifahuo.png">待发货
          </div>
          <div class="order_nav_li" @click="ornterURL(3)">
            <img src="../../images/daishouhuo.png">待收货
          </div>
          <div class="order_nav_li" @click="ornterURL(4)">
            <img src="../../images/daipingjia.png">待评价
          </div>
          <div class="order_nav_li" @click="ReturnornterURL()">
            <img src="../../images/tuikuan.png">退款
          </div>
        </div>
      </div>
      <!-- 个人列表 -->
      <div class="my_lie">
        <div class="my_lie_li" @click="footprint()">
          <span>
            <img src="../../images/zuji.png">足迹
          </span>
        </div>
        <div class="my_lie_li" @click="address()">
          <span>
            <img src="../../images/dizhi.png">地址
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods:{
    // 跳转到订单列表
    ornterURL(id){
      this.$router.push("/my_order?orid="+id);
    },
    // 跳转到退款订单列表
    ReturnornterURL(){
      this.$router.push("/Return_order");
    },
    // 跳转到足迹
    footprint(){
      this.$router.push("/footprint");
    },
    // 跳转到地址页面
    address(){
      this.$router.push("/Admini");
    }
  }
};
</script>

<style>
.my_con {
  overflow: hidden;
  height: 100%;
}
.my_bj {
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1),
    rgba(249, 76, 0, 1)
  );
  height: 25vh;
}
.my_cont {
  margin-top: -26vh;
  width: 100%;
  padding: 13px;
}
.my_information {
  overflow: hidden;
  font: 15px/45px Helvetica;
  color: #ffffff;
  clear: both;
  margin-top: 40px;
}
.my_information .my_img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}
.my_information .my_img img {
  width: 45px;
  float: left;
}
.my_information .name {
  float: left;
}
.my_information .my_moli {
  float: right;
  color: rgba(255, 255, 255, 0.8);
}

/* 订单导航 */
.order_nav {
  background-color: #ffffff;
  width: 100%;
  padding: 13px 13px 5px;
  margin-top: 35px;
  border-radius: 5px;
}
.order_nav .order_tit {
  overflow: hidden;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.order_nav .order_tit span {
  float: left;
  color: rgba(249, 76, 0, 1);
  font: bold 15px/43px Helvetica;
  background: linear-gradient(
    0deg,
    rgba(241, 143, 23, 1) 0%,
    rgba(249, 76, 0, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.order_nav .order_tit font {
  float: right;
  font: 12px/43px Helvetica;
  color: #999999;
}
.order_n {
  display: flex;
}
.order_n .order_nav_li {
  padding-top: 15px;
  flex: 1;
  text-align: center;
  font: 12px/30px Helvetica;
  color: #333333;
}
.order_n .order_nav_li img {
  width: 30px;
}
/* 列表 */
.my_lie {
  background-color: #ffffff;
  width: 100%;
  padding: 13px;
  margin-top: 15px;
  border-radius: 5px;
}
.my_lie_li {
  color: #333333;
  font: 15px/50px Helvetica;
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.my_lie_li:last-child{
  border: none
}
.my_lie_li span {
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  background: url("../../images/Go.png") no-repeat scroll right center
    transparent;
  background-size: 14px;
}
.my_lie_li span img {
  width: 17px;
  margin-right: 5px;
  margin-left: 1px;
}

</style>
