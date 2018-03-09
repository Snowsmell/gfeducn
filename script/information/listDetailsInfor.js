//create at 2018/01/05 by cc
$(function () {

   //tab切换
    $(".tabSwitch li").click(function () {
        var n = $(this).index();
        $(".tabSwitch").attr("data-index", n);
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parent().siblings("div").removeClass("on").eq(n).addClass("on");
    })
    //tab选择
    $(".tabOption a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".list-nav li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
    $(".goodbook li").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    //关键字
    $(".searchkeys b").on("click", "i", function () {
        $(this).parent().remove();
    })

    //搜索框
    $(".searchInput input[type='text']").click(function (e) {
        $(this).siblings(".searchlist").addClass("on");
        e.stopPropagation();
    })
    $(window).click(function (e) {        
        $(".searchlist").removeClass("on");
    })
    $(".searchInput .searchlist li").on("click","a",function (e) {
        var txt = $(this).text();
        $(this).parents(".searchlist").removeClass("on").siblings("input[type='text']").val(txt);
        // $(".searchkeys b").append("<em>" + txt + "<i class='icon-gf-wrong32'></i></em>")
        $(".searchkeys b").text("").append("<em>" + txt + "<i class='icon-gf-wrong32'></i></em>")
    })

    //浮动
    addFix();
    
    function addFix () {
        var hx = $(window).scrollTop();
        var tmx = $(".listsInfor").offset().top;

        //左侧定位菜单
        if( $(".list-nav").length > 0 ){            

            var tw = $(window).scrollTop();
            var hmx = $(".listsInfor").height();
            var tmx = $(".listsInfor").offset().top;
            var hs = $(".list-nav").height();
            var ts = $(".list-nav").offset().top;

            var ttop = tw - tmx + 60;
            var mintop = hmx - hs;

            console.log(ttop);
            if(ttop > 0){
                if(ttop > mintop){
                    ttop = mintop;
                }
                $(".list-nav").css("top", ttop);
            }else{
                $(".list-nav").css("top", 0)
            }
        }
        //右侧底部广告群
        if( $(".adsBox").length > 0){
            var tw = $(window).scrollTop();            
            var hmx = $(".listsInfor").height();
            var hm = $(".lDright").height();
            var tm = $(".lDright").offset().top
            var hs = $(".adsBox").height();

            var ttop = hs + tw - hm - tm + 60;
            var mintop = hmx - hm;

            if(ttop > 0){
                if(ttop > mintop){
                    ttop = mintop;
                }
                $(".adsBox").css("top", ttop);
            }else{
                $(".adsBox").css("top", 0)
            }
        }
    }
    
    function loadMore () {
        if ($("#loadMore").length > 0){
            var tx = $(window).scrollTop();
            var hx = $(window).height();
            var ts = $(".listsInfor").offset().top;
            var hs = $(".listsInfor").height();
            var n = $(".tabSwitch").attr("data-index") || 0;

            var txt = '<li><div class="img"><a href="####"></a></div>'+
                        '<div class="mid"><p class="til"><a href="####">load数据</a></p>'+
                        '<p class="mes"><em>2017/12/01 13:11:22</em><em>编辑：Regin</em></p>'+
                        '<p class="tim l">2015年6月6日CFA一级考试已经顺利完成。深受学员好评的“百题预测”再续佳绩，每个session的预测考点准确率高达94%左右。</p>'+
                        '</div></li>';

            if((ts + hs - tx - hx - 200) < 0 && loadMoreFlag){//.listsInfor 中间块距离底部还差200px以内 开始加载
                $(".tabSwitch > div").eq(n).find(".line").append(txt);
                loadMoreFlag = false; //加载一次后不允许加载

                setTimeout(function () { //这里设置的是1秒后运行再次请求服务器加载，可改成服务器响应后才允许再次请求~~
                    loadMoreFlag = true;
                }, 200)
            }    
        }        
    }

    var loadMoreFlag = true; // 就这样立**的立全局flag吧~~~用于避免用户在网络不好的情况下多次请求
    $(window).scroll(function () {
        //左右定位浮动层
        addFix();
        //滚动加载
        loadMore();
    })
})