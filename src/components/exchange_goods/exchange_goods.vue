<template>
  <div class="exchange">
    <Headers :title="title"></Headers>
    <div class="exchange_con">
      <div class="goods">
        <div class="tit">退款商品</div>
        <OrderGoods></OrderGoods>
      </div>
      <div class="exchange_nr">
        <div class="cell-wrapper">
          <div class="cell-title">
            <span class="cell-text">货物状态：</span>
          </div>
          <div class="cell-value" @click="popup_butt(1)">
            <span>{{xzpopu1}}</span>
          </div>
        </div>

        <div class="cell-wrapper">
          <div class="cell-title">
            <span class="cell-text">退款原因：</span>
          </div>
          <div class="cell-value" @click="popup_butt(2)">
            <span>{{xzpopu2}}</span>
          </div>
        </div>

        <div class="cell-wrapper">
          <div class="cell-title">
            <span class="cell-text">
              退款金额：
              <span>￥85.9</span>
            </span>
          </div>
        </div>
      </div>
      <div class="submit_butt" @click="submit()">提交</div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="popup_con">
        <mt-header title>
          <router-link to slot="left">
            <mt-button @click="handleClose(1)">取消</mt-button>
          </router-link>
          <mt-button slot="right" @click="handleClose(2)">确认</mt-button>
        </mt-header>
        <div class="popu_cont">
          <mt-picker :slots="slots"  @change="onValuesChange"></mt-picker>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import Headers from "../template/Header";
import OrderGoods from "../template/order_goods";
export default {
  data() {
    return {
      slots:[],
      title: "申请退款",
      orcs: 1, //1是退款2是换货
      popupVisible: false, //控制popup显示隐藏
      xzpopu1: "请选择",
      xzpopu2: "请选择",
      POPUvalues: "",
      popuID: "",
      orid: "" //订单id
    };
  },
  mounted() {
    if (this.$route.query.orcs == "2") {
      this.orcs = 2;
      this.orid = this.$route.query.orid;
      this.title = "换货申请";
    }
  },
  components: { OrderGoods, Headers },
  methods: {
    // 点击确认更改选择原因
    handleClose(id) {
      if (id == 2) {
        if (this.popuID == 1) {
          this.xzpopu1 = this.POPUvalues;
        } else if (this.popuID == 2) {
          this.xzpopu2 = this.POPUvalues;
        }
      }
      this.popupVisible = false;
    },
    // 点击选择渲染下拉列表
    popup_butt(index) {
      this.popuID = index;
      this.popupVisible = !this.popupVisible;
      if (index == 1) {
        console.log('111111',index)

        this.$set(this.slots,0,{ values: ["未收到货", "已收到货"] });
      } else if (index == 2) {
        this.slots = [
          {
            values: [
              "多拍/错拍/不想要",
              "快递一直未收到",
              "未按约定时间发货",
              "快递无跟踪记录",
              "空包裹/少货",
              "其他"
            ]
          }
        ];
      }
    },
    // 获取滚动的选中元素
    onValuesChange(picker, values) {
      console.log( values);
      this.POPUvalues = values[0];
    },
    // 提交
    submit() {
      //xing 星数 this.message 评语
      console.log("评价内容：", this.message);
      if (this.xzpopu1 == "请选择") {
        this.toast("请选择货物状态");
      } else if (this.xzpopu2 == "请选择") {
        this.toast("请选择退款原因");
      }
    }
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
.exchange {
  padding: 40px 0px 0px;
  height: 100%;
}
.goods,
.exchange_nr {
  padding: 15px;
  width: 93%;
  margin: 15px auto 0;
  border-radius: 10px;
  background: #fff;
}
.exchange_nr {
  padding: 5px 15px;
}
.goods {
  overflow: hidden;
}
.goods .tit {
  font: 14px/30px Helvetica;
  color: #333333;
  padding: 0px 0px 10px;
}
.cell-wrapper {
  font: 15px/40px Helvetica;
  color: #333333;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
}
.cell-wrapper:last-child {
  border: none;
}
.cell-wrapper > div {
  /* flex: 1; */
}
.cell-title {
  width: 150px;
}
.cell-wrapper .cell-text span {
  color: #f94c00;
}
.cell-wrapper .cell-value span {
  text-align: right;
  display: block;
}
.cell-wrapper .cell-value {
  background: url("../../images/Go.png") no-repeat scroll right center
    transparent;
  background-size: 16px;
  padding-right: 20px;
}
.shouhuo_dizhi {
  overflow: hidden;
  clear: both;
}
.dihzi {
  line-height: 20px;
}

.submit_butt {
  width: 100%;
  font: 15px/45px Helvetica;
  color: #fff;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1),
    rgba(249, 76, 0, 1)
  );
  position: fixed;
  bottom: 0px;
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

/* poput */
.popup_con {
  width: 100vw;
  overflow: hidden;
}
.popu_cont {
  width: 100%;
  overflow: hidden;
  padding: 10px;
}
</style>

