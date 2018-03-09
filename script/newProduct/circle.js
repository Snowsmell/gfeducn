/**
 * Created by mxd on 2016/10/23.
 */
$(window).load(function(){
    var st = parseInt($(".classp .st").text(), 10);
    var pt = parseInt($(".classp .stnumber").text(), 10);
    var range = document.querySelector("#range"), circle = document.querySelectorAll("circle")[1];
    var percent = st / 100, perimeter = Math.PI * 2 * 50;
    var percent1 = pt / 100;
    var per1 = Math.PI * 2 * 50;
    circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
    var ct = document.getElementById("ct");
    ct.setAttribute('stroke-dasharray', per1 * percent1 + " " + per1 * (1 - percent1));
    $(".st").text(st);
    $(".stnumber").text(pt);
})