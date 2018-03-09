//examCalendar 180104 cc
$(function(){
    $("#ymCalendar").ready(function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var txt = y + "年" + (m+1) + "月";
        console.log(txt);
        $("#ymCalendar").children("span").text(txt);

        var btnPrev = $("#ymCalendar").children(".prev");
        var btnNext = $("#ymCalendar").children(".next");

        btnPrev.click(function () {
           m--;
           if (m<0) {
            m = 11;
            y--;
           }
            txt = y + "年" + (m+1) + "月";
            $("#ymCalendar").children("span").text(txt);           
        })
        btnNext.click(function () {
            m++;
            if(m>11){
                m = 0;
                y++;
            }
            txt = y + "年" + (m+1) + "月";
            $("#ymCalendar").children("span").text(txt);            
        })

    })
})