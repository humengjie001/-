<template>
  <div :class="{shopmodule:b == 1}">
    <div class="module" :class="{modules:b == 1}" v-for="(item,index) in list" :key="index">
      <!-- 选择 -->
      <div
        class="addbox"
        v-if="a == 1"
        @click="clickbox($event,index)"
      >
        <div class="clickboxone" v-if="item.selected == true"></div>
        <div v-else>
          <img src="../../images/checkboxs.png" alt>
        </div>
      </div>
      <!-- 选择 end-->
      <!-- 这是cart页面使用的 -->
      <template v-if="a == 1">
        <v-touch
          @swipeleft="swiperleft($event,index)"
          @swiperight="swiperright($event,index)"
          class="wrapper"
        >
          <div class="menu-container" ref="menuContainer">
            <div
              class="module-con"
              style="position:absolute;"
              :class="{active:true}"
              :style="{left:item.lleet+'%'}"
            >
              <div class="module-left">
                <img src="../../img/11.jpg" alt>
              </div>
              <div class="module-right">
                <div class="module-title">
                  <div class="title-first">{{item.title}}</div>
                  <template v-if="a == 0">
                    <div style="width:25%;text-align:right;height:32px;">
                      <div style="color:rgba(51,51,51,1);font-size:12px;">￥39.00</div>
                      <div class="modelu-num">x1</div>
                    </div>
                  </template>
                </div>
                <div class="module-last">
                  <div class="module-money">
                    ￥
                    <span class="pice">{{item.price}}</span>
                  </div>
                  <div class="modelu-num">x{{item.num}}</div>
                </div>
              </div>
            </div>
          </div>
        </v-touch>
      </template>
      <!-- 下面是order使用的 -->
      <template v-else>
        <div class="module-con" style="position:absolute;left:4%;">
          <div class="module-left" style="margin-right:3%;">
            <img src="../../img/11.jpg" alt>
          </div>
          <div class="module-right">
            <div class="module-title">
              <div class="title-first">{{item.title}}</div>
              <template v-if="b == 0 ">
                <div style="width:25%;text-align:right;height:32px;">
                  <div style="color:rgba(51,51,51,1);font-size:12px;">￥39.00</div>
                  <div class="modelu-num">x1</div>
                </div>
              </template>
            </div>
            <div class="module-last">
              <div class="module-money">
                ￥
                <span class="pice">{{item.price}}</span>
              </div>
              <div class="modelu-num">x{{item.num}}</div>
            </div>
          </div>
        </div>
      </template>
      <div class="delt" v-if="a == 1" @click="dele(index)">删除</div>
    </div>
    <div class="pricleng" v-if="b==1">
      <div class="numlen">共{{totalLength}}件商品</div>
      <div class="numlen">小计：</div>
      <div class="plgmon">
        ￥
        <span style="font-size:15px;">{{totalPrice}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  name: "shopmodlue",
  props: ["a", "b"],
  data() {
    return {
      //测试商城数据
      list: [
        {
          id: 1,
          title:
            "MLB棒球帽小标19标19新款h会更好扣扣MLB棒球帽小标19标19新款h会更好扣扣MLB棒球帽小标19标19新款h会更好扣扣MLB棒球帽小标19标19新款h会更好扣扣",
          // image: '../../image/shop_car/list_img.png',
          // pro_name: "30ml",
          num: 1,
          price: 11185.9,
          selected: true,
          lleet: 10
        },
        {
          id: 2,
          title: "伊芙琳玫瑰护手霜",
          // image: '../../image/shop_car/list_tab1.png',
          // pro_name: "25g",
          num: 2,
          price: 22221,
          selected: true,
          lleet: 10
        }
      ],

      totalPrice: 0.0, // 总价，初始为0
      totalLength: 0, // 选中总数
      selectAllStatus: true, // 全选状态，默认全不选
      lleet: ""
    };
  },
  methods: {
    //单个判断勾选
    clickbox(e, index) {
      var that = this;
      var lists = that.list;
      that.selectAllStatus = false;
      // 循环数组数据，判断----选中/未选中[selected]
      lists[index].selected = !lists[index].selected;
      // this.clickcheckbox = !this.clickcheckbox
      // 如果数组数据全部为selected[true],全选
      for (var i = lists.length - 1; i >= 0; i--) {
        if (lists[i].selected) {
          that.selectAllStatus = true;
          break;
        }
      }
      that.$emit("non", that.selectAllStatus);
      // 计算金额与个数
      that.moneyLen();
    },
    //全选按钮
    clickboxAll() {
      var that = this;
      console.log(that.length);
      if (that.list.length == 0) {
        console.log(that.length);
        that.selectAllStatus = true;
      } else {
        that.selectAllStatus = !that.selectAllStatus;
        var lists = that.list;
        for (let i = 0; i < lists.length; i++) {
          lists[i].selected = that.selectAllStatus;
        }
      }

      // 计算金额与个数
      that.moneyLen();
    },
    //点击后选中的数量与总钱数，此为公用函数
    moneyLen() {
      var that = this;
      var lists = that.list;
      var total = 0,
        len = 0;

      // 循环列表得到每个数据
      for (let i = 0; i < lists.length; i++) {
        // 判断选中计算价格
        if (this.b == 1) {
          total += lists[i].num * lists[i].price;
          len += lists[i].num;
        } else {
          if (lists[i].selected == false) {
            console.log("1111");
            // 所有价格加起来 count_money
            total += lists[i].num * lists[i].price;
            len += lists[i].num;
          }
        }
      }
      that.totalPrice = total.toFixed(2);
      that.totalLength = len;
      if (this.b != 1) {
        that.$parent.totalPricesss();
      }
    },
    // 滑动删除
    //删除
    dele(index) {
      // console.log(index);
      var that = this;
      MessageBox.confirm("确定删除?").then(
        action => {
          var list = this.list;
          list.splice(index, 1);
          this.$store.dispatch("setUserData", {
            itemData: list
          });
          // console.log(list)
          if (list.length == 0) {
            console.log("123");
            that.selectAllStatus = true;
            that.$emit("non", that.selectAllStatus);
            that.$emit("len", list.length);
          }
          // 计算金额与个数
          that.moneyLen();
        },
        () => {}
      );
    },
    swiperleft(e, index) {
      var lists = this.list;
      // 这个for循环时滑动别的其他的自动关闭
      for (var i in lists) {
        lists[i].lleet = 10;
      }
      lists[index].lleet = -6;
      // this.lleet = -6;
    },
    swiperlefts() {
      var lists = this.list;
      // 这个for循环时滑动别的其他的自动关闭
      for (var i in lists) {
        lists[i].lleet = 10;
      }
    },
    swiperright(e, index) {
      // this.lleet = 10;
      var lists = this.list;
      if (lists[index].lleet == -6) {
        lists[index].lleet = 10;
      }
    },
    //以下是抽取选中的数据赋给新数组
    suborder() {
      var list = this.list;
      var ss = [];
      for (let i in list) {
        if (list[i].selected == false) {
          ss.push(list[i])
          this.$store.dispatch("setUserData", {
            itemData: ss
          });
          console.log(this.userData.itemData);
        }
      }
      // console.log("itemData", this.userData)
        if (this.userData.itemData.length == 0) {
          this.toast("你还没有选择宝贝呢！");
        } else {
          return true;
        }  
    },
    //获取itemData
    bianh() {
      this.list = this.userData.itemData;
    }
  },
  computed: {
    ...mapGetters({
      userData: "userData"
    })
  },
  mounted() {}
};
</script>

<style>
.clickboxone {
  border: 1px solid rgba(186, 186, 186, 1);
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
/* 中间内容 */
.shopmodule {
  width: 93%;
  border-radius: 5px;
  margin-left: 3%;
  background: white;
  margin-top: 14px;
}
.module {
  width: 93%;
  margin-left: 3%;
  margin-top: 14px;
  background: white;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  position: relative;
  height: 105px;
  border-bottom: 1px solid #f6f6f6;
}
.modules {
  width: 98%;
  margin-left: 0px;
  margin-top: 0;
}
.module-con {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3% 0;
}
.module-title {
  display: flex;
  justify-content: space-between;
}
.module-title div {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}
.module-left {
  width: 85px;
  height: 85px;
}
.module-left img {
  width: 100%;
}
.module-right {
  width: 70%;
  background: white;
  padding-right: 3%;
  padding-left: 2%;
  z-index: 1;
}
.module-last {
  display: flex;
  justify-content: space-between;
  margin-top: 12%;
}

.module-money {
  font-size: 10px;
  font-weight: 400;
  color: rgba(249, 76, 0, 1);
}
.title-first {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.pricleng {
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  height: 30px;
  border-radius: 0 0 4px 4px;
}
.numlen {
  font-size: 12px;
  margin-right: 3%;
  line-height: 30px;
}
.plgmon {
  font-size: 12px;
  color: #f94c00;
  line-height: 30px;
}
.pice {
  font-size: 18px;
}
.modelu-num {
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.Mgodel {
  width: 30%;
  border: 1px solid red;
}
.addbox {
  position:absolute;
  left:2%;
  display: flex;
  align-items: center;
  height: 100%;
}
.delt {
  border: 1px solid red;
  width: 13%;
  background: rgba(249, 76, 0, 1);
  height: 82px;
  color: white;
  line-height: 85px;
  font-size: 15px;
  text-align: center;
  position: absolute;
  right: 3%;
  margin-top: 3.4%;
}
.active {
  left: -6;
  transition: left 0.2s;
}
</style>

