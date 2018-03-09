$(function() {
    $(".renwu").hide();
    $(".lakai").click(function() {
        document.getElementById("mu").click();
        $(".renwu").show();
        sanrest();
    })

    // $(".zj li").hover(function(){
    //   $(this).addClass("select")
    //   $(this).siblings().removeClass("select")
    // },function(){
    //   $(this).removeClass("select")
    // })
    $(".itmli .close").click(function() {
        $(this).parents().parents(".itmli").remove();
    })
    $(".J_secTabs li").click(function() {
        $(".kw>div").eq($(this).index()).show().siblings().hide();
    })
    $(".J_Tabs li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".theme >div").eq($(this).index()).show().siblings().hide();

        var h = $(this).offset().top;
        $("body").animate({scrollTop: h});
    })
    $(".tabli span").click(function(){
         $(this).toggle();
         $(this).siblings().toggle();
   })
    $(".themecon li").click(function() {

        $(this).addClass("selected").siblings().removeClass("selected");
        $(this).parent().parent().siblings(".themeitem").children("div").eq($(this).index()).show().siblings().hide();

        $(".drug-text").each(function() {
            var thisText = $(this);
            if (thisText.height()>75) {
             //  alert(thisText.height())
                thisText.siblings().find(".dug-toggle").show();
                thisText.attr("style","max-height:72px");
            }
        })
    })
    $(".edweek li").click(function() {
        if ($(this).hasClass("click")) {
            $(this).removeClass("click");
        } else {
            $(this).addClass("click");
        }
    })
    $(".edbei li").click(function() {
        $(this).addClass("click").siblings().removeClass("click");
    })
    //修改学习进度
    $(".studyprocess").click(function(e) {
        $(".editstudy-process").show();
        $(".editwrap").show();
        e.preventDefault();
    })
    //修改周分配情况
    $(".editweekstart").click(function(e) {
        $(".editweek").show();
        $(".editwrap").show();
        e.preventDefault();
    })
    $(".editweek .cha").click(function(e) {
        $(this).closest(".editweek").hide();
        $(".editwrap").hide();
        e.preventDefault();
    })
    $(".editstudy-process .cha1").click(function(e) {
        $(this).closest(".editstudy-process").hide();
        $(".editwrap").hide();
        e.preventDefault();
    })
    //知识点学习三步走
    //学习过了
    $(".study-guo").click(function() {
        $(this).addClass("sguo");
        $(".learningwrap").show();
        $(".studytan").slideDown();
    })
    //弹出框关闭
    $(".studytan .guan").click(function() {
        $(".learningwrap,.studytan").hide();
        $(".tankuang1").remove();
    })
    //弹出框关闭
    $(".knowledgetan .guan").click(function() {
        $(".learningwrap,.knowledgetan").hide();
    })
    // 点击加赞
    $(".comments").one("click", function() {
        var cont = parseInt($(this).find("em").html());
        cont += 1;
        $(this).find("em").html(cont);
        $(this).find("i").css("color", "#dd5555")
        $(this).find("em").css("color", "#dd5555")

    })
    $(".tabPerson span").click(function(){
          $(this).toggle();
          $(this).siblings().toggle();
          //此处需要加入答题卡的逻辑
          //获取题目和答题卡的dom集合，如果没有冲突的话可以把items和ansItems和i标签的定义放到全局，
          //获取一次就够了
          var items = document.querySelectorAll('.item');
          var ansItems = document.querySelectorAll('.answer_card>.problem>li')
    	  var i = document.createElement('i');
    	  i.innerHTML='&#xe990;'
          var index = null;
          //获取当前题目序号
          Array.prototype.forEach.call(items,function(v,i){
          	if(getComputedStyle(v,false)['display']=='block'){
          		index = i
          	}
          })
          //判断，同步收藏或者取消
          var currentI =ansItems[index].querySelector('i')
          if(!currentI){
          	ansItems[index].appendChild(i)
          }else{
          	ansItems[index].removeChild(currentI)
          }      
    })
    function video() {
        var h = $(window).height();
        $(".video").height(h-76);
        $(".knowtest").height(h-137);
        console.log($(".knownav").hasClass("wknownav"));
        if ($(".knownav").hasClass("wknownav")) {
            $(".knowledge-learning").css("width", $(window).outerWidth() - 350);
        } else {
            $(".knowledge-learning").css("width", $(window).outerWidth());
        }
    }
    video();
    $(window).resize(function() {
        video();
        sanrest();
    })
    // $(".knownav .positon li").click(function() {
    //     $(this).addClass("selected").siblings().removeClass("selected");
    //     $(".bjcon").show();
    //     $(".submitcon").hide();
    //     $(this).closest(".knownav").addClass("wknownav");
    //     video();

    // })
    $(".back").click(function() {
        $(".knownav").removeClass("wknownav");
        sanrest();
        $(".knownav .J_secTabs .selected").removeClass("selected");
        video();
    })
    $(".bjnote ul li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(this).closest(".bjnote").siblings(".bjcon").find("section").eq($(this).index()).show().siblings().hide();
    })
    $(".themeitem li h2").click(function() {
        $(this).find("i").addClass("icon-up2").removeClass("icon-down2");
        $(this).parents("li").find(".cd-container").toggle();
        $(this).parents("li").siblings().find(".cd-container").hide();
        $(this).parents("li").siblings().children("h2").find("i").addClass("icon-down2").removeClass("icon-up2");
        if($(this).parents("li").find(".cd-container").is(':hidden')){
             $(this).find("i").addClass("icon-down2").removeClass("icon-up2");
        }else{
            $(this).find("i").addClass("icon-up2").removeClass("icon-down2");
        }
    })
    $(".provide").toggle(function() {
        $(this).find("b").text("私有");
        $(this).find(".publickai").addClass("pubdian");
    }, function() {
        $(this).find("b").text("公开");
        $(this).find(".publickai").removeClass("pubdian");
    })
    $(".submitcon .sub button").click(function() {
        $(this).closest(".submitcon").hide();
        $(this).closest(".submitcon").siblings(".bjcon").show();
    })
    $(".check").click(function() {
        $(this).closest(".bjnote").siblings(".submitcon").show();
        $(this).closest(".bjnote").siblings(".bjcon").hide();
    })
    //上传图片
    $(".upload").click(function() {
        $(".stu2").show();
        $("body").append("<div class='tankuang1'></div>");
    })
    $(".upload2").click(function() {
        $(".stuim").show();
        $("body").append("<div class='tankuang1'></div>");
    })
    $(".imgul a").click(function() {
        $(this).closest("li").remove();
    })
    //问卷调查
    $(".questionnaire dl dd li ").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    //调查问卷结束
    $(".p-dl button").click(function() {
        $(".makeplan").show();
        $(".learningwrap").show();
        $(".questionnaire").hide();
    })
    //个人定时效果
    $(".makeplan p button:first-of-type").click(function() {
        $(".makeplan,.learningwrap").hide();
    })
    $(".makeplan p button:last-of-type").click(function() {
        $(".makeplan").show();
        $(".personal-plan").show();
    })
    //三步走页面布局
    function sanrest() {
        var kth = $(".knowtitle").outerHeight();
        $(".knowplay").css({
            "height": $(window).height() - kth - 45 - 76
        });
        $(".kw").css({
            "height": $(window).height() - kth - 76
        });
        $(".tg_topic").css({
            "height": $(".knowplay").height() - 60
        });
        $(".mulucon").css({
            "height": $(window).height() - kth - 76
        });
        $(".bjcon").css({
            "height": $(window).height() - 135
        });
        $("#topt").css({
            "height": $(".knowplay").height()
        });
    }

    //三步骤侧边栏点击弹出

    sanrest();
    $(".indexrest").click(function() {
        $(".no-finsh").show();
        $(".learningwrap").show();
    })

    /* function protime(n) {
         return n = n < 10 ? '0' + n : n;
     }
     var todydate = new Date();
     todydate.setHours(todydate.getHours() + 2);*/

    //笔记问答下拉框宽度设计
    seldiv();

    function seldiv() {
        $(".selectdiv").css("width", $(".notetitle").width());
    }

    //cc add 20170605
    //video html
    $(".knownav .chapter").click(function() {
        $(this).toggleClass("selected").parents(".knownav").toggleClass("wknownav");
        video();
    })
    $(".knownav .notes").click(function() {
        $(".maskLayer").show();
        $(".bj-pop").show(200);
    })
    $(".knownav .question").click(function() {
        $(".maskLayer").show();
        $(".zw-pop").show(200);
    })
    $(".popClose").click(function() {
        $(".maskLayer").hide();
        $(this).parents(".popBox").hide();
    })

    $('.mulu').ready(function () {
        var tootipList = $(".mulu a[data-title]");
        tootipList.each( function(index) {
            var til = $(this).attr('data-title');
            //console.log(til);
            var len = til.length;
            //console.log(len);
            if(len > 17){
                $(this).parent().append("<div class='tooltip'><div class='arrow'></div>"+ til +"</div>");
            }
        });
    });

    //180102add start 视频播放右边列表添加子菜单
    $(".mulucon .zj >ul >li").on("click", function () {
        if($(this).has("ul").length){//判断是否有子菜单
          $(this).toggleClass("open");  
        }        
    })
    //180102add end


    //170830
    $('.tabVT span').on("click", function () {
        var n = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        if (n) {
            $(".knownav .chapter").removeClass("selected").parents(".knownav").removeClass("wknownav");
            $(".knownav .positon").hide();
            video();
            $(".knowtest").show().siblings().hide();
            $('.contain').css({"visibility":"hidden"});
        }else {
            $(".knownav .positon").show();
            $(".knowvideo").show().siblings().hide();
            $('.contain').css({"visibility":"visible"});
        }
    })


    //170921 cc  faceClass-new.html
    $(".schedule dt").on("click", function () {
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    })
})
$(window).load(function() {
    //var h = $(window).height();
    //console.log(h);
    // $(".video").load('video.html');//.height(h - 76);
    $(".stuload button").click(function() {
        $(this).closest(".stuload").find("input[type='file']").click();
    })
    $(".stuload input[type='file']").change(function() {
        $(this).closest(".stuload").find("input[type='text']").val($(this).val());
    })
    //问答下拉列表
    $(".questionyi button").click(function() {
        $(this).parent().find(".quesyidiv").toggle();
        $(this).parent().parent().find(".selectdiv").hide();
    })
    $(".quesyidiv li").click(function() {
        var qu = $(this).text();
        $(this).closest(".questionyi").find(".qu").val(qu);
        $(this).closest(".quesyidiv").hide();
    })
    //首页学习科目展开
    $(".study-dl dt").toggle(function() {
        $(".renwu").hide();
        $(this).find(".kai").html("<i>&#xe435;</i>收起");
        //$(this).find("span").css({"border-color": "#dd5555", "color": "#dd5555"});
        $(this).closest("dl").find("dd").show();
    }, function() {
        $(this).closest("dl").find("dd").hide();
        //$(this).find("span").css({"border-color": "#ccc", "color": "#666"});
        $(this).find(".kai").html("<i>&#xe316;</i>展开");
        $(".renwu").show();
    })
    //重新学习
    $(".study-dl dl li").hover(function() {
        if ($(this).find(".fen")) {
            $(this).find(".fen").hide();
            $(this).find(".resetstudy").show();
        }
    }, function() {
        $(this).find(".fen").show();
        $(this).find(".resetstudy").hide();
    })
    $(".stu").click(function() {
        $(this).find(".studywen").toggle();
    })
    $(".cha").click(function() {
        $(this).closest(".index-guan").remove();
    })
    //点赞
    $(".zan").one("click", function() {
        $(this).find("i").html("&#xe143;");
        $(".tansign").show().find("h3").html("点赞成功！");
        setTimeout(function() {
            $(".tansign").fadeOut(1000);
        }, 1000)
    })
    //笔记
    $(".notechose button").click(function() {
        $(this).parent(".notechose").find(".selectdiv").show();
        $(this).parent().parent().find(".quesyidiv").hide();
    })
    //课程选择
    $(".lieselect li:not('.biti')").click(function() {
        $(this).addClass("col").siblings().removeClass("col");
        var str = $(this).find("span").text();
        $(this).closest(".noteitem").find(".classlesson").val(str);
        $(this).closest(".selectdiv").hide();
    });
    //收藏
    $(".cang").one("click", function() {
        $(this).find("i").html("&#xe118;");
        $(".tansign").show().find("h3").html("收藏成功！");
        setTimeout(function() {
            $(".tansign").fadeOut(1000);
        }, 1000)
    })
    //页面弹出框
    $(".img li").on("click", function() {
        var co = $(this).find("img").attr("src");
        $(".tanpoto").show();
        $(".tanpoto img").attr("src", co);
        var potow = $(".tanpoto>section").width() / 2;
        var potoh = $(".tanpoto>section").height() / 2;
        $(".tanpoto>section").css({
            "margin-left": -potow,
            "margin-top": -potoh
        });
        $(".tanpoto").click(function() {
            $(this).hide();
        })
    })

    $(".edit").click(function() {
        $(".modal").show();
        $(".sedit").show();
    })
    $(".sedit .guan").click(function() {
        $(".modal").hide();
    })
    //首页学习计划
    $(".edit").click(function() {
        var edstr = $(this).closest("dd").find("#hui2").text();
        $(".tankuang").show();
        $(".tankuang textarea").val(edstr);
    })
    $(".tankuang .quit").click(function() {
        tq = $(this).parent().find("textarea").val();
        $("#hui2").text(tq);
        $(".tankuang").hide();
    })
    $(".tankuang .cancel").click(function() {
        $(".edit").removeClass("click");
        $(".tankuang").hide();
    })
    //三步骤滚动加载
    $(".bjcon").scroll(function() {

        if ($(this).children("section").height() - $(this).height() - $(this).scrollTop() < 30) {
            console.log($(this).scrollTop());
        }
    })
    $(".sub button").click(function() {
        $(".bjcon").scrollTop(0);
    })
})

//20170608
/*var maxstrlen = 1000;
function Q(s) { return document.getElementById(s); }

function checkWord(c,b) {
   len = maxstrlen;
   var str = c.value;
   myLen = getStrleng(str);
   var wck = Q(b);

   if (myLen > len * 2) {
       c.value = str.substring(0, i + 1);
   }
   else {
       wck.innerHTML = (Math.floor(myLen / 2));
   }
}

function getStrleng(str) {
   myLen = 0;
   i = 0;
   for (; (i < str.length) && (myLen <= maxstrlen * 2); i++) {
       myLen += 2;
   }
   return myLen;
}*/





/**
 * Created by mxd on 2016/8/18.
 */


//公共方法
$(function () {
    var def_ajax = {
        type: 'GET',
        data: {},
        dataType: "text",
        async: true
    };
    gf = {
        alert: function (message,redirect) {
            var my_element=$(".prompt").length;
            if(my_element>0){
                $(".prompt").html('<span class="icon-warning" style="vertical-align: text-top;">&#xf050;</span>'+ message).show();
            }else{
                $('body').append('<div class="win_bg" style="display:block; position:fixed;top:0;width:100%;height:100%;background:#333;opacity:.5"></div>'
                    +'<div class="tansign alert_elem" style="display:block;z-index:999999;position: fixed;top: 50%;left: 50%;margin-top: -80px; margin-left: -110px;padding-bottom: 10px; width: 220px; min-height: 100px; border: 1px solid #ccc; background-color: #fff; border-radius: 3px;">'
                    +'<span style="position: absolute; top: 13px; right: 10px; display: block; width: 16px; height: 16px; cursor: pointer; line-height: 16px; font-size: 14px; color: #999;" class="icon-gf-wrong32">&#xf054;</span>'
                    +'<h3 style="text-align:center;text-indent:0;line-height:40px;height:40px;font-size: 16px;color: #d55; border-bottom:1px solid #eee; ">温馨提示</h3>'
                    +'<p style="font-size: 16px;color: #666;text-align: left; padding: 15px 15px 0 20px;">' + message + '</p></div>');
            }
            $("body").on("click", ".tansign span", function () {
                $(".alert_elem").remove();
                $(".win_bg").remove();
                $(".prompt").remove();
            })
            setTimeout(function () {
                $(".alert_elem").remove();
                $(".win_bg").remove();
                $(".prompt").remove();
                if (redirect) {
                    location.href = redirect;
                }
            }, 2000);
        },
        loading: function (target) {
            var html = '';
            if (target) {
                html += '<div class="win_bg" style="display:block; position:fixed;top:0;width:100%;height:100%;background:#333;opacity:.5"></div><div class="loading_elem" style="margin:auto;padding:20px 0px;text-align:center;;z-index:999999;">';
            } else {
                html += '<div class="win_bg" style="display:block; position:fixed;top:0;width:100%;height:100%;background:#333;opacity:.5"></div><div class="loading_elem" style="position: fixed;top:50%;left:50%;margin-top:-23px;margin-left:-23px;;z-index:999999;">';
            }
            html +='    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 105"  width="46" height="46" fill="#dd5555">';
            html +='        <circle cx="12.5" cy="12.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">';
            html +='            <animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="52.5" cy="12.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="52.5" cy="52.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="92.5" cy="12.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="92.5" cy="52.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="12.5" cy="92.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="52.5" cy="92.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html +='        <circle cx="92.5" cy="92.5" r="12.5">';
            html +='            <animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>';
            html +='        </circle>';
            html += '    </svg>';
            html += '</div>';
            if (target){
                $(target).append(html);
            } else {
                $('body').append(html);
            }
        },
        hideloading: function () {
            $(".loading_elem").remove();
        },
        ajax: function (param) {
            var funcId;
            if (param.load_target) {
                funcId = setTimeout(function () { gf.loading(param.load_target); }, 700);//加载loading样式
            } else {
                funcId = setTimeout(function () { gf.loading() }, 700);//加载loading样式
            }
            try {
                $.ajax({
                    url: param.url,
                    type: (param.type || def_ajax.type),
                    data: (param.data || def_ajax.data),
                    dataType: (param.dataType || def_ajax.dataType),
                    async: param.async,
                    success: param.success,
                    error: param.error,
                    complete: function () {
                        clearTimeout(funcId);
                        gf.hideloading();//隐藏loading样式
                        if (param.complete) {
                            param.complete();
                        }
                    }
                });
            }
            catch (err) {
                clearTimeout(funcId);
                console.log('ajax_err:'+ err.message);
            }
        },
        imgerror: function (target) {
            var src = $(target).attr('src');
            if (!src) {
                return;
            }
            $(target).attr("src", "http://www.gfedu.cn/images/upload_success.png");
            setTimeout(function () {
                $(target).attr('src', src);
            }, 2000);
        }
    }
});
