<template>
  <div class="Updatamini">
    <Headers :title="title"></Headers>
    <div class="updata-content">
      <div class="content-con">
        <div class="classmodel">
          <div class="model-title" style="letter-spacing: 1px;">联 系 人：</div>
          <input
            type="text"
            v-model="seData.username"
            placeholder="请输入名字"
            v-on:input="changInput(1)"
          >
        </div>
        <div class="classmodel">
          <div class="model-title" style="letter-spacing: 1px;">手 机 号：</div>
          <input type="tel" v-model="seData.tel" placeholder="请输入手机号" v-on:input="changInput(2)">
        </div>
        <div class="classmodel">
          <div class="model-title">所在地区：</div>
          <div class="diqu" @click="popup_butt()">{{seData.qu||'山东省/临沂市/兰山区'}}</div>
        </div>
        <div class="classmodel">
          <div class="model-title">详细地址：</div>
          <textarea
            rows="3"
            cols="20"
            class="evealuation_text"
            v-model="seData.where"
            placeholder="请输入详细地址"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="up-footer" @click="sunsubmit()">确定</div>

    <mt-popup v-model="popupVisible" position="bottom">
      <div class="popup_con">
        <mt-header title>
          <router-link to slot="left">
            <mt-button @click="handleClose(1)">取消</mt-button>
          </router-link>
          <mt-button slot="right" @click="handleClose(2)">确认</mt-button>
        </mt-header>
        <div class="popu_cont">
          <mt-picker :slots="myAddressSlots"  @change="onValuesChange"></mt-picker>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Headers from "../template/Header"
import { mapGetters } from "vuex";
import uleCheck from "../../lib/uleCheck";
import myaddress from "../../lib/pca.json";
export default {
  name: "Updatamini",
  data() {
    return {
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],

      title: "修改地址",
      popupVisible: false, //控制popup显示隐藏
      seData: {
        username: "", //用户名
        tel: "", //电话
        qu: "", //地址
        where: "" //详细地址
      },
      listup: ""
    };
  },
  components:{
    Headers
  },
  computed: {
    ...mapGetters({
      userData: "userData"
    })
  },
  mounted() {
    console.log(this.userData.upminiData);
    this.seData.username = this.userData.upminiData.username || "";
    this.seData.tel = this.userData.upminiData.tel || "";
    this.seData.qu = this.userData.upminiData.qu || "";
    this.seData.where = this.userData.upminiData.where || "";
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
    });
    if (this.$route.params.add != 0) {
      this.title = "添加地址";
    }
  },
  methods: {
    // 点击确认更改选择原因
    handleClose(id) {
      if (id == 2) {
        this.seData.qu = this.myAddressProvince+"/"+this.myAddressCity+"/"+this.myAddresscounty
      }
      this.popupVisible = false;
    },
    // 点击选择渲染地区下拉列表
    popup_butt(index) {
      this.popupVisible = !this.popupVisible;
    },
    // 获取滚动的选中元素
    onValuesChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
        
      }
    },

    //   限制input输入值
    changInput(itemId) {
      var seData = this.seData;
      switch (itemId) {
        case 1:
          seData.username = uleCheck.address(seData.username).substring(0, 10);
          break;
        case 2:
          seData.tel = uleCheck.tel(seData.tel).substring(0, 11);
          break;
        default:
          break;
      }
    },
    // 提交
    sunsubmit() {
      if (!this.checkAll()) return;
    },
    // 判断所有数据
    checkAll() {
      // 验证所有的输入格式
      var isMobile = uleCheck.isMobile(this.seData.tel);
      var errMsg = "";

      if (this.seData.username == "") {
        errMsg = "请填写收货人的名称";
      } else if (this.seData.where == "") {
        errMsg = "请填写收货人的详细地址";
      } else if (this.seData.tel != "") {
        if (!isMobile) {
          errMsg = "请输入正确的手机号码";
        }
      } else {
        errMsg = "请填写收货人的手机号码";
      }

      if (errMsg.length > 0) {
        this.toast(errMsg);
        return false;
      } else {
        return true;
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
.Updatamini {
  padding-top: 40px;
  font-size: 14px;
  font-weight: 400;
}
.updata-content {
  width: 93%;
  margin-left: 3.5%;
  border: 1px solid rgba(256, 256, 256, 0);
  margin-top: 15px;
  background: white;
  border-radius: 4px;
}
.content-con {
  width: 93%;
  margin: 0 3%;
}
.classmodel {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.classmodel input {
  width: 70%;
  border: none;
  outline: none;
  margin-left: 8%;
  padding-left: 3%;
}
.classmodel .evealuation_text {
  margin-left: 8%;
  width: 70%;
  height: 100px;
  border: none;
}
.diqu {
  margin-left: 8%;
  padding-left: 3%;
}
.content-con :last-child {
  border-bottom: 0;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #666;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #666;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #666;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #666;
}
.up-footer {
  height: 37px;
  width: 93%;
  margin-left: 3.5%;
  text-align: center;
  line-height: 37px;
  background: linear-gradient(
    90deg,
    rgba(241, 143, 23, 1) 0%,
    rgba(249, 76, 0, 1) 100%
  );
  border-radius: 5px;
  color: white;
  margin-top: 30%;
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
.clickboxone{
  border: 1px solid rgba(186, 186, 186, 1);
  width: 18px;margin-right:3%;
  height: 18px;
  border-radius: 50%;
}
</style>
