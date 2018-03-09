

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

function telBind() {
	var telPopup = $('.telPopup');
	var maskLayer = $(".maskLayer");
	telPopup.show();
	maskLayer.show();
}

function emailBind() {
	var emailPopup = $('.emailPopup');
	var maskLayer = $(".maskLayer");
	emailPopup.show();
	maskLayer.show();
}

function unBind() {
	var unbind = $('.unbind');
	var maskLayer = $(".maskLayer");
	unbind.show();
	maskLayer.show();
}

// 添加地址
	var maskLayer = document.querySelector(".maskLayer");
	var Address = document.querySelector('.address');
	var popRadio = document.querySelector('.radioAddress');
	var addPopup = document.querySelector('.addPopup');
	var save = document.querySelector('.addressSave');
	var cancel = document.querySelector('.addressCancel');
	var add = document.querySelector('.add');
	var addressOff = document.querySelector('.addPopup dt i');
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
		// Address.appendChild(li);
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
	/*add.onclick = function () {
		addPopup.style.display = 'block';
		maskLayer.style.display = 'block';
	};*/
	/*addressOff.onclick = function () {
		addPopup.style.display = 'none';
		// maskLayer.style.display = 'none';
		_clear(addPopup);
	};*/
	cancel.onclick = function () {
		addPopup.style.display = 'none';
		// maskLayer.style.display = 'none';
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

$(function () {
	//选择回放 livelist
    $(".jsCek").click(function () {
    	$(this).toggleClass("on");
    })
})