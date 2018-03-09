
$(function () {
    //优惠活动
    $(".details_word dd").click(function () {
        if ($(this).hasClass("kai")) {
            $(this).removeClass("kai");
            $(this).find("ul").css("height","21px")
            // alert(1)
        } else {
            $(this).addClass("kai");

                $(this).find("ul").css("height","auto")
            // alert(3)
        }

    })

    //特色服务
    $(".seltao dd a").click(function () {
       if($("#"+packageType).val()=="1"){
      //if($(".seltao").val()=="1"){
         if ($(this).hasClass("selected")) {
             $(this).removeClass("selected")
         } else {
             $(this).addClass("selected")
         }
       }else{
         $(this).css("pointer-events","none")
       }

    })
    $(".seltao dd a").hover(function () {
         var indexOf= $(this).index();
         $(this).closest(".seltaoc").find(".seldiv").show();
        $(this).closest(".seltaoc").find(".seldiv li").eq(indexOf).show();
        $(this).closest(".seltaoc").find(".seldiv").css({"top": $(this).position().top + 34})
        //console.log($(this).position.top);
    }, function () {
        $(this).closest(".seltaoc").find(".seldiv").hide();
        $(this).closest(".seltaoc").find(".seldiv li").hide();
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
    $(".detailsnav li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected")
       var index=$(this).index();
         $(".detailCtn >div").hide();
       $(".detailCtn >div").eq(index).show()

    })

    $(".lineTop li").click(function () {
       $(this).addClass("selected").siblings().removeClass("selected")
      var index=$(this).index();
      $(".lineContain >div").hide();
      $(".lineContain >div").eq(index).show()
      // console.log('我在class里面')
   })
      //  $(".lineTop li").on('click',function(){
      //      $(this).addClass("selected").siblings().removeClass("selected")
      // var index=$(this).index();
      // $(".lineContain >div").hide();
      // console.log('执行了')
      // $(".lineContain >div").eq(index).show()   	
      //  })
   /*$(".themeitem li").click(function() {
        $(this).children("h2").find("i").html("&#xf063;");
        $(this).find(".cd-container").toggle();
        // $(this).addClass("set").siblings().removeClass("set")
        $(this).siblings().find(".cd-container").hide();

        $(this).siblings().children("h2").find("i").html("&#xf062;");
        if($(this).find(".cd-container").is(':hidden')){
             $(this).children("h2").find("i").html("&#xf062;");
              $(this).removeClass("set")
        }else{
            $(this).children("h2").find("i").html("&#xf063;");

             $(this).addClass("set").siblings().removeClass("set")
        }
    })*/
    $(".themeitem li h2").click(function() {
        $(this).find("i").html("&#xf063;");
        $(this).siblings(".cd-container").toggle();
        // $(this).addClass("set").siblings().removeClass("set")
        $(this).parent().siblings().find(".cd-container").hide();
        $(this).parent().siblings().find("h2 i").html("&#xf062;");
        if($(this).siblings(".cd-container").is(':hidden')){
             $(this).find("i").html("&#xf062;");
              $(this).parent().removeClass("set")
        }else{
            $(this).find("i").html("&#xf063;");

             $(this).parent().addClass("set").siblings().removeClass("set")
        }
    })
})
