(function () {
	/* body... */
function times(e,a,c) {
	var n,m;
	var clo;
	n = a || 0;
	m = c || "add";
	function tim () {
		
		function aaa () {

			m==="add" ? n++ : n--;
			hms(n);
			if(n>0){
				tim(n);
			}
		}
		clo = setTimeout(aaa,1000);
	}
	tim(n);

	function hms (n) {
		var h,m,s,txt;
		
		s = n%60;
		m = parseInt(n%(60*60)/60);
		h = parseInt(n/(60*60));

		s = s < 10 ?  "0" + s : s;
		m = m < 10 ?  "0" + m : m;
		h = h < 10 ?  "0" + h : h;

		
		if(s==="00" && m==="00" && h==="00"){
			e.innerHTML = '<img src="../../images/live/live.gif">正在上课';
			
			// var ee = e.nextSibling;
			// if(ee.nodeName == "#text") {
			//	ee = ee.nextSibling;
			//	console.log(ee);
			//}
			// if(ee.innerHTML === "立即预约") ee.innerHTML = "立即进入";

		}else{
			e.innerHTML = "距离上课<span>"+h+"</span>时<span>"+m+"</span>分<span>"+s+"</span>秒";//txt;
		}
		
	}

}

var lis = document.querySelectorAll(".countdown");
;[].forEach.call(lis, function(e, i) {
	// var a = parseInt(e.innerHTML);
	var a = parseInt((new Date(e.getAttribute("data-start")) - new Date())/1000);
	console.log(e.getAttribute("data-start"));
	if(a>0){
		times(e,a,"sub");	
	}else{
		e.innerHTML = '<img src="../../images/live/live.gif">正在上课';
	}
	
});

})();

