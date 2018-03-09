/**
 * Created by mxd on 2017/4/12.
 */
$(function () {
    //详情展开下拉
    $(".imgText  .open").click(function () {
        $(this).parents().siblings(".detail").toggle();

    })
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

})
