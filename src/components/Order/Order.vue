<template>
  <div class="order">
    <Headers :title="title"></Headers>
    <!-- 这是收货地址部分 -->
    <div class="address" v-if="xian!='' " @click="quguan">
      <div class="order-left">
        <img src="../../images/shouhuodizhi.png" alt>
      </div>
      <div class="order-right">
        <div class="right-first">
          <div>收货人: {{xian.username}}</div>
          <div>{{xian.tel}}</div>
        </div>
        <div class="right-last">收货地址：{{xian.where}}</div>
      </div>
    </div>
    <div class="address" v-else  @click="quadd">
     <div class="mapsss">
        <div><img src="../../images/mapss.png" alt=""></div>
        <div>添加收获地址</div>
        <div><img src="../../images/Go.png" alt=""></div>
     </div>
    </div>
    <!--收货地址部分 end-->
    <Shopmodule :b="1" ref="headerChild"></Shopmodule>

    <div class="mogou-foot">
      <div class="foot-right">
        <div class="total">
          合计：
          <span class="mogou-money">￥<span>{{totalPrice}}</span></span>
        </div>
        <div class="settlement" @click="dd()">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
import Shopmodule from "./../template/Shopmodule";
import { mapGetters } from "vuex";
export default {
  name: "order",
  data() {
    return {
      title:'提交订单',
      xian:'',//判断收货地址
      b: "", //判断是否显示左侧的勾选与删除按钮与右上角的价格，在这里是不让显示的（除了右上角的价格）
      totalPrice: 0.0, // 总价，初始为0
      totalLength: 0 // 选中总数
    };
  },
  computed: {
      ...mapGetters({
          userData: "userData"
      })
  },
  methods: {
      quguan(){
        this.$router.push({name: 'Admini'})
      },
      quadd(){
        this.$router.push({name: 'Updatamini',params:{add:1}})
      },
      moms(len,totalPrice){
      //这里是模块传来的价格与选中的数量
      console.log(len,totalPrice)
        this.totalPrice = totalPrice;
        this.totalLength = len;
      }
  },
  created() {
  },
  mounted(){
    console.log(this.userData.adminiData)
    if(this.userData.adminiData!=''){
      this.xian = this.userData.adminiData; 
    }    
    this.$refs.headerChild.bianh();
    this.$refs.headerChild.moneyLen();
    this.totalPrice = this.$refs.headerChild.totalPrice
    this.totalLength = this.$refs.headerChild.totalLength
  },    
  
  components: {
    Shopmodule,
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
.order {
  padding-top: 40px;
  font-family: PingFang-SC-Medium;
}
.module {
  width: 93%;
  margin-left: 3%;
  margin-top: 14px;
  background: white;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
}
.module-con {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3% 0;
}
.module-title {
  display: flex;
  justify-content: space-between;
}
.module-title div {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}
.module-left {
  width: 85px;
  border: 1px solid red;
  height: 85px;
}
.module-left img {
  width: 100%;
}
.module-right {
  width: 70%;
}
.title-first {
  border: 1px solid red;
  height: 40px;
  line-height: 20px;
}
.module-last {
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
}
.module-money {
  font-size: 10px;
  font-weight: 400;
  color: rgba(249, 76, 0, 1);
}
.pice {
  font-size: 18px;
}
.modelu-num {
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-right: 0;
}
.address {
  width: 93%;
  margin-left: 3%;
  margin-top: 14px;
  background: white;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.mapsss{
  display: flex;margin:6% 0;width: 100%;justify-content: flex-end;
}

.mapsss img{
  width: 50%;
}
.mapsss :last-child{
  margin-top:1%;margin-left: 20%;margin-right:8%;
}
.order-left {
  width: 10%;
  height: 33px;
  margin-top: 10%;
}
.order-left img {
  width: 60%;
}
.order-right {
  width: 90%;
}
.right-first {
  display: flex;
  justify-content: space-between;
  padding-right: 6%;
  margin-top: 6%;
}
.right-last {
  margin-top: 2%;
  line-height: 20px;
  margin-bottom: 5%;
  padding-right: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* 以下是底部 */
.mogou-foot {
  display: flex;
  width: 100%;
  background: white;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
}

.foot-right {
  display: flex;
  width: 79%;
  justify-content: flex-end;
  margin-top: 2%;
  margin-left: 18%;
  margin-bottom: 2%;
}
.total {
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
  margin-right: 5%;
}
.mogou-money {
  font-size: 20px;
  font-weight: 500;
  color: rgba(249, 76, 0, 1);
}

.settlement {
  width: 40%;
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
</style>
