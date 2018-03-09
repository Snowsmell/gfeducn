$(function() {
	// 弹窗关闭
	var popOff = $('h3.common_top i');
	var popcannel = $('.addressCancel');
	popOff.on('click', function () {
		$(this).parents('.popup').hide();
		$('.addPopup').hide();

	});
	popcannel.on('click', function () {
		$(this).parents('.popup').hide();
		$('.addPopup').hide();

	});
});

/**
 * textarea 输入字数显示
 */

    var maxstrlen = 1000;
   function Q(s) { return document.getElementById(s); }

   function checkWord(c,b) {
       len = maxstrlen;
       var str = c.value;
       myLen = getStrleng(str);
       var wck = Q(b);
       if(!b){
          wck=Q("wordCheck");
       }

       if (myLen > len * 2) {
           c.value = str.substring(0, i + 1);
       }
       else {
           wck.innerHTML = (Math.floor(myLen / 2));
       }
   }

   function getStrleng(str) {
       myLen = 0;
       i = 0;
       for (; (i < str.length) && (myLen <= maxstrlen * 2); i++) {
           /*if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
               myLen++;
           else*/
               myLen += 2;
       }
       return myLen;
   }

// 上传图片
$(".filebutton").click(function(){
	$(".sucess").show();
	setTimeout(" $('.sucess').hide()",1500);
	$(this).siblings(".modelImg").show();
})
$(".imgDta span").click(function(){
	$(this).parents("li").remove();
	var cont= $(".imgDta").length;
	//  alert(cont)
	if(cont == 0){
		$(".ulData").hide();
		$(".filecton").show();
	}else{
		$(".filecton").hide();
		$(".ulData").show();
	}
})

$(function() {
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
					$(".popupLayer").hide();
					clearInterval(clo);
					$(".popupLayer .closeX").click();
					$(nn).find(".countdown").text(n);
				}
			}, 1000);
		}
	})
})

