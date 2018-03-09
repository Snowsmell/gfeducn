 $(function(){

  /*----------- 倒计时 start ----------*/
  var hour = 00, minute =00, second = 00;
  var totalTime = 1800;
  var startOrEnd = true;
  studyTime();
  function protime(n) {
      return n = n < 10 ? '0' + n : n;
  }
  function studyTime() {
    // clearInterval(tim);
      hour=parseInt(totalTime/60/60);
      minute=parseInt(totalTime/60%60);
      second=parseInt(totalTime%60);

      var hour = protime(hour);
      var minute = protime(minute);
      var second = protime(second);
      $('#t_s').html(second);
      $('#t_h').html(hour);
      $('#t_m').html(minute);
      if(startOrEnd){
          totalTime = totalTime - 1;
     }
  }

  //终止学习计时器
  var tim = setInterval(studyTime, 1000);
  $(".stopTime").click(function(){
    startOrEnd=false;
  })
  $(".go").click(function(){
     startOrEnd=true;
  });
  /*----------- 倒计时 end ----------*/


   $(".tabItem li").click(function() {
       $(this).addClass("selected").siblings().removeClass("selected");
       $(this).parents().siblings(".box").children("div").eq($(this).index()).show().siblings().hide();
   })
  
   $(".filebutton").click(function(){
       $(".sucess").show();
       setTimeout(" $('.sucess').hide()",1500);
       $(this).siblings(".modelImg").show();
   })
   //换题目
     var qnum = $(".ques .item").length;
     var i = 0;
     $(".next").click(function () {
        i = $(this).parents(".item").index();
        console.log(i);
         if(i>=qnum-1){
             i=qnum-1;
         }else{
             i++;
         }
         // console.log(i);
       $(".ques .item").eq(i).show().siblings().hide();
       $(".drug-text").each(function() {
           var thisText = $(this);
           if (thisText.height()>75) {
            //  alert(thisText.height())
               thisText.siblings().find(".dug-toggle").show();
               thisText.attr("style","max-height:72px");
           }
       })
     });
     $(".prev").click(function(){
        i = $(this).parents(".item").index();
         if(i<=0){
             i=0;
         }else{
             i--;
         }
         // console.log(i);
         $(".ques .item").eq(i).show().siblings().hide();
         $(".drug-text").each(function() {
             var thisText = $(this);
             if (thisText.height()>75) {
              //  alert(thisText.height())
                 thisText.siblings().find(".dug-toggle").show();
                 thisText.attr("style","max-height:72px");
             }
         })
     });


    /*--------选择的答案 数组---------*/
    var allCheckedAnswers = [];

    /*----------遍历题目 start--------*/
    var checkedAnswers = function(){
      allCheckedAnswers = [];
      // 遍历每一个问题，并且每一个问题都创建一个数组来保存该问题的答案
      $('.allItem .item').each(function(){
        var itemAnswer = [];
        $(this).find('.sel dt a').each(function(){
          itemAnswer.push($(this).text());
        });

        // 将每一个问题的数组保存进总数组（即选择的答案数组）
        allCheckedAnswers.push(itemAnswer);
      }); 
      return allCheckedAnswers;
    }
    /*----------遍历问题 end--------*/


    /*----------左上角答题卡 start--------*/
     $(".selit > a").click(function () {
         if ($(this).closest(".selit").hasClass("selected")) {
             $(this).closest(".selit").removeClass("selected");
         } else {
             $(this).closest(".selit").addClass("selected").siblings(".selit").removeClass("selected");
             // 执行遍历题目函数
             checkedAnswers();
             for(var i=0; i<allCheckedAnswers.length; i++){
                 // 答题卡题目序号
                 var cart_num = parseInt(i) + 1;
                 if(cart_num < 10) {
                  cart_num = '0' + cart_num;
                 }
                if(allCheckedAnswers[i].length > 0) {
                  $('.answer_card .problem li').eq(i).addClass('set');
                } else {
                  $('.answer_card .problem li').eq(i).removeClass('set');
                }
             }
         }
     });

     $('.answer_card .problem li').click(function(){
        $(".ques .item").eq($(this).index()).show().siblings().hide();
     });
    /*----------左上角答题卡 end--------*/

    // 分开保存每一道题的答案方法
    var everyItemAnswer = function(itemId){
      itemIdNum = itemId.split('-')[1];
      var thisItemAnswer = '';
      $(itemId).find('.sel dt a').each(function(){
        thisItemAnswer += $(this).text();
      });
      return SetLocalItem('item_' + itemIdNum, thisItemAnswer);
    }

    // 提交
   $(".sub").click(function(){
      $(".submit").show();
      // 执行遍历题目函数
      checkedAnswers();
      // 计算未完成的题目数
      var numNull = 0;
      for(var i=0; i<allCheckedAnswers.length; i++){
        if(allCheckedAnswers[i].length === 0) {
          numNull += 1;
        }
      }
      if(numNull===0){
        $(".wen").text("答题完毕！确认提交？");
      }else if(numNull > 0){
        $(".wen").html("还有"+"<span>" +numNull +"</span>"+"题没有完成，确定提交吗？");
      }
   });


    /*--------------- 确定提交 submit start (重点！！！) -----------------*/
    $('#btnSubmit').click(function(){
      // 执行遍历题目函数
      checkedAnswers();
      // 计算正确率
      var numRight = 0;
      var checkedAnswerRight = [];
      // 答题卡
      var answerSheetHtml = '';
      var rs = [];
      var rs_e = [];
      for(var r=0; r<rightAnswers.length; r++){
        sheetNum = parseInt(r) + 1;
        if(sheetNum < 10) {
          sheetNum = '0' + sheetNum;
        }

        if(rightAnswers[r].toString() === allCheckedAnswers[r].toString()){
          numRight += 1;
          answerSheetHtml += '<a class="grren">' + sheetNum + '</a>';
        } else {
          answerSheetHtml += '<a class="red">' + sheetNum + '</a>';
        }
      };


      // 存储总题目数
      SetLocalItem('qnum', qnum);

      // 存储正确的数量
      SetLocalItem('numRight', numRight);

      // 将正确的数量转换成百分比，并存储
      var numRightPer = ((numRight / rightAnswers.length) * 100) + '%';
      SetLocalItem('numRightPer', numRightPer);

      // 存储答题卡内容
      SetLocalItem('answerSheetHtml', answerSheetHtml);

      // 分开保存每一道题的答案实例
      everyItemAnswer('#item-1');
      everyItemAnswer('#item-2');
      everyItemAnswer('#item-3');
      everyItemAnswer('#item-4');
      everyItemAnswer('#item-5');
      everyItemAnswer('#item-6');
      everyItemAnswer('#item-7');
      everyItemAnswer('#item-8');
      everyItemAnswer('#item-9');
      everyItemAnswer('#item-10');

      // 保存时间

      // var hour=parseInt(useTime/60/60);
      var minute=parseInt(totalTime/60%60);
      var second=parseInt(totalTime%60);
      // hour = protime(hour);
      minute = protime(minute);
      second = protime(second);
      SetLocalItem('minute', minute);
      SetLocalItem('second', second);


      var useTime = 1800 - totalTime;
      // var hour=parseInt(useTime/60/60);
      var useTime_M=parseInt(useTime/60%60);
      var useTime_S=parseInt(useTime%60);
      // hour = protime(hour);
      useTime_M = protime(useTime_M);
      useTime_S = protime(useTime_S);
      useTime = useTime_M + '\'' + useTime_S;
      SetLocalItem('useTime', useTime);

      // 交卷时间
      var submitTime = new Date();
      submitTime = formatDateTime(submitTime);
      SetLocalItem('submitTime', submitTime);

      // 跳转页面链接
      window.location.href='report.html';

    });
    /*--------------- 确定提交 submit end -----------------*/

     $(".nextDone").click(function(){
        $(".done").show();
     })
     $(".basics_item .selectitem dl").click(function () {
         $(this).addClass("sel").siblings().removeClass("sel");
     });
     $(".multiple_item .selectitem dl").click(function () {
         if ($(this).hasClass("sel")) {
             $(this).removeClass("sel");
         } else {
             $(this).addClass("sel");
         }
     });
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
 })


 function closeSubmit(){
    $(".submit").hide();
 }
 function closedone(){
   $(".done").hide()
 }

 //答题计时
 function AnswerTime(obj) {
     this.obj = obj;
     this.pause = $("#tiTime");
     this.oContinue = $(".tg_continue");
     this.h = 0;
     this.m = 0;
     this.s = 0;
     this.timer = null;
     this.iBtn = true;
     this.itemTime = '';
 }
 AnswerTime.prototype.init = function () {
     var _this = this;

     this.obj.click(function () {
         console.log("click");
         if (_this.iBtn) {
             _this.begin();
         }
         _this.iBtn = false;
     });
     this.pause.click(function () {
         console.log("pause");
         _this.pauseTime();
     });
     this.oContinue.click(function () {
         console.log("continue");
         _this._continue();
     });
 }
 AnswerTime.prototype.begin = function () {
     var _this = this;
     this.timer = setInterval(function () {
         if (_this.s == 59) {
             _this.s = 0;
             _this.m += 1;
             if (_this.m == 59) {
                 _this.m = 0
                 _this.h += 1;
             }
         } else {
             _this.s++;
         }
         $(".AnswerTime").html(_this.toTwo(_this.h) + ':' + _this.toTwo(_this.m) + ':' + _this.toTwo(_this.s));
     }, 1000)
 }
 AnswerTime.prototype.toTwo = function (n) {
     return n = n < 10 ? '0' + n : n;
 }
 AnswerTime.prototype.pauseTime = function () {
     clearInterval(this.timer);
     this.itemTime = $(".AnswerTime").text();
 }
 AnswerTime.prototype._continue = function () {
     this.begin();
     $(".AnswerTime").text(this.itemTime);
 }
 AnswerTime.prototype.stopTime = function () {
     clearInterval(this.timer);
     _this.iBtn = true;
 }

// 格式化时间
function formatDateTime(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};


/*-------------- 正确的答案 -------------*/
var rightAnswers = [
  ["A", "C", "D"],
  ["A", "D"],
  ["A", "C"],
  ["A", "C", "D"],
  ["B", "C", "D"],
  ["B", "C", "D"],
  ["B", "C", "D"],
  ["A", "D"],
  ["A", "B", "C", "D"],
  ["A", "C"]
];