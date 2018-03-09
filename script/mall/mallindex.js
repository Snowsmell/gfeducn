// mailindex 171215
$(function () {

//banner部分
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

$(".singlebook").slide({
    titCell:".hd ul",//控制
    mainCell:".bd div",//展示
    autoPage:true,
    effect:"leftLoop",
    // autoPlay:true,
    vis:1,
    trigger:"click"
});

$(".banner-list>ul>li").mouseenter(function () {
    $(".banner-list>ul>li").removeClass("selected");
    $(this).addClass("selected");
    $(".list_div").css("display","none");
    $(".list_div").eq($(this).index()).show();
})
$(".banner-list>ul").mouseleave(function () {
  $(".list_div").css("display","none");
  $(".banner-list>ul>li").removeClass("selected");
});

//独家滚动
$(".dujiaCarousel").slide({
    titCell:".hd ul",//控制
    mainCell:".loopmain ul",//展示
    autoPage:true,
    effect:"leftLoop",
    // autoPlay:true,
    vis:6,
    trigger:"click"
});

$(".paihang .bar").hover(function () {
    $(this).addClass("hide").siblings(".item").removeClass("on");
    $(this).siblings(".bar").removeClass("hide");
    $(this).next().addClass("on");
})

//金融滚动、会计滚动、考研滚动、理财滚动、从业滚动
//.jinrongCarousel,.kuaijiCarousel,.kaoyanCarousel,.licaiCarousel、.congyeCarousel
$(".itemCar").slide({
    titCell:".hd ul",//控制
    mainCell:".imgBox ul",//展示
    autoPage:true,
    effect:"leftLoop",
    autoPlay:true,
    vis:1,
    trigger:"click"
});

})
