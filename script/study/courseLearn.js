$(function(){

   $(".addNote").click(function() {
       $(".model").show();
   })
   $(".add").click(function() {
       $(".modelNote").show();
   })

   //展开收起
    $(".dug-toggle").toggle(function(){
        $(this).parents().siblings(".drug-text").attr("style","max-height:100%");
        $(this).addClass("hide");
    }, function () {
        $(this).parents().siblings(".drug-text").attr("style","max-height:72px");
        $(this).removeClass("hide");
    });
    $(".drug-text").each(function() {
        var thisText = $(this);
        if (thisText.height() > 75) {
          console.log(thisText.height());
            thisText.siblings(".toggleOpen").show();
            thisText.attr("style","max-height:72px");
        }
    })


})
function closeModel(){
//  alert(333)
 $(".model").hide();

 $(".modelImg").hide();
}
function closeNote(){
 $(".modelNote").hide();

 $(".modelImg").hide();
}
