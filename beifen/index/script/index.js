/**
 * Created by mxd on 2017/3/2.
 */
$(function () {
    //切换按钮
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
    //选中按钮特效
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
        titCell: ".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true,//自动分页
        autoPlay: true //自动播放
    });
    $(".cooperw").slide({
        mainCell: ".coophidden ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: false,
        vis: 5,
        trigger: "click"
    });
//        banner上面的菜单
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
