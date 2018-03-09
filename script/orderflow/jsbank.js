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

    //银行收缩 start
    function shrink() {
        $(".pay-bank").find(".morebank").click(function() {
            $(this).hide().siblings(".hidebank").css("display", "block");
        })
    }
    shrink();
    //银行收缩 end






})

// 支付方式选择
$(function() {
    $(".pay-mode").find("li").click(function() {
        $(".pay-mode").find("li").removeClass("active-brd");
        $(this).addClass("active-brd");
    });
})

window.onload = function() {
    // 银行切换start
    var btn = document.getElementById("payType");
    var abtn = btn.getElementsByTagName("a");
    var payList = document.getElementsByClassName("payTypeList");
    var i = 0;
    for (i = 0; i < abtn.length; i++) {
        abtn[i].index = i; //获得当前按钮索引
        abtn[i].onclick = function() {
            for (var i = 0; i < abtn.length; i++) {
                abtn[i].className = ""; //清空所有高亮类名
                payList[i].style.display = "none"; //隐藏所有内容div

            }
            payList[this.index].style.display = "block"; //显示当前内容
            this.className = "active"; //给当前按钮添加高亮类名
        }
    }


}