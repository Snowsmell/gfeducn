/**
 * Created by mxd on 2017/3/2.
 */

$(function () {
  // 意见反馈单选
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
})

 $(function(){
    // 上传图片
     $(".filebutton").click(function(){
         $(".sucess").show();
         setTimeout(" $('.sucess').hide()",1500);
         $(this).siblings(".modelImg").show();
     })

       $(".imgDta span").click(function(){
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




