var maxstrlen = 1000;

function Q(s) {
    return document.getElementById(s);
}

function checkWord(c) {
    len = maxstrlen;
    var str = c.value;
    myLen = getStrleng(str);
    var wck = Q("wordCheck");

    if (myLen > len * 2) {
        c.value = str.substring(0, i + 1);
    } else {
        wck.innerHTML = (Math.floor(myLen / 2));
    }
}

function getStrleng(str) {
    myLen = 0;
    i = 0;
    for (;
        (i < str.length) && (myLen <= maxstrlen * 2); i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
            myLen++;
        else
            myLen += 2;
    }
    return myLen;
}
$(function() {
    $(".addNote").click(function() {
        $(".model").show();
    })
    $(".showUl").click(function() {

    })
    $(".tabInput").click(function() {
        $(this).parent().find(".img").click();
        $(this).parent().parent().children(".img").click();
    })
    $(".listChart .confirm").click(function() {
        var mainstr = $(this).parent().siblings(".signName").val();
        $(this).parent().siblings("ul").append("<li><span><em>幸福痕迹</em>回复<em>懒懒小猫</em>：</span><p class='cp'>" + mainstr + "</p><p><em>2016-03-23 09:37</em><a href='javascript:;' class='huik'>回复</a></p></li>");


    })
    $(".comReply").click(function() {
        // $(this).siblings(".listChart").show();
        // $(this).siblings(".inputImg").hide();
        $(this).siblings(".listChart").slideToggle();
        $(this).siblings(".inputImg").slideToggle();
    })
    $(".comAsk").click(function() {
        $(this).siblings(".listChart").hide();
        $(this).siblings(".inputImg").show();
    })
    $(".leftR").click(function() {
        var mainstr = $(this).siblings("input").val();
        $(".chart ul").append("<li class='chartLeft'><dl><dt><img src='../../images/person/tx_02.png'></dt><dd><div class='chartContain'><p>" + mainstr + "</p></div><em>2017-5-1 16:23</em></dd></dl></li>");

    })
    $(".rightR").click(function() {
            var mainstr = $(this).siblings("input").val();
            $(".chart ul").append("<li class='chartRight'><dl><dt><img src='../../images/person/tx_01.png'></dt><dd><div class='chartContain'><p>" + mainstr + "</p></div><em>2017-5-1 16:23</em></dd></dl></li>");

        })
        //增加笔记图片弹窗框
    $(".img li img").click(function() {
            $(".tanpoto").show();
            var co = $(this).attr("src");
            $(".tanpoto img").attr("src", co);


        })
        //增加笔记图片弹窗框
    $(".chartContain img").click(function() {
        $(".tanpoto").show();
        var co = $(this).attr("src");
        $(".tanpoto img").attr("src", co);


    })
    $(".imgDt span").click(function() {
        //  $(this).siblings("img").remove();
        //  $(this).hide();
        //  $(this).parents(".divInput").append("<i class='tabInput'>&#xe94f;</i>")
        $(this).parents(".imgDt").remove()
    })

    // $(".divInput img").click(function() {
    //     $(".tanpoto").show();
    //     var co = $(this).attr("src");
    //     $(".tanpoto img").attr("src", co);
    //
    //
    // })
    $(".tanpoto").click(function() {
        $(this).hide();
    })

})

function closeModel() {
    $(".model").hide();
    $(".modelImg").hide();
}

function preview(file) {
    var prevDiv = document.getElementById('boxview');
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function(evt) {
            prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
        };
        reader.readAsDataURL(file.files[0]);
    } else {
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}