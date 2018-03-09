/**
 * Created by mxd on 2017/4/12.
 */
$(function () {
    //详情展开下拉
    $(".imgText  .open").click(function () {
        $(this).parents().siblings(".detail").toggle();
        $(this).parents().siblings(".tiele-list").toggle();
        $(this).find("i").toggleClass("icon-down2");

    })
    // 地址展开
    $(".addinfo .open").click(function(){
        $(this).parents().siblings("li").not(".add-active").toggle();
        // $(this).siblings(".yhq-list").toggle();
        $(".address .kai").find("i").toggleClass("icon-down2");
    })
    //删除地址
    $(".address").find("li>span .del").click(function(){
        $(this).parents().parents("li").remove();
    })
    //优惠券
    $(".yhq .open").click(function(){
        $(this).find("i").toggleClass("icon-up2");
        $(".yhq-list").toggle();
    })
    $(".yhq-list").find("ul>li").click(function(){
        $(this).siblings("li").find("em").css("display","none");
        $(this).find("em").toggle();

    })
    //已发快递
    $(".yfh").hover(function(){
        $(this).find(".yfh-ts").show();
    },function(){
        $(this).find(".yfh-ts").hide();
    })








    /*单选框jQuery*/
    $(".cont a").click(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
    });
    // 是否全选
    $(".all-radio").click(function () {
      if($(this).hasClass("selected")){
        $(".all-radio").removeClass("selected");
          $(".check_radio").removeClass("selected");
      }else{
          $(".check_radio").addClass("selected");
          $(".all-radio").addClass("selected");
      }

    })
    //    是否勾选
    $(".check_radio").click(function () {
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
            $(this).addClass("selected");
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

     // 弹窗 start
    $(".pay").click(function(){
        $(".mode").css("display","block");
    });
    $(".close,.qx,.wc").click(function(){
        $(".mode").css("display","none");
    });


})
