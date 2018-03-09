$(function () {

//	选中指定知识点区域收起与展开
$('.setVol-appoint').on('click', function () {
	$('.set-myPanel').show();
});
$('.setv-allCol').on('click', function () {
	$('.set-myPanel').hide();
});

//	指定知识点的展开与收起
$('.set-myPanel .panel-heading').on('click', function () {

	if ($(this).find('i').is('.icon-down2')) {
		$(this).find('.allKownlage').text('指定知识点');
		$(this).find('i').removeClass('icon-down2').addClass('icon-up2');
		$('.setV-moreSelect').show();
	} else {
		if ($('.setV-moreSelect .si-curr').length<1) {
			$(this).find('.allKownlage').text('全部知识点');
			$(this).find('i').removeClass('icon-up2').addClass('icon-down2');
			$('.setV-moreSelect').hide();
		} else {
			$(this).find('.allKownlage').text('指定知识点');
			$(this).find('i').removeClass('icon-up2').addClass('icon-down2');
			$('.setV-moreSelect').hide();
		}
	}

});

$('.setV-moreSelect li').on('click', function () {
	if ($(this).is('.si-curr')) {
		$(this).removeClass('si-curr');
	} else {
		$(this).addClass('si-curr');
	}
});

//题目数量滑动条参数
$('.setv-tcnums').nstSlider({
	left_grip_selector: '.leftGrip',
	value_changed_callback: function (cause, leftValue, rightValue) {
		$(this).parent().find('.leftLabel').text(leftValue);
	}
});
//时间设置滑动条
$('.setv-times').nstSlider({
	left_grip_selector: '.leftGrip',
	value_changed_callback: function (cause, leftValue, rightValue) {
		$(this).parent().find('.leftLabel').text(leftValue);
	}
});

});
