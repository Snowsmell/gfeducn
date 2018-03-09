(function(){
  $(function(){

    // 倒计时停止
    var minute = GetLocalItemValue('minute');
    var second = GetLocalItemValue('second');
    $('#minute').text(minute);
    $('#second').text(second);

    // 新建对象，用于把ABCD转化成0123
    var abcd = {
      A: 0,
      B: 1,
      C: 2,
      D: 3
    }

    // 获取每一道题的答案，并保存成一个二维数组
    var everyItemAnswer = [];
    var item_0 = GetLocalItemValue('item_1').split('');
    var item_1 = GetLocalItemValue('item_2').split('');
    var item_2 = GetLocalItemValue('item_3').split('');
    var item_3 = GetLocalItemValue('item_4').split('');
    var item_4 = GetLocalItemValue('item_5').split('');
    var item_5 = GetLocalItemValue('item_6').split('');
    var item_6 = GetLocalItemValue('item_7').split('');
    var item_7 = GetLocalItemValue('item_8').split('');
    var item_8 = GetLocalItemValue('item_9').split('');
    var item_9 = GetLocalItemValue('item_10').split('');
    everyItemAnswer.push(item_0, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9);

    // 循环 判断一道题的答案与正确答案是否匹配，如不匹配则用红色显示错误项。
    for(var i=0; i<rightAnswers.length; i++){
      var itemId = $('#item-' + i);
      if(everyItemAnswer[i].toString() !== rightAnswers[i].toString()) {
        for(var j=0; j<everyItemAnswer[i].length; j++){
          if(rightAnswers[i].indexOf(everyItemAnswer[i][j]) == -1) {
            var index = abcd[everyItemAnswer[i][j]];
            itemId.find('dl').eq(index).removeClass('sel').addClass('error-c');
          }
        }
        itemId.find('.gou').hide();
        itemId.find('.error').show();
        if(everyItemAnswer[i].length == 0) {
          itemId.find('.error').find('.error_answer').text('您没有选择任何答案');
          $('.answer_card ul li').eq(i).removeClass();
        } else {
            itemId.find('.error').find('em').text(everyItemAnswer[i].join(''));
            $('.answer_card ul li').eq(i).addClass('red');
        }
      } else {
        itemId.find('.error').hide();
        itemId.find('.gou').show();
        $('.answer_card ul li').eq(i).addClass('green');
      }
    }

     $('.answer_card ul li').click(function(){
        $(".ques .item").eq($(this).index()).show().siblings().hide();
     });

  })
})()