$(function(){
    $(document, window).scroll(function(){
        var scrollTop=$(document, window).scrollTop();
        if(scrollTop>=250){
            $(".myclass-sel").css({position:"fixed",top:50,width:950,padding:"0 25px 25px"});
        }else{
            $(".myclass-sel").css({"position":"inherit",padding:"15px 0"});
        }
    });
    function goto1(topID,cName){
        $(topID).click(function(){
            $("html,body").animate({scrollTop:$(cName).offset().top-110},500);
        });
        $(".myclass-sel a").click(function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
    }
    goto1("#cfa-jl",".contant1");
    goto1("#frm-jl",".contant2");
    goto1("#xsjl",".contant3");
    goto1("#kcgw",".contant4");
    goto1("#seo-zg",".contant5");
    goto1("#net-gcs",".contant6");
    goto1("#znyjy",".contant7");
    goto1("#qyjl",".contant8");


})