//2017.7.17  统一数据设置省市
/**
 * 目前这个js的使用需要引入jq,同时html页面内对应的两个select标签的id分别设置为provinceBox,cityBox。使用绝对路径
 */
$(function () {

    var provinceBox = document.getElementById('provinceBox'),
        province = provinceBox.attr || "上海市",
        cityBox = document.getElementById('cityBox'),
        city = cityBox.attr || "上海市";      

    function setcity(pribox, pri, cibox, ci) {
        var index = null;
        $.ajax({
            url: '/script/province.json',
            success: function (data) {
                //设置省的option
                data.forEach(function (v, i) {
                    var option = document.createElement('option')
                    if (v.name == pri) {
                        option.selected = true;
                        index = i
                    }
                    option.innerHTML = v.name;
                    option.value = i;
                    pribox.appendChild(option)
                })
                //设置默认初始城市
                cibox.innerHTML = '<option>' + ci + '</option>';
                //当有默认省市的情况下，设置市的option
                setDefault(index)
                //点击省的选择框，设置市的option
                pribox.addEventListener('change', function () {
                    cibox.innerHTML = ''
                    setDefault(this.value)
                })
                //根据省的value,设置市的列表
                function setDefault(index) {
                    var citys = data[index].city
                    citys.forEach(function (v, i) {
                        var options = document.createElement('option')
                        options.innerHTML = v.name;
                        cibox.appendChild(options)
                    })
                }
            }
        })
    }
    setcity(provinceBox,province,cityBox,city)

    //根据类名追加部分
    var provinceBox2 = document.querySelectorAll('.proAds'),
        cityBox2 = document.querySelectorAll('.cityAds');

        for(var i = 0;i<provinceBox2.length;i++){
            var province2 = provinceBox2[i].attr || "上海市",
                city2 = cityBox2[i].attr || "上海市";
            setcity(provinceBox2[i],province2,cityBox2[i],city2)    
        }


    
    // setcity(provinceBox2,province2,cityBox2,city2)

})