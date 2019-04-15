<template>
  <div class="el-input-number">
    <span role="button" class="el-input-number__increase dl" max="10" min="1" @click="subtract(1)">-</span>
    <div class="el-input">
      <input type="text" max="10" min="1" :value="count" class="el-input__inner">
    </div>
    <span role="button" class="el-input-number__increase dr" max="10" min="1" @click="add(10)">+</span>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      count: 0,
      style1: false,
      style2: false,
      showcone: false
    };
  },
  methods: {
    add: function(max) {
      if (this.count >= max) {
        this.style2 = true;
        this.showcone = true;
        this.count = max;
      } else {
        this.count++;
      }
    },
    subtract: function(min) {
      if (this.count <= min) {
        this.style1 = true;
        this.showcone = true;
        this.count = min;
      } else {
        this.count = this.count - 1;
      }
    }
  }
};
</script>
<style scoped>
.el-input-number {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 30px;
  display: flex;
}
.el-input-number__increase {
  width: 30px;
  height: 30px;
  display: block;
  text-align: center;
  background: #f5f7fa;
  color: #606266;
  font-size: 24px;
  font-weight: 400;
  background-color: #f7f7f7;
}

.el-input-number .el-input {
  width: 40%;
  background-color: #f7f7f7;
  margin: 0px 2px;
}
.el-input-number .el-input input {
  width: 90%;
  text-align: center;
  border: none;
  background-color: #f7f7f7;
}
</style>
