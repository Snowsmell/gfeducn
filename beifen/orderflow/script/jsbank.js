//01-弹出框

$(function(){
	// 弹窗 start
    function pop(e){
        $(".pay").click(function(){
            $(e).css("display","block");
        });
        $(".close,.qx,.wc").click(function(){
            $(e).css("display","none");
        });
        $(".close,.qx,.wc").click(function(){
            $(e).css("display","none");
        });
    }

    pop(".mode");//付款弹窗
    pop(".wxpay");//微信弹窗

    //弹窗结束

    //银行收缩 start
    function shrink(){
        $(".pay-bank").find(".morebank").click(function(){
            $(this).hide().siblings(".hidebank").css("display","block");
        })
    }
    shrink();
    //银行收缩 end






})



