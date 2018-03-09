//新产品做题 by cc 20180110
$(window).load(function(){
    //进入页面页面加载获取用户信息弹出层
    if($("#getUserMes").length > 0){
        $(".btngetUserMes").click();
        $("#getUserMes .main dl dd").click(function () {
            $(this).addClass("sele").siblings().removeClass("sele");
            $(this).parent().css("border","");
        });
        $(".btnGetUserMes").click(function () {
            var data = [];
            var sth = $("#getUserMes .main dl");
            var len = sth.length;
            var i = 0;
            for(; i<len; i++){
                var sths = sth.eq(i).children(".sele");
                var lens = sths.length;
                if(lens===0){
                    sth.eq(i).css("border","1px solid #d55");
                }else{
                    data.push( sths.text() );
                }
            }
            console.log(data);
            if(data.length === len){
                $(".jsClose").click();
                startClock();
            }
        })
    }else{
        startClock();
    }

    //倒计时
    function startClock () {
        if($("#testTimeCc").length > 0){
            var staT = $("#testTimeCc").attr("data-timSta");

            if (staT <= 0) {
                times(0,"add");
            }else{
                times(staT,"sub","#testTimeCc");
            }
        }
    }    
});
