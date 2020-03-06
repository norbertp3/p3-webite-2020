$(document).ready(function(){
    $('.home-banner').slick({
        dots: true,
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });
    $('.standard-slider').slick({
        dots: true,
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    dots: true,
                }
            }
        ]
    });
    $('.slider-box-content').slick({
        dots: false,
        arrows: false,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide')
    });
    $('.testimonials').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        responsive: [
            {
            breakpoint: 991,
                settings: {
                    dots: false,
                }
            }
        ]
    });
});