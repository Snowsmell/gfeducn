$(function() {
    var imgIndex = 0;
    var btnUl = document.getElementById('btn');
    var btnLis = btnUl.getElementsByTagName('li');
    var Wd = 130 * btnLis.length;
    // alert(Wd)
    $("#btn ").css("width", Wd);

    //从当前img，切换到下一个img
    function moveNext() {
        imgIndex++;

        //设置上btn的焦点
        var focusLi = document.getElementsByClassName('selected')[0];
        focusLi.className = "";
        var btnIndex = imgIndex;

        for (var j = 0; j < btnLis.length; j++) {
            btnLis[j].className = "";
        }
        btnLis[btnIndex].className = "selected";
        // btnLis[btnIndex].click()
        $(".lineContain >div").hide();
      	$(".lineContain >div").eq(btnIndex).show()  
    }

    function startNext() {
        if (imgIndex === btnLis.length - 1) {
            imgIndex = -1;
        }
        moveNext()
    }

    //添加button的点击事件
    for (var i = 0; i < btnLis.length; i++) {
        btnLis[i].index = i;
        btnLis[i].onclick = function() {
            if (this.index === 0) {

                imgIndex = -1;
            } else {
                imgIndex = this.index - 1;
            }
            moveNext();
            console.log('我再classDetails里面')
        }
    }

    var preBtn = document.getElementById('pre');
    preBtn.onclick = function() {
        // if(Wd-mgLeft >=wk){
        //      mgLeft = mgLeft +130;
        // }
        var wk = $(".kw").width();

        if (mgLeft <= -130 && imgIndex != 0) {
            mgLeft = mgLeft + 130;
        } else if (imgIndex === 0) {
            mgLeft = -(Wd - wk);
        } else {
            mgLeft = 0;
        }
        if (imgIndex === 0) {
            imgIndex = btnLis.length - 2;
        } else {
            imgIndex = imgIndex - 2;
        }

        $("#btn ").css("margin-left", mgLeft)
        moveNext();
    }
    var mgLeft = 0;
    var nextBtn = document.getElementById('next');
    nextBtn.onclick = function() {



        var wk = $(".kw").width()

        if (Wd - mgLeft >= wk) {
            mgLeft = mgLeft + 130;
        }
        if (imgIndex === btnLis.length - 1) {
            imgIndex = -1;
            mgLeft = 0;

        }
        $("#btn ").css("margin-left", -mgLeft)
        moveNext();
    }


    //优惠券选择
    $(".hasimg div > div").hover(function () {
        var ww = $(this).parent().width();
        var dd = $(this).position().left;
        // console.log(ww - dd);
        if( ww - dd > 200 ){
            $(this).addClass("l").siblings("div").removeClass();
        }else{
            $(this).addClass("r").siblings("div").removeClass();
        } 
    })
    $(".details_word .coupon .yt").click(function () {
      $(this).parent().toggleClass("on");
    })
})

// window.onload = function () {


// };
