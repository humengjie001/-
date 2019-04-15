<template>
  <div class="logistice">
    <Headers :title="title"></Headers>
    <div class="logistice_con">
      <div class="goods">
        <OrderGoods></OrderGoods>
      </div>
      <div class="logistice_nr">
        <div class="track-rcol">
          <div class="track-list">
            <div class="li top">
              <span class="time">11-11 20：20</span>
              <span class="txt">
                <i class="xian"></i>
                <i class="node-icon"></i>
                收件地址开导开导卡刷卡看看
              </span>
            </div>

            <div v-for="(item,index) in logisticsList" :key="index">
              <div class="li first" v-if="index===0">
                <span class="time">{{item.messageDate}}</span>
                <span class="txt">
                  <i class="xian"></i>
                  <i class="node-icon"></i>
                  {{item.message}}
                </span>
              </div>

              <div class="li" v-if="index > 0 && index !== logisticsList.length-1">
                <span class="time">{{item.messageDate}}</span>
                <span class="txt">
                  <i class="xian"></i>
                  <i class="node-icon"></i>
                  {{item.message}}
                </span>
              </div>

              <div v-if="index === logisticsList.length-1" class="li finall">
                <span class="time">{{item.messageDate}}</span>
                <span class="txt">
                  <i class="xian"></i>
                  <i class="node-icon"></i>
                  {{item.message}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from "../template/Header";
import OrderGoods from "../template/order_goods";
export default {
  data() {
    return {
      title:'查看物流',
      logisticsList: [
        {
          message:
            "1包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！",
          messageDate: "03-10 18:07"
        },
        {
          message:
            "2包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！",
          messageDate: "03-10 18:07"
        },
        {
          message:
            "3包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！",
          messageDate: "03-10 18:07"
        },
        {
          message:
            "4包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！",
          messageDate: "03-10 18:07"
        }
      ],
      orderid: "" //订单id
    };
  },
  mounted() {
    this.orderid = this.$route.query.orderid;
  },
  components: { OrderGoods, Headers },
  methods: {}
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
.logistice {
  padding: 40px 0px 0px;
  height: 100%;
}
.goods,
.logistice_nr {
  padding: 15px;
  width: 93%;
  margin: 15px auto 0;
  border-radius: 10px;
  background: #fff;
}
.goods {
  overflow: hidden;
}
/* 物流动态 */
.track-list .li {
  font-size: 12px;
  position: relative;
  line-height: 20px;
  /* display: flex; */
  color: #999;
  overflow: hidden;
}
.track-list .li .time {
  display: block;
  float: left;
  color: #999999;
  width: 50px;
  text-align: center;
}
.track-list .li .txt {
  width: 80%;
  position: relative;
  margin-left: 10px;
  padding: 10px 0px 10px 15px;
  display: block;
  float: left;
  color: #999;
}
.track-list .li .node-icon {
  position: absolute;
  left: -5.5px;
  border-radius: 20px;
  width: 9px;
  height: 9px;
  top: 12px;
  background-color: #c9c9c9;
}
.track-list .li .xian {
  position: absolute;
  left: -1.5px;
  top: 0px;
  border-radius: 20px;
  width: 2px;
  border-left: 1px solid #c9c9c9;
  height: 100px;
}

.track-list .li.first {
  color: #333333;
}

/* 最新的状态 */
.track-list .li.first .node-icon {
  background: url("../../images/wuliuyunshu.png") no-repeat scroll right center
    transparent;
  background-size: 100%;
  width: 17px;
  z-index: 2;
  height: 17px;
  position: absolute;
  left: -9px;
  top: 12;
}
/* 截至状态*/
.track-list .li.top .node-icon {
  background: url("../../images/shoujian.png") no-repeat scroll right center
    #fff;
  background-size: 100%;
  border-radius: 0;
  width: 17px;
  z-index: 2;
  height: 17px;
  position: absolute;
  left: -9px;
  top: 12;
}
.track-list .li.top .xian {
  top: 12px;
}

/* 开始状态*/
.track-list .li.finall .node-icon {
  background: url("../../images/wuliulanjian.png") no-repeat scroll right center
    #fff;
  background-size: 100%;
  border-radius: 0;
  width: 17px;
  z-index: 2;
  height: 17px;
  position: absolute;
  left: -9px;
  top: 12;
}
.track-list .li.finall .xian {
  top: -12px;
  height: 38px;
}
</style>

