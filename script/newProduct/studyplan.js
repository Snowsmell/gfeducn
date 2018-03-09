//2017.12.29 snowsmell add

//选择感兴趣的
$('#choose_pop ul li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
})

//创建计划
$('#createplan_pop .need').on('click',function(){
	$(this).toggleClass('on')
})


//20180109
//first 选中兴趣
$(".fun dd").click(function () {
    $(this).toggleClass("on");
})

//first 获取感兴趣的内容
$("#getFun .popOut").click(function(){
	// alert("aaa");
	var data = [];
	$(".fun dd").each(function(){
		if($(this).hasClass("on")){
			data.push($(this).text());
		}
	});
	console.log(data);
})

