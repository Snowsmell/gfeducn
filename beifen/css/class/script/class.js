/**
 * Created by mxd on 2017/3/10.
 */
$(function () {
    //顶部下拉
    $(".people,.phone").hover(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    })
    //广告栏关闭
    $(".ad .guan").click(function () {
        $(this).closest(".ad").hide();
    })
    //课程选择关闭
    $(".d_tag").click(function () {
        $(this).nextAll(".d_tag").remove();
        $(this).remove();
    })
    $(".c-classify-content dl dd li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    //优惠活动
    $(".details_word dd").click(function () {
        if ($(this).hasClass("kai")) {
            $(this).removeClass("kai");
        } else {
            $(this).addClass("kai");
        }

    })
    //特色服务
    $(".seltao dd a").click(function () {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected")
        } else {
            $(this).addClass("selected")
        }
    })
    $(".seltao dd a").hover(function () {
        $(this).closest(".seltaoc").find(".seldiv").show();
        $(this).closest(".seltaoc").find(".seldiv").css({"top": $(this).position().top + 34})
        console.log($(this).position.top);
    }, function () {
        $(this).closest(".seltaoc").find(".seldiv").hide();
    })
    //课程咨询
    $(".sub_info button").click(function () {
        var str = $(this).closest(".sub_info").find("textarea").val();
        $(".bottomul").prepend('<dl><dt><div class="img"><img src="images/t.png"><span>001</span></div></dt> <dd> <div class="peoinfo"> <div class="peoinfoleft"><img src="images/peo.png">春天的芭蕾 <a href="javascript:;">第2节课-拓展的解释</a> </div> <div class="date">2017-03-06 </div> </div> <div class="people_word"> <p>' + str + ' </p> </div> </dd></dl>');
    })
    //菜单滚动定位
    var h = $(".detailsnav").offset().top-50;
    $(window).scroll(function () {
        if($(window).scrollTop()>h){
            $(".detailfixed").addClass("defixed");
        }else{
            $(".detailfixed").removeClass("defixed");
        }
    });
})
