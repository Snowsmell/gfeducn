// live 170908
$(function () {

    //课程选择
    $(".myclass-sel dd > a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".c-classify-content li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })

    //多级菜单
    $(".levelsmenu .cjsBtn").click(function () {
        $(this).toggleClass("on");
        $(this).parent().next().toggle(); 
    })

    //弹出层
    $(".jsChe li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })


    //题们 收藏 标记
    $(".binsBox .sc").click(function () {
        $(this).toggleClass("on");
    })

    $(".binsBox .bj").click(function () {
        var num = $(this).parent().parent().parent().attr("data-quesid");
        console.log(num);
        if(num){
            if($(this).hasClass("on")){
                $(".answer_card_full dd").each(function () {
                    var at = $(this).attr("data-quesid");
                    if(at === num){
                        $(this).removeClass("icon--1");
                    };
                })
                $(this).removeClass("on");  
            }else{
                $(".answer_card_full dd").each(function () {
                    var at = $(this).attr("data-quesid");
                    if(at === num){
                        $(this).addClass("icon--1");
                    };
                })
                $(this).addClass("on");
            }
            
        }       
    })

    //选题
    $(".checkList a").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    //展现新答题卡
    $(".jsAnswerC").click(function () {
        $(".answer_card_full").slideToggle();
    })

    $(".answer_card_full .top a").click(function () {
        var n = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".answer_card_full .mainBox > div").eq(n).addClass("on").siblings().removeClass("on");
    })

})