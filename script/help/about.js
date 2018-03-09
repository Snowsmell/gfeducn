// window.onload = function() {
//    var ulf = document.getElementById('nds-w');
//     var lif = $('#nds-w li');
//     var ftime = 3000;
//     var stime = 1500;
//     var a = 1;
//     function lfloat() {
//       for (var i = 0; i < lif.length; i++) {
//           if (i > 6) {
//             i=0;
//
//           }
//             lif.eq(i).addClass("select").siblings().removeClass("select")
//       }
//   }
//     var autof = setInterval(lfloat, ftime);
//     lif.onmouseover = function () {
//           clearInterval(autof);
//       };
//     lif.onmouseout = function () {
//         autof = setInterval(lfloat, ftime);
//     };
//     lif.on('click',function () {
//       clearInterval(autof);
//       var lindex = $(this).index();
//       for (var i = 0; i < 6; i++) {
//           if (i === 6) {
//             i=0;
//           }
//       }
//
//       for (var a = 0; a < 6; a++) {
//         lif.eq(a).addClass("select").siblings().removeClass("select")
//       }
//       // fontshow(lindex);
//   });
//
// }

window.onload = function () {

	//1. 将第一张图片，复制一份，追加到UL的底部，以实现循环的滚动
	var imgList = document.getElementById('nds-u');
  var uf = document.getElementById('nds-w');
	var lis = imgList.getElementsByTagName('li');
	var imgIndex = 0;
	lis[imgIndex].className = "select";

	//从当前img，切换到下一个img
	function moveNext () {
		imgIndex++;

		//设置上btn的焦点
		var focusLi = document.getElementsByClassName('select')[0];
		focusLi.className = "";
		var btnIndex = imgIndex;
    //
		if (btnIndex === lis.length-1) {
			btnIndex = 5;
		}
	 imgList.childNodes.className = "";
	 for (var j=0; j<lis.length; j++) {
		 lis[j].className="";
 	}
			lis[btnIndex].className = "select";
	}

  	function startNext () {
    		if (imgIndex === lis.length-1) {
    			imgIndex = -1;
    		}
    		moveNext()
  	}
    var autof = setInterval(startNext, 1000);
    $(".circleLi li").hover(function(){
          i=$(this).index();
          imgIndex=i;
    		$(".circleLi li").removeClass("select");
    		$(".circleLi li:eq("+i+")").addClass("select");
        clearInterval(autof);
    },function(){
      autof = setInterval(startNext, 1000);
    })

}
