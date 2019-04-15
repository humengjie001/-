<template>
  <div class>
    <Headers :title="title"></Headers>
    <div class="evaluation_con">
      <div class="evaluation_ul">
        <div class="evaluation_li">
          <div class="evaluation_tit">
            <div class="evaluation_ico">
              <img src>
            </div>
            <div class="name">打赏阿萨</div>
            <div class="pingfen">
              <img src="../../images/xiaoxinxin2.png">
              <img src="../../images/xiaoxinxin2.png">
              <img src="../../images/xiaoxinxin2.png">
              <img src="../../images/xiaoxinxin2.png">
              <img src="../../images/xiaoxinxin2.png">
            </div>
          </div>
          <div class="tiem">2018-05-02</div>
          <div class="evaluation_nr">
            <p>的斯科拉圣诞快，乐开绿灯撒开了离开的，萨拉大大是阿萨大厦的斯科拉圣诞快，乐开绿灯撒开了离开的，萨拉大大是阿萨大厦</p>
            <div class="pj_img">
              <img src="../../images/xiaoxinxin2.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from "../template/Header";
export default {
  data() {
    return {
      title:'评价',
      goodsid: "" //商品id
    };
  },
  mounted() {
    this.goodsid = this.$route.query.goodsid;
  },
  methods: {},
  components: { Headers }
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
.evaluation_ul {
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
}
.evaluation_li {
  overflow: hidden;
  background-color: #fff;
  padding: 5px 0px 10px;
  border-bottom: 1px solid #e5e5e5;
}
.evaluation_li .evaluation_tit {
  width: 100%;
  overflow: hidden;
  color: #333333;
  line-height: 33px;
}

.evaluation_li .evaluation_tit .evaluation_ico {
  width: 33px;
  margin-right: 9px;
  float: left;
}
.evaluation_li .evaluation_tit .name {
  float: left;
}
.evaluation_li .evaluation_tit .evaluation_ico img {
  width: 33px;
  height: 33px;
  background-color: #999;
  border-radius: 50%;
}
.evaluation_li .evaluation_tit .pingfen {
  float: right;
}
.evaluation_li .evaluation_tit .pingfen img {
  margin-top: 10px;
  width: 14px;
  height: 14px;
  display: inline-block;
}
.tiem {
  overflow: hidden;
  font: 12px/30px Helvetica;
  color: #999999;
}
.evaluation_li .evaluation_nr {
  width: 100%;
  overflow: hidden;
  padding-bottom: 15px;
}
.evaluation_li .evaluation_nr p {
  padding-top: 8px;
  font: 14px/24px Helvetica;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.evaluation_li .evaluation_nr .pj_img {
  overflow: hidden;
  padding-top: 10px;
}
.evaluation_li .evaluation_nr .pj_img img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: 5px;
  float: left;
}
</style>

