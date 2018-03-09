setTimeout(function () {

	var selBtn = $('.sp_sel_btn button');
	selBtn.on('click', function () {
		var index = $(this).index();
		$(this).addClass('selBtn').siblings().removeClass('selBtn');
		$(this).parents('.sp_ulSel').find('.sp_cur').eq(index).show().siblings('.sp_cur').hide();
	});

	var ulCur = $('.ulCur li');
	ulCur.on('click', function () {
		var index = $(this).index();
		$(this).addClass('sp_selected').siblings().removeClass('sp_selected');
		$(this).parents('.sp_main_right').find('.sp_ulSel').eq(index).show().siblings('.sp_ulSel').hide();
	});

	var divSel = $('.div_sel_click div');
	divSel.on('click', function () {
		$(this).addClass('div_sel').siblings('div').removeClass('div_sel');
	});

	var basicSel = $('.basic_sel_click li');
	basicSel.on('click', function () {
		$(this).toggleClass('basic_sel');
	});

	var signName = $('.signName');
	var quantity = $('.quantity');
	signName.on('input', function () {
		var value = $(this).context.textLength;
		quantity.text(''+value+'/50');
	});

	// 工作经历 时间选择
	var time = document.querySelector('.time');
	var sy = document.querySelector('.startY');
	var sm = document.querySelector('.startM');
	var ey = document.querySelector('.endY');
	var em = document.querySelector('.endM');
	var date = new Date();
	var year = date.getFullYear();
	var mouth = date.getMonth() + 1;
	if (time) {
		_option(sy, 99, '年', year);
		_option(ey, 1, '年', year);
		_option(sm, mouth, '月', mouth);
		_option(em, 1, '月', mouth);

		_time();
	}

	function _time() {
		var arr = {
			sy: sy.value,
			ey: ey.value,
			sm: sm.value,
			em: em.value
		};

		sy.onchange = function () {
			var value = this.value;
			arr.sy = value;
			var diff = year - value;
			if (value < year) {
				_option(ey, (diff+1), '年', year);
				_option(sm, 12, '月', 12);
				if (arr.ey == year) {
					_option(em, mouth, '月', mouth);
				} else if (arr.ey > value) {
					_option(em, 12, '月', 12);
				} else if (arr.ey == value) {
					var diff2 = 12 - arr.sm + 1;
					_option(em, diff2, '月', 12);
				}
			}
			if (value == year) {
				_option(ey, 1, '年', year);
				_option(sm, mouth, '月', mouth);
				_option(em, 1, '月', mouth);
			}
			_arr(arr, sy, ey, sm, em);
		};

		ey.onchange = function () {
			arr.ey = this.value;
			if (this.value  == year && this.value == arr.sy) {
				var diff = mouth - arr.sm + 1;
				_option(em, diff, '月', mouth);
			} else if (this.value == year && this.value > arr.sy) {
				_option(em, mouth, '月', mouth);
			} else {
				if (this.value == arr.sy) {
					var diff2 = 12 - arr.sm + 1;
					_option(em, diff2, '月', 12);
				} else if (this.value > arr.sy) {
					_option(em, 12, '月', 12);
				}
			}
			_arr(arr, sy, ey, sm, em);
		};

		sm.onchange = function () {
			arr.sm = this.value;
			if (arr.sy == year) {
				var diff = mouth - this.value;
				_option(em, diff, '月', mouth);
			} else if (arr.sy < year) {
				if (arr.sy == arr.ey) {
					var diff2 = 12 - this.value + 1;
					_option(em, diff2, '月', 12);
				} else if (arr.sy < arr.ey && arr.ey != year) {
					_option(em, 12, '月', 12);
				} else {
					_option(em, mouth, '月', mouth);
				}
			}
			_arr(arr, sy, ey, sm, em);
		};

		em.onchange = function () {
			arr.em = this.value;
		};
	}

	function _option(pa, v, d, date) {
		pa.innerHTML = '';
		for (var i = 0; i < v; i++) {
			var son = pa.children;
			var vv = date - i;
			var option = document.createElement('option');
			option.value = vv;
			option.textContent = vv+d;
			pa.appendChild(option);
		}
	}

	function _arr(a, sy, ey, sm, em) {
		sy.value = a.sy;
		ey.value = a.ey;
		sm.value = a.sm;
		em.value = a.em;
	}

	// 添加地址
	var Address = document.querySelector('.address');
	var popRadio = document.querySelector('.radioAddress');
	var addPopup = document.querySelector('.addPopup');
	var save = document.querySelector('.addressSave');
	var cancel = document.querySelector('.addressCancel');
	var add = document.querySelector('.add');
	popRadio.onclick = function () {
		if (this.classList.contains('div_sel')) {
			this.classList.remove('div_sel');
		} else {
			this.classList.add('div_sel');
		}
	};
	save.onclick = function () {
		var pa = this.parentNode.parentNode;
		var name = pa.querySelector('input[name=name]').value;
		var tel = pa.querySelector('input[name=tel]').value;
		var email = pa.querySelector('input[name=email]').value;
		var code = pa.querySelector('input[name=code]').value;
		var address = pa.querySelector('textarea[name=address]').value;
		var province = pa.querySelectorAll('select')[0].value;
		var city = pa.querySelectorAll('select')[1].value;
		var sel = pa.querySelector('.div_sel');
		var li = document.createElement('li');
		li.innerHTML = '<h3>'+name+'</h3><h4>'+tel+'</h4><h5>'+email+'</h5><h6><p>'+province+' '+(city+address)+' ('+code+')</p><span class="editAddress">编辑</span><span class="deleteAddress">删除</span></h6><div><em>默认地址</em></div>';
		Address.appendChild(li);
		if (sel) {
			var lis = Address.children;
			for (var i = 0; i < lis.length; i++) {
				if (lis[i] === li) {
					lis[i].classList.add('addressSel');
				} else if (lis[i].classList.contains('addressSel')) {
					lis[i].classList.remove('addressSel');
				}
			}
		}
		_clear(addPopup);
		addPopup.style.display = 'none';
	};
	add.onclick = function () {
		addPopup.style.display = 'block';
	};
	cancel.onclick = function () {
		addPopup.style.display = 'none';
		_clear(addPopup);
	};

	function _clear(a) {
		var inputs = a.querySelectorAll('input');
		var textarea = a.querySelector('textarea');
		var radioAddress = a.querySelector('.radioAddress');
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
		textarea.value = '';
		if (!radioAddress.classList.contains('div_sel')) {
			radioAddress.classList.add('div_sel');
		}
	}

	var deleteAddress = $('.deleteAddress');
	deleteAddress.on('click', function () {
		$(this).parents('li').remove();
	});

}, 0);

function preview(file) {
    var prevDiv = document.getElementById('boxview');
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function(evt){
        prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
        };
        reader.readAsDataURL(file.files[0]);
    } else {
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}
