// JavaScript Document


$(function(){


	//secTabs切换
	$(".J_secTabs").each(function(){
		var timeout = 300;
		var delay = 0;
		var a = $(this).find("li"), b = $(this).next().children(), c = $(this).find("em");

		//a.hover(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
		a.click(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
		a.click(function(){ var obj = $(this); item_action(obj); });

		function item_action(obj){
			a.removeClass("selected");

			c.removeClass("selected");
			c.css("cursor","")
			obj.addClass("selected");
			b.removeClass("selected");
			obj.children("em").css("cursor","default");
			var i = a.index(obj);
			b.hide();
			$(b.get(i)).show();
		}
		function item_show(obj){
			clearTimeout(delay);
			delay = setTimeout(function(){
				item_action(obj);
				clearTimeout(delay);
			},timeout);
		}
		function item_hide(){
			clearTimeout(delay);
		}
	});

//secTabs切换
$(".sectab li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".contains ul").eq($(this).index()).show().siblings().hide();
        $(".sectab").show();
    })

	$(window).load(function(){
		var wh=$(document.body).outerWidth(true);
		$.mCustomScrollbar.defaults.theme="light-2";
		$("#kwod").mCustomScrollbar({
			axis:"x",
			setLeft: "0",
			advanced:{autoExpandHorizontalScroll:true}
		});
		if(wh<768){
			$("#JcsecTab").mCustomScrollbar({
			axis:"x",
			setLeft: "0",
			advanced:{autoExpandHorizontalScroll:true}
			});
			$("#JcsecTab2").mCustomScrollbar({
			axis:"x",
			setLeft: "0",
			advanced:{autoExpandHorizontalScroll:true}
		});
		}


	});
	
	$(window).scroll(function(){
		     var h = $(".proaside .sideproblem").offset().top+293;
		     if($(this).scrollTop()>=h){
		        $(".proaside .picshow").css({'position':'fixed','top':'20px'});
		     } else {
		        $(".proaside .picshow").css({'position':'static','top':'auto'});
		     }
		});


			/*超过12个标题时隐藏JS*/

 var count=$(".clsContent li").length;
 if(count<=11){
 	$("#more").hide();
 }else{
 		$(".clsContent li:gt(11)").hide();
    $("#more a").text("展开更多");
    $("#more a").click(function(){
	if($(this).text()=="展开更多"){
	   $(".clsContent li:gt(11)").fadeIn(1000);
	   $(this).text("收起");
	   $("#more").show();
	  }else{
		   $(".clsContent li:gt(11)").fadeOut(1000);
		    $(this).text("展开更多");
		  }
	  })
 }

/*隐藏结束*/

  
})




	//这里是轮翻图的JS
 $(function () {
    //banner图
    TouchSlide({
        delayTime: 1500,
        interTime: 5000,
        slideCell: "#slideBoxIndex",
        titCell: ".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true,//自动分页
        autoPlay: false //自动播放
    });
    console.log($(".hdIndex >ul li").length);
    TouchSlide({
        delayTime: 1500,
        interTime: 5000,
        slideCell: "#slideBox",
        titCell: ".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true,//自动分页
        autoPlay: true, //自动播放
    });
})
self.setInterval("t()",500);
function t() {
    var t=$(".hd >ul .on").index();
    $("#pics li").eq(t).show().siblings().hide();
};


//倒计时
self.setInterval("time()", 1000);
function time() {
    var currentDate = new Date();
    var strEndTime = "2016/06/04";
    var EndTime = new Date(strEndTime);
    var strArr = new Array(); //定义一数组
    strArr = strEndTime.split("-");
    var strDate = strArr[0] + "年" + strArr[1] + "月" + strArr[2] + "日";
    var days = EndTime - currentDate;
    EndTimeMsg = parseInt(days / 1000);
    d = Math.floor(EndTimeMsg / 60 / 60 / 24);
    // h = Math.floor(EndTimeMsg / 60 / 60 - (24 * d));
    // m = Math.floor(EndTimeMsg / 60 - (24 * 60 * d) - (60 * h));
    // s = Math.floor(EndTimeMsg - (24 * 60 * 60 * d) - (60 * 60 * h) - (60 * m));
    $(".timedate").text(d);
    //$(".timedate").text(strDate);
    EndTimeMsg--;
    // if (EndTimeMsg < 0) {
    //     $(".fromDay").text(0);
    // }
}


 $(function () {
$(".procontainer #slideBoxIndex .hdIndex li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".procontainer section").eq($(this).index()).show().siblings().hide();
        $('.procontainer .pvedio').show();
    })

//预约弹窗 star
$('#kwod li .pop').click(function() {
	$('.blockUI').show();
	$('.blockUI .blockMsg #qpdiv').show();
});
$('.blockUI #closec').click(function() {
	$('.blockUI').hide();
	$('.blockUI .blockMsg #qpdiv').hide();
});
//预约弹窗 end



  $("#slides").slidesjs({
        width: 480,
        height: 270,
        start: 1,//控制从第几张图开始播放
        //控制前后按钮
        navigation:{
            active: false,//是否开启左右按钮
            effect: "slide"//触发按钮时，焦点图切换的特效，可选参数"slide"和"fade"
        }

    });
})