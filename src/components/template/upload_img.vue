<template>
  <div class="upload-imgs">
    <div v-for="(value, key) in imgs" :key="key">
      <img :src="getObjectURL(value)">
      <span class="close" @click="delImg(key)">×</span>
    </div>
    <div v-if="imgLen>=imgLength ? false : true">
      <input
        type="file"
        class="upload"
        @change="addImg"
        ref="inputer"
        multiple
        accept="image/png, image/jpeg, image/gif, image/jpg"
      >
      <div class="img_butt">添加图片</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgLength","uploadimg"],
  data() {
    return {
      formData: new FormData(),
      imgs: {},
      imgLen: 0
    };
  },
  methods: {
    addImg(event) {
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.fil = inputDOM.files;
      let oldLen = this.imgLen;
      let len = this.fil.length + oldLen;
      //   if (len > this.imgLength) {
        //   this.toast("最多可上传"+this.imgLength+"张");
      //     return false;
      //   }
      for (let i = 0; i < this.fil.length; i++) {
        let size = Math.floor(this.fil[i].size / 1024);
        if (size > 5 * 1024 * 1024) {
          this.toast("请选择5M以内的图片！");
          return false;
        }
        this.imgLen++;
        this.$set(
          this.imgs,
          this.fil[i].name + "?" + new Date().getTime() + i,
          this.fil[i]
        );   
      }
      this.$parent.uploadimg()
    },
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      this.$parent.uploadimg(url)
      return url;
    },
    delImg(key) {
      this.$delete(this.imgs, key);
      this.imgLen--;
    },
    // submit() {
    //   for (let key in this.imgs) {
    //     let name = key.split("?")[0];
    //     this.formData.append("multipartFiles", this.imgs[key], name);
    //   }
    //   this.$http
    //     .post("/opinion/feedback", this.formData, {
    //       headers: { "Content-Type": "multipart/form-data" }
    //     })
    //     .then(res => {
    //       this.alertShow = true;
    //     });
    // }
  }
};
</script>

<style scoped>
.upload-imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.img_butt {
  background: url("../../images/paizhao.png") no-repeat scroll right center
    transparent;
  background-size: 100%;
  text-align: center;
  color: #999999;
  width: 80px;
  height: 80px;
  font: 12px/120px Helvetica;
}
.upload-imgs > div input {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
}
.upload-imgs > div span {
  display: block;
  padding: 1px 4px;
  position: absolute;
  top: -8px;
  right: -9px;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  color: #fff;
}
.upload-imgs > div {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 5px 2%;
  display: block;
  text-align: center;
}
.upload-imgs > div img {
  width: 80px;
  height: 80px;
}
</style>
