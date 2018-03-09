$(function() {


    // 一级切换
    var ulCur = $('.ulCur li');
    ulCur.on('click', function() {
        var index = $(this).index();
        $(this).addClass('sp_selected').siblings().removeClass('sp_selected');
        $(this).parents('.ulCur').siblings('.sp_ulSel').eq(index).show().siblings('.sp_ulSel').hide();
    });
    // 二级切换
    var selBtn = $('.topbtn button');
    selBtn.on('click', function() {
        var index = $(this).index();
        $(this).addClass('selBtn').siblings().removeClass('selBtn');
        $(this).parents('.sp_sel_btn').siblings(".sp_cur_view").find('.sp_cur').eq(index).show().siblings('.sp_cur').hide();

        // 复选框
        var check = $(".all-radio");
        var all_check = $(".selBtn1");
        check.on("click", function() {
            $(this).children("i").toggleClass("icon-xiaogou");
        })
        all_check.on("click", function() {
            $(this).addClass("selBtn1");
            // $(".noticelList").find("li label i").toggleClass("icon-xiaogou");
            if ($("this").hasClass("selBtn")) {
                // $(".check_radio").removeClass("selected");
                $(".all-radio").find("i").removeClass("icon-xiaogou");
            } else {
                $(".all-radio").find("i").addClass("icon-xiaogou");

            }
        })

    });
    // 私信

    var dlCur = $(".letter_l dl");
    dlCur.on("click", function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parents().siblings(".letter_r").children(".chart").eq($(this).index()).show().siblings(".chart").hide();
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


    // 聊天滚动条置底
    /*function add(){
        $(".chartList").scrollTop =$(".chartList").scrollHeight;
    }*/
})
 function add()
    {
        var div = document.getElementById('scrolldIV');
        div.scrollTop = div.scrollHeight;
    }

// 是否全选
// $(".all-radio").click(function() {
//     if ($(this).hasClass("selected")) {
//         $(".all-radio").removeClass("selected");
//         $(".check_radio").removeClass("selected");
//     } else {
//         $(".check_radio").addClass("selected");
//         $(".all-radio").addClass("selected");
//     }

// })