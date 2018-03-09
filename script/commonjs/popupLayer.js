(function () {
//公共部分
	var clo;
	$(".popOut").on("click", function () {
		var nn = $(this).attr("data-popname");
		// console.log(nn);
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
				if(t <= 0){
					clearInterval(clo);
					$(".popupLayer .closeX").click();
					$(nn).find(".countdown").text(n);
				}
			}, 1000);			
		}
	})
	// 右上角关闭按钮
	$(".popupLayer .closeX").on("click", function () {
		$(".popupLayer .need").removeClass("warn");
		$(this).parents(".popupLayer").hide();
		if(clo){
			clearInterval(clo);
		}
	})

// 私有部分
	//申请开票弹出层 170811
    $(".tait label").on("click", function () {
		var x = $(this).attr("data-con");
		$(".jsBtnBillQd").attr("data-con", x);	
		if(x){
			x = "#" + x;
			$(x).show().siblings("form").hide();
		}		
	})
	$(".fap label").on("click", function () {
		$(this).addClass("on").siblings().removeClass("on");		
	})
	
	$('.jsBtnBillQd').on("click", function () {
		var x = 0;
		var sth = $(this).attr("data-form");
		if(sth){
			sth += " .need";
		}
		$(sth + ".need").each(function () {//必填项验证
			var a = $(this).val();
			if(a){
				$(this).removeClass("warn");
			}else{
				$(this).addClass("warn");
				x++;
			}
		})

		if(!x){//提交成功关闭弹出层
			$(".popupLayer .closeX").click();
		}else{
			$(".popBox").animate({ scrollTop: 0 }, 1000);
		}
	})
	// $('.jsBtnBillQd').on("click", function () {
	// 	var x = $(this).attr("data-con");
	// 	if(x){
	// 		x = "#" + x + " .need";
	// 		$(x).each(function () {
	// 			var a = $(this).val();
	// 			if(a){
	// 				$(this).removeClass("warn");
	// 			}else{
	// 				$(this).addClass("warn");
	// 			}
	// 		});
	// 		$(".popBox").animate({ scrollTop: 0 }, 200);
	// 	}
	// })

	//支付
	$(".pay-mode li").on("click", function () {//本事件仅仅做效果用，上线请隐藏
		$(".popupLayer").show();
		$(".payMes").show().siblings("div").hide();
	})
	$(".payMes .btn1,.payMes .btn2").on("click", function () {
		$(".popupLayer .closeX").click();
	})

})()