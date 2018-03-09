 $(function(){
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
           if(i>=qnum-1){
               i=qnum-1;
           }else{
               i++;
           }
           console.log(i);
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
           if(i<=0){
               i=0;
           }else{
               i--;
           }
           console.log(i);
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
       $(".selit>a").click(function () {
           if ($(this).closest(".selit").hasClass("selected")) {
               $(this).closest(".selit").removeClass("selected");
           } else {
               $(this).closest(".selit").addClass("selected").siblings(".selit").removeClass("selected");
           }
       });

       $(".sub").click(function(){
          $(".submit").show();
       })
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
