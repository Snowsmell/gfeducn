function GetRTime(){
    var EndTime= new Date('2017/09/27 19:30:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
      if(d<10) { 
		d = "0" + d; 
   	  } 
   	  if(h<10) { 
		h = "0" + h; 
   	  } 
   	  if(m<10) { 
		m = "0" + m; 
   	  } 
   	  if(s<10) { 
		s = "0" + s; 
   	  } 
      $('.time2').css('display','none')
    } else{
    	$('.time').css('display','none')
    	$('.time2').css('display','block')
    }
    document.getElementById("t_d").innerHTML = d + "天";
    document.getElementById("t_h").innerHTML = h + "时";
    document.getElementById("t_m").innerHTML = m + "分";
    document.getElementById("t_s").innerHTML = s + "秒";
  }
  setInterval(GetRTime,0);
function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
   if(i<10) 
   { 
i = "0" + i; 
   } 
   return i; 
} 