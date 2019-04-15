 <template>
  <div class="my_order">
    <Headers :title="title"></Headers>
    <div class="my_order_nav">
      <ul>
        <li :class="navdefault==0?'on':''" @click="navclick1(0)">全部</li>
        <li :class="navdefault==1?'on':''" @click="navclick1(1)">待付款</li>
        <li :class="navdefault==2?'on':''" @click="navclick1(2)">待发货</li>
        <li :class="navdefault==3?'on':''" @click="navclick1(3)">待收货</li>
        <li :class="navdefault==4?'on':''" @click="navclick1(4)">待评价</li>
      </ul>
    </div>
    <div class="my_order_con">
      <div class="my_order_li">
        <div class="order-good" @click="orderURL(1111)">
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="goods_title">
            <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
            <div class="goods_titles">
              <span>已发货</span>
            </div>
          </div>
          <div class="gooods_price">
            <span>￥39.00</span>
            <font>X1</font>
          </div>
        </div>
        <div class="order_buttom">
          共1件商品合计:¥
          <font>{{priceBlock(1,30.65)}}</font>{{priceBlock(2,30.65)}}
        </div>
        <div class="goods_bottom">
          <p>您的摩力会在订单完成后到账</p>
          <div class="order_butt">
            <span class="h" @click="logisticsURL(111)">查看物流</span>
            <span class="l" @click="closedGoods(111)">确认收货</span>
          </div>
        </div>
      </div>
      <div class="my_order_li">
        <div class="order-good" @click="orderURL(1111)">
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="goods_title">
            <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
            <div class="goods_titles">
              <span>已发货</span>
            </div>
          </div>
          <div class="gooods_price">
            <span>￥39.00</span>
            <font>X1</font>
          </div>
        </div>
        <div class="order_buttom">
          共1件商品合计:¥
          <font>{{priceBlock(1,30.65)}}</font>{{priceBlock(2,30.65)}}
        </div>
        <div class="goods_bottom">
          <p>您的摩力会在订单完成后到账</p>
          <div class="order_butt">
            <span class="h" @click="logisticsURL(111)">查看物流</span>
            <span class="l" @click="evaluationURL(111)">去评价</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
export default {
  name: "",
  data() {
    return {
      title:'我的订单',
      navdefault: "0",
      navs: [{}, {}, {}]
    };
  },
  components:{
    Headers
  },
  mounted() {
    this.navdefault = this.$route.query.orid;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 拆分小数点前小数点后
    priceBlock(n, data) {
      // n 1 小数点前 2小数后
      data = String(data);
      var indexB = data.indexOf(".");
      var bData = data.substring(0, indexB);
      var fData = data.substring(indexB);
      if (n == 1) {
        if (indexB < 0) {
          return data;
        }
        return bData;
      } else {
        if (indexB < 0) {
          return "";
        }
        return fData;
      }
    },
    //控制顶部导航渐变显示隐藏
    handleScroll() {
      var h = document.documentElement.scrollTop || document.body.scrollTop;
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(h * 2.5); //控制台查看监听滚动
      var headerTop = document.getElementById("f_nav");
      console.log("hhh", h);
      if (h > 0) {
        headerTop.style.padding = "40px 0px 0px 0px";
        headerTop.style.position = "fixed";
      } else {
        headerTop.style.padding = "0px 0px 0px 0px";
        headerTop.style.position = "unset";
      }
    },
    //确认收货
    closedGoods(){
      console.log("收货")
    },
    // 去评价
    evaluationURL(orderID){
      this.$router.push("/published_evaluation?orderid=" + orderID);
    },
    // 查看物流
    logisticsURL(orderID){
      this.$router.push("/logistics?orderid=" + orderID);
    },
    //tabx切换
    navclick1(e) {
      this.navdefault = e;
    },
    // 跳转到订单详情
    orderURL(orderID) {
      this.$store.dispatch("setUserData", {
        ID: 'orderID'
      });
      this.$router.push("/order_details?orderid=" + orderID);
    }
  },
  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
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
.my_order {
  padding-top: 40px;
  background-color: #f7f7f7;
}
.my_order_con {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
}
.my_order_nav {
  top: 0px;
  z-index: 99;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
}
.my_order_nav ul {
  display: flex;
  text-align: center;
  font: 13px/30px Helvetica;
  color: #999999;
  width: 100%;
}
.my_order_nav ul li {
  flex: 1;
  position: relative;
}
.my_order_nav ul li.on {
  color: #f94c00;
}
.my_order_nav ul li.on:after {
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
/* 列表信息 */
.my_order_li {
  overflow: hidden;
  padding: 15px;
  background-color: #fff;
  padding: 15px 15px 10px 15px;
  border-radius: 5px;
  margin-bottom: 15px;
}
/* 列表内容 */
.order-good {
  overflow: hidden;
  width: 100%;
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
  display: flex;
  justify-content: space-between;
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
</style>
