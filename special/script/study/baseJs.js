/*判断是否是数字*/
function CheckNum(obj) {
    return (/^[0-9]+.?[0-9]*$/).test(obj);
}

/*LocalStorage读写*/
function SetLocalItem(itemkey, itemvalue) {
    if (window.localStorage) {
        localStorage.setItem(itemkey, itemvalue);
    } else {
        Cookie.write(itemkey, itemvalue);
    }
}
function GetLocalItemValue(itemkey) {
    var strItemValue = window.localStorage ? localStorage.getItem(itemkey) : Cookie.read(itemkey);
    return strItemValue;
}/*获取URL参数*/function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/*登录跳转*/
function GoLogin() {
    location.href = "/user/userlogin/";
}

/*是否手机号*/
function isMobilePhone(value) {
    if (value.search(/^1[3|4|5|8|7][0-9]\d{8}$/) == -1) {
        return false;
    } else {
        return true;
    }
}

/*是否邮箱*/
function isEmail(value) {
    if (value.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == -1)
        return false;
    else
        return true;
}