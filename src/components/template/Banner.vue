<template>
  <div class="Banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(items,index) in pages" :key="index">
        <img :src="items.imgUrl" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Banner",
  data() {
    return {
      pages: [
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/33062/38/975/95369/5ca2bae6E7b6449ff/b0b9747b214040c2.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26977/27/12933/484686/5c9c4491Ec54c31f8/a9681a4bbf2c0f5c.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        }
      ],
      swiperOption: {
        pagination: {
          //分页
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          //自动切换时间
          delay: 5000, //1秒切换一次
          disableOnInteraction: false
        },
        effect: "slide"
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.Banner {
  background-color: #fff;
  height:27vh;
}
.Banner >>> .mint-swipe-indicator {
  width: 4px;
  height: 4px;
  background-color: #fff;
  opacity: 1;
}
.Banner >>> .mint-swipe-indicator.is-active {
  width: 5px;
  height: 5px;
  background-color: #f94c00;
}
</style>