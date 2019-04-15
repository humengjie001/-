<template>
  <div class="evaluation_li">
    <div class="evaluation_ico">
      <img src>
    </div>
    <div class="evaluation_tit">
      <div class="evaluation_tit_top">
        <span class="name">打赏阿萨</span>
        <span class="pingfen">
          <img src="../../images/xiaoxinxin2.png">
          <img src="../../images/xiaoxinxin2.png">
          <img src="../../images/xiaoxinxin2.png">
          <img src="../../images/xiaoxinxin2.png">
          <img src="../../images/xiaoxinxin2.png">
        </span>
      </div>
      <div class="evaluation_nr">的斯科拉圣诞快，乐开绿灯撒开了离开的，萨拉大大是阿萨大厦的斯科拉圣诞快，乐开绿灯撒开了离开的，萨拉大大是阿萨大厦</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.evaluation_li {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  padding: 5px 0px 10px;
  border-bottom: 1px solid #E5E5E5
}
.evaluation_li .evaluation_ico {
  width: 33px;
  margin-right: 9px;
}
.evaluation_li .evaluation_ico img {
  width: 33px;
  height: 33px;
  background-color: #999;
  border-radius: 50%;
}
.evaluation_li .evaluation_tit {
  flex: 1;
}
.evaluation_li .evaluation_tit .evaluation_tit_top {
  display: flex;
}
.evaluation_li .evaluation_tit .evaluation_tit_top .name,
.evaluation_li .evaluation_tit .evaluation_tit_top .pingfen {
  flex: 1;
}
.evaluation_li .evaluation_tit .evaluation_tit_top .pingfen {
  text-align: right;
}
.evaluation_li .evaluation_tit .evaluation_tit_top .pingfen img {
  width: 14px;
  height: 14px;
  display: inline-block;
}
.evaluation_li .evaluation_tit .evaluation_nr {
  padding-top: 8px;
  font: 14px/20px Helvetica;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

