/**
 * Created by cc on 2018/01.
 */

$(function () {

    //关闭
    $(".index-guan .cha").click(function () {
        $(this).parent().remove();
    })
    //首页学习科目展开
    $(".study-dl dt").click(function () {
    	$(this).parent("dl").toggleClass("on");//.siblings("dl").removeClass("on");
    })

    //弹出层中选择休息日
    $(".dayOff > em").click(function () {
        $(this).toggleClass("on");
    })

    //2016 mxd
    $(".J_secTabs").each(function () {
        var timeout = 300;
        var delay = 0;
        var a = $(this).find("li"), b = $(this).next().children(), c = $(this).find("em");
        //a.hover(function(){ var   obj = $(this); item_show(obj); },function(){ item_hide(); });
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
})
