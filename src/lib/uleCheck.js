//验证输入框输入的值 

let uleCheck = {
    // 验证身份证格式
    isIDCard: function(value){
        //这里没有验证有效性，只验证了格式
        var a = new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/),
            b = new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/);
        return a.test(value.trim()) || b.test(value.trim());
    },
    // 验证手机号格式是否正确
    isMobile(value){
        return   /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/.test(value)
    },
    // 截取前6位数
    name(value){
        value=value.replace(/[^\u4E00-\u9FA5]/g,'')
        return value.substring(0, 6)
    },
    // 剔除字符串的特殊字符
    address(value){
        value=value.replace(/[^0-9A-Za-z-_,^&（$）%，*()+!@#\u4E00-\u9FA5\uF900-\uFA2D]/g,'')
        return value.substring(0, 40)
    },
    //剔除字符串中不是数字的
    tel(value){
        value=value.replace(/[^0-9]+/g,'')
        return value
    },
    // 剔除字符串不是数字和字母大小写
    code(value){
        value=value.replace(/[^0-9A-Za-z]+/g,'')
        return value
    },
}
export default uleCheck;