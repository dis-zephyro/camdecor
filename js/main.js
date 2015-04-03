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
        hintContent: 'Собственный значок метки'
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