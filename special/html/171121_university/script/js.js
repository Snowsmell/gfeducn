/**
 * Created by cc on 2017/4/10.
 */


$(function(){
	var index;
	+function(){
		var timer;
		$('.fullpage').fullpage({
			sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF',"#FFF","#FFF"],
			'navigation': true,
			//anchors: ['page1','page2','page3','page4','page5','page6'],
			afterRender:function(){
				$(".section1 .addNewEff").addClass("in");
			},
			afterLoad:function(anchorLink,index){
				if(index==1){
					$(".section1 .addNewEff,.section1 .btnLink").addClass("in");
					$(".section1 .tipWord").addClass("bounceInUp");
					
				}else if(index==2){
					$(".section2 .section2_1,.section2 .section2_2 .section2_img,.section2 .section2_2 .section2_txt,.section2 .section2_3").addClass("in");
				}else if(index==3){
					$(".section3 .postion3-2").animate({bottom:0})
					$(".section3 .postion3-1").animate({left:0},1000)
					$(".section3 .postion3-3").animate({right:0},1000)
					$(".section3 .section3_1").addClass("in");
				}else if(index==4){
					$(".section4 h1,.section4 h3").addClass("in");
					$(".section4 .section4-cont .cont4-0").addClass("flipInY");
				}else if(index==5){
					$(".section5 h1,.section5 h3,.section5 .module,.section5 .section5-img").addClass("in");
				}else if(index==6){
					$(".section6 h1").animate({left:0},1000)
					$(".section6 h3").animate({left:0},1000)
					$(".section6 .module").animate({right:0},1000)
					$(".section6 .section6-img img").addClass("in");
				}else if(index==7){
					$(".section7 h1,.section7 h3,.section7 .module").addClass("in");
					$(".section7 .section7-cont .cont7-0").addClass("flipInY");
				}else if(index==8){
					$(".section8 h1").animate({left:0},1000)
					$(".section8 h3").animate({left:0},1000)
					$(".section8 .module").animate({right:0},1000)
					$(".section8 .section8-img img").addClass("in");
				}else if(index==9){
					$(".section9 .section9-1,.section9 .section9-2").addClass("in");
				}else if(index==10){
					$(".section10 .section10-cont").addClass("flipInY");
				};
				
				if(index==$(".section").length){
					$(".next-page").hide();
				}else{
					$(".next-page").show();
				};
			},
			onLeave:function(index,nextIndex,direction){
				if(index==1){
					$(".section1 .addNewEff").removeClass("in");
				}else if(index==2){
					$(".section2 .section2_1,.section2 .section2_2 .section2_img,.section2 .section2_2 .section2_txt,.section2 .section2_3").removeClass("in");
				}else if(index==3){
					$(".section3 .postion3-2").animate({bottom:"-700"})
					$(".section3 .postion3-1").animate({left:"-100%"})
					$(".section3 .postion3-3").animate({right:"-100%"})
					$(".section3 .section3_1").removeClass("in");
				}else if(index==4){
					clearInterval(timer);
					$(".section4 .section4-cont .cont4-0").removeClass("flipInY");
					$(".section4 h1,.section4 h3").removeClass("in");
				}else if(index==5){
					$(".section5 h1,.section5 h3,.section5 .module,.section5 .section5-img").removeClass("in");
				}else if(index==6){
					$(".section6 h1").animate({left:"-100%"},1000)
					$(".section6 h3").animate({left:"-100%"},1000)
					$(".section6 .module").animate({right:"-100%"},1000)
					$(".section6 .section6-img img").removeClass("in");
				}else if(index==7){
					clearInterval(timer);
					$(".section7 .section7-cont .cont7-0").removeClass("flipInY");
					$(".section7 h1,.section7 h3,.section7 .module").removeClass("in");
				}else if(index==8){
					$(".section8 h1").animate({left:"-100%"},1000)
					$(".section8 h3").animate({left:"-100%"},1000)
					$(".section8 .module").animate({right:"-100%"},1000)
					$(".section8 .section8-img img").removeClass("in");
				}else if(index==9){
					$(".section9 .section9-1,.section9 .section9-2").removeClass("in");
				}else if(index==10){
					$(".section10 .section10-cont").removeClass("flipInY");
				};
				
				if(index==$(".section").length-1&&direction=="down"){
					$(".next-page").fadeOut(300);
				}else{
					$(".next-page").fadeIn(300);
				};
			}
		});
	}();
	
	
	/*第一屏*/
	+function(){
		//第一屏
		$(".section1 .btnLink,.section3 .sectiionBox .caption .down").click(function(){
			$.fn.fullpage.moveTo(6,0);
		});
		var i=0;
		$(".section1 .tipWord span").click(function(){
			
			if($(this).hasClass("next")){
				i++
				if(i>$(".section1 .tipWord li").length-1){
					i=0;
				}
				$(".section1 .tipWord li").eq(i).show().siblings().hide();
			}else{
				i--;
				if(i<0){
					i=$(".section1 .tipWord li").length-1;
				};
				$(".section1 .tipWord li").eq(i).show().siblings().hide();
			};
			if(i>$(".section1 .tipWord li").length){
				i=0;
			}else if(i<0){
				i=$(".section1 .tipWord li").length-1;
			};
			console.log(i)
		})
		
		/*var timer=setTimeout(function(){
			$(".section1 .tipWord li:first").fadeOut(300,function(){
				$(".section1 .tipWord li:last").fadeIn(300);
				$(".section1 .tipWord .detail").fadeIn(300)
			})
		},5000);
		$(".section1 .tipWord span").click(function(){
			$(this).fadeOut();
			if($(this).hasClass("close")){
				clearTimeout(timer);
				$(".section1 .tipWord .detail").fadeOut();
				$(".section1 .tipWord ul").stop().animate({"width":0},500,function(){
					$(".section1 .tipWord span").removeClass("close").addClass("open").fadeIn();
				});
			}else{
				$(".section1 .tipWord ul").stop().animate({"width":"100%"},500,function(){
					$(".section1 .tipWord span").removeClass("open").addClass("close").fadeIn();
				});
				if($(".section1 .tipWord .detail").is(":hidden")&&$(".section1 .tipWord li").is(":hidden")){
					$(".section1 .tipWord .detail").fadeIn();
				}
			}
		});*/
	}();
	/*第二屏*/
	
	/*第三屏*/
	+function(){
		$(".section3 .sectiionBox .box .boxContent").hover(function(){
			$(".section3 .sectiionBox .box .boxContent").removeClass("active");
			$(this).addClass("active");
		})
	}();
	
	/*第四屏*/
	+function(){
		$(".section4 ul li").hover(function(){
			$(this).find(".default").removeClass("flipInY");
			//$(this).addClass("on").siblings().removeClass("on");
		});
		
	}();
	
	/*第五屏*/
	+function(){
		var len=$(".section5 .sectionBox .item").size(),timer;
		$(".section5 .sectionBox .item").width($(".section5 .sectionBox").width()/3);
		var w=$(".section5 .sectionBox .item").width();
		$(".section5 .sectionBox ul").width(len*Math.ceil($(".section5 .sectionBox .item").width()+1));
		$(".section5 .sectionBox .btn").click(function(){
			if($(this).hasClass("btn_prev")){
				if(!$(".section5 .sectionBox ul").is(":animated")){
					moveEffect(".section5 .sectionBox ul","prev");
				};
			}else{
				if(!$(".section5 .sectionBox ul").is(":animated")){
					moveEffect(".section5 .sectionBox ul","next");
				};
			};
		});
		$(".section5 .sectionBox").hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){moveEffect(".section5 .sectionBox ul","next");},3000)
		}).trigger("mouseleave");
		function moveEffect(ele,dir){
			if(dir=="next"){
				$(ele).find(".item").each(function(i,e){
					if(i==2){
						$(e).find(".workGroup").fadeOut().end().find(".groupDes").fadeIn();
					}else{
						$(e).find(".workGroup").fadeIn().end().find(".groupDes").fadeOut();
					}
				}).end().animate({"marginLeft":-w},500,function(){
					$(ele).append($(this).children().first()).css("marginLeft",0);
				});
			}else{
				$(ele).find(".item").each(function(i,e){
					if(i==0){
						$(e).find(".workGroup").fadeOut().end().find(".groupDes").fadeIn();
					}else{
						$(e).find(".workGroup").fadeIn().end().find(".groupDes").fadeOut();
					}
				}).end().prepend($(ele).children().last()).css("margin-left",-w).animate({"marginLeft":0},500,function(){});
			};
		};	
	}()
	/*第六屏*/
	+function(){
		$(".section6 .formCtrl input").each(function() {
			var _ths=$(this);
	        var thisVal = _ths.val();	      
	        //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
	        if (thisVal != "") {
	            _ths.siblings("span").hide();
	        } else {
	            _ths.siblings("span").css("display","inline-block");
	        }
	        //聚焦型文本框验证
	        _ths.prev().click(function() {
	            $(this).hide();
	            _ths.focus();
	        });
	        _ths.focus(function() {
	            _ths.siblings("span").hide();
	        }).blur(function() {
	            var val =_ths.val();
	            if (val != "") {
	                _ths.siblings("span").hide();
	            } else {
	                _ths.siblings("span").css("display","inline-block");
	            }
	        });
	    });
	    
		
	  
	}();
	
	
	$(".next-page").click(function(){
		$.fn.fullpage.moveSectionDown();
	});
});







































































