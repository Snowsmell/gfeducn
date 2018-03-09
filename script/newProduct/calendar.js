;
(function ($, window, document, undefined) {
    $.fn.calendar = function (parameter, getApi) {
        parameter = parameter || {};
        var defaults = {
            prefix: 'widget',          //生成日历的class前缀
            isRange: false,            //是否选择范围
            limitRange: [],            //有效选择区域的范围
            onChange: function () {
            },      //当前选中月份修改时触发
            onSelect: function () {
            }       //选择日期时触发
        };
        var options = $.extend({}, defaults, parameter);
        return this.each(function () {
            var $this = $(this);
            var $table = $('<table>').appendTo($this);
            var $caption = $('<caption>').appendTo($table);
            var $sectionLeft = $('<section class="sectionLeft">').appendTo($caption);
            var $sectionC = $('<section class="sec">').appendTo($caption);
            var $sectionRight = $('<section class="sectionRight">').appendTo($caption);
            var leftCar = $('<ul><li><a href="javascript:;"><i class="icon--21"></i>第13周</a></li><li>共100周</li></ul>').appendTo($sectionLeft);
            var rightCar = $('<ul><li class="studyprocess"><a href="javascript:;" >修改学习进度</a> </li></ul>').appendTo($sectionRight);
            var $prevYear = $('<a class="' + options.prefix + '-prevYear" href="javascript:;"></a>').appendTo($sectionC);
            var $prevMonth = $('<a class="' + options.prefix + '-prevMonth" href="javascript:;"><em></em></a>').appendTo($sectionC);
            var $title = $('<span>').appendTo($sectionC);
            var $nextMonth = $('<a class="' + options.prefix + '-nextMonth" href="javascript:;"><em></em></a>').appendTo($sectionC);
            var $back = $('<a class="' + options.prefix + '-back" href="javascript:;"></a>').appendTo($sectionC);
            var $nextYear = $('<a class="' + options.prefix + '-nextYear" href="javascript:;"></a>').appendTo($sectionC);
            var _today,         //当天
                _data,          //日期数据
                _day,           //日历状态
                _range = [];    //当前选择范围
            /*****  节点修改 *****/
            $table.append('<thead><tr><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th><th>周日</th></tr></thead>');
            var $tbody = $('<tbody>').appendTo($table);
            /***** 私有方法 *****/
            //获取日期数据
            var getDateObj = function (year, month, day) {
                var date = arguments.length && year ? new Date(year, month - 1, day) : new Date();
                var obj = {
                    'year': date.getFullYear(),
                    'month': date.getMonth() + 1,
                    'day': date.getDate(),
                    'week': date.getDay() - 1
                }
                obj['code'] = '' + obj['year'] + (obj['month'] > 9 ? obj['month'] : '0' + obj['month']) + (obj['day'] > 9 ? obj['day'] : '0' + obj['day']);
                return obj;
            };
            //获取当月天数
            var getMonthDays = function (obj) {
                var day = new Date(obj.year, obj.month, 0);
                return day.getDate();
            };
            //获取某天日期信息
            var getDateInfo = function (obj) {
                if (options.limitRange.length) {
                    obj['status'] = 'disabled';
                    for (var i = 0; i < options.limitRange.length; i++) {
                        var start = options.limitRange[i][0];
                        var end = options.limitRange[i][1];
                        if (start == 'today') {
                            start = _today['code'];
                        }
                        if (end == 'today') {
                            end = _today['code'];
                        }
                        if (start > end) {
                            start = [end, end = start][0];
                        }
                        if (obj['code'] >= start && obj['code'] <= end) {
                            obj['status'] = '';
                            break;
                        }
                    }
                }
                if (obj['code'] == _today['code']) {
                    obj['sign'] = 'today';
                }
                return obj;
            };
            var getData = function (obj) {
                if (typeof obj == 'undefined') {
                    obj = _today;
                }
                _day = getDateObj(obj['year'], obj['month'], 1);      //当月第一天
                var days = getMonthDays(_day);              //当月天数
                var data = [];                              //日历信息
                var obj = {};
                //上月日期
                for (var i = _day['week']; i > 0; i--) {
                    obj = getDateObj(_day['year'], _day['month'], _day['day'] - i);
                    var info = getDateInfo(obj);
                    if (!options.limitRange.length) {
                        info['status'] = 'disabled';
                    }
                    data.push(info);
                }
                //当月日期
                for (var i = 0; i < days; i++) {
                    obj = {
                        'year': _day['year'],
                        'month': _day['month'],
                        'day': _day['day'] + i,
                        'week': (_day['week'] + i) % 7
                    };
                    obj['code'] = '' + obj['year'] + (obj['month'] > 9 ? obj['month'] : '0' + obj['month']) + (obj['day'] > 9 ? obj['day'] : '0' + obj['day']);
                    var info = getDateInfo(obj);
                    data.push(info);
                }
                //下月日期
                var last = obj;
                for (var i = 1; last['week'] + i < 7; i++) {
                    obj = getDateObj(last['year'], last['month'], last['day'] + i);
                    var info = getDateInfo(obj);
                    if (!options.limitRange.length) {
                        info['status'] = 'disabled';
                    }
                    data.push(info);
                }
                return data;
            };
            var format = function (data) {
                options.onChange(_day);
                for (var i = 0; i < data.length; i++) {
                    var d = data[i];
                    if (d['status'] == 'active') {
                        d['status'] = '';
                    }
                }
                if (_range.length == 2) {
                    var start = _range[0]['code'];
                    var end = _range[1]['code'];
                    for (var i = 0; i < data.length; i++) {
                        var d = data[i];
                        if (d['code'] >= start && d['code'] <= end) {
                            if (d['status'] == 'disabled') {
                                break;
                            } else {
                                d['status'] = 'active';
                                _range[1] = d;
                            }
                        }
                    }
                } else if (_range.length == 1) {
                    for (var i = 0; i < data.length; i++) {
                        var d = data[i];
                        if (d['code'] == _range[0]['code']) {
                            d['status'] = 'active';
                        }
                    }
                }
                var html = '<tr>';
                for (var i = 0, len = data.length; i < len; i++) {
                    var day = data[i];
                    var className = '';
                    // if (i % 7 == 0 && i < len - 1) {
                    //     html += '<td class="weektime"> 第' + 1 + '周</td>';
                    // }
                    if (day['sign']) {
                        className += options.prefix + '-' + day['sign'];
                    }
                    if (day['status']) {
                        className += ' ' + options.prefix + '-' + day['status'];
                    }
                    if (i < 10) {
                        html += '<td' + (className ? ' class="' + className + '"' : ' class="green" ') + ' data-id="' + i + '">\
                        ' + (day['link'] ? '<a href="' + day['link'] + '">' + day['day'] + '</a>' : '<span>' + day['day'] + '</span>') + '<p class="green"><span>任务：2/4</span></p>' +'\
                    </td>';
                    } else if (i >= 10 && i <= 20) {
                        html += '<td' + (className ? ' class="' + className + '"' : ' class="blue" ') + ' data-id="' + i + '">\
                        ' + (day['link'] ? '<a href="' + day['link'] + '">' + day['day'] + '</a>' : '<span>' + day['day'] + '</span>') + '<p class="blue"><span>任务：2/4</span></p>' + '\
                    </td>';
                    } 
                    else if (i > 20 && i <= 25) {
                        html += '<td' + (className ? ' class="' + className + '"' : ' class="brown" ') + ' data-id="' + i + '">\
                        ' + (day['link'] ? '<a href="' + day['link'] + '">' + day['day'] + '</a>' : '<span>' + day['day'] + '</span>') + '<p class="brown"><span>任务：4/4</span></p>' + '\
                    </td>';
                    }else if(i === 26){
                        html += '<td' + (className ? ' class="' + className + '"' : ' class="red" ') + ' data-id="' + i + '">\
                        ' + (day['link'] ? '<a href="' + day['link'] + '">' + day['day'] + '</a>' : '<span>' + day['day'] + '</span>') + '<p class="red"><span>强化段开课了</span></p>'+ '<a href="####" class="btnR">去生成学习计划</a>' + '\
                    </td>';
                    } else {
                        html += '<td' + (className ? ' class="' + className + '"' : ' class="nopermission" ') + ' data-id="' + i + '">\
                        ' + (day['link'] ? '<a href="' + day['link'] + '">' + day['day'] + '</a>' : '<span>' + day['day'] + '</span>') + '<p class="hui"><span>任务：2/4</span></p>' + '\
                    </td>';
                    }
                    if (i % 7 == 6 && i < len - 1) {
                        html += '</tr><tr>';
                    }
                }                
                html += '</tr>';
                var tirm = new Date();
                $title.html(_day['year'] + '年' + _day['month'] + '月');
                /*+tirm.getDate()+'日'  */
                $tbody.html(html);
            };
            /***** 初始化 *****/
            _today = getDateObj();
            _day = {
                'year': _today['year'],
                'month': _today['month'],
                'day': _today['day']
            };
            $prevMonth.click(function() {
                _day['month']--;
                _data = getData(_day);
                format(_data);
            });
            $nextMonth.click(function () {
                _day['month']++;
                _data = getData(_day);
                format(_data);
            });
            $prevYear.click(function () {
                _day['year']--;
                _data = getData(_day);
                format(_data);
            });
            $nextYear.click(function () {
                _day['year']++;
                _data = getData(_day);
                format(_data);
            });
            $back.click(function () {
                _data = getData();
                format(_data);
            });
            /*$this.on('click','td',function(){
             var $this = $(this);
             var index = $(this).data('id');
             var day = _data[index];
             if(day['status']!='disabled'){
             if(options.isRange){
             if(_range.length!=1){
             _range = [day];
             format(_data);
             }else{
             _range.push(day);
             _range.sort(function(a,b){
             return a['code']>b['code'];
             });
             format(_data);
             options.onSelect(_range);
             }
             }else{
             _range = [day];
             format(_data);
             options.onSelect(_range);
             }
             }
             });*/
            _data = getData();
            format(_data,70);
        });
    };
})(jQuery, window, document);