/**
 * Created by mxd on 2017/3/10.
 */
$(function () {
    //详情展开下拉
    /*$(".list >li >dl .detail").click(function () {
        $(this).parents().parents().parents("dl").siblings(".textContent").toggle();
        if(  $(this).html() =="详情<i></i>"){
        $(this).html("收起<i>&#xf063;</i>");
        }else{
          $(this).html("详情<i>&#xf062;</i>")
        }
    })*/
    $(".list >li >dl").click(function () {
        $(this).siblings(".textContent").toggle();
        if(  $(this).find(".detail").html() =="详情<i></i>"){
        $(this).find(".detail").html("收起<i>&#xf063;</i>");
        }else{
          $(this).find(".detail").html("详情<i>&#xf062;</i>")
        }
    })
    //详情选择
    $(".mess").find("button").click(function(){
        $(this).closest(".mess").find("ul li").show();
        if($(this).html()=="修改信息"){
            $(".mess").find("ul li").click(function(){
                $(this).siblings().removeClass("set").show();
                $(this).addClass("set");
            })
            $(this).html("保存信息").click(function(){
                $(this).closest(".mess").find("ul li").not(".set,.course ul li").hide();
                // $(this).closest(".mess").find(".course").not(".course li").hide();

            });
        }else{
            $(this).closest(this).html("修改信息").click(function(){
                $(this).closest(".mess").find("ul li").show();
            });
        }
    })
   /* $(".mess").find("ul li").click(function(){
        $(this).siblings().removeClass("set").show();
        $(this).addClass("set");
    })*/

    // 现购切换
    function addMess(){
        $(".xybuy li").click(function(){
            $(".xybuy li").removeClass("set");
            $(this).addClass("set");
            $(".xbuy").css("display","none");
            $(".xbuy").eq($(this).index()).css("display","block");
        })
    }
    addMess();


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

    $(".all").click(function () {
        // $(this).parents(".courseRight").css("height","auto")
        if($(this).parents(".courseRight").height() =="70"){
            $(this).parents(".courseRight").css("height","auto")
        }else{
            $(this).parents(".courseRight").css("height","70px")
        }
        $(this).find("i").toggle();
    })



})
