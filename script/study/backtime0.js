/**
 * Created by mxd on 2016/10/23.
 */
$(function () {
    function protime(n) {
        return n = n < 10 ? '0' + n : n;
    }
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
   //����ʱ
    function GetRTime(gettime) {
        var EndTime = new Date();
        /*'2016/10/18 11:10:00'*/
        EndTime.setTime(gettime);
        var t = EndTime.getTime();
        if (s > 0) {
            s--;
        } else {
            if (m > 0 || h > 0) {
                s = 59;
            } else {
                clearInterval(GetRTime);
            }
            if (m > 0) {
                m--;
            } else {
                if (h > 0) {
                    h--;
                    m = 59;
                }
            }
        }
        if (t >= 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        var hour = protime(h);
        var tmin = protime(m);
        var second = protime(s);
        if (hour == 0 && tmin < 10 && second > 1) {
            $(".backTime").addClass("change");
        }
        document.getElementById("t_h").innerHTML = protime(h);
        document.getElementById("t_m").innerHTML = protime(m);
        document.getElementById("t_s").innerHTML = protime(s);
    }
    GetRTime(100000);
    var tim=setInterval(GetRTime, 1000);
    function cancel(){
        clearInterval(tim);
    }
    function restart(){
        var tim=setInterval(GetRTime, 1000);
    }
})
