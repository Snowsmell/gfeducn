//create at 2017/08/23 by cc
$(function () {
	//baanner
	TouchSlide({
        delayTime: 1500,
        interTime: 5000,
        slideCell: "#slideBoxIndex",
        titCell: ".hdIndex ul", 
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true,
        autoPlay: true
    });

    $(".jsTab").on("click", "li", function () {
        var i = $(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(this).parent().siblings(".tabMain").children("div").eq(i).show().siblings().hide();
    })
})