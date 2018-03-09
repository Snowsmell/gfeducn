$(function () {
    //纵向轮播逻辑
    function vertical() {
        var carousel = document.querySelector('.carousel'),
            ul = carousel.querySelector('ul'),
            lis = ul.querySelectorAll('li'),
            liHeight = lis[0].offsetHeight,
            index = 0,
            timer = null,
            listLis = document.querySelectorAll('.list li');
            n = 1;

        //追加li
        for (var i = 0; i < n; i++) {
            var cloneLi = lis[i].cloneNode(true);
            ul.appendChild(cloneLi)
        }
        //追加完成后获取ul高度
        var ulHeight = carousel.querySelector('ul').offsetHeight;

        //核心部分
        function moveNext() {
            ul.style.transition = '';
            // console.log(index);
            ul.style.transform = 'translateY(-' + ++index * liHeight + 'px)';
            if (index == lis.length) {
                index = 0;
                setTimeout(function () {
                    ul.style.transition = 'none';                 
                    ul.style.transform = 'translateY(-' + index * liHeight + 'px)';  
                },2700)                              
            }
        }

        function movePrev() {
            ul.style.transition = '';
            ul.style.transform = 'translateY(-' + --index * liHeight + 'px)';
            if (index == 0) {
                index = lis.length;
                setTimeout(function () {
                    ul.style.transition = 'none';
                    ul.style.transform = 'translateY(-' + index * liHeight + 'px)';
                }, 900)
            }
        }

        function autoplay() {
            timer = setInterval(function () {
                moveNext()
                setOpacity()
            }, 3000)
        }
        autoplay()

        //设置效果

        function setOpacity() {
            var lis = carousel.querySelectorAll('li');
            [].forEach.call(lis, function (v, i) {
                v.classList.remove('on');
            })
            setOn(index);
        }
        function setOn(number) {
            var lis = carousel.querySelectorAll('li');

            [].forEach.call(lis, function (v, i) {
                if (v.dataset.index == number) {                    
                    v.classList.add('on');
                }else if(v.dataset.index == 0 && number === lis.length-1){
                    lis[number].classList.add('on');
                }
            });
            [].forEach.call(listLis, function (v, i) {                
                if (v.dataset.index == number) {                    
                    v.classList.add('on');
                }else if(v.dataset.index == 0 && number === listLis.length){
                    listLis[0].classList.add('on');
                } else {
                    v.classList.remove('on');
                }
            })
        }

        //点击左侧圆钮事件
        var buttons = document.querySelector('.buttons')
        buttons.querySelector('.next').addEventListener('click', function () {
            clearInterval(timer);
            moveNext();
            autoplay();
            setOpacity();
        })
        buttons.querySelector('.prev').addEventListener('click', function () {
            clearInterval(timer);
            movePrev();
            autoplay();
            setOpacity();
        });

        //点击右侧图片列表事件

        [].forEach.call(listLis, function (v, i) {
            var selfIndex = parseInt(v.dataset.index);
            listClick(v, selfIndex)

            function listClick(el, num) {
                el.addEventListener('click', function () {
                    index = num - 1;
                    clearInterval(timer);
                    moveNext()
                    autoplay()
                    setOpacity()
                })
            }

        })

    }
    vertical()
})