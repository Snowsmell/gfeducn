// JavaScript Document


$(function(){
	
	//倒计时
 function show(strEndTime) {
      var currentDate = new Date();
      var EndTime = new Date(strEndTime);
      var days = EndTime - currentDate;
      EndTimeMsg = parseInt(days / 1000);
      d = Math.floor(EndTimeMsg / 60 / 60 / 24);
      $("#lastDay").text(d);
      EndTimeMsg--;
      if (EndTimeMsg < 0) {
           $("#lastDay").text(0);
      }
      setInterval( function () {
           show(strEndTime);
      }, 60000);
 }
 show('2018/6/03');

 
	//这里是轮翻图的JS
 
	TouchSlide({ 
		delayTime:3000,
		slideCell:"#slideBoxIndex",
		titCell:".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bdIndex ul", 
		effect:"leftLoop", 
		autoPage:true,//自动分页
		autoPlay:true //自动播放
	

	});	
	TouchSlide({ 
		delayTime:3000,
		slideCell:"#slideBox",
		titCell:".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bdIndex ul", 
		effect:"leftLoop", 
		autoPage:true,//自动分页
		autoPlay:true //自动播放


	});	
	
	
	//secTabs切换
	$(".J_secTabs").each(function(){
		var timeout = 300;
		var delay = 0;
		var a = $(this).find("li"), b = $(this).next().children(), c = $(this).find("em");

		//a.hover(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
		a.hover(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
		a.hover(function(){ var obj = $(this); item_action(obj); });

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