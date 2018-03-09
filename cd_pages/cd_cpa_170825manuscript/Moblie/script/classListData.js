$(function () {
    //课程列表部分展示逻辑
    function course() {
        $('.course h4 span').on('click', function () {
            var parent = $(this).parent().parent();
            if ($(this).hasClass('hide')) {
                $(this).removeClass('hide').addClass('open')
                parent.siblings().find('h4 span').removeClass('open').addClass('hide')               
                parent.siblings().find('ul').addClass('off')
                parent.find('ul').removeClass('off')
            } else {
                $(this).removeClass('open').addClass('hide')
                parent.find('ul').addClass('off')
            }
        })

        $('.course ul li div').on('click', function () {
            var siblings = $(this).parent().siblings()
            if ($(this).hasClass('closed')) {
                siblings.find('div').removeClass('opend').addClass('closed')
                siblings.find('p').addClass('off')
                $(this).removeClass('closed').addClass('opend')
                $(this).siblings('p').removeClass('off')
            } else {
                $(this).removeClass('opend').addClass('closed')
                $(this).siblings('p').addClass('off')
            }
        })
    }
    course();

//detial.js
    $(".special").click(function(){
        var wheight=$(window).height();
        var wwidth=$(window).width();
        var apHeight=wheight-$(".pop").height();
        var apWidth=wwidth-$(".pop").width();
        $(".mode").show();
        $(".pop").css("top",apHeight/2);
        $(".pop").css("left",apWidth/2);
        // $(".pop").css("height",wheight/2);
        // $(".pop").css("width",wwidth/2);
        $(".mode>div").eq($(this).parent().index()).show().siblings().hide();
    });
    $(".select .right li").click(function(){
        // alert(111)
        if($(this).hasClass('curr')){
            // $(this).removeClass("curr");
        }else{
            $(this).addClass("curr").siblings().removeClass("curr");
        }
    });
    $(".togget span").click(function(){
        $(this).hide();
       $(this).siblings().show();
       $(".toContain").toggle()

    });
})