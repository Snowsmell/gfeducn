/**
 * Created by mxd on 2017/3/10.
 */
$(function () {
    //详情展开下拉
    $(".list >li >dl .detail").click(function () {
        $(this).parents().parents().parents("dl").siblings(".textContent").toggle();
        if(  $(this).html() =="详情<i></i>"){
        $(this).html("收起<i>&#xf063;</i>");
        }else{
          $(this).html("详情<i>&#xf062;</i>")
        }
    })
    // 点击删除移除列表
    $(".list >li >dl .del").click(function () {
        $(this).parents().parents().parents("li").remove();
    })
    // 问号hover
    $(".help").hover(function () {
       $(this).siblings("section").show();
    }, function () {
           $(this).siblings("section").hide();
    })

    $(".list >li .all").click(function () {
        // $(this).parents(".courseRight").css("height","auto")
        if($(this).parents(".courseRight").height() =="70"){
            $(this).parents(".courseRight").css("height","auto")
        }else{
            $(this).parents(".courseRight").css("height","70px")
        }
    })

})
