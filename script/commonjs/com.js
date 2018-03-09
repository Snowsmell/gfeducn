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

    //优惠活动
    $(".details_word dd").click(function () {
        if ($(this).hasClass("kai")) {
            $(this).removeClass("kai");
        } else {
            $(this).addClass("kai");
        }

    })

    //意见反馈
    $(".opinion li").click(function () {
        $(".opinion li").removeClass("sele");
        if($(this).hasClass("sele")){
          $(this).removeClass("sele");
        }else{
          $(this).addClass("sele");
        }
    })
    $(".outModel").click(function(){
        $(".model").show();
    })
    $(".cancel").click(function(){
        $(".model").hide();
    })

    // 图片上传
    $(".filebutton").click(function(){
         $(".sucess").show();
         setTimeout(" $('.sucess').hide()",1500);
         $(this).siblings(".modelImg").show();
     })
    $(".imgDta").on("click","span", function(){
      $(this).parents("li").remove();
      var cont= $(".imgDta").length;
      //  alert(cont)
       if(cont == 0){
         $(".ulData").hide();
         $(".filecton").show();
       }else{
         $(".filecton").hide();
         $(".ulData").show();
       }
   })

})
