/**
 * Created by mxd on 2016/10/9.
 */
$(function () {
    $('.calendar').calendar({
        isRange: false
    });
    var cw = $(".calendar tr td").outerWidth();
    $(".calendar .tword").css("width", 2 * cw + "px");
    $(".calendar tr td").live("hover", function () {
        $(".calendar .tword").css("top", ($(this).position().top)+30 + "px").show();
        if ($(this).index() < 4) {
            $(".calendar .tword").css("left", ($(this).position().left + cw) + "px");
            $(".calendar .tword").addClass("tleft");
        }
        else {
            $(".calendar .tword").css("left", ($(this).position().left - 2 * cw) + "px");
            $(".calendar .tword").removeClass("tleft");
        }
    })
    // $(".calendar td").toggle(function (event) {
    //     $(".calendar .tword").show();},function(){
    //     $(".calendar .tword").hide();
    // })
    // ;
    $(".edweek li").click(function(){
        if($(this).hasClass("click")){
            $(this).removeClass("click");
        }else{
            $(this).addClass("click");
        }
    })
    $(".edbei li").click(function(){
        $(this).addClass("click").siblings().removeClass("click");
    })
    $(".studyprocess").click(function(e){
        $(".editstudy-input").show();
        $(".learningwrap").show();
        e.preventDefault();
    })
    $(".editweekstart").click(function(e){
        $(".editweek").show();
        $(".learningwrap").show();
        e.preventDefault();
    })
    // $(".plan").click(function(e){
    //     $(".editstudy-input").show();
    //     $(".learningwrap").show();
    //     $(".editstudy-process").hide();
    //     e.preventDefault();
    // })
    $(".study-guo").click(function(){
        $(this).addClass("sguo");
        $(".learningwrap,.studytan").show();
    })
    $(".studytan .guan").click(function(){
        $(".learningwrap,.studytan").hide();
    })

    //ѧϰ�ƻ��ܷ���
    $(".edw li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    //�رնԻ���
    $(".knowledgetan .guan,.knowledgetan .jsClose").click(function(){
        $(".learningwrap").hide();
        $(this).closest(".knowledgetan").hide();
    })

    //2018.1.11 snowsmell add
    $(".nopermission").click(function(e){
        $(".learningwrap").show();
        $(".permission").show();
        e.preventDefault();
    })

    //20180123 cc
    $(".dayOff > em, .need").click(function () {
        $(this).toggleClass("on");
    })
})