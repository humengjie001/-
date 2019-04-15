import { POST,JSONP,JsonpPost } from '../uyil'
const url = {
    getItemInfoByUpc:'/vpsYzgMobile/item/getItemInfoByUpc.do?',// 获取商品详情信息
}

let bank = {}
bank.getItemInfoByUpc = function (params = {}) {
    return JSONP(url.getItemInfoByUpc, params, true);
}
export default bank