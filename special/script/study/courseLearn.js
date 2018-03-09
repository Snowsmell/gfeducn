
   $(function(){
      /* $(".toggleOpen .dug-toggle").click(function(){
             if($(this).hasClass("kai")){
               $(this).removeClass("kai");
                $(this).parents().siblings(".itmli .drug-text").attr("style","max-height:100%");
               $(this).html("收起<span>&#xf062;</span>")
             }else{
               $(this).addClass("kai");
                $(this).parents().siblings(".itmli .drug-text").attr("style","max-height:72px");
               $(this).html("点击展开<span>&#xf062;</span>")
             }
       })
      //  alert($(".itmli .dug-text").height())
       if ($(".itmli .dug-text").height()>70) {
           (".dug-toggle").show();
       }*/
       $(".addNote").click(function() {
           $(".model").show();
       })
       $(".add").click(function() {
           $(".modelNote").show();
       })
        $(".dug-toggle").toggle(function(){
            $(this).parents().siblings(".drug-text").attr("style","max-height:100%");
            $(this).html("收起<span class='icon-cc003'>&#xe957;</span>");
        }, function () {
            $(this).parents().siblings(".drug-text").attr("style","max-height:72px");
            $(this).html("点击展开<span class='icon-cc004'>&#xe958;</span>");
        });
        $(".drug-text").each(function() {
            var thisText = $(this);
            if (thisText.height()>75) {
             //  alert(thisText.height())
                thisText.siblings().find(".dug-toggle").show();
                thisText.attr("style","max-height:72px");
            }
        })


   })
   function closeModel(){
    //  alert(333)
     $(".model").hide();

     $(".modelImg").hide();
   }
   function closeNote(){
     $(".modelNote").hide();

     $(".modelImg").hide();
   }
