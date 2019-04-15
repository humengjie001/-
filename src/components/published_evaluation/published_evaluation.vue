<template>
  <div class="published_evaluation">
    <Headers :title="title"></Headers>
    <div class="evaluation_con">
      <div class="evaluation_k">
        <div class="evaluation_goods">
          <div class="goods_img">
            <img src="../../img/11.jpg">
          </div>
          <div class="name">描述相符</div>
          <div class="starXin">
            <div @click="star(index)" v-for="(item,index) in list" :key="index">
              <img v-if="xing>index" src="../../images/xiaoxinxin2.png" alt>
              <img v-else src="../../images/xingxing_wxz.png" alt>
            </div>
            <span>{{dengji}}</span>
          </div>
        </div>
        <textarea rows="3" cols="20" class="evealuation_text" v-model="message" placeholder="评价"></textarea>
        <div class="img_sc">
          <UploadImg :imgLength="6" ref="headerChild"></UploadImg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from "../template/Header"
import UploadImg from "../template/upload_img";
export default {
  data() {
    return {
      title:'发表评价',
      message: "", //评价内容
      list: [0, 1, 2, 3, 4],
      xing: 5, //评价星数
      dengji: "非常好", //
      orid: "" //订单id
    };
  },
  mounted() {
    this.orid = this.$route.query.orid;
  },
  components: {
    UploadImg,
    Headers
  },
  methods: {
    // 评价提交
    submit() {
      //xing 星数 this.message 评语
      console.log("评价内容：", this.message);
      if (this.message == "") {
        this.toast("不要忘记给商品写评价");
      }
    },
    star(val) {
      this.xing = val + 1;
      switch (val) {
        case 4:
          this.dengji = "非常好";
          break;
        case 3:
          this.dengji = "好";
          break;
        case 2:
          this.dengji = "一般";
          break;
        case 1:
          this.dengji = "差";
          break;
        case 0:
          this.dengji = "非常差";
          break;
        default:
          this.dengji = "非常好";
      }
    },
    uploadimg(img) {
      console.log("图片地址:", img);
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

.evaluation_con {
  padding: 53px 13px 13px;
}
.evaluation_k {
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
}
.evaluation_goods {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font: 14px/23px Helvetica;
  color: #666666;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.evaluation_goods .name {
  width: 100px;
  padding: 0px 10px;
}
.evaluation_goods .goods_img {
  width: 68px;
  border-radius: 6px;
  overflow: hidden;
}
.evaluation_goods .goods_img img {
  width: 68px;
}
.evaluation_goods .starXin {
  display: flex;
  width: 80%;
  float: right;
  align-items: center;
}
.evaluation_goods .starXin > div {
  margin: 0px 2%;
  width: 18px;
  height: 18px;
}
.evaluation_goods .starXin span {
  display: inline-block;
  width: 55px;
  text-align: right;
}
.evealuation_text {
  width: 100%;
  height: 20vh;
  border: none;
  padding: 8px 0px;
}
</style>

