import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '摩购'
      }
    }, {
      path: '/MogouCart',
      name: 'MogouCart',
      component: resolve => require(['@/components/MogouCart/MogouCart'], resolve),
      meta: {
        title: '购物'
      }
    }, {
      path: '/personal-center',
      name: 'personal-center',
      component: resolve => require(['@/components/personal-center/personal-center'], resolve),
      meta: {
        title: '个人中心'
      }
    }, {
      path: '/footprint',
      name: 'footprint',
      component: resolve => require(['@/components/footprint/footprint'], resolve),
      meta: {
        title: '足迹'
      }
    },{
      path: '/my_order',
      name: 'my_order',
      component: resolve => require(['@/components/my_order/my_order'], resolve),
      meta: {
        title: '全部订单'
      }
    },{
      path: '/Return_order',
      name: 'Return_order',
      component: resolve => require(['@/components/Return_order/Return_order'], resolve),
      meta: {
        title: '退款'
      }
    },{
      path: '/order_details',
      name: 'order_details',
      component: resolve => require(['@/components/order_details/order_details'], resolve),
      meta: {
        title: '订单详情'
      }
    },{
      path: '/coupons_lq',
      name: 'coupons_lq',
      component: resolve => require(['@/components/coupons_lq/coupons_lq'], resolve),
      meta: {
        title: '领取优惠卷'
      }
    },{
      path: '/store',
      name: 'store',
      component: resolve => require(['@/components/store/store'], resolve),
      meta: {
        title: '店铺'
      }
    },{
      path: '/published_evaluation',
      name: 'published_evaluation',
      component: resolve => require(['@/components/published_evaluation/published_evaluation'], resolve),
      meta: {
        title: '发表评价'
      }
    },{
      path: '/exchange_goods',
      name: 'exchange_goods',
      component: resolve => require(['@/components/exchange_goods/exchange_goods'], resolve),
      meta: {
        title: '退换货'
      }
    },,{
      path: '/logistics',
      name: 'logistics',
      component: resolve => require(['@/components/logistics/logistics'], resolve),
      meta: {
        title: '查看物流'
      }
    },{
      path: '/Goodsdetails',
      name: 'Goodsdetails',
      component: resolve => require(['@/components/Goods-details/Goods-details'], resolve),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/Goods_evaluation',
      name: 'Goods_evaluation',
      component: resolve => require(['@/components/Goods_evaluation/Goods_evaluation'], resolve),
      meta: {
        title: '评价'
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: resolve => require(['@/components/Order/Order'], resolve),
      meta: {
        title: '提交订单'
      }
    },
    {
      path: '/Admini',
      name: 'Admini',
      component: resolve => require(['@/components/receiving/Admini'], resolve),
      meta: {
        title: '管理地址'
      }
    },
    {
      path: '/Updatamini',
      name: 'Updatamini',
      component: resolve => require(['@/components/receiving/Updatamini'], resolve),
      meta: {
        title: '修改地址'
      }
    }

  ]
})
