/**
 * Created by mxd on 2017/3/2.
 */
$(function () {
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
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
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
//        banner����Ĳ˵�
    $(".banner-list>ul").hover(function () {
        $(".list_div").show();
    }, function () {
        $(".list_div").hide();
        $(this).children("li").removeClass("selected");
    })
    $(".banner-list>ul>li").mouseenter(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    $(".people,.phone").hover(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    })
})
