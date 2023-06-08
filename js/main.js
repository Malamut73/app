$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside__menu').removeClass('rightside__menu--close')
    })

    $('.rightside__menu-close').on('click', function(){
        $('.rightside__menu').addClass('rightside__menu--close')
    })

    $('.top__slider').slick({
        dots:true,
        arrows: false,
        fade: true,
        autoplay: true
    });
    
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots:true,
        arrows: false,
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
})