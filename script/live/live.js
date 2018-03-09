// live 170908
$(function () {
    $(".banner-list>ul>li").mouseenter(function () {
        $(".banner-list>ul>li").removeClass("selected");
        $(this).addClass("selected");
        $(".list_div").css("display","none");
        $(".list_div").eq($(this).index()).show();
    })
    $(".banner-list>ul").mouseleave(function () {
      $(".list_div").css("display","none");
      $(".banner-list>ul>li").removeClass("selected");
    });

    // 最新直播切换
    $(".newlive .list li").hover(function () {
    	var n = $(this).index();
    	$(this).addClass("on").siblings().removeClass("on");
    	$(this).parent().siblings().children(".item").eq(n).show().siblings().hide();
    });

    // 最热直播展现样式切换
    $(".jsLine").click(function () {
    	$(this).addClass("on").siblings().removeClass("on");
    	$(this).parent().parent().siblings().children("ul").removeClass("block").addClass("line");
    });
    $(".jsBlock").click(function () {
    	$(this).addClass("on").siblings().removeClass("on");
    	$(this).parent().parent().siblings().children("ul").removeClass("line").addClass("block");
    });

    //选择回放 livelist
    $(".jsCek").click(function () {
    	$(this).toggleClass("on");
    })
    //选择
    $(".jsTab.livelist-nav li").click(function () {
    	$(this).addClass('on').siblings().removeClass("on");
    })

    //livefull
    $(".talk .jsTab > li").click(function () {
        var n = $(this).index();
        $(this).addClass('on').siblings().removeClass("on");
        $(this).parent().siblings(".talks").children("div").eq(n).show().siblings().hide();
        $(this).parent().siblings(".send").children(".jsBtn").attr("data-qu", n);
    })
    $(".talk .send .jsBtn").click(function () {
        var userName = $(".talk").attr("data-userName");
        var userImg = $(".talk").attr("data-userImg");
        var n = $(this).attr("data-qu");
        var v = $(this).siblings().children("input").val();
        var txt = null;
        $(this).siblings().children("input").val("");
        if(v && userName && userImg){ //有填入信息，有用户昵称，有用户头像
            if (n == 1) {
                var date = new Date();
                v += '<em>'+ date.getHours() + 
                    ':' + date.getMinutes() + 
                    ':' + date.getSeconds() + '</em>'; 
                txt = '<div class="item no">';
            }else{
                txt = '<div class="item">'
            }
            
            txt = txt + '<span><img src="'+
                        userImg+//头像地址
                        '" alt="'+
                        userName+//用户昵称
                        '">'+
                        userName+//用户昵称
                        '：</span><p>'+ v +'</p></div>'//v有木有时间自己加哈
            var sth = $(this).parent().siblings().children("div");            
            var h = sth.children(".xian").offset().top;
            console.log(h);
            sth.children(".xian").before(txt);
            sth.scrollTop(h);
        }
        
    })

    $(".chapter ol > li").on("click", function () {
       $(this).addClass("on").siblings().removeClass("on");
    })

    $(".window > .jsBtn").click(function () {
        $(this).parent().toggleClass("full");
        if ($(this).parent().hasClass("full")) {
            $(this).removeClass("icon-enlarge").addClass("icon-shrink");
        }else {
            $(this).addClass("icon-enlarge").removeClass("icon-shrink");
        }
        $("body").toggleClass("full");
    })

    //播放页点播目录切换
    $(".thelist li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
    
    //日历
    calendar(".calendar .date");
    function date30(a){var sth=$(a).children(".main");var ma;var td=new Date();var year=td.getFullYear();var mu=td.getMonth();var dx=td.getDay();var dd=td.getDate();$(".ny").text(year+"年"+(mu+1)+"月");var n=0;var mmu=mu;var zm=0;function is_leap(year){return(year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0))}var monthEnd=new Array(31,28+is_leap(year),31,30,31,31,30,31,30,31,30,31);while(n<30){dx=dx%7;dd%monthEnd[mu]===0?dd=monthEnd[mu]:dd=dd%monthEnd[mu];if(n!=0&&dd%monthEnd[mu]===1){zm++;mu=(mmu+zm)%12;if(mu===0){year++}}setHtml(year,mu,dx,dd);n++;dx++;dd++}function setHtml(y,m,x,d){var sq=['日','一','二','三','四','五','六'];txt='<li data-day='+y+'/'+(m+1)+'/'+d+'><span>'+sq[x]+'</span><em>'+d+'</em></li>';sth.append(txt)}sth.children("li").eq(0).addClass("on")}    
    function calendar(a){date30(a);var wx=$(a).width()-54;var sth=$(a).children(".main").children();var wi=sth.width();var N=sth.length;var n=parseInt(wx/wi);var m=0;var prevBtn=$(a).children("span[title='prev']");var nextBtn=$(a).children("span[title='next']");init();function init(){m=0;if(n===N){prevBtn.removeClass("on");nextBtn.removeClass("on")}else{prevBtn.removeClass("on");nextBtn.addClass("on");$(a).children("span[title='next']").addClass("on").siblings("span").removeClass("on")}}$(window).resize(function(){wx=$(a).width()-54;n=parseInt(wx/wi);init()});function move(m){var x=-m*(wi)+27;sth.parent().css({"marginLeft":x})}function prev(){if(m>0){m--;move(m);nextBtn.addClass("on")}else{m=0}if(m===0){prevBtn.removeClass("on")}}function next(){if(m<N-n){m++;move(m);prevBtn.addClass("on")}else{m=N-n}if(m===N-n){nextBtn.removeClass("on")}}$(a).on("click","span",function(){var tt=$(this).attr("title");switch(tt){case"prev":prev();break;case"next":next();break;default:console.log("出错啦~~");break}})};
    $(".calendar").on("click", "li", function () {
        var n = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");

        var tt = $(this).attr("data-day");
        var arr = tt.split("/");
        $(".ny").text(arr[0]+"年"+arr[1]+"月");
        //当日直播内容切换效果，如果是ajax，那就不用这个
        if ($(".daylive").eq(n).text()) {
            $(".dayNolive").removeClass("on"); 
            $(".daylive").eq(n).addClass("on").siblings(".daylive").removeClass("on");
        }else{
            $(".daylive").removeClass("on");
            $(".dayNolive").addClass("on"); 
        }
    })

})