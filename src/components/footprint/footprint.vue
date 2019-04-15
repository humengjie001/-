<template>
  <div class="footprint">
    <Headers :title="title"></Headers>
    <div class="footprint_con">
      <Goods v-for="(item,index) in navs" :key="index" :item="item"></Goods>
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
      title:'足迹',
      navs: [{}, {}, {}]
    };
  },
  components: {
    Goods,
    Headers
  },
  mounted() {},
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
.footprint {
  padding-top: 40px;
  background-color: #f7f7f7;
}
.footprint_con {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
}
</style>
