$(function(){
	$(".people").click(function (e) {
        $(this).toggleClass("selected");
        e.stopPropagation();
    })
    $(document).click(function () {
    	$(".people").removeClass("selected");
    })
})