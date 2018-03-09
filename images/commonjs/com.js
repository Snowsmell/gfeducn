/**
 * Created by mxd on 2017/3/10.
 */
$(function () {
    //顶部下拉
    $(".people,.phone").hover(function () {
        $(this).addClass("selected");
    }, function () {
        $(this).removeClass("selected");
    })

    //优惠活动
    $(".details_word dd").click(function () {
        if ($(this).hasClass("kai")) {
            $(this).removeClass("kai");
        } else {
            $(this).addClass("kai");
        }

    })



})
