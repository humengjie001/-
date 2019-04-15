<template >
  <div class="Admini">
    <Headers :title="title"></Headers>
    <div class="admodule" v-for="(item,index) in list" :key="index">
        <div class="admodule-content">
            <div class="admodule-first">
                <div>收货人:  {{item.username}}</div>
                <div>{{item.tel}}</div>
            </div>
            <div class="admodule-second">
                <div class="second-con">收货地址：{{item.where}}</div>
            </div>
            <div class="admodule-last">
                <div class="admodule-head" @click="bianselect(index)">
                    <div class="clickboxone" v-if="item.select == false"></div>
                    <div style="margin-right:3%;" v-else><img src="../../images/checkboxs.png" alt=""></div>
                    <div>默认地址</div>
                </div>
                <div class="admodule-foot">
                    <div class="foot-first" @click="bianselected(index)"><img src="../../images/bianji.png" alt=""></div>
                    <div @click="dele(index)"><img src="../../images/shanchu.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 -->
    <div class="adfoot" @click="routermini">
        添加新地址
    </div>
  </div>
</template>

<script>
import Headers from "../template/Header"
import { mapGetters } from "vuex";
import { MessageBox } from 'mint-ui';
export default {
    name:'Admini',
    data(){
        return {
            title:'管理地址',
            list: [
                {id: 1,username:'小七',qu:'北京/北京市/朝阳区',where:"北京市朝阳区望京街道京利泽中园101号北京市朝阳区望京街道京利泽中园101号启明 国际大厦3层",
                 tel:18810627788,select:false,selected:false},//adminiData  selected是否被选中
                {id: 2,username:'小八',qu:'北京市朝阳区',where:"北京市朝阳区望京街道京利泽中园101号北京市朝阳区望京街道京利泽中园101号启明 国际大厦3层",
                 tel:18810627788,select:true,selected:false},//adminiData  selected是否被选中
            ],
            add:''
        }
    },
    components:{
        Headers
    },
    computed: {
        ...mapGetters({
            userData: "userData"
        })
    },
    methods:{
        //单击勾选默认地址
        bianselect(index){
            var list = this.list;
            for (var i in list) {
                list[i].select = false;
            }
            list[index].select = true;
             //将默认地址储存
            this.$store.dispatch("setUserData", {
                adminiData:list[index] //ww
            });
        },
        //单击修改判断是点击的地址
        bianselected(index){
            var listed = this.list;
            for (var i in listed) {
                listed[i].selected = false;
            }
            listed[index].selected = true
            //将修改选中状态储存
            this.$store.dispatch("setUserData",{
                upminiData:listed[index] //upss
            })
            this.add = 0;
            this.$router.push({name: "Updatamini",params: {add:this.add} });
            // console.log(this.userData.upminiData)
        },
       //删除
       dele(index){
           console.log(index);
           var that = this;
            MessageBox.confirm('确定删除?').then(action => {
                var list = this.list;
                list.splice(index,1);
                console.log(list)
                that.$store.dispatch("setUserData",{
                     adminiData:list
                })
                if(list == 0){
                    that.$router.push({name:'Order'})
                }
            //将修改选中状态储存
                
            },() => {});
            
       },
       routermini(){
           this.add = 1;
           this.$router.push({name: "Updatamini",params: {add:this.add} });
       }
    },
    created(){
        //进入管理地址页面自动判断是选择哪个为默认
       var list = this.list;
        for (var i in list) {
            if( list[i].select == true){
              this.$store.dispatch("setUserData", {
                adminiData:list[i] //ww
                });  
            }
        }

    },
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
.Admini{
    padding-top: 40px;
}
.admodule{
    width: 93%;background: white;margin-left:3%;border:1px solid rgba(256,256,256,0);
    margin-top:15px;
}
.admodule-content{
    width: 93%;margin: 3.2%;
}
.admodule-first{
    display: flex;justify-content: space-between;
}
.admodule-second{
    margin-top: 12px;border-bottom: 1px solid #E5E5E5;
    
}
.second-con{
    margin-bottom:12px;overflow: hidden;text-overflow: ellipsis;line-height: 18px;
    display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;
}
.admodule-last{
    width: 100%;
    margin-top: 12px;display: flex;justify-content: space-between;
}
.admodule-head{
    display: flex;width: 50%;
}
.admodule-foot{
    display: flex;width: 50%;justify-content: flex-end;
}
.admodule-foot img{
    width: 50%;
}
.foot-first{
    margin-right: 20%;
}
.clickboxone{
  border: 1px solid rgba(186, 186, 186, 1);
  width: 18px;margin-right:3%;
  height: 18px;
  border-radius: 50%;
}
.admodule-head img{
    width: 100%
}
.adfoot{
    width: 100%;height:45px;position: fixed;bottom: 0;text-align: center;line-height: 45px;
    background:linear-gradient(90deg,rgba(241,143,23,1),rgba(249,76,0,1));
    color: white;
}
</style>
