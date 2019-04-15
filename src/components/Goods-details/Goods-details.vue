<template>
  <div class="goods-details" id="scrollBox">
    <Headers title=" "></Headers>
    <div class="header_con" id="header">
      <div class="head-sub-1" @click="$router.back(-1)"></div>
      <div class="head-sub-2">
        <span class="title" @click="jump(0)" :class="index==0?'on':''" data-name="商品">商品</span>
        <span class="title" @click="jump(1)" :class="index==1?'on':''" data-name="推荐">推荐</span>
        <span class="title" @click="jump(2)" :class="index==2?'on':''" data-name="详情">详情</span>
      </div>
      <div class="head-sub-3 fr" @click="$emit('bzsm')"></div>
    </div>
    <div class="w-content">
      <div class="goods_img do-jump">
        <mt-swipe :auto="0" @change="handleChange">
          <mt-swipe-item v-for="(items,index) in pages" :key="index">
            <img :src="items.imgUrl" alt>
          </mt-swipe-item>
        </mt-swipe>
        <div class="current-slide">{{pagesindex+1}}/{{pages.length}}</div>
      </div>
      <!-- 商品信息 -->
      <div class="goods_tit">
        <div class="goods_price">
          <div class="goods_prices">
            <span>
              ￥
              <font>10.00</font>
            </span>
            <del>10.00</del>
          </div>
          <div class="goods_moli">
            <span>
              预估赚
              <b>0.06</b>摩力
            </span>
          </div>
        </div>
        <div class="goods_name">大势力扩大离开打算看了卡萨丁爱上了打开阿斯顿卡萨丁了两岸三地看爱丽丝的</div>
        <div class="goods_freight">
          <div class="goods_yf">运费：0.00</div>
          <div class="goods_sy">仅剩11件</div>
          <div class="goods_dz">山东青岛</div>
        </div>
      </div>
      <!-- 商品规格 -->
      <div class="group-warp">
        <div class="module-li">
          <div class="l">优惠</div>
          <div class="content">
            领券可减
            <span>￥10</span>
          </div>
          <!-- <div class="ico"></div> -->
        </div>

        <div class="module-li">
          <div class="l">服务</div>
          <div class="content">正品保证 · 极速退款 · 购物无忧</div>
          <!-- <div class="ico"></div> -->
        </div>

        <div class="module-li" @click="guige()">
          <div class="l">规格</div>
          <div class="content">选择 颜色分类 尺码</div>
          <div class="ico"></div>
        </div>
      </div>
      <!-- 商品评价 -->
      <div class="goods_evaluation">
        <div class="evaluation_tit">商品评价(127)</div>
        <div class="evaluation_con">
          <evaluation></evaluation>
        </div>
        <div class="more" @click="evaluation()">查看更多评价</div>
      </div>
      <!-- 商店名片 -->
      <shopmain :dp="true"></shopmain>
      <div class="goods_tj do-jump">
        <div class="goods_details_top tuijian_bit">
          <span>推荐产品</span>
        </div>
        <div class="goods_li">
          <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
        </div>
      </div>
      <div class="goods_details do-jump">
        <div class="goods_details_top">
          <span>宝贝详情</span>
        </div>
        <img :src="items.imgUrl" v-for="(items,index) in pages" :key="index">
      </div>
      <div class="goods_botton_nav">
        <div class="shop" @click="dianpu()">
          <img src="../../images/dianpu.png">店铺
        </div>
        <div class="cart" @click="cart()">
          <img src="../../images/gouwuche_wuse.png">购物车
        </div>
        <div class="button">
          <span class="button_fl" @click="guige()">加入购物车</span>
          <span class="button_fr" @click="guige()">立即购买</span>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="gg_widgets">
        <!-- 商品信息 -->
        <div class="gg_goods_tit">
          <div class="gg_img">
            <img
              src="http://img14.360buyimg.com/n1/s450x450_jfs/t1/910/34/14598/443751/5bdbaf8aE1c72242b/ce8ef957971fbc33.jpg"
            >
          </div>
          <div class="gg_title_fl">
            <span>
              ￥
              <font>85.9</font>
            </span>
            <p>库存12523件</p>
            <p>选择 尺码颜色分类</p>
          </div>
        </div>
        <!-- 商品尺码 -->
        <div class="gg_goods_tit1" v-for="(ProductItem,n) in simulatedDATA.specifications" :key="n">
          <div class="name">{{ProductItem.name}}</div>
          <div class="gg_cm">
            <span
              v-for="(oItem,index) in ProductItem.item"
              :key="index"
              v-on:click="specificationBtn(oItem.name,n,$event,index)"
              v-bind:class="[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']"
            >{{oItem.name}}</span>
          </div>
        </div>
        <!-- 商品颜色 -->
        <!-- <div class="gg_goods_tit1">
          <div class="name">颜色分类</div>
          <div class="gg_cm">
            <span>
              <font style="background-color: #000;"></font>米白色
            </span>
            <span>
              <font></font>米白色
            </span>
            <span>
              <font></font>米白色
            </span>
            <span>
              <font></font>米白色
            </span>
            <span>
              <font></font>米白色
            </span>
          </div>
        </div>-->
        <!-- 添加数量 -->
        <div class="add_cart">
          <div class="name">购买数量</div>
          <div class="cart_add">
            <InputNumber></InputNumber>
          </div>
        </div>
        <div class="add_butt" @click="tj_butt()">确定</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Headers from "../template/Header";
import Goods from "../template/goods";
import InputNumber from "../template/InputNumber";
import { Popup, MessageBox } from "mint-ui";
import evaluation from "../template/evaluation";
import shopmain from "../template/shop-main";
export default {
  name: "home",
  data() {
    return {
      titles: "产品详情",
      popupVisible: false, //选择规格框显示否
      scroll: "",
      index: 0, //锚点导航默认值
      navs: [
        { name: "综合", id: 0 },
        { name: "摩力", id: 1 },
        { name: "销量", id: 2 },
        { name: "价格", id: 3 }
      ],
      pagesindex: 0,
      pages: [
        {
          imgUrl:
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/910/34/14598/443751/5bdbaf8aE1c72242b/ce8ef957971fbc33.jpg"
        },
        {
          imgUrl:
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/910/34/14598/443751/5bdbaf8aE1c72242b/ce8ef957971fbc33.jpg"
        }
      ],

      simulatedDATA: {
        //模拟后台返回的数据 多规格
        difference: [
          {
            //所有的规格可能情况都在这个数组里
            id: "19",
            price: "200.00",
            stock: "19",
            difference: "100,白色"
          },
          {
            id: "20",
            price: "300.00",
            stock: "29",
            difference: "200,白色"
          },
          {
            id: "21",
            price: "300.00",
            stock: "10",
            difference: "100,黑丝"
          },
          {
            id: "22",
            price: "300.00",
            stock: "0",
            difference: "200,黑丝"
          },
          {
            id: "23",
            price: "500.00",
            stock: "48",
            difference: "100,绿色"
          },
          {
            id: "24",
            price: "500.00",
            stock: "0",
            difference: "200,绿色"
          }
        ],
        specifications: [
          {
            //这里是要被渲染字段
            name: "尺寸",
            item: [
              {
                name: "100"
              },
              {
                name: "200"
              }
            ]
          },
          {
            name: "颜色",
            item: [
              {
                name: "白色"
              },
              {
                name: "黑丝"
              },
              {
                name: "绿色"
              }
            ]
          }
        ]
      },
      selectArr: [], //存放被选中的值
      shopItemInfo: {}, //存放要和选中的值进行匹配的数据
      subIndex: [] //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
    };
  },
  created: function() {
    var self = this;
    for (var i in self.simulatedDATA.difference) {
      self.shopItemInfo[self.simulatedDATA.difference[i].difference] =
        self.simulatedDATA.difference[i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
    }
    console.log(self.shopItemInfo)
    self.checkItem();
  },
  components: {
    evaluation,
    shopmain,
    Goods,
    InputNumber,
    Headers
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 属性选择
    specificationBtn: function(item, n, event, index) {
      var self = this;
      if (self.selectArr[n] != item) {
        self.selectArr[n] = item;
        self.subIndex[n] = index;
      } else {
        self.selectArr[n] = "";
        self.subIndex[n] = -1; //去掉选中的颜色
      }
      self.checkItem();
    },
    //筛选不符合的规格置灰
    checkItem: function() {
      var self = this;
      var option = self.simulatedDATA.specifications;
      var result = []; //定义数组存储被选中的值
      for (var i in option) {
        result[i] = self.selectArr[i] ? self.selectArr[i] : "";
      }
      for (var i in option) {
        var last = result[i]; //把选中的值存放到字符串last去
        for (var k in option[i].item) {
          result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
          option[i].item[k].isShow = self.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
        }
        result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
      self.$forceUpdate(); //重绘
    },
    isMay: function(result) {
      for (var i in result) {
        if (result[i] == "") {
          return true; //如果数组里有为空的值，那直接返回true
        }
      }
      return this.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
    },
    //控制顶部导航渐变显示隐藏
    handleScroll() {
      var h = document.documentElement.scrollTop || document.body.scrollTop;
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      var headerTop = document.getElementById("header");
      if (h >= 40) {
        //header的高度是40px;
        headerTop.style.opacity = "1";
        headerTop.style.display = "block";
      } else {
        if (h < 10) {
          //40*2.5=100;这样透明度就可以由0渐变到100%；
          headerTop.style.opacity = "0.0" + h * 2.5;
          headerTop.style.display = "block";
          if (h <= 0) {
            headerTop.style.display = "none";
          }
        } else if (h > 10 && h <= 40) {
          headerTop.style.opacity = "0." + h * 2.5;
          headerTop.style.display = "block";
        }
      }
    },
    //点击锚点定位到模块位置
    jump(index) {
      this.index = index;
      let jump = document.getElementsByClassName("do-jump");
      // 获取需要滚动的距离
      let total = jump[index].offsetTop - 40;
      document.body.scrollTop = total;
      document.documentElement.scrollTop = total;
      window.pageYOffset = total;
    },
    // 监听页面滚动改变悬浮导航锚点
    loadSroll: function() {
      var self = this;
      var $navs = $(".title");
      var sections = document.getElementsByClassName("do-jump");
      for (var i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 100) {
          $navs
            .eq(i)
            .addClass("on")
            .siblings()
            .removeClass("on");
          break;
        }
      }
    },
    handleChange(index) {
      this.pagesindex = index;
    },
    //跳转购物车
    cart() {
      this.$router.push("/MogouCart");
    },
    // 跳转到店铺
    dianpu() {
      this.$router.push("/store");
    },
    // 评价跳转
    evaluation() {
      this.$router.push("/Goods_evaluation");
    },
    //点击展示规格
    guige() {
      this.popupVisible = true;
    },
    // 跳转到下单页面
    tj_butt() {
      this.$router.push("/Order");
    }
    // 商品规格类操作
  },
  watch: {
    scroll: function() {
      this.loadSroll();
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
/* 商品规格 */
.mint-popup {
  width: 100vw;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}
.mintui {
  font-size: 20px;
  color: #fff;
}
.gg_widgets {
  background-color: #fff;
  padding: 15px;
}
.gg_widgets .gg_goods_tit {
  overflow: hidden;
  width: 100%;
}
.gg_widgets .gg_goods_tit .gg_img {
  width: 100px;
  height: 100px;
  float: left;
}
.gg_widgets .gg_goods_tit .gg_title_fl {
  float: left;
  padding: 40px 0px 0px 15px;
}
.gg_widgets .gg_goods_tit .gg_title_fl span {
  color: #f94c00;
  font: 12px/20px Helvetica;
}
.gg_widgets .gg_goods_tit .gg_title_fl span font {
  font-size: 16px;
}
.gg_widgets .gg_goods_tit .gg_title_fl p {
  color: #666666;
  font: 12px/18px Helvetica;
}
.gg_cm {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
}
.gg_cm span {
  border-radius: 5px;
  background: rgba(247, 247, 247, 1);
  text-align: center;
  display: block;
  font: 14px/30px Helvetica;
  width: 105px;
  margin: 5px 5px 5px 0px;
  display: block;
  position: relative;
}
.gg_cm span.productActive {
    background-color: #f94c00;
    color: #fff;
}
.gg_cm span.noneActive {
    background-color: #ccc;
    opacity: 0.4;
    color: #000;
    pointer-events: none;
}

.gg_cm span font {
  position: absolute;
  top: 5px;
  left: 8px;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.gg_goods_tit1 {
  overflow: hidden;
  margin-top: 15px;
}
.gg_goods_tit1 .name {
  font: 14px/20px Helvetica;
  color: #333333;
}
.add_cart {
  overflow: hidden;
  font: 14px/40px Helvetica;
}
.add_cart .name {
  float: left;
}
.cart_add {
  width: 110px;
  float: right;
  margin-top: 8px;
}
.add_butt {
  width: 95%;
  margin: 30px auto 10px;
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1) 0%,
    rgba(249, 76, 0, 1) 100%
  );
  border-radius: 10px;
  text-align: center;
  font: 15px/35px Helvetica;
  color: #fff;
}

.mint-header,
.mint-header.is-fixed {
  background: none;
  z-index: 100;
  color: #fff;
}
.mintui {
  color: #fff;
  font-size: 20px;
}

.header_con {
  background: rgba(255, 255, 255, 1);
  opacity: 0;
  color: rgba(66, 66, 66, 1);
  position: fixed;
  top: 0px;
  width: 100%;
  display: none;

  z-index: 1111;
}
.header_con > div {
  text-align: center;
  height: 40px;
  line-height: 40px;
  float: left;
}
.header_con .head-sub-1 {
  width: 34px;
  font-family: "mintui" !important;
  font-size: 16px;
  font-style: normal;
}
.header_con .head-sub-1:before {
  content: "\E600";
}
.header_con .head-sub-1 a {
  display: block;
  width: 100%;
  height: 100%;
}
.header_con .head-sub-2 {
  width: calc(100% - 180px);
  font-size: 16px;
  margin-left: 15%;
  display: flex;
}
.header_con .head-sub-2 span {
  flex: 1;
  position: relative;
}
.header_con .head-sub-2 span.on {
  color: #f94c00;
}
.header_con .head-sub-2 span.on:after {
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
.header_con .head-sub-3 {
  padding-right: 10px;
  width: 30px;
  float: right;
  cursor: pointer;
  font-family: "mintui" !important;
  font-size: 16px;
  font-style: normal;
}
.header_con .head-sub-3:before {
  content: "\E601";
}

.w-content {
  overflow: hidden;
}
.goods_img {
  width: 100%;
  position: relative;
  height: 50vh;
}
.goods_img img {
  height: 100%;
}

.current-slide {
  position: absolute;
  display: inline-block;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0px 10px;
  border-radius: 20px;
  z-index: 10;
}

.goods_tit {
  padding: 12px;
  background-color: #fff;
  overflow: hidden;
}
.goods_price {
  width: 100%;
}
.goods_price .goods_prices {
  float: left;
}
.goods_price .goods_prices span {
  color: #f94c00;
  font: 12px/30px Helvetica;
}
.goods_price .goods_prices span font {
  font-size: 20px;
  font-weight: bold;
}
.goods_price .goods_prices del {
  font: 12px/30px Helvetica;
  color: #999999;
}
.goods_moli {
  float: right;
  padding: 0px 20px;
  height: 30px;
  background: url("../../images/qian.png") no-repeat scroll left center
    transparent;
  background-size: 14px;
}
.goods_moli span {
  font: 12px/35px Helvetica;
  color: #666666;
}
.goods_moli span b {
  color: #f94c00;
}
.goods_name {
  overflow: hidden;
  clear: both;
  font: 15px/25px Helvetica;
  color: #333333;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods_freight {
  display: flex;
  padding-top: 7px;
}
.goods_freight > div {
  flex: 1;
  font: 12px/18px Helvetica;
  color: #666666;
}
.goods_freight > div.goods_sy {
  text-align: center;
}
.goods_freight > div.goods_dz {
  text-align: right;
}
.group-warp {
  margin-top: 9px;
  padding: 10px 20px;
  overflow: hidden;
  background-color: #fff;
}
.module-li {
  display: flex;
  font: 14px/30px Helvetica;
  color: #333333;
}
.module-li .l {
  width: 40px;
}
.module-li .content {
  flex: 1;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.module-li .content span {
  color: #f94c00;
}
.module-li .ico {
  width: 20px;
  background: url("../../images/Go.png") no-repeat scroll right center
    transparent;
  background-size: 14px;
}
.goods_evaluation {
  overflow: hidden;
  margin: 9px 0px;
  padding: 10px 20px 0px;
  background-color: #fff;
}
.evaluation_tit {
  display: flex;
  font: 15px/30px Helvetica;
  color: #333333;
}
.evaluation_con {
  overflow: hidden;
}
.more {
  margin: 0 auto;
  text-align: center;
  font: 14px/45px Helvetica;
  color: #333333;
}
/* 商品详情 */
.goods_details {
  margin-top: 9px;
  overflow: hidden;
  background-color: #fff;
}
.goods_details_top {
  text-align: center;
  height: 50px;
  width: 100%;
  font: bold 15px/50px Helvetica;
  color: #f9560d;
}
.tuijian_bit {
  background: url("../../images/biaoti_bj.png") no-repeat scroll center center
    transparent;
  background-size: 100px;
}
.goods_details_top span {
  display: inline-block;
  margin: 0 auto;
}
.goods_details img {
  width: 100%;
}
/* 底部导航 */
.goods_botton_nav {
  position: fixed;
  bottom: 0px;
  padding: 5px 15px 5px 0px;
  width: 100%;
  background-color: #fff;
}
.goods_botton_nav .shop {
  float: left;
  color: #999999;
  font: 12px/20px Helvetica;
  width: 70px;
  position: relative;
  text-align: center;
}
.goods_botton_nav .shop img {
  width: 18px;
}
.goods_botton_nav .shop:after {
  position: absolute;
  right: 0px;
  transform: translate(-50%, -50%);
  content: " ";
  height: 29px;
  width: 2px;
  border-right: 1px solid #e5e5e5;
}
.goods_botton_nav .cart {
  float: left;
  color: #999999;
  font: 12px/20px Helvetica;
  width: 70px;
  text-align: center;
}
.goods_botton_nav .cart img {
  width: 18px;
}
.button {
  width: 50%;
  display: flex;
  float: right;
  font: 15px/36px Helvetica;
  color: #fff;
  text-align: center;
}
.button_fl {
  flex: 1;
  background-color: #f18f17;
  border-radius: 20px 0px 0px 20px;
}
.button_fr {
  flex: 1;
  background-color: #f94c00;
  border-radius: 0px 20px 20px 0px;
}
.goods_tj {
  overflow: hidden;
  margin-top: 9px;
  background-color: #fff;
}
</style>
