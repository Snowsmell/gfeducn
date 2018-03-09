//01-弹出框

$(function() {
    // 弹窗 start
    function pop(e) {
        $(".pay").click(function() {
            $(e).css("display", "block");
        });
        $(".close,.qx,.wc").click(function() {
            $(e).css("display", "none");
        });
        $(".close,.qx,.wc").click(function() {
            $(e).css("display", "none");
        });
    }

    pop(".mode"); //付款弹窗
    pop(".wxpay"); //微信弹窗

    //弹窗结束

})

