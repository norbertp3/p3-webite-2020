$(document).ready(function(){
    $('.slider-1--js').slick({
        dots: true,
        arrows: false,
    });
    $('.slider-2--js').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1.5,
        infinite: false,
    });
    $('.slider-3--js').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3.5,
        infinite: false,
        nextArrow: '.home__blog__btns__right',
        prevArrow: '.home__blog__btns__left',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
  });