function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//window.alert(GetQueryString("key"));

//创建ajax对象
function createobj() {
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}
//执行ajax对象内容
function getWebPage(url,divName) {
    var oBao = createobj();
    var my_url = url;
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                //document.write(returnStr);
                document.getElementById(divName).innerHTML = returnStr;
            } else {
                document.getElementById(divName).innerHTML = "目前还没有相关的数据！";
            }
        }
    }
    oBao.send(null);
}
//根据用户的点选生成用户选项值
function SetKeyPointValFun(CheckValue,HidName) {
    var CurrentVal = document.getElementById(HidName).value;
    if (CurrentVal == '0') {
        document.getElementById(HidName).value = CheckValue + 'a';
    }
    else {
        CurrentVal = 'a' + CurrentVal;
        if (CurrentVal.indexOf('a' + CheckValue + 'a') < 0) {
            CurrentVal = CurrentVal.substr(1, CurrentVal.length - 1) + CheckValue + 'a';
        }
        else {
            CurrentVal = CurrentVal.replace('a' + CheckValue + 'a', 'a');
            if (CurrentVal == 'a') {
                CurrentVal = '0';
            }
            else {
                CurrentVal = CurrentVal.substr(1, CurrentVal.length - 1)
            }
        }
        document.getElementById(HidName).value = CurrentVal;
    }
}

//执行post ajax对象内容
function postWebPage(divName, iHidName, NumVal, ProID, UpProID) {
    if (document.getElementById(iHidName).value == '' || document.getElementById(iHidName).value == '0') {
        document.getElementById('zsdTips').style.display = 'block';
    }
    else {
        if (NumVal != '65') {
            document.getElementById('GetQuestionBut').style.display = 'none';
        }
        var oBao = createobj();
        var my_url = '../../../Exam/SetData.asp';
        if (NumVal != '0') {
            var content = 'keyVal=' + document.getElementById(iHidName).value + "&numval=" + NumVal + "&Pro=" + ProID + "&UpPro=" + UpProID;
        } else {
            var content = 'TestID=' + GetQueryString('Test');
        }
        oBao.open('post', my_url, true);
        oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oBao.send(content);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    document.getElementById(divName).innerHTML = "正在生成随机试卷...";
                    var returnStr = oBao.responseText;
                    //document.write(returnStr);
                    if (returnStr.indexOf('_') > 0) {
                        window.location.href = "../../../Exam/Tpaper/" + returnStr + ".shtml?Pro=" + ProID + "&UpPro=" + UpProID;
                    }
                    else {
                        document.getElementById(divName).innerHTML = returnStr;
                    }
                } else {
                    if (NumVal != '65') {
                        document.getElementById(divName).innerHTML = "目前还没有相关的数据！";
                        document.getElementById('GetQuestionBut').style.display = 'block';
                    }
                }
            }
        }
    }
}

//设定单选多选答案值
function SetChoiceAnsVal(InHidID, SetSelVal, ChoiceType) {
    var CurrentVal = document.getElementById(InHidID).value;
    if (ChoiceType != '3') {
        CurrentVal = SetSelVal;
    }
    else {
        if (CurrentVal.indexOf(SetSelVal) < 0) {
            CurrentVal = CurrentVal + SetSelVal;
        }
        else {
            CurrentVal = CurrentVal.replace(SetSelVal, "");
        }
    }
    document.getElementById(InHidID).value = CurrentVal;
}

//验证用户登陆的状态
function CheckUser(url) {
    var UserLogin = "0";
    var oBao = createobj();
    var my_url = url + '../../../RightsCheck.aspx?Type=2&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                UserLogin = returnStr;
            } else {
                return "0";
            }
        }
    }
    oBao.send(null);
    return UserLogin;
}

//验证是否当前用户
function CheckIsCurrentUser(UserKey) {
    var UserLogin = "0";
    var oBao = createobj();
    var my_url = '../../../RightsCheck.aspx?PostID=' + UserKey + '&numr=' + Math.random();
    if (UserKey == '0') {
        my_url = '../../../RightsCheck.aspx?numr=' + Math.random();
    }
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                UserLogin = returnStr;
            } else {
                UserLogin = "0";
            }
        }
    }
    oBao.send(null);
    return UserLogin;
}

//刷新登陆后的头部
function GetTop(divname, currentLevel) {
    var oBao = createobj();
    var levelval = '';
    if (currentLevel == '../') {
        levelval = '2';
    }
    var my_url = currentLevel + '../../../GetTitle.aspx?TypeLevel=' + levelval + '&numr=' + Math.random();
    //判定是新的版本还是老的版本登陆
    if (divname == 'TopLoginSpan') {
        my_url = '../../../GetTitleNew.aspx?TypeLevel=' + levelval + '&numr=' + Math.random();
    }
    //判定是否首页登陆验证
    if (divname == 'HomeTopLoginSpan') {
        my_url = '../../../GetTitleHome.aspx?TypeLevel=' + currentLevel + '&numr=' + Math.random();
    }
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (parent.document.getElementById(divname)) {
                    parent.document.getElementById(divname).innerHTML = returnStr;
                    if (returnStr != "" && parent.document.getElementById('TopLoginSpan')) {
                        parent.document.getElementById('TopLoginSpan').outerHTML = '';
                    }
                }
                if (parent.document.getElementById('mobileLoginSpan')) {
                    parent.document.getElementById('mobileLoginSpan').innerHTML = '<a href="/2015/login.shtml"><i><img src="/images2015/mbnavreg.png"/></i>登录</a>';
                    //window.alert(returnStr.substr(1,3));
                    if (parent.document.getElementById('TitleUserIcon') && parent.document.getElementById('TitleUserName')) {
                        parent.document.getElementById('mobileLoginSpan').innerHTML = '<a href="/myclass.shtml"><i><img src="' + parent.document.getElementById('TitleUserIcon').src + '"/></i>' + parent.document.getElementById('TitleUserName').innerText + '</a><a class="aLogin" href="#">&gt;</a>';
                    }
                }
            } else {
                if (parent.document.getElementById(divname)) {
                    parent.document.getElementById(divname).innerHTML = '';
                }
            }
        }
    }
    oBao.send(null);

    if (CheckIsCurrentUser('0') == '1') {
        var t2 = window.setInterval("CheckUserIsAlone('1')", 120000);
        if (window.location.href.indexOf("choiceitem.shtml") <= 0) {
            //window.alert(window.location.href.indexOf("choiceitem.shtml"));
            if (CheckIsCurrentUser('1') != '1') {
                window.location.href = '/choiceitem.shtml';
            }
        }
    }
}

//检测当前用户是否拥有相关权限
function CheckUserRight(UserKey) {
    if (CheckIsCurrentUser(UserKey) != "1") {
        window.location.href = '/';
        document.getElementById('wrapper').innerHTML = '';
    }
    else {
        document.getElementById('wrapper').style.display = 'block';
    }
}

//检测当前用户是登陆
function CheckUserIsLogin(UserKey) {
    if (CheckIsCurrentUser(UserKey) != "1") {
        window.location.href = '/';
    }
}

//检测当前用户是登陆
function CheckUserIsLoginAndBack(UserKey) {
    if (CheckIsCurrentUser(UserKey) != "1") {
        window.location.href = '/2015/login.shtml?backurl='+encodeURI(location.href);
    }
}

//获取题库二级类别内容
function GetExamProLevel2(ProID, CurProID, DivName) {
    
    var CurID = '0';
    if (ProID * 0 == 0) {
        if (CurProID * 0 == 0) {
            CurID = CurProID;
        }
        var oBao = createobj();
        var my_url = '../../../function/GetProjectList.aspx?pro=' + ProID + '&curpro=' + CurID + '&numr=' + Math.random();
        if (DivName == 'sel_city') {
            my_url = my_url + '&Type=1';
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (DivName == 'sel_city') {
                        var str = new Array();
                        var strVal = new Array();
                        str = returnStr.split('#');
                        document.getElementById(DivName).options.length = 0;
                        for (i = 0; i < str.length ; i++) {
                            strVal = str[i].split(',');
                            document.getElementById(DivName).options.add(new Option(strVal[1], strVal[0]));
                        }
                    } else {
                        document.getElementById(DivName).innerHTML = returnStr;
                    }
                } else {

                }
            }
        }
        oBao.send(null);
    }
}

//设定当前题库的项目一级二级名称
function SetExamProName(ProID, DivName) {
    if (ProID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetProjectList.aspx?ProName=' + ProID + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

//获取用户试卷的信息
function GetUserTestPaperInfo(ProID,DivName) {
    if (ProID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetExamInfo.aspx?ProID=' + ProID + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

//题库菜单连接跳转
function SetExamCenterMenu(url) {
    if (url != '') {
          window.location.href = url + '?Pro=' + GetQueryString("Pro") + '&UpPro=' + GetQueryString("UpPro");        
    }
}

//题库菜单我的连接跳转
function SetExamCenterAssessMenu(url,isShowLogin) {
    if (url != '') {
        var UserLogin = '0';
        var oBao = createobj();
        var my_url = '../../../RightsCheck.aspx?GetID=1' + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    UserLogin = returnStr;
                } else {
                    UserLogin = "0";
                }
            }
        }
        oBao.send(null);
        if (UserLogin != '' && UserLogin != '0' && UserLogin * 0 == 0) {
            var oBao1 = createobj();
            var my_url1 = url + '_' + UserLogin + '_' + GetQueryString("Pro") + '.shtml?Pro=' + GetQueryString("Pro") + '&UpPro=' + GetQueryString("UpPro");
            oBao1.open('get', my_url1, false);
            oBao1.onreadystatechange = function () {
                if (oBao1.readyState == 4) {
                    if (oBao1.status == 200) {
                        window.location.href = url + '_' + UserLogin + '_' + GetQueryString("Pro") + '.shtml?Pro=' + GetQueryString("Pro") + '&UpPro=' + GetQueryString("UpPro");
                    } else {
                        window.location.href = '/Exam/TPaper/Default.shtml?Pro=' + GetQueryString("Pro") + '&UpPro=' + GetQueryString("UpPro");
                    }
                }
            }
            oBao1.send(null);
            
        }
        else {
            if (isShowLogin == '1') {
                LoginDivFun();
            }
        }
    }
}

//获取所有我的练习数据
function GetUserAllTestPaperInfo(ProID, DivName, PageNum) {
    document.getElementById(DivName).innerHTML = '正在载入数据....';
    if (ProID * 0 == 0) {
        var CurrentPage = PageNum;
        if (PageNum * 0 != 0 || PageNum == '0') {
            CurrentPage = '1';
        }
        var oBao = createobj();
        var my_url = '../../../function/GetExamInfo.aspx?ProID=' + ProID + '&Page=' + CurrentPage;
        if (DivName == 'con_one_1') {
            my_url = '../../../function/GetClassInfo.aspx?Type=6&ClassID=' + ProID;
        }
        if (DivName == 'exercise_List') {
            my_url = '../../../function/GetExamInfo.aspx?ProID=' + ProID + '&Page=' + CurrentPage + '&NoTitle=1';
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '无相关信息';
                }
            }
        }
        oBao.send(null);
    }
}

//打开播放视频页面
function ViewURLLesson(LID, CID, ClassID) {
    if (CheckIsCurrentUser('0') == '1') {
        var url = "/Study.aspx?LID=" + LID + '&SerID=' + CID + '&ClassID=' + ClassID + '&Type=1';
        window.open(url,"","");
        //window.location.reload();
        //window.location.href = url;
    }
    else {
        showDivv('BgDiv');
        showDivv('LoginDiv');
    }
}

//购买课程页面
function BuyURLLesson(CID) {
    if (CheckIsCurrentUser('0') == '1') {
        var url = "/OrderCheck.shtml?CUID=" + CID;
        //window.open(url,"","");
        //window.location.reload();
        window.location.href = url;
    }
    else {
        AskUserLogin();
    }
}

//购买课程页面(New)
function BuyURLLessonNew(CID) {
    if (CheckIsCurrentUser('0') == '1') {
        var url = "/OrderCheck.shtml?CUID=NC" + CID;
        //window.open(url,"","");
        //window.location.reload();
        window.location.href = url;
    }
    else {
        AskUserLoginNew();
    }
}

//读取班级资料
function GetCalssInfo(divName,Type) {
    var ReturnVal = "没有相关课程信息";
    var oBao = createobj();
    var my_url = '/Function/GetClassInfo.aspx?Type=' + Type + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    ReturnVal = returnStr;
            } else {
                //return "0";
            }
        }
    }
oBao.send(null);
if (divName == '0' || divName == '') {
    return ReturnVal;
}
else {
    document.getElementById(divName).innerHTML = ReturnVal;
}
}
//
function CheckUserIsAlone(TypeVal) {
    var oBao = createobj();
    var my_url = '/Function/UserCheck.aspx?Type=' + TypeVal + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != 'true') {
                    window.alert('异地登陆状态');
                    window.location.href = "/CheckOut.aspx";
                }
            } else {
                //return "0";
            }
        }
    }
    oBao.send(null);
}

//发送注册信息的验证码
function SendRegCheckVal(Mo) {
    var sendstatus = false;
    var actnumval = Math.random();
    if (document.getElementById('actCheckCode')) {
        if (document.getElementById('actCheckCode').value == '') {
            if (document.getElementById('noticeLR_verifyCode')) {
                document.getElementById('noticeLR_verifyCode').innerHTML = "请输入动态验证码";
            }
            if (document.getElementById('noticeLR_actCheckCodeM')) {
                document.getElementById('noticeLR_actCheckCodeM').innerHTML = "请输入动态验证码";
            }
            if (document.getElementById('noticeLR_actCheckCodeP')) {
                document.getElementById('noticeLR_actCheckCodeP').innerHTML = "请输入动态验证码";
            }
            return false;
        }
        else {
            actnumval = document.getElementById('actCheckCode').value;
        }
    }
    if (!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/a/, ""))) && !(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/b/, ""))) && Mo != 'chapass') {
        document.getElementById("MsgReaDiv").innerHTML = "手机号码不正确";
    }
    else {
        var oBao = createobj();
        var my_url = '/Function/SendMsg.aspx?Type=1&M=' + Mo + '&numr=' + actnumval;
        if (Mo == 'chapass') {
            my_url = '/Function/SendMsg.aspx?Type=2&M=' + Mo + '&numr=' + actnumval;
        }
        if (Mo.substr(0, 1) == 'a') {
            my_url = '/Function/SendMsg.aspx?Type=4&M=' + Mo.replace(/a/, "") + '&numr=' + actnumval;
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (returnStr.replace(/b/, "") * 1 > 0) {
                        document.getElementById("MsgReaDiv").innerHTML = "验证码已发送，请收到后输入";
                        if (Mo != 'chapass' && ((/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo)) || (/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/b/, ""))))) {
                            document.getElementById("furl").value = returnStr.replace(/b/, "");
                            if (Mo.substr(0, 1) == 'b') {
                                if (returnStr.substr(0, 1) == 'b') {
                                    document.getElementById('hidpasswd').value = 'no';
                                } else {
                                    document.getElementById('hidpasswd').value = Mo.replace(/b/, "").substr(5, 6);
                                }
                                document.getElementById('realtel').value = Mo.replace(/b/, "");
                                //window.alert(document.getElementById('hidpasswd').value);
                            }
                        }
                        sendstatus = true;
                        //window.alert(returnStr);
                        //window.alert(document.getElementById("furl").value);
                    }
                    else {
                        if (returnStr == '0') {
                            //document.getElementById("MsgReaDiv").innerHTML = "验证码发送失败，请稍后再试";
                            document.getElementById("MsgReaDiv").innerHTML = "图形验证码不正确，请区分大小写";
                        }
                        else if (returnStr == "-2") {
                            document.getElementById("MsgReaDiv").innerHTML = "发送次数超限，请明日再试";
                        } else {
                            if (returnStr == '-1') {
                                document.getElementById("MsgReaDiv").innerHTML = "没有该手机号的帐号存在</a>";
                            } else {
                                if (document.getElementById('cfanx')) {
                                    if (document.getElementById('cfanx').value == 'c') {
                                        document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml?type=nx\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                    }
                                    else {
                                        document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                    }
                                }
                                else {

                                    document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                }
                            }
                        }
                    }
                }
            }
        }
        oBao.send(null);
    }
    return sendstatus;
}

//发送注册信息的语音验证码
function SendRegCheckAudioVal(Mo) {
    var sendstatus = false;
    var actnumval = Math.random();
    if (document.getElementById('actCheckCode')) {
        if (document.getElementById('actCheckCode').value == '') {
            if (document.getElementById('noticeLR_verifyCode')) {
                document.getElementById('noticeLR_verifyCode').innerHTML = "请输入动态验证码";
            }
            if (document.getElementById('noticeLR_actCheckCodeM')) {
                document.getElementById('noticeLR_actCheckCodeM').innerHTML = "请输入动态验证码";
            }
            if (document.getElementById('noticeLR_actCheckCodeP')) {
                document.getElementById('noticeLR_actCheckCodeP').innerHTML = "请输入动态验证码";
            }
            return false;
        }
        else {
            actnumval = document.getElementById('actCheckCode').value;
        }
    }
    if (!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/a/, ""))) && !(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/b/, ""))) && Mo != 'chapass') {
        document.getElementById("MsgReaDiv").innerHTML = "手机号码不正确";
    }
    else {
        var oBao = createobj();
        var my_url = '/Function/SendMsg.aspx?Type=1&Audio=1&M=' + Mo + '&numr=' + actnumval;
        if (Mo == 'chapass') {
            my_url = '/Function/SendMsg.aspx?Type=2&Audio=1&M=' + Mo + '&numr=' + actnumval;
        }
        if (Mo.substr(0, 1) == 'a') {
            my_url = '/Function/SendMsg.aspx?Type=4&Audio=1&M=' + Mo.replace(/a/, "") + '&numr=' + actnumval;
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (returnStr.replace(/b/, "") * 1 > 0) {
                        document.getElementById("MsgReaDiv").innerHTML = "<b>语音验证码</b>已发送，请收到后输入";
                        if (Mo != 'chapass' && ((/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo)) || (/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(Mo.replace(/b/, ""))))) {
                            document.getElementById("furl").value = returnStr.replace(/b/, "");
                            if (Mo.substr(0, 1) == 'b') {
                                if (returnStr.substr(0, 1) == 'b') {
                                    document.getElementById('hidpasswd').value = 'no';
                                } else {
                                    document.getElementById('hidpasswd').value = Mo.replace(/b/, "").substr(5, 6);
                                }
                                document.getElementById('realtel').value = Mo.replace(/b/, "");
                                //window.alert(document.getElementById('hidpasswd').value);
                            }
                        }
                        sendstatus = true;
                        //window.alert(returnStr);
                        //window.alert(document.getElementById("furl").value);
                    }
                    else {
                        if (returnStr == '0') {
                            //document.getElementById("MsgReaDiv").innerHTML = "语音验证码发送失败，请稍后再试";
                            document.getElementById("MsgReaDiv").innerHTML = "图形验证码不正确，请区分大小写";
                        } else if (returnStr == "-2") {
                            document.getElementById("MsgReaDiv").innerHTML = "发送次数超限，请明日再试";
                        } else {
                            if (returnStr == '-1') {
                                document.getElementById("MsgReaDiv").innerHTML = "没有该手机号的帐号存在</a>";
                            } else {
                                if (document.getElementById('cfanx')) {
                                    if (document.getElementById('cfanx').value == 'c') {
                                        document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml?type=nx\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                    }
                                    else {
                                        document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                    }
                                }
                                else {

                                    document.getElementById("MsgReaDiv").innerHTML = "手机号码已注册，请<a href=\"/2015/Login.shtml\">登陆</a>或<a href=\"/GetPass.shtml\">找回帐号密码</a>";
                                }
                            }
                        }
                    }
                }
            }
        }
        oBao.send(null);
    }
    return sendstatus;
}

//用户预约直播
function UserLiveBook(CID) {
    if (CheckIsCurrentUser('0') == '1') {
        var oBao = createobj();
        var my_url = '/Function/LiveBook.aspx?Type=1&CUID=' + CID + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    //window.alert(returnStr);
                    if (document.getElementById("reasultValDiv")) {
                        document.getElementById("reasultValDiv").innerHTML = '<span>' + returnStr + '</span>';
                        document.getElementById("reasultValDiv").style.display = "block";
                        document.getElementById("Want_Book").style.display = "none";
                    } else {
                        if (document.getElementById('Want_Book')) {
                            document.getElementById('Want_Book').className = 'btns appointment_success';
                            document.getElementById("Want_Book").innerHTML = "您已预约";
                        }
                        if (document.getElementById('Want_Book_' + CID)) {
                            document.getElementById('Want_Book_' + CID).className = 'yysuccess';
                            document.getElementById('Want_Book_' + CID).innerHTML = "已预约";
                        }
                    }
                        //window.alert(returnStr);
                        //window.alert(document.getElementById("furl").value);
                }
            }
        }
        oBao.send(null);
    }
    else {
        AskUserLogin();
    }
}

//插入笔记信息
function InsertNoteBook(lid,cid,content,pubid) {
    //var ReturnVal = "0";
    var oBao = createobj();
    var my_url = '/Function/NoteBook.aspx?Type=1';
    var content = 'CID=' + cid + "&LID=" + lid + "&ConVal=" + content + "&PubNum=" + pubid;
    oBao.open('post', my_url, true);
    oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oBao.send(content);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
              var returnStr = oBao.responseText;
              if (returnStr != "1" && returnStr != "0" && returnStr != "") {
                  window.alert(returnStr);
              }
              else {
                  if (returnStr == "0") {
                      window.alert("笔记添加失败");
                  }
                  if (returnStr == "1") {
                      GetNoteList(lid, cid, 'showNoteDiv');
                  }
              }
            } else {
                window.alert("网络问题，请稍后再试");
            }
        }
    }
    //return ReturnVal;
}

//获取笔记信息
function GetNoteList(lid, cid, divname) {
    var oBao = createobj();
    var my_url = '/Function/NoteBook.aspx?Type=2&CID=' + cid + '&LID=' + lid + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                document.getElementById(divname).innerHTML = returnStr;
            }
        }
    }
    oBao.send(null);
}

//删除用户笔记
function DelNote(Noteid,lid,cid) {
    var oBao = createobj();
    var my_url = '/Function/NoteBook.aspx?Type=3&NoteID=' + Noteid + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != "1" && returnStr != "0" && returnStr != "") {
                    window.alert(returnStr);
                }
                else {
                    if (returnStr == "0") {
                        window.alert("笔记删除失败");
                    }
                    if (returnStr == "1") {
                        GetNoteList(lid, cid, 'showNoteDiv');
                    }
                }
            }
        }
        else {
            window.alert('笔记删除失败');
        }
    }
    oBao.send(null);
}

//点击打开直播
function GoToLive(CID,typeval) {
    if (CheckIsCurrentUser('0') == '1') {
        var oBao = createobj();
        var my_url = '/Function/LiveBook.aspx?Type=' + typeval + '&CUID=' + CID + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    //window.alert(returnStr);
                    if (returnStr == "1" || returnStr == "2" || returnStr == "3" || returnStr == "") {
                        if (returnStr == "1") {
                            document.getElementById("reasultValDiv").innerHTML = '<span>您未预约该直播</span>';
                        }
                        if (returnStr == "2") {
                            document.getElementById("reasultValDiv").innerHTML = '<span>该直播信息有误</span>';
                        }
                        if (returnStr == "3") {
                            document.getElementById("reasultValDiv").innerHTML = '<span>登陆状态错误</span>';
                        }
                        document.getElementById("reasultValDiv").style.display = "block";
                    }
                    else {
                        //window.open(returnStr);
                        window.location.href = returnStr;
                    }
                }
            }
        }
        oBao.send(null);
    }
    else {
        AskUserLogin();
    }
}

//打开弹出登陆框
function AskUserLogin() {
    if (document.getElementById('loginDialog')) {
        AskUserLoginNew();
    } else {
        document.getElementById('getIframe').src = '/loginWeb.html';
        showDivv('BgDiv');
        showDivv('LoginDiv');
    }
}

//打开弹出登陆框
function AskUserLoginNew() {
    document.getElementById("regDialog").style.display = "none";
    document.getElementById("loginDialog").style.display = "block";
}

//插入笔记信息
function InsertDisCussInfo(lid, cid, content, pubid) {
    //var ReturnVal = "0";
    var oBao = createobj();
    var my_url = '/Function/NoteBook.aspx?Type=4';
    var content = 'CID=' + cid + "&LID=" + lid + "&ConVal=" + content + "&PubNum=" + pubid;
    oBao.open('post', my_url, true);
    oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oBao.send(content);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != "1" && returnStr != "0" && returnStr != "") {
                    window.alert(returnStr);
                }
                else {
                    if (returnStr == "0") {
                        window.alert("评价添加失败");
                    }
                    if (returnStr == "1") {
                        GetDiscussList(lid, cid, 'commentlist');
                    }
                }
            } else {
                window.alert("网络问题，请稍后再试");
            }
        }
    }
    //return ReturnVal;
}

//获取评价信息
function GetDiscussList(lid, cid, divname) {
    var oBao = createobj();
    var my_url = '/Function/NoteBook.aspx?Type=5&CID=' + cid + '&LID=' + lid + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                document.getElementById(divname).innerHTML = returnStr;
            }
        }
    }
    oBao.send(null);
}

//获取用户相关的信息
function postuserInfo(divName, getval, MsgDiv) {

        var oBao = createobj();
        var my_url = '/Function/UserInfo.aspx?Type=1';
        var content = 'username=' + getval;
        oBao.open('post', my_url, true);
        oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oBao.send(content);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (returnStr == '0' || returnStr == '1') {
                        document.getElementById(MsgDiv).innerHTML = '没有所输入用户名的相关信息';
                        if (returnStr == '1') {
                            document.getElementById(MsgDiv).innerHTML = '该用户名注册时所填写的手机号码不正确';
                        }
                    }
                    else {
                        document.getElementById(divName).innerHTML = returnStr;
                    }
                } else {
                    document.getElementById(MsgDiv).innerHTML = '读取用户信息时出错，请稍后再试';
                }
            }
        }
}

//获取用户所输入验证码进行验证比较
function checkuserInfoyz(divName, getval, MsgDiv,TypeVal) {

    var oBao = createobj();
    var my_url = '/Function/UserInfo.aspx?Type='+TypeVal;
    var content = 'chencknum=' + getval;
    oBao.open('post', my_url, true);
    oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oBao.send(content);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr == '0') {
                    document.getElementById(MsgDiv).innerHTML = '验证码不正确，请核实后再次输入';
                    if (TypeVal == '3') {
                        document.getElementById(MsgDiv).innerHTML = '密码修改操作有误，请再试尝试';
                    }
                }
                else {
                    if (TypeVal == '2' || TypeVal == '12') {
                        document.getElementById(divName).innerHTML = returnStr;
                    }
                    if (TypeVal == '3') {
                        window.alert('密码修改成功，请用新密码登陆');
                        window.location.href = '/';
                    }
                }
            } else {
                document.getElementById(MsgDiv).innerHTML = '验证信息时出错，请稍后再试';
            }
        }
    }
}

//返回找回用户名的界面信息
function GetFindUserName(divname) {
    var ReturnVal = "";
    ReturnVal = "<div class=\"mod-forgot\">\n";
    ReturnVal += "<ul class=\"mod-sub-nav mod-sub-nav2\">\n";
    ReturnVal += "<li class=\"mod-sub-list1 list1-active\">输入手机号码 </li>\n";
    ReturnVal += "<li class=\"mod-sub-list2\">重置密码 </li>\n";
    ReturnVal += "</ul>\n";
    ReturnVal += "<form action=\"\" method=\"post\" id=\"forgotsel\">\n";
    ReturnVal += "<div class=\"mod-step-detail\">\n";
    ReturnVal += "<p class=\"step-email-info\">请填写您需要找回帐号的手机号码:</p>\n";
    ReturnVal += "<div class=\"pass-input-container clearfix\" id=\"pass-auth-select\">\n";
    ReturnVal += "<input type=\"text\" class=\"pass-input pass-input-error\" name=\"mobilenum\" value=\"\" id=\"mobilenum\" placeholder=\"请您输入手机号码\">\n";
    ReturnVal += "<span class=\"pass-input-msg\">请您输入手机号码</span> </div>\n";
    ReturnVal += "<div class=\"yzma\"><span class=\"txt_name\">验证码：</span>\n";
    ReturnVal += "<input class=\"input_code\" autocomplete=\"off\" onblur=\"if(this.value=='') this.value='';\" onfocus=\"if(this.value=='') this.value='';\" value=\"\" type=\"text\" name=\"verifyCode\" id=\"verifyCode\">\n";
    ReturnVal += "<input type=\"button\" id=\"btn\" class=\"btn_mfyzm\" value=\"获取验证码\" onclick=\"time(this);SendRegCheckVal('a'+document.getElementById('mobilenum').value);\"><span id=\"MsgReaDiv\">点击获取验证码</span>\n";
    ReturnVal += "</div>\n";
    ReturnVal += "<p class=\"askTel\">如您忘记用户名/邮箱/手机，您可以拨打客服热线：<span>4007009596</span>进行咨询</p>\n";
    ReturnVal += "<div>\n";
    ReturnVal += "<input type=\"hidden\" name=\"bdstoken\" value=\"daee12f6d8217244415a4a0e8bca5fd1\">\n";
    ReturnVal += "<input type=\"hidden\" name=\"tpl\" value=\"mn\">\n";
    ReturnVal += "<input type=\"hidden\" name=\"index\" value=\"\">\n";
    ReturnVal += "<input type=\"button\" name=\"getpassinfo\" value=\"下一步\" class=\"pass-button-submit\" id=\"getpassinfo\" onClick=\"sendsms()\">\n";
    ReturnVal += "</div>\n";
    ReturnVal += "</div>\n";
    ReturnVal += "</form>\n";
    ReturnVal += "</div>\n";
    document.getElementById(divname).innerHTML = ReturnVal;
}

//获取用户所输入验证码进行验证比较
function UserCardFun(cardnum, cardpass, TypeVal,divName) {
    var ReturnVal = "";
    var oBao = createobj();
    if (cardnum != "" && cardpass != "") {
        var my_url = '/Function/GetOrderInfo.aspx?Type=' + TypeVal;
        var content = 'card=' + cardnum + '&cardval=' + cardpass;
        oBao.open('post', my_url, true);
        oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oBao.send(content);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var ErrorMsg = "";
                        if (oBao.responseText * 0 == 0 || oBao.responseText == 'er' || oBao.responseText * 1 <= 0) {
                            switch (oBao.responseText) {
                                case '-1': ErrorMsg = "卡号不存在";
                                    break;
                                case '-2': ErrorMsg = "卡号密码错误";
                                    break;
                                case '-3': ErrorMsg = "该卡已被使用";
                                    break;
                                case '-4': ErrorMsg = "卡类型不对";
                                    break;
                                case '-5': ErrorMsg = "卡时间过期";
                                    break;
                                default: ErrorMsg = "读取卡片信息出错，请再次尝试";
                            }
                            if (TypeVal == "1") {
                                $("#loadbutton").removeAttr("disabled");//将按钮可用
                                $("#phoneyzm").val('');
                            }
                            $("#failTips").html(ErrorMsg);
                            $(".failTips").show();
                        } else {
                            document.getElementById(divName).innerHTML = oBao.responseText;
                        }
                } else {
                    ReturnVal = "er";
                }
            }
        }
    }
    
    //return ReturnVal;
}

//创建相关的订单信息
function CreatUserOrderInfo(ProID, DivName) {
    
    var oBao = createobj();
    if (ProID * 0 == 0 || ProID.indexOf('.') > 0) {
        if (ProID * 1 > 50 || ProID.indexOf('.') > 0) {
            var my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=3&numr=' + Math.random();
        } else {
            var my_url = '/Function/GetOrderInfo.aspx?Page=' + ProID + '&Type=6&numr=' + Math.random();
        }

    } else {
        var my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=5&numr=' + Math.random();
        if (ProID.substring(0, 2) == 'NC') {
            my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=12&numr=' + Math.random();
            //window.alert(my_url);
        }
    }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (returnStr * 0 == 0) {
                        document.getElementById(DivName).innerHTML = '读取订单信息出错，请再次尝试';
                    }
                    else {
                        document.getElementById(DivName).innerHTML = returnStr;
                    }
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
}

//用户预约活动
function UserActivitesBook(CID,DivName) {
    if (CheckIsCurrentUser('0') == '1') {
        if (DivName == 'cfa_span') {
            window.location.href = '/exam/setdatatest.asp?keyVal=1392&numval=40&Pro=7';
        }
        else {
            window.location.href = '/exam/setdatatest.asp?keyVal=1394&numval=34&Pro=2';
        }
        //var oBao = createobj();
        //var my_url = '/Function/ActivitesBook.aspx?Type=1&CUID=' + CID + '&numr=' + Math.random();
        //oBao.open('get', my_url, false);
        //oBao.onreadystatechange = function () {
        //    if (oBao.readyState == 4) {
        //        if (oBao.status == 200) {
        //            var returnStr = oBao.responseText;
        //            //window.alert(returnStr);
        //            document.getElementById(DivName).innerHTML = '<span>' + returnStr + '</span>';
        //            //window.alert(returnStr);
        //            //window.alert(document.getElementById("furl").value);
        //        }
        //    }
        //}
        //oBao.send(null);
    }
    else {
        AskUserLogin();
    }
}

//读取图书相关浏览信息
function GetBookBrowsHis(BookID, DivName) {

    var oBao = createobj();
    var my_url = '/Function/BookStore.aspx?BookID=' + BookID + '&Type=1&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                document.getElementById(DivName).innerHTML = returnStr;
            } else {
                document.getElementById(DivName).innerHTML = '读取信息出错，请再次尝试';
            }
        }
    }
    oBao.send(null);
}

//读取可能喜欢图书相关信息
function GetBookMayLike(DivName) {
    var oBao = createobj();
    var my_url = '/Function/BookStore.aspx?Type=2&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != "No" && returnStr != '') {
                    document.getElementById(DivName).innerHTML = returnStr;
                    document.getElementById('MayLikeTitDiv').style.display = 'block';
                    document.getElementById('MayLikeConDiv').style.display = 'block';
                }
            } else {
                document.getElementById(DivName).innerHTML = '读取信息出错，请再次尝试';
            }
        }
    }
    oBao.send(null);
}

//获取试卷的信息
function GetTestPaperInfo(ProID, DivName, TypeID, PageVal) {
    if (ProID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetExamInfo.aspx?ProID=' + ProID + '&TypeID=' + TypeID + '&Page=' + PageVal + '&numr=' + Math.random();
        if (DivName == 'LiveInfoDiv') {
            my_url = '../../../function/GetLiveInfo.aspx?ProID=' + ProID + '&TypeID=1&Page=' + PageVal + '&numr=' + Math.random();
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

//用户点击收藏试题
function SetUserQuesCollect(QuesPKID) {
    if (QuesPKID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetQuestionInfo.aspx?Act=2&QuesID=' + QuesPKID + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    if (returnStr == '2') {
                        returnStr = '试题已收藏';
                    }
                    if (returnStr == '1') {
                        returnStr = '试题已取消收藏';
                    }
                    window.alert(returnStr);
                } else {
                    window.alert('操作失败');
                }
            }
        }
        oBao.send(null);
    }
}

//获取所有我收藏的试题
function GetUserCollectInfo(ProID, DivName) {
    document.getElementById(DivName).innerHTML = '正在载入数据....';
    if (ProID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetQuestionInfo.aspx?ProID=' + ProID + '&Act=3&numr=' + Math.random();
        if (DivName == 'exercise_SaveList')
        {
            my_url = my_url + '&NoTitle=1';
        }
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

//设置
function SetElementValBYID(ElementID, ElementVal)
{
    window.alert(ElementVal);
    document.getElementById(ElementID).innerHTML = ElementVal;
}

//根据班型获取相关的详细信息资料
function GetClassMoreInfo(TypeID, ClassID, AllCount, CurrentCount) {
    if (AllCount * 1 > 0) {
        for (var i = 1; i <= AllCount; i++) {
            var menu = document.getElementById('ClassTypeVal_' + i);
            if (i == CurrentCount * 1) {
                menu.className = "selected";
            }
            else {
                menu.className = "";
            }
        }
    }
    var oBao = createobj();
    var my_url = '../../../function/GetClassInfo.aspx?ClassID=' + ClassID + '&Type=3&TypeID=' + TypeID + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    var str = new Array();
                    str = returnStr.split("###");
                    document.getElementById('em_price').innerHTML = str[0];
                    document.getElementById('em_saleprice').innerHTML = str[1];
                    document.getElementById('ciinfotarget').innerHTML = str[2];
                    document.getElementById('ClassSTime').innerHTML = str[3];
                    document.getElementById('ClassETime').innerHTML = str[4];
                    $('#J-banner-carousel2').carousel({ destroy: true });
                    document.getElementById('J-banner-carousel2').innerHTML = str[6];
                    $('#J-banner-carousel').carousel({ destroy: true });
                    document.getElementById('J-banner-carousel').innerHTML = str[6];
                    document.getElementById('ClassContent').innerHTML = str[7];
                    $('#J-show-carousel').carousel({ destroy: true });
                    document.getElementById('GiveClass').innerHTML = str[8];
                    //document.getElementById('GiveBook').innerHTML = str[9];
                    document.getElementById('GiveLive').innerHTML = str[10];
                    //document.getElementById('GivePaper').innerHTML = str[11];
                    //document.getElementById('HidDetailClass').value = str[12];
                }
                $('#J-banner-carousel2').carousel();
                $('#J-banner-carousel').carousel();
                $('#J-show-carousel').carousel({
                    display: 3
    , indicators: false
                });
            } else {
            }
        }
    }
    oBao.send(null);
}

//老版本根据班型获取相关的详细信息资料
function GetClassMoreInfoOLD(TypeID, ClassID, AllCount, CurrentCount) {
    if (AllCount * 1 > 0) {
        for (var i = 1; i <= AllCount; i++) {
            var menu = document.getElementById('ClassTypeVal_' + i);
            if (i == CurrentCount * 1) {
                menu.className = "current";
            }
            else {
                menu.className = "";
            }
        }
    }
    var oBao = createobj();
    var my_url = '../../../function/GetClassInfo.aspx?ClassID=' + ClassID + '&Type=3&TypeID=' + TypeID + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    var str = new Array();
                    str = returnStr.split("###");
                    document.getElementById('em_price').innerHTML = str[0];
                    document.getElementById('em_price').innerHTML = str[0];
                    document.getElementById('em_saleprice').innerHTML = str[1];
                    document.getElementById('ClassArea').innerHTML = str[2];
                    document.getElementById('ClassSTime').innerHTML = str[3];
                    document.getElementById('ClassETime').innerHTML = str[4];
                    document.getElementById('TeaClick').innerHTML = str[5];
                    document.getElementById('TeaContent').innerHTML = str[6];
                    document.getElementById('ClassContent').innerHTML = str[7];
                    document.getElementById('GiveClass').innerHTML = str[8];
                    document.getElementById('GiveBook').innerHTML = str[9];
                    document.getElementById('GiveLive').innerHTML = str[10];
                    document.getElementById('GivePaper').innerHTML = str[11];
                    document.getElementById('HidDetailClass').value = str[12];
                }
            } else {
            }
        }
    }
    oBao.send(null);
}

//读取每个班级的学习人员信息
function GetClassStudyPeopleInfo(ClassID) {
    var oBao = createobj();
    var my_url = '../../../function/GetClassInfo.aspx?ClassID=' + ClassID + '&Type=4&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    document.getElementById('StudyPeople').innerHTML = returnStr;
                }
            } else {
            }
        }
    }
    oBao.send(null);
}

//读取每个班级的学习人员信息
function GetAboutClassInfo(ClassID,TypeID) {
    var oBao = createobj();
    var my_url = '../../../function/GetClassInfo.aspx?ClassID=' + ClassID + '&C_TYpe=' + TypeID + '&Type=5&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    document.getElementById('AboutClass').innerHTML = returnStr;
                }
            } else {
            }
        }
    }
    oBao.send(null);
}

//修改个人基本信息
function StuInfo_Base(TypeVal) {
    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
    var radio_status = '';
    if ($("input[name='workstatus']:checked").length > 0) {
        radio_status = $('input:radio[name=workstatus]:checked').val();
    }
    var radio_edu = '';
    if ($("input[name='education']:checked").length > 0) {
        radio_edu = $('input:radio[name=education]:checked').val();
    }
    var id = '';
    $("input[type='checkbox'][name='SelPeoject']:checked").each(function () {
        id += "," + $(this).val();
    });

    var ReturnVal = "";
    var oBao = createobj();
        var my_url = '/Function/UserInfo.aspx?Type=' + TypeVal;
        var content = 'name=' + document.getElementById('nickname').value + '&male=' + $('input:radio[name=sex]:checked').val() + '&brithday=' + document.getElementById('birth').value;
        content += '&status=' + radio_status + '&edu=' + radio_edu + '&pro=' + id + '&Intro=' + document.getElementById('selfIntro').value
        oBao.open('post', my_url, true);
        oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oBao.send(content);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var ErrorMsg = "";
                    if (oBao.responseText == '0') {
                        $("#failTips").html("资料修改失败，请认真查看！");
                        document.getElementById('successTips').style.display = 'none';
                        document.getElementById('failTips').style.display = 'block';
                    } else {
                        $("#successTips").html("资料修改成功！");
                        document.getElementById('failTips').style.display = 'none';
                        document.getElementById('successTips').style.display = 'block';
                    }
                } else {
                    ReturnVal = "er";
                }
            }
        }
}

//修改个人头像
function StuInfo_Img(TypeVal) {
    
    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
   
    $("#form_img_up").ajaxSubmit({
        //dataType:'script',
        //type: 'post',
        //url: '/Function/UserInfo.aspx?Type=' + TypeVal,
        beforeSubmit: function () {
            $("#successTips").html("正在上传图像...");
            document.getElementById('successTips').style.display = 'block';
        },
        success: function (data) {
            if (data.substr(0, 1) == "1") {
                document.getElementById('avatar').src = '/icon/' + data.replace('1$','');
                $("#successTips").html("图像上传成功！");
            } else if (data == "-1") {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("文件超过规定大小！");
                document.getElementById('failTips').style.display = 'block';
            } else if (data == "-2") {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("文件类型不符！");
                document.getElementById('failTips').style.display = 'block';
            } else if (data == "-3") {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("移动文件出错！");
                document.getElementById('failTips').style.display = 'block';
            } else {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("未知错误！");
                document.getElementById('failTips').style.display = 'block';
            }
        },
        resetForm: false,
        clearForm: false
    });
}

//修改个人联系信息
function StuInfo_Contact(TypeVal) {

    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
    $("#editContact").ajaxSubmit({
        success: function (data) {
            if (data == "1") {
                $("#successTips").html("联系方式修改成功！");
                document.getElementById('successTips').style.display = 'block';
            } else if (data == "-1") {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("联系方式修改失败！");
                document.getElementById('failTips').style.display = 'block';
            } else {
                document.getElementById('successTips').style.display = 'none';
                $("#failTips").html("未知错误！");
                document.getElementById('failTips').style.display = 'block';
            }
        },
        resetForm: false,
        clearForm: false
    });
}

//读取用户中心详细个人信息
function GetStudentMoreInfo() {
    var oBao = createobj();
    var my_url = '/function/UserInfo.aspx?Type=7&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    var str = new Array();
                    str = returnStr.split("|");
                    document.getElementById('nickname').value = str[0];
                    if (str[1] == '') {
                        str[1] = '1';
                    }
                    document.getElementById('sex' + str[1]).checked = true;
                    if (str[2] != '') {
                        document.getElementById('birth').value = str[2];
                    }
                    if (str[3] != '') {
                        document.getElementById('workstatus' + str[3]).checked = true;
                    }
                    if (str[4] != '') {
                        document.getElementById('education' + str[4]).checked = true;
                    }
                    document.getElementById('selfIntro').value = str[5];
                    if (str[7] != '') {
                        document.getElementById('avatar').src = '/icon/' + str[7];
                    }
                    if (str[8] != '') {
                        document.getElementById('em_Email').innerHTML = str[8];
                    }
                    if (str[9] != '') {
                        document.getElementById('em_Mobile').innerHTML = str[9];
                    }
                    document.getElementById('qq').value = str[10];
                    document.getElementById('address').value = str[11];
                    document.getElementById('truename').value = str[12];
                    document.getElementById('card_type').value = str[13];
                    document.getElementById('card_num').value = str[14];
                    if (str[6] != '') {
                        var strPro = new Array();
                        strPro = str[6].split(",");
                        for (var i = 0; i < strPro.length; i++) {
                            document.getElementById('SelPeoject' + strPro[i]).checked = true;
                        }
                    }
                }
            } else {
            }
        }
    }
    oBao.send(null);
}

//读取用户中心详细个人信息
function GetStudentSInfo() {
    var oBao = createobj();
    var my_url = '/function/UserInfo.aspx?Type=7&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                if (returnStr != '') {
                    var str = new Array();
                    str = returnStr.split("|");
                    if (str[8] != '') {
                        document.getElementById('p_mailVal').innerHTML = str[8];
                    }
                    if (str[9] != '') {
                        document.getElementById('p_mobileNum').innerHTML = str[9];
                    }
                }
            } else {
            }
        }
    }
    oBao.send(null);
}

//新手机验证
function SetChangeMobileCode(Mobile) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/SendMsg.aspx?Type=5&M=' + Mobile + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                returnStr = oBao.responseText;
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
    return returnStr;
}

//修改个人安全信息
function StuInfo_changepwd() {

    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
    var a = $("#pwdnow").val();
    var b = $("#pwdnew").val();
    var c = $("#pwdre").val();
    if (a != '' && b != '' && b == c && a != b && b.length >= 6 && b.length <= 20) {
        $("#changepwd").ajaxSubmit({
            success: function (data) {
                if (data == "1") {
                    $("#successTips").html("密码修改成功！");
                    document.getElementById('successTips').style.display = 'block';
                } else if (data == "-3") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("密码输入错误,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else if (data == "-2") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("用户信息不存在,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("未知错误！");
                    document.getElementById('failTips').style.display = 'block';
                }
            },
            resetForm: false,
            clearForm: false
        });
    }
}

//新mail验证
function SetChangeMailCode(Mobile) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/SendMsg.aspx?Type=6&M=' + Mobile + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                returnStr = oBao.responseText;
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
    return returnStr;
}

//修改个人安全信息邮箱
function StuInfo_emailset() {

    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
    var a = $("#passwd").val();
    var b = $("#newemail").val();
    var c = $("#emailcode").val();
    if (a != '' && b != '' && c != '' && a.length >= 6 && a.length <= 20) {
        $("#emailset3").ajaxSubmit({
            success: function (data) {
                if (data == "1") {
                    $("#successTips").html("邮箱修改成功！");
                    document.getElementById('successTips').style.display = 'block';
                } else if (data == "-3") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("密码输入错误,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else if (data == "-2") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("用户信息不存在,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("未知错误！");
                    document.getElementById('failTips').style.display = 'block';
                }
            },
            resetForm: false,
            clearForm: false
        });
    }
}

//修改个人安全信息手机
function StuInfo_modphone() {

    document.getElementById('successTips').style.display = 'none';
    document.getElementById('failTips').style.display = 'none';
    var a = $("#nowpwd").val();
    var b = $("#phone_reg").val();
    var c = $("#code").val();
    if (a != '' && b != '' && c != '' && a.length >= 6 && a.length <= 20) {
        $("#modphone").ajaxSubmit({
            success: function (data) {
                if (data == "1") {
                    $("#successTips").html("手机修改成功！");
                    document.getElementById('successTips').style.display = 'block';
                } else if (data == "-3") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("密码输入错误,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else if (data == "-2") {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("用户信息不存在,修改失败！");
                    document.getElementById('failTips').style.display = 'block';
                } else {
                    document.getElementById('successTips').style.display = 'none';
                    $("#failTips").html("未知错误！");
                    document.getElementById('failTips').style.display = 'block';
                }
            },
            resetForm: false,
            clearForm: false
        });
    }
}

//产品加入购物车
function CarAddProduct(CNum,CID,CType) {
    if (CheckIsCurrentUser('0') == '1') {
        var returnStr = "";
        var oBao = createobj();
        var my_url = '/function/GetOrderInfo.aspx?Type=7&Num=' + CNum + '&CID=' + CID + '&CType=' + CType + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var AlertVal = "添加购物车失败";
                    returnStr = oBao.responseText;
                    if (returnStr == '3' || returnStr == '2') {
                        //AlertVal = "购物车已添加";
                        window.location.href = '/cart.shtml';
                    }
                    //window.alert(AlertVal);
                } else {
                    returnStr = "-3";
                }
            }
        }
        oBao.send(null);
    }
    else {
            AskUserLogin();
    }
}

//读取用户购物车列表
function GetCartList(DivName) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/GetOrderInfo.aspx?Type=8&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var ShowDiv = "EmpetyDiv";
                returnStr = oBao.responseText;
                if (returnStr != '1' && returnStr != '2' && returnStr != '') {
                    ShowDiv = "NoEmpetyDiv";
                    document.getElementById(DivName).innerHTML = returnStr;
                }
                document.getElementById(ShowDiv).style.display = 'block';
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
}

//读取用户购物车列表
function DelCartListInfo(CartID) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/GetOrderInfo.aspx?Type=9&CartID=' + CartID + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                returnStr = oBao.responseText;
                if (returnStr == '1') {
                    document.getElementById('gwc' + $("#Cur" + CartID).val()).outerHTML = '';
                    GetCount();
                }
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
}

//提交购物车产品
function StuCartSub() {
    $("#form_img_up").ajaxSubmit({
        success: function (data) {
            if (data == "0") {
                $("#ShowReaultInfo").html("生成订单失败,请核实信息后重试");
            } else if (parseInt(data) > 0) {
                $("#ShowReaultInfo").html("打开订单信息");
                window.location.href = '/ShopCheck.shtml?Order=' + data;
            }
        },
        resetForm: false,
        clearForm: false
    });
}

//读取SHopOrder信息
function GetShopOrderList(DivName,OrderID) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/GetOrderInfo.aspx?Type=11&Order=' + OrderID + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var ShowDiv = "EmpetyDiv";
                returnStr = oBao.responseText;
                if (returnStr != '1' && returnStr != '2' && returnStr != '') {
                    document.getElementById(DivName).innerHTML = returnStr;
                    document.getElementById('course_id').value = OrderID;
                }
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
}

//获取直播的预约人数等信息
function GetLivePeopleInfo(LiveID,Key) {
    var returnStr = "";
    var oBao = createobj();
    var my_url = '/function/GetLiveInfo.aspx?Type=2&LiveID=' + LiveID + '&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                returnStr = oBao.responseText;
                var str = new Array();
                str = returnStr.split(",");
                if (Key == '0') {
                    document.getElementById('LiveAlreadyBook' + LiveID).innerHTML = str[1];
                    document.getElementById('LiveCouldBook' + LiveID).innerHTML = str[0];
                }
                if (str[2] != 0) {
                    if (Key == '0') {
                        document.getElementById('tongji-live-course' + LiveID).innerHTML = "已预约";
                    } else {
                        if (document.getElementById('Want_Book')) {
                            document.getElementById('Want_Book').innerHTML = '您已预约';
                        }
                        if (document.getElementById('Want_Book_' + LiveID)) {
                            document.getElementById('Want_Book_' + LiveID).className = "yysuccess";
                            document.getElementById('Want_Book_' + LiveID).innerHTML = "已预约";
                        }
                    }
                }
            } else {
                returnStr = "-3";
            }
        }
    }
    oBao.send(null);
}

//设定信息toptitle
function SetInfoTopTitle() {
    if (CheckIsCurrentUser('0') == '1') {
        document.getElementById('TopLoginLi').className = 'dlh';
        document.getElementById('TopLoginLi').innerHTML = '<span>Hi！</span>欢迎来到金程网校！';
        document.getElementById('TopRegLi').outerHTML = '';    }
}


//设定当前题库的项目一级二级名称
function GetProUserTestPaperNumOld(ProID, DivName, ActVal) {
    if (ProID * 0 == 0) {
        var oBao = createobj();
        var my_url = '../../../function/GetQuesTionInfo.aspx?ProID=' + ProID + '&Act=' + ActVal + '&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    var returnStr = oBao.responseText;
                    document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

function GetProUserTestPaperNum(ProID, DivName, ActVal) {
    //判断jQuery库是否加载，未加载调用原方法
    if (window.jQuery) {
        $.post('/function/GetQuesTionInfo.aspx?ProID=' + ProID + '&Act=' + ActVal + '&numr=' + Math.random(), {}, function (returnStr) {
            document.getElementById(DivName).innerHTML = returnStr;
        });
    } else {
        GetProUserTestPaperNumOld(ProID, DivName, ActVal);
    }
}

//提交资料收集购物车产品
function CmaInfoSub() {
    if ($('#cmainfoName').val() == '') {
        window.alert('真实姓名不能为空');
        return false;
    }
    if ($('#cmainfoTel').val().search(/^1[3|4|5|8|7][0-9]\d{8}$/) == -1) {
        window.alert('电话号码格式不正确');
        return false;
    }
    if ($('#cmainfoMail').val().search(/^.+@.+$/) == -1) {
        window.alert('邮箱格式不正确');
        return false;
    }
    $("#cmaInfoForm").ajaxSubmit({
        success: function (data) {
            if (data == "0") {
                if (document.getElementById("popboxDiv")) {
                    document.getElementById('popboxDiv').style.display = 'block';
                } else {
                    window.alert("资料获取成功");
                }

            } else if (data == "1") {
                window.alert("信息填写错误");
            } else if (data == "2") {
                window.alert("信息获取失败");
            } else if (data == "3") {
                window.alert("已经索取过相关资料");
            }
        },
        resetForm: true,
        clearForm: true
    });
}

//设定当前题库的项目一级二级名称
function SetThridCompany(CompanyID,ComeURL) {
    if (CompanyID != '') {
        var oBao = createobj();
        var my_url = '../../../function/UserCheck.aspx?CompanyID=' + CompanyID + '&ComeURL=' + ComeURL + '&Type=2&numr=' + Math.random();
        oBao.open('get', my_url, false);
        oBao.onreadystatechange = function () {
            if (oBao.readyState == 4) {
                if (oBao.status == 200) {
                    //var returnStr = oBao.responseText;
                    //document.getElementById(DivName).innerHTML = returnStr;
                } else {
                    //document.getElementById(DivName).innerHTML = '';
                }
            }
        }
        oBao.send(null);
    }
}

//提交购物车产品
function StuChoiceItem() {
    $("#editInfo").ajaxSubmit({
        success: function (data) {
            if (data == "0") {
                window.alert("保存失败,请核实信息后重试");
            } else if (parseInt(data) > 0) {
                $(".success_tip").show();
                setTimeout("window.history.back()", 2000);
            }
        },
        resetForm: false,
        clearForm: false
    });
}


//提交购物车产品
function BindThridAcount() {
    $("#editInfo").ajaxSubmit({
        success: function (data) {
            if (data == "0") {
                window.alert("保存失败,请核实信息后重试");
            } else if (parseInt(data) > 0) {
                //$(".success_tip").show();
                if (data == '1') {
                    window.alert('绑定成功！');
                    window.location.href = 'http://www.gfedu.cn';
                } else {
                    if (parseInt(data) > 1) {
                        $(".phone_tip").text("用户名或密码错误");
                    }
                }
            }
        },
        resetForm: false,
        clearForm: false
    });
}

//创建相关的订单信息(新版本)
function CreatUserOrderInfoNew(ProID, DivName) {

    var oBao = createobj();
    if (ProID * 0 == 0 || ProID.indexOf('.') > 0) {
        if (ProID * 1 > 50 || ProID.indexOf('.') > 0) {
            var my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=23&numr=' + Math.random();
        } else {
            var my_url = '/Function/GetOrderInfo.aspx?Page=' + ProID + '&Type=6&numr=' + Math.random();
        }

    } else {
        var my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=5&numr=' + Math.random();
        if (ProID.substring(0, 2) == 'NC' || ProID.substring(0, 2) == 'BL' || ProID.substring(0, 2) == 'QJ' || ProID.substring(0, 2) == 'QK' || ProID.substring(0, 2) == 'QT' || ProID.substring(0, 2) == 'BP') {
            if (ProID == "NC3053") {
                var strClassIDs = GetQueryString("ClassIDs");
                if (strClassIDs != null && strClassIDs.replace(",", "") * 0 == 0) {
                    my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=212&ClassIDs=' + strClassIDs + '&numr=' + Math.random();
                } else {
                    console.log("<优惠套餐>非法请求");
                    return false;
                }
            } else {
                my_url = '/Function/GetOrderInfo.aspx?Class=' + ProID + '&Type=212&numr=' + Math.random();
            }
        }
    }
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
				console.log(returnStr);
                if (returnStr * 0 == 0) {
                    document.getElementById(DivName).innerHTML = '读取订单信息出错，请再次尝试';
                }
                else {
                    document.getElementById(DivName).innerHTML = returnStr;
                    if (document.getElementById('Order_id')) {
                        document.getElementById('OrderNumval').innerHTML = '订单编号：' + document.getElementById('Order_id').value;
                        document.getElementById('course_id').value = '' + document.getElementById('Order_id').value;
                    }
                }
            } else {
                document.getElementById(DivName).innerHTML = '';
            }
        }
    }
    oBao.send(null);
}

//获取用户地址列表(新版本)
function GetUserAddInfo(DivName) {

    var oBao = createobj();
    var my_url = '/Function/GetOrderInfo.aspx?Type=13&numr=' + Math.random();
    oBao.open('get', my_url, false);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                document.getElementById(DivName).innerHTML = returnStr;
                if (document.getElementById('defaddname')) {
                    document.getElementById('perName').value = document.getElementById('defaddname').innerHTML;
                    document.getElementById('phone').value = document.getElementById('defaddtel').innerHTML;
                    document.getElementById('emailId').value = document.getElementById('defaddmail').innerHTML;
                    document.getElementById('adr').value = document.getElementById('defaddaddress').innerHTML;
                }
            } else {
                document.getElementById(DivName).innerHTML = '';
            }
        }
    }
    oBao.send(null);
}

//添加用户新的地址信息
function AddUserAddInfo() {
    //window.alert($(".paymessage form ul li:eq(0)").find("input").val());
    var oBao = createobj();
    var my_url = '/Function/GetOrderInfo.aspx?Type=14';
    var isdefcheck = '0';
    if ($(".paymessage form ul li input[type='checkbox']").prop("checked")) {
        isdefcheck = '1';
    }
    var content = 'SetName=' + $(".paymessage form ul li:eq(0)").find("input").val() + '&SetTel=' + $(".paymessage form ul li:eq(1)").find("input").val() + '&SetMail=' + $(".paymessage form ul li:eq(2)").find("input").val() + '&SetAddress=' + $(".paymessage form ul li:eq(3)").find("textarea").val() + '&SetDefault=' + isdefcheck + '&SetPKID=' + document.getElementById('SetAddPKID').value;
    oBao.open('post', my_url, true);
    oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oBao.send(content);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                //window.alert(returnStr);
                if (returnStr == '1') {
                    GetUserAddInfo('user_adresslist');
                }
                else {
                    window.alert('信息保存失败，请核实信息后再次提交');
                }
            } else {
                
            }
        }
    }
}

//删除用户的地址信息
function DelUserAddInfo() {
    //window.alert($(".paymessage form ul li:eq(0)").find("input").val());
    var oBao = createobj();
    var my_url = '/Function/GetOrderInfo.aspx?Type=15';
    var content = 'SetPKID=' + document.getElementById('SetAddPKID').value;
    //window.alert(content);
    oBao.open('post', my_url, true);
    oBao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oBao.send(content);
    oBao.onreadystatechange = function () {
        if (oBao.readyState == 4) {
            if (oBao.status == 200) {
                var returnStr = oBao.responseText;
                //window.alert(returnStr);
                if (returnStr == '1') {
                    GetUserAddInfo('user_adresslist');
                }
                else {
                    window.alert('信息删除失败，请核实信息后再次提交');
                }
            } else {

            }
        }
    }
}