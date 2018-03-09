/**
 * Created by mxd on 2017/3/6.
 */
$(function(){
    $(".J_secTabs").each(function () {
        var timeout = 300;
        var delay = 0;
        var a = $(this).find("a"), b = $(this).next().children(), c = $(this).find("em");
        //a.hover(function(){ var	obj = $(this); item_show(obj); },function(){ item_hide(); });
        a.click(function () {
            var obj = $(this);
            item_show(obj);
        }, function () {
            item_hide();
        });
        a.click(function () {
            var obj = $(this);
            item_action(obj);
        });
        function item_action(obj) {
            a.removeClass("selected");
            c.css("cursor", "")
            obj.addClass("selected");
            obj.children("em").css("cursor", "default");
            var i = a.index(obj);
            b.hide();
            $(b.get(i)).show();
        }
        function item_show(obj) {
            clearTimeout(delay);
            delay = setTimeout(function () {
                item_action(obj);http://192.168.10.104:8080/gfeducn/community/problemdetails.html#hf1
                clearTimeout(delay);
            }, timeout);
        }
        function item_hide() {
            clearTimeout(delay);
        }
    });
    //�����������óɹ�js
    $(".next").click(function(){
        $(".log").hide();
        $(".restsucess").show();
    })
    $(".tell").blur(function(){
      var tel=$(".tell");
      var myreg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if(myreg.test($(".tell").val()))
          {
        $(".yan").show();
        $(".tell").parents().siblings(".warning").hide();
      }else{
          $(".yan").hide();
          $(".tell").parents().siblings(".warning").show();
      }

    })
    $(".tells").blur(function(){
      var myreg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if(myreg.test($(".tells").val()))
          {
        $(".tells").parents().siblings(".warning").hide();
      }else{
          $(".tells").parents().siblings(".warning").show();
      }

    })
    $(".password input").blur(function(){
        var password=$(".password input");
        var password=$(this).val();
        var myreg = /^(\w){1,16}$/;
        if(myreg.test(password)){

          $(this).parent().siblings(".warning").hide();
        }else{
              $(this).parent().siblings(".warning").show();
        }

        if(password == ""){
            $(this).siblings(".sbsote").hide();
        }else{
            $(this).siblings(".sbsote").show();
        }
    })

    //查看密码
$(".sbsote").click(function(){
  	if($(this).attr("data-show")==1){//明文
      		$(this).attr("data-show","2");
      		$(this).children("i").html("&#xe924;");
      		$(this).siblings(".mima_dd").hide();
      		$(this).siblings(".mima_wz").show();
      		$(this).siblings(".mima_wz").val($(this).siblings(".mima_dd").val());
      		return;
  		}
  	if($(this).attr("data-show")==2){//密文
      		$(this).attr("data-show","1");
      		$(this).children("i").html("&#xe964;");
      		$(this).siblings(".mima_dd").show();
      		$(this).siblings(".mima_wz").hide();
          $(this).siblings(".mima_wz").val($(this).siblings(".mima_dd").val());
      		return;
  		}
	});
  //    是否勾选
    $(".check_radio").click(function () {
        if($(this).hasClass("cehecked")){
            $(this).removeClass("cehecked");
        }else{
            $(this).addClass("cehecked");
        }

    })
})
