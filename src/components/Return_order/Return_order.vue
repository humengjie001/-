 <template>
  <div class="retum">
    <Headers :title="title"></Headers>
    <div class="retum_order_con">
      <div class="retum_li">
        <div class="order-good">
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="goods_title">
            <p>VS地方 阿斯弗阿斯弗萨芬是否阿斯弗算法阿斯弗阿桑的歌啊大哥啊大哥啊大哥埃是法国</p>
          </div>
          <div class="gooods_price">
            <span>￥39.00</span>
            <font>X1</font>
          </div>
        </div>
        <div class="order_buttom">
          仅退款 退款成功
        </div>
        <div class="goods_bottom">
          <div class="order_butt"  @click="orderURL(1111)">
            <span class="l">查看详情</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
import Goods from "../template/goods";
export default {
  name: "",
  data() {
    return {
      title:'退款',
      navdefault: "0",
      navs: [{}, {}, {}]
    };
  },
  components: {
    Goods,
    Headers
  },
  mounted() {
    this.navdefault = this.$route.query.orid;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
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
.retum {
  padding-top: 40px;
  background-color: #f7f7f7;
}
.retum_order_con{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
}
/* 列表信息 */
.retum_li {
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
  text-align: left;
  border-bottom: 1px solid #F6F6F6;
  font: 12px/35px Helvetica;
  color: #333333;
}
.order_buttom font {
  font-size: 14px;
}
.goods_bottom {
  display: flex;
  float: right;
  justify-content: space-between;
}
.goods_bottom p {
  float: left;
  font: 12px/30px Helvetica;
  color: #999999;
  width: 50%;
  display: block;
}
.goods_bottom .order_butt span {
  border-radius: 25px;
  font: 12px/25px Helvetica;
  display: inline-block;
  padding: 0px 10px;
  margin:10px 4px 0px;
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
