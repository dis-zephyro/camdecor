$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).parent().get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).parent(),
                name =     $('input[name="name"]', $form).val(),
                phone =    $('input[name="phone"]', $form).val(),
                email =    $('input[name="email"]', $form).val(),
                quest = $("textarea[name='quest']", $form).val();
            console.log(name, phone, email);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email : email, quest : quest}
            }).done(function(msg) {
                console.log(name, phone, email);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox(
                    '<div class="done">'+ 'Ваше сообщение<br/>успешно отправлено' +'</div>',
                    {
                        'autoDimensions'  : false,
                        'padding': 0,
                        'minWidth': 600,
                        'transitionIn'    : 'none',
                        'transitionOut'   : 'none',
                        'closeBtn' : false
                    }
                );
                setTimeout("$.fancybox.close()", 3000);
            });
        }

        var h = $(window).height();
    });

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate.css" />'); //подключение файла animation.css если не мобильник
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animation.css" />'); //подключение файла animation.css если не мобильник
    }
});




// Мобильное меню.

$(function() {
    var pull = $('#pull');
        menu = $('.topnav-inner');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 1100 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

$(".popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$(".code").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});


ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [45.01120430, 41.92022450],
        zoom: 16,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Камдекор'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemark.png ',
        // Размеры метки.
        iconImageSize: [94, 105],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}


