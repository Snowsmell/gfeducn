//by cc test
//计时
function times(a,c) {
    var n,m;
    var clo;
    n = a || 0;
    m = c || "add";
    function tim () {
        
        function aaa () {

            m==="add" ? n++ : n--;
            hms(n);
            if(n>0){
                tim(n);
            }else{
                $(".timeOut").click();
            }
        }
        clo = setTimeout(aaa,1000);
    }
    tim(n);

    function hms (n) {
        var h,m,s,txt;
        
        s = n%60;       
        m = parseInt(n%(60*60)/60);
        h = parseInt(n/(60*60));

        if(s < 10) s = "0" + s;
        if(m < 10) m = "0" + m;
        if(h < 10) h = "0" + h;
        
        $("#t_h").text(h);//时
        $("#t_m").text(m);//分
        $("#t_s").text(s);//秒
    }

    //重新开始
    $(".shartT").click(function () {
        clearTimeout(clo);
        tim(n);//注意调用参数咯
    })
    //停止计时
    $(".endT").click(function () {
        clearTimeout(clo);
    })
}
