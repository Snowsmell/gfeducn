/**
 * Created by mxd on 2017/3/2.
 */
$(function () {
    $(".opinion li").click(function () {
        $(".opinion li").removeClass("sele");
        if ($(this).hasClass("sele")) {
            $(this).removeClass("sele");
        } else {
            $(this).addClass("sele");
        }
    })
    $(".outModel").click(function () {
        $(".model").show();
    })
    $(".cancel").click(function () {
        $(".model").hide();
    })
    //�л���ť
    $(".J_secTabs").each(function () {
        var timeout = 300;
        var delay = 0;
        var a = $(this).find("a"), b = $(this).next().children(), c = $(this).find("em");
        //a.hover(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
        a.click(function () {
            var obj = $(this);
            item_show(obj);
        }, function () {
            item_hide();
        });
        a.click(function () {
            var obj = $(this);
            item_action(obj);
        });
        function item_action(obj) {
            a.removeClass("selected");
            c.css("cursor", "")
            obj.addClass("selected");
            obj.children("em").css("cursor", "default");
            var i = a.index(obj);
            b.hide();
            $(b.get(i)).show();
        }

        function item_show(obj) {
            clearTimeout(delay);
            delay = setTimeout(function () {
                item_action(obj);
                clearTimeout(delay);
            }, timeout);
        }

        function item_hide() {
            clearTimeout(delay);
        }
    });
    //ѡ�а�ť��Ч
    $(".check_radio").click(function () {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    })

    TouchSlide({
        delayTime: 1500,
        interTime: 5000,
        slideCell: "#slideBoxIndex",
        titCell: ".hdIndex ul", //�����Զ���ҳ autoPage:true ����ʱ���� titCell Ϊ����Ԫ�ذ�����
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true,//�Զ���ҳ
        autoPlay: true //�Զ�����
    });
    $(".cooperw").slide({
        mainCell: ".coophidden ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: false,
        vis: 5,
        trigger: "click"
    });
    //        banner�����Ĳ˵�
    $(".banner-list>ul>li").mouseenter(function () {
        $(".banner-list>ul>li").removeClass("selected");
        $(this).addClass("selected");
        $(".list_div").css("display", "none");
        $(".list_div").eq($(this).index()).show();
    })
    $(".banner-list>ul").mouseleave(function () {
        $(".list_div").css("display", "none");
        $(".banner-list>ul>li").removeClass("selected");
        // $(this).siblings().removeClass("selected");
    })
    $(".people,.phone").hover(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    })

    //合作机构友情链接
    $(".cooperative h3 span").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on");
        var n = $(this).index();
        $(this).parent().siblings("div").eq(n).show().siblings("div").hide();
    })

    //每个栏目加个切换效果，反正生不生效都无所谓
    $("nav>a").on('click', function () {
        console.log(1)
        $(this).addClass('current').siblings().removeClass('current')
    })
  
    //切换精品课程和热点资讯
    function changeT(){
        
    }




})

var maxstrlen = 1000;
function Q(s) { return document.getElementById(s); }

function checkWord(c) {
    len = maxstrlen;
    var str = c.value;
    myLen = getStrleng(str);
    var wck = Q("wordCheck");

    if (myLen > len * 2) {
        c.value = str.substring(0, i + 1);
    }
    else {
        wck.innerHTML = (Math.floor(myLen / 2));
    }
}

function getStrleng(str) {
    myLen = 0;
    i = 0;
    for (; (i < str.length) && (myLen <= maxstrlen * 2); i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
            myLen++;
        else
            myLen += 2;
    }
    return myLen;
}


