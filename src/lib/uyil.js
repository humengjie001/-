/*
 * util.js
 * 工具类
 */
// import qs from "qs"
import { Indicator } from 'mint-ui';
var uleUrl = ''
var urlHref = window.location.href;
if (urlHref.indexOf('ule.com') != -1 && urlHref.indexOf('beta.ule.com') == -1) {
  uleUrl = '//vps.ule.com';
} else {
  uleUrl = '//vps.beta.ule.com';
}
function JSONP(url, params, hasLoad = true,jsoncallback='jsoncallback') {
  if(hasLoad == true){
    Indicator.open({
        text: '正在加载...',
        spinnerType: 'fading-circle',//'snake''fading-circle''double-bounce''triple-bounce'
      });
  }
  return $.ajax({
    url: uleUrl + url,
    type: "get",
    dataType: "jsonp",
    timeout:'30000',
    data:params,
    jsonp: jsoncallback,
  }).then((res) => {
    Indicator.close();
    return res
  }).catch((err) => {
    Indicator.close();
    return err
  })
}
function JsonpPost(url, params, hasLoad = true) {
  if(hasLoad == true){
    Indicator.open({
        text: '正在加载...',
        spinnerType: 'fading-circle',//'snake''fading-circle''double-bounce''triple-bounce'
      });
  }
  let contentType = 'application/json'
  return $.ajax({
    url: uleUrl + url,
    type: "post",
    data: params,
    headers: { 'Content-Type': contentType },
  }).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
}
export { APP, JSONP, JsonpPost }
