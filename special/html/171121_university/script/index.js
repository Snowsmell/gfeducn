//点击报名弹出 登录页面
function baoming() {
	$('.loading').show();
	$('.needhide').hide();
	$('.mobile').hide();
	$('.mobilelong').hide();
	$('.needhide1').hide();
}
//点击登录之后 返回报名页面
function denglu() {
	$('.loading').hide();
	$('.needhide').show();
	$('.mobile').show();
	$('.mobilelong').show();
	var ww = window.innerWidth;
    if (ww >= 1200) {
    	
    	$('.needhide1').show();
    	$('.mobile').hide();
    	$('.mobilelong').hide();
    }
}
$(function(){
	var index;
	+function(){
		var timer;
		$('.fullpage').fullpage({
			sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF',"#FFF","#FFF"],
			//'navigation': true,
			anchors: ['page0','page1', 'page2', 'page3', 'page4','page5'],
			//menu: '.menu',
			afterRender:function(){
				$(".section1 .addNewEff").addClass("in");
			},
			afterLoad:function(anchorLink,index){
			},
			onLeave:function(index,nextIndex,direction){
			}
		});
	}();
	$('#tabClass ul li').click(function(){ 
		$(this).addClass("on").siblings().removeClass();
		$("#tabClass dl dd").removeClass("on").eq($('#tabClass ul li').index(this)).addClass("on"); 
	});
	$('#tabClass dl dd p').click(function(){ 
		$(this).addClass("on").siblings().removeClass();
	});
	$('.section4 .container table tr').hover(function(){ 
		$(this).addClass("on").siblings().removeClass();
	});
	$('.section6 .container dl dd').click(function(){ 
		$(this).addClass("on").siblings().removeClass().children();
		$("#kecs .item").removeClass("on").eq($('.section6 .container dl dd').index(this)).addClass("on"); 
	});
	
	$('.section1inshow').click(function(){ 
		$('.section1in').show();
	});
	$('.section2inshow').click(function(){ 
		$('.section2in').show();
	});
	$('.section3inshow').click(function(){ 
		$('.section3in').show();
	});
	$('.section4inshow').click(function(){ 
		$('.section4in').show();
	});
	$('.section5inshow').click(function(){ 
		$('.section5in').show();
	});
	$('#qux').click(function(){ 
		$('.section1in').hide();
		$('.loading').hide();
		$('.mobile').show();
		$('.mobilelong').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobilelong').hide();
	    	$('.mobile').hide();
	    }
	});
	$('#qux2').click(function(){ 
		$('.section2in').hide();
		$('.loading').hide();
		$('.mobile').show();
		$('.mobilelong').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobilelong').hide();
	    	$('.mobile').hide();
	    }
	});
	$('#qux3').click(function(){ 
		$('.section3in').hide();
		$('.loading3').hide();
		$('.mobile').show();
		$('.mobilelong').show();
		$('.needhide3').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobilelong').hide();
	    	$('.mobile').hide();
	    }
	});
	$('#qux4').click(function(){ 
		$('.section4in').hide();
		$('.loading').hide();
		$('.mobile').show();
		$('.mobilelong').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.mobile').hide();
	    	$('.needhide1').show();
	    	$('.mobilelong').hide();
	    }
	});
	$('#qux4_2').click(function(){ 
		$('.section4in').hide();
		$('.loading').hide();
		$('.mobile').show();
		$('.mobilelong').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobilelong').hide();
	    	$('.mobile').hide();
	    }
	});
	$('#qux4_3').click(function(){ 
		$('.section4in').hide();
		$('.loading').hide();
		$('.mobilelong').show();
		$('.mobile').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobile').hide();
	    	$('.mobilelong').hide();
	    }
	});
	$('#qux5').click(function(){ 
		$('.section5in').hide();
		$('.loading').hide();
		$('.mobilelong').show();
		$('.mobile').show();
		$('.needhide').show();
		var ww = window.innerWidth;
	    if (ww >= 1200) {
	    	$('.needhide1').show();
	    	$('.mobile').hide();
	    	$('.mobilelong').hide();
	    }
	});
	$('.needloading3').click(function(){ 
			$('.loading3').show();
			$('.needhide3').hide();
	});
	//内测  覆盖掉
	$('.needloading1').click(function(){ 
			
	});
//	$('.needloading2').click(function(){ 
//			baoming();
//	});
//	$('.denglu').click(function(){ 
//			denglu();
//			tiaozhuan();
//	});
	

	//登陆成功之后的跳转
	function tiaozhuan() {
		window.location.href="http://www.gfedu.cn/live/";
	}
	//登陆成功之后的跳转
	function tiaozhuan2() {
		window.location.href="http://www.gfedu.cn/live/";
	}
TouchSlide({
        delayTime: 500,
        interTime: 3000,
        slideCell: "#slideBoxIndex",
        titCell: ".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true, //自动播放
    });

})
window.onload = function () {
    var ww = window.innerWidth;
    if (ww >= 1200) {
        $(".mianlive").slide({
            titCell: ".hd1 ul",
            mainCell: ".livscroll ul",
            autoPage: false,
            effect: "leftLoop",
            autoPlay: false,
            vis: 1,
            trigger: "click"
        });
        $('.prev').on('click',function () {
            var ulleft = $('#kwod1').css('left');
            var lishow = $('#circle>li');
            var i = (-parseInt(ulleft))/1080;
            switch (i) {
                case 1:
                    lishow.eq(1).addClass('current').siblings().removeClass();
                    break;
                case 2:
                    lishow.eq(0).addClass('current').siblings().removeClass();
                    break;
                default:
                    console.log('呵呵');
            }
        });
        $('.next').on('click',function () {
            var ulleft = $('#kwod1').css('left');
            var lishow = $('#circle>li');
            var i = (-parseInt(ulleft))/1080;
            switch (i) {
                case 1:
                    lishow.eq(1).addClass('current').siblings().removeClass();
                    break;
                case 2:
                    lishow.eq(0).addClass('current').siblings().removeClass();
                    break;
                default:
                    console.log('呵呵');
            }
        });
    } 
}