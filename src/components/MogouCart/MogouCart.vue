<template>
  <div class="mogou-cart">
    <Headers :title="title"></Headers>

    <Shopmodule ref="headerChild" :a="1" @non="nons" @len="lens"></Shopmodule>
    <div class="mogou-foot">
      <div class="foot-left" @click="clickboxAll">
        <!-- 选择 -->
        <template v-if="selectAllStatus == true">
          <div class="clickboxone"></div>
        </template>
        <template v-else>
          <div style>
            <img src="../../images/checkboxs.png" alt>
          </div>
        </template>
        <!-- 选择 end-->
        <div style="margin-left:12%;">全选</div>
      </div>
      <div class="foot-right">
        <div class="total">
          <span>合计：</span>
          <span class="mogou-money">￥{{totalPrice}}</span>
        </div>
        <div class="settlement" @click="taizohuan()">结算 ({{totalLength}})</div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopmodule from "../template/Shopmodule";
import Headers from "../template/Header";
// import bank from "../../lib/api/bank.js";
// import means from "../../lib/means";
export default {
  name: "mogou-cart",
  data() {
    return {
      title: "购物",
      a: "", //判断是否显示左边勾选样式与删除按钮 。。。与右上角的价格，这里是需要显示的（除了右上角价格）
      totalPrice: 0, // 总价，初始为0
      totalLength: 0, // 选中总数
      selectAllStatus: true, // 全选状态，默认全不选
      leng:''//数组数量
      //点击选中图片
    };
  },
  created() {},
  methods: {
    clickboxAll() {
      if(this.leng == 0){
        this.selectAllStatus = true
      }else{
        this.selectAllStatus = !this.selectAllStatus 
      } 
      this.$refs.headerChild.clickboxAll();
      this.$refs.headerChild.swiperlefts();
      this.totalLength = this.$refs.headerChild.totalLength;
      this.totalPrice = this.$refs.headerChild.totalPrice;
    },
    // 跳转到提交订单页面
    taizohuan() {
      if (this.$refs.headerChild.suborder()) {
        this.$router.push({
          name: "Order"
        });
      }
    },
    totalPricesss() {
      this.totalLength = this.$refs.headerChild.totalLength;
      this.totalPrice = this.$refs.headerChild.totalPrice;
    },
    nons(res) {
      //这里传来的是单个选中是否全满是，全选按钮变换
      this.selectAllStatus = res;
    },
    lens(res){
      this.leng = res
    }
  },
  mounted() {
     this.lens();
    
  },
  components: {
    Shopmodule,
    Headers
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.mogou-cart {
  padding-top: 40px;
  font-family: PingFang-SC-Regular;
}
.mogou-foot {
  display: flex;
  width: 100%;
  background: white;
  justify-content: space-between;
  position: fixed;
  bottom: 55px;
  padding-bottom: 1%;
}
.foot-left {
  display: flex;
  height: 30px;
  margin-left: 3%;
  width: 20%;
  margin-top: 4%;
  padding-top: 1%;
  line-height: 20px;
}
.clickboxone {
  border: 1px solid rgba(186, 186, 186, 1);
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.foot-right {
  display: flex;
  width: 75%;
  justify-content: flex-end;
  margin-top: 2%;
}
.total {
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
  display: flex;
  margin-right: 3%;
}
.mogou-money {
  font-size: 20px;
  font-weight: 500;
  color: rgba(249, 76, 0, 1);
}
.settlement {
  width: 31%;
  height: 36px;
  line-height: 36px;
  background: rgba(249, 76, 0, 1);
  border-radius: 18px;
  text-align: center;
  color: white;
  font-size: 15px;
  margin-right: 3%;
  font-weight: 500;
}
/* 中间内容 */

</style>
