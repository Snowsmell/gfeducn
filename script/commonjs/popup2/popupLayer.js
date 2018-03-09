// create by cc 2017 ie9+

//公共部分
var clo;
$(".popOut").on("click", function () {
	var nn = $(this).attr("data-popname");
	$(".popupLayer").show();
	$(nn).show().siblings("div").hide();
	//如果有倒计时
	if ($(nn).find(".countdown")) {
		clearInterval(clo);
		var n = $(nn).find(".countdown").attr("data-count");
		var t = n;
		$(nn).find(".countdown").text(t);
		clo = setInterval(function () {
			t--;
			$(nn).find(".countdown").text(t);
			if (t <= 0) {
				clearInterval(clo);
				$(".popupLayer .closeX").click();
				$(nn).find(".countdown").text(n);
			}
		}, 1000);
	}
})
// 右上角关闭按钮
$(".popupLayer .closeX,.popupLayer .jsClose").on("click", function () {
	$(".popupLayer .need").removeClass("warn");
	$(this).parents(".popupLayer").hide();
	if (clo) {
		clearInterval(clo);
	}
})

// 多步骤

var btn1 = $('.tel1>button');
var btn2 = $('.tel2>button');
var btn3 = $('.tel3>button');
var btnOff = $('.telPopup h3 i');
btn1.on('click', function () {
	$(this).parents('.tel1').hide();
	$(this).parents('.tel1').siblings('.tel2').show();
});
btn2.on('click', function () {
	$(this).parents('.tel2').hide();
	$(this).parents('.tel2').siblings('.tel3').show();
});
btn3.on('click', function () {
	$(this).parents('.tel3').siblings('.tel1').show();
	$(this).parents('.tel3').hide();
	$(".popupLayer .closeX").click();
});



// 其他弹出框内js

//单选切换
$(".opinion li").click(function () {
	$(".opinion li").removeClass("sele");
	if ($(this).hasClass("sele")) {
		$(this).removeClass("sele");
	} else {
		$(this).addClass("sele");
	}
})

// 图片上传
$(".filebutton").click(function () {
	$(".sucess").show();
	setTimeout(" $('.sucess').hide()", 1500);
	$(this).siblings(".modelImg").show();
})
$(".imgDta").on("click", "span", function () {
	$(this).parents("li").remove();
	var cont = $(".imgDta").length;
	//  alert(cont)
	if (cont == 0) {
		$(".ulData").hide();
		$(".filecton").show();
	} else {
		$(".filecton").hide();
		$(".ulData").show();
	}
})

//用户输入弹出层
$(".tait label").on("click", function () {
	var x = $(this).attr("data-con");
	$(".jsBtnBillQd").attr("data-con", x);
	if (x) {
		x = "#" + x;
		$(x).show().siblings("form").hide();
	}
})
$(".fap label").on("click", function () {
	$(this).addClass("on").siblings().removeClass("on");
});
$(".checkbox label").on("click", function (e) {
	e.stopPropagation();
	$(this).toggleClass("on");
})

//2017.12.29 snowsmell add

//选择感兴趣的
$('#choose_pop ul li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
})

//创建计划
$('#createplan_pop .need').on('click',function(){
	$(this).toggleClass('on')
})


