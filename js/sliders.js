$(document).ready(function(){
    $('.slider-1--js').slick({
        dots: true,
        arrows: false,
    });
    $('.slider-2--js').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2.1,
        infinite: false,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1.5,
            }
          }
        ]
    });
    $('.slider-3--js').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        infinite: false,
        nextArrow: '.home__blog__btns__right',
        prevArrow: '.home__blog__btns__left',
        responsive: [
            {
              breakpoint: 460,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            } 
          ]
    });
    $('.slider-4--js').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2.5,
      infinite: false,
      responsive: [
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1.5,
          }
        }
      ]
    });
    $('.slider-5--js').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-6--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      infinite: false,
      nextArrow: '.sl-6--right',
      prevArrow: '.sl-6--left',
      responsive: [
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
    $('.slider-7--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      infinite: false,
      nextArrow: '.sl-7--right',
      prevArrow: '.sl-7--left',
      responsive: [
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
});