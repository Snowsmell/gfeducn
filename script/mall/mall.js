// live 170908
$(function () {
    $('.ulCur li').on('click', function () {
        var index = $(this).index();
        $(this).addClass('sp_selected').siblings().removeClass('sp_selected');
        $(this).parents('.sp_main_right').find('.sp_ulSel').eq(index).show().siblings('.sp_ulSel').hide();
    });
    //课程选择
    $(".myclass-sel dd > a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".c-classify-content li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })

    //购买
    $("#buyNum").on("click","span",function () {
        var num = $(this).siblings("input[type='number']").val();
        if($(this).hasClass("plus")){
            num++;
            $(this).siblings("input[type='number']").val(num);
        }else{
            num--;
            if(num<0){
                num = 0;
            }
            $(this).siblings("input[type='number']").val(num);
        }
    })
    //加入心愿单
    $(".jsHeart").click(function () {
        $(this).children("i").toggleClass("icon-heart");
    })

    function sumCombList () {//选中课程价格相加
        var sum = 0;
        $("#jsCombList li p span").each(function () {
            if($(this).hasClass("on")){
                var a = parseFloat($(this).siblings("em").text());
                sum += a;
            }
        })
        $("#jsCombList li.end em b").text(sum);
    }
    sumCombList();
    $("#jsCombList li p").click(function () {
        $(this).children("span").toggleClass("on");
        sumCombList();
    })

})