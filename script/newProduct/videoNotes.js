$(function () {

    function jzVideo () {
        var h = $(window).height();
        var lh = h - 73 - 50;
        var vh = lh - 45;
        $(".knowvideo").height(lh);
        $(".knowplay").height(vh);
        $(".positon").css("top", (lh - 192) / 2);
        if ($(".knownav").hasClass("wknownav")) {
            $(".vleft").css("width", $(window).outerWidth() - 350);
        } else {
            $(".vleft").css("width", $(window).outerWidth());
        }
    }
    jzVideo();

    $(window).resize(function() {
        jzVideo();
    })
    //右边菜单控制按钮组
    $(".knownav .chapter").click(function() {
        $(this).toggleClass("selected").parents(".knownav").toggleClass("wknownav");
        jzVideo();
    })
    $(".knownav .notes").click(function() {
        $(".maskLayer").show();
        $(".bj-pop").show(200);
    })
    $(".knownav .question").click(function() {
        $(".maskLayer").show();
        $(".zw-pop").show(200);
    })
    $(".popClose").click(function() {
        $(".maskLayer").hide();
        $(this).parents(".popBox").hide();
    })

    //右菜单事件
    $(".mulucon .zj >ul >li").on("click", function () {
        console.log($(this).next());
        if($(this).next("ul").length){
          $(this).toggleClass("open");  
        }        
    })

    //播放页底部切换
    $(".J_Tabs li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".theme >div").eq($(this).index()).show().siblings().hide();
        var h = $(this).offset().top;
        $("body").animate({scrollTop: h});
    })

    $(".themecon li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(this).parent().parent().siblings(".themeitem").children("div").eq($(this).index()).show().siblings().hide();
        $(".drug-text").each(function() {
           var thisText = $(this);
           if (thisText.height()>75) {
               thisText.siblings(".toggleOpen").show();
               thisText.attr("style","max-height:72px");
           }
        })
    })

    // 点击加赞
    $(".comments").one("click", function() {
        var cont = parseInt($(this).find("em").html());
        cont += 1;
        $(this).find("em").html(cont);
        $(this).find("i").css("color", "#dd5555")
        $(this).find("em").css("color", "#dd5555")

    })

    $(".tabPerson span").click(function(){
          $(this).toggle();
          $(this).siblings().toggle();
          //此处需要加入答题卡的逻辑
          
          //获取题目和答题卡的dom集合，如果没有冲突的话可以把items和ansItems和i标签的定义放到全局，
          //获取一次就够了
          var items = document.querySelectorAll('.item');
          var ansItems = document.querySelectorAll('.answer_card>.problem>li')
          var i = document.createElement('i');
          i.innerHTML='&#xe990;'
          var index = null;
          //获取当前题目序号
          Array.prototype.forEach.call(items,function(v,i){
            if(getComputedStyle(v,false)['display']=='block'){
                index = i
            }
          })
          //判断，同步收藏或者取消
          var currentI =ansItems[index].querySelector('i')
          if(!currentI){
            ansItems[index].appendChild(i)
          }else{
            ansItems[index].removeChild(currentI)
          }      
    })

    //删除条目
    $(".itmli .close").click(function() {
        $(this).parents().parents(".itmli").remove();
    })

    //
    $(".selftest li label").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    //下半部分笔记答题弹出框调用
    $(".themecon .add").click(function () {
      $(".knownav .notes").click();
    });
    $(".themecon .addNote").click(function () {
      $(".knownav .question").click();
    });
})