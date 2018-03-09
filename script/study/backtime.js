$(function () {
  var hour = 00, minute =00, second = 00;
  var t = 3500;
  var a=true;
  studyTime()
  function protime(n) {
      return n = n < 10 ? '0' + n : n;
  }
  function studyTime()

  {
    // clearInterval(tim);
      hour=parseInt(t/60/60);
      minute=parseInt(t/60%60);
      second=parseInt(t%60);

      var hour = protime(hour);
      var minute = protime(minute);
      var second = protime(second);
      document.getElementById('t_s').innerHTML=second;
      document.getElementById('t_h').innerHTML=hour;
      document.getElementById('t_m').innerHTML=minute;
      if(a){
          t = t + 1;

     }
  }
  //终止学习计时器

  var tim=setInterval(studyTime, 1000);
  $(".stopTime").click(function(){
    a=false;
  })
  $(".go").click(function(){
     a=true;

  })


})
