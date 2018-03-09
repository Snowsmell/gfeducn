/*
A.效果类：
01-弹出框---20170307---setApDiv---李婷婷
02-tab切换---20170307---tab---李婷婷
03-下拉切换---20170307---sideBarToggle---李婷婷
04-无缝滚动---20170307---scroll---李婷婷
05-banner轮播---20170307---TouchSlide---钱燕燕
06-多图片轮播---20170307---TouchSlide---李婷婷
07-旋转木马---20170307---lfloat---钱燕燕
08-倒计时---20170307---countTime---徐连飞

B.功能类：（验证、图片上传）
09-图片压缩---20170407---preview---郑园
10-表单提交---20170407---SubmitUsersInformation.js(文件)---郑园
*/



 //01-弹出框
// 设置 apDiv 
function setApDiv() { 
//apDiv浮动层显示位置居中控制 
var wheight=$(window).height(); 
var wwidth=$(window).width(); 
var apHeight=wheight-$("#apDiv").height(); 
var apWidth=wwidth-$("#apDiv").width(); 
$("#apDiv").css("top",apHeight/2); 
$("#apDiv").css("left",apWidth/2); 
};

function popoff(){
    $(".close").click(function(){
		$(".mode").hide();
   		 $('#apDiv').hide();
	});
}
function pop(){
    $('.button').click(function() { 
     $(".mode").show();  
     $("#apDiv").show(); 
     })
}
function stopBubble(e) {//阻止事件冒泡
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
       }

// 02-tab切换
function tab(wrap,navul,eve){//两种变换方式，一种为点击事件click（也是默认事件），另外一种为鼠标移过事件mouseover
	var divs=$(".wrap div");
	var lis=$(".diya li");
	for(var i=0;i<lis.length;i++){
		lis[i].indx=i;
		if(eve=="click" || eve==null){
			lis[i].onclick=function(){ 
				for(i=0;i<lis.length;i++){  
			        lis[i].className="";  
			        divs[i].className="none" ;
			        this.className="on"; 
			        divs[this.indx].className="block"; 
			    } 
			}
		}else if(eve=="mouseover"){ 
			lis[i].onmouseover=function(){  
			   for(i=0;i<lis.length;i++){   
			    lis[i].className="";  
			    divs[i].className="none";    
			    this.className="on";  
			    divs[this.indx].className="block"; 
	    	 	} 
		    } 
	     }
	}
}

//03-下拉切换
(function($,window,document,undefined){
	$.fn.sideBarToggle=function(option){
		this.default={
			titleH:undefined,//作为展示的标题头
			contentShow:undefined,//作为展示的内容
			showType:1,//显示的效果是【只能显式一个，可以全部关闭】【必须显式一个】【可以全部显式】分别对应[1,2,3]
			speed:600,//手风琴展开的速度
			event:"click",//默认事件默认为click事件，还可以用mouseover
		}
		this.options=$.extend({},this.default,option);
		var $this=this;
		this.find(this.options.titleH).css("cursor","pointer");
		this.find(this.options.titleH).bind($this.options.event,function(){
			var $next=$(this).next($this.options.contentShow);
			switch($this.options.showType) {
				case 1:
					// 只能显式一个，可以全部关闭
					$this.showType($next);
					break;
				case 2:
					// 必须显式一个
					if($next.is(":visible")){
						return false;
					}
					$this.showType($next);
					break;
				case 3:
					// 可以全部显式
					$this.showType($next,1);
					break;
				default:
					console.log('没有这种效果!');
					break;
			}
		})
		this.showType=function(ele,num){
			if(num==1){
				if(ele.hasClass('seleted-fold')){
					ele.removeClass('seleted-fold').slideUp($this.options.speed)
				}else{
					ele.addClass('seleted-fold').slideDown($this.options.speed);
				}
			}else{
				if(ele.hasClass('seleted-fold')){
					ele.removeClass('seleted-fold').slideUp($this.options.speed)
				}else{
					$($this.options.contentShow).slideUp($this.options.speed).removeClass('seleted-fold');
					ele.addClass('seleted-fold').slideDown($this.options.speed);
				}
			}
		}
	}
})(jQuery,window,document);

// 04-上下、左右无缝滚动
function scroll(direction,speed,iTime){
    var oDiv = document.getElementById('scroll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oDiv.getElementsByTagName('li');
    var aBtn = oDiv.getElementsByTagName('a');
    var timer = null;
    var iSpeed = 0;
    var flag = true;    //判断水平移动还是垂直移动

    oUl.innerHTML += oUl.innerHTML;

    switch(direction){
        case 'left'://向左移动
            iSpeed = -speed;
            oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
            flag = true;
            break;
        case 'right'://向右移动
            iSpeed = speed;
            oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
            flag = true;
            break;
        case 'top'://向上移动
            iSpeed = -speed;
            flag = false;
            break;
        case 'bottom'://向下移动
            iSpeed = speed;
            flag = false;
            break;
    };

    setTimeout(move,iTime);

    //左按钮和上按钮
    aBtn[0].onclick = function(){
        clearInterval(timer);
        iSpeed = -speed;
        move();
    };

    //右按钮和下按钮
    aBtn[1].onclick = function(){
        clearInterval(timer);
        iSpeed = speed;
        move();
    };

    oUl.onmouseover = function(){
        clearInterval(timer);
    };

    oUl.onmouseout = function(){
        move();
    };

    function move(){    
        timer = setInterval(function(){
            if(flag){
                oUl.style.left = oUl.offsetLeft + iSpeed + 'px';
                if(oUl.offsetLeft < -oUl.offsetWidth / 2){
                    oUl.style.left = '0';
                }else if(oUl.offsetLeft > 0){
                    oUl.style.left = - oUl.offsetWidth / 2 + 'px';
                }
            }else{
                oUl.style.top = oUl.offsetTop + iSpeed + 'px';
                if(oUl.offsetTop <= - oUl.offsetHeight / 2){
                    oUl.style.top = '0';
                }else if(oUl.offsetTop >= 0){
                    oUl.style.top = - oUl.offsetHeight / 2 + 'px';
                };
            };
        },50);
    };
};

//08-倒计时
(function($){
    $.fn.countTime=function(options){
        var defaultValue={
            _date:"2017/2/17",
            _local:".test"
        }
        var obj= $.extend(defaultValue,options);
        var selObject=$(this);
        var count={
            time:function(){
                var currentDate = new Date();
                var strEndTime =obj._date;
                var EndTime = new Date(strEndTime);
                var strArr = new Array(); //定义一数组
                strArr = strEndTime.split("/");
                var strDate = strArr[0] + "年" + strArr[1] + "月" + strArr[2] + "日";
                var days = EndTime - currentDate;
                EndTimeMsg = parseInt(days / 1000);
                d = Math.floor(EndTimeMsg / 60 / 60 / 24);
                h = Math.floor(EndTimeMsg / 60 / 60 - (24 * d));
                m = Math.floor(EndTimeMsg / 60 - (24 * 60 * d) - (60 * h));
                s = Math.floor(EndTimeMsg - (24 * 60 * 60 * d) - (60 * 60 * h) - (60 * m));
                if(d<0){
                    d=0;
                    h=0;
                    m=0;
                    s=0;
                }
                $(""+obj._local+"").find("#d").text(d);
                $(""+obj._local+"").find("#h").text(h);
                $(""+obj._local+"").find("#m").text(m);
                $(""+obj._local+"").find("#s").text(s);
            },
            setStart:function(){
                self.setInterval(this.time, 1000);
            }
        }
        count.setStart();
    }

})(jQuery);

//07-旋转木马
window.onload = function () {
    //旋转灯笼
    var ulf = document.getElementById('nds-w');
    var ulf2 = document.getElementById('nds-u');
    var artishow = document.getElementById('nds-font');
    var lif = $('#nds-w li');
    var ashow = $('#nds-font article');
    var arr = [
        {"bottom":"-15px","left":"385px","z":"0","t":"scale(1.0)"},
        {"bottom":"145px","left":"385px","z":"2","t":"scale(0.8)"},
        {"bottom":"230px","left":"190px","z":"2","t":"scale(0.8)"},
        {"bottom":"145px","left":"0px","z":"2","t":"scale(0.8)"},
        {"bottom":"-140px","left":"0px","z":"0","t":"scale(0.8)"},
        {"bottom":"-225px","left":"190px","z":"0","t":"scale(0.8)"}
    ];
    var ftime = 3000;
    var stime = 1500;
    var a = 1;
    var aselected = {"bottom":"-15px","left":"385px","z":"0"};

    var ww = window.innerWidth;

    function lfloat(arr2) {
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                arr.unshift(arr[5]);
                arr.splice(6,7);
                setTimeout(fontshow, stime);
            }
            lif.eq(i).css({
                bottom:arr[i].bottom,
                left:arr[i].left,
                'z-index':arr[i].z,
                transform:arr[i].t
            });
        }
    }

    function fontshow(b) {
        if (b) {
            a = b;
        } else if (b === 0) {
            a = b;
        }
        ashow.eq(a).show().siblings().hide();
        a++;
        if (a === 6) {
            a = 0;
        }
    }

    if (ww >= 1200) {
        var autof = setInterval(lfloat, ftime);
        ulf.onmouseover = function () {
            clearInterval(autof);

        };
        artishow.onmouseover = function () {
            clearInterval(autof);
        };

        ulf.onmouseout = function () {
            autof = setInterval(lfloat, ftime);
        };
        artishow.onmouseout = function () {
            autof = setInterval(lfloat, ftime);
        };

        lif.on('click',function () {
            clearInterval(autof);
            var lindex = $(this).index();

            arr = [
                {"bottom":"-15px","left":"385px","z":"0","t":"scale(1.0)"},
                {"bottom":"145px","left":"385px","z":"2","t":"scale(0.8)"},
                {"bottom":"230px","left":"190px","z":"2","t":"scale(0.8)"},
                {"bottom":"145px","left":"0px","z":"2","t":"scale(0.8)"},
                {"bottom":"-140px","left":"0px","z":"0","t":"scale(0.8)"},
                {"bottom":"-225px","left":"190px","z":"0","t":"scale(0.8)"}
            ];

            for (var i = 0; i < 6; i++) {
                arr.push(arr[i]);
                if (i === 5) {
                    arr.splice(0,6 - lindex);
                    arr.splice(6,12);
                }
            }

            for (var a = 0; a < arr.length; a++) {

                lif.eq(a).css({
                    bottom:arr[a].bottom,
                    left:arr[a].left,
                    'z-index':arr[a].z,
                    transform:arr[a].t
                });

            }
            fontshow(lindex);
        });
    }


    //点击灯笼
    var pshow = $('#ndp-popup article');
    var pop = $('#nd-pop');
    var poff = $('#poff');
    if (ww < 1200) {
        lif.on('click',function () {
            var index = $(this).index();
            pop.show();
            pshow.eq(index).show().siblings().hide();
        });
    }

    poff.on('click',function () {
        pop.hide();

    });
};

//05-轮播
$(function() {
    //banner图
    TouchSlide({
        delayTime: 1500,
        interTime: 8000,
        slideCell: "#slideBoxIndex",
        titCell: ".hdIndex ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bdIndex ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true, //自动播放
    });

    $(".imgIndex li").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        $(".hdIndex li").eq($(this).index()).click();
    });

    // $.mCustomScrollbar.defaults.theme="light-2";
    $(".kwod").mCustomScrollbar({
        axis:"x",
        setLeft: "0",
        advanced:{autoExpandHorizontalScroll:true}
    });

});

function changed(){
  $(".pHiden").show();
  $(".list").hide();
}
var i = 3;
function test(){
  i++;
  var cont=i%3;
  $(".imgIndex li").eq(cont).addClass("on").siblings().removeClass("on");
}
setInterval("test()",8000);

//06-多图片轮播
$(window).load(function () {
    if ($(window).width() > 768) {
    $(".prorecommend").slide({
            titCell: ".hd1 ul",
            mainCell: ".bd1 ul",
            autoPage: false,
            effect: "leftLoop",
            autoPlay: false,
            vis: 4,
            trigger: "click"
        });
     } else {
     $.mCustomScrollbar.defaults.theme = "light-2";
     $("#kwod").mCustomScrollbar({
     axis: "x",
     setLeft: "0",
     advanced: {autoExpandHorizontalScroll: true}
     });
     }
})


//09-图片压缩
function preview(file, width, format) {
    var prevDiv = document.querySelector('.pic');
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function(evt){
            var img = new Image();
            img.src = evt.target.result;

            // 判断宽和高的值
            var iW = img.width;
            var iH = img.height;
            var iPercent = width/iW;
            if (iPercent >= 1) {
                iPercent = 1;
            }
            var cW = iW*iPercent;
            var cH = iH*iPercent;

            var canvas = document.createElement('canvas');
            canvas.width = cW;
            canvas.height = cH;

            canvas.getContext('2d').drawImage(img, 0, 0, iW, iH, 0, 0, cW, cH);

            img.src = canvas.toDataURL('image/format', 1.0);

            prevDiv.innerHTML = '<img src="' + img.src + '" />';
        };
        reader.readAsDataURL(file.files[0]);
    } else {
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}