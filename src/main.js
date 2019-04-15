// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui';
import store from './store'
import $ from "jquery"
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false



Vue.use(MintUi);
Vue.mixin({
  methods: {
    /*
     * 提示
     * msg:String,必须,提示内容
     * icon:String,可无,自定义icon图标类名,若传值则提示位于屏幕中心
     */
    toast(msg, icon = '') {
      let data = { message: msg, position: 'middle', duration: 2000 };
      if (icon && icon.length > 0) {
        data.iconClass = icon;
        data.position = 'middle';
      }
      MintUi.Toast(data);
    },
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
