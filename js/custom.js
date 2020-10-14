// Disable scroll
function noScroll() {
    window.scrollTo(0, 0);
  }

// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    window.addEventListener('scroll', noScroll);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    window.removeEventListener('scroll', noScroll);
}
$(document).ready(function() {
    // Link Scroll
    $('.home__arrow-scroll').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#main').offset().top - 70
    }, 1000);
    });
    if ($(window).width() >= 992) {
        $(".home__blog, .blog__articles, .generic__services, .content__border-grid-4, .content__border-grid-3").each(function(){
            var largest = 0;
            $(this).find(".card-title, .generic__services__p, .text-grey").each(function(){
            var findHeight = $(this).height();
            if(findHeight > largest){
                largest = findHeight;
            }
            });
            $(this).find(".card-title, .generic__services__p, .text-grey").css({"height":largest+"px"});
        });
    }
    $('.sidenav__dropdown--toggle').click(function(e) {
        e.preventDefault();
        $(this).next('.sidenav__dropdown').slideToggle();
        $(this).toggleClass('sidenav__dropdown--toggle-open');
    });
    $('.nav__desktop__dropdown--toggle').click(function(e) {
        e.preventDefault();
        if ('.nav__desktop__dropdown--toggle .nav__desktop__dropdown--toggle-open'){
            $('.nav__desktop__dropdown').not(this).slideUp();
            $('.nav__desktop__dropdown--toggle').not(this).removeClass('nav__desktop__dropdown--toggle-open');
        }
        $(this).next('.nav__desktop__dropdown').slideToggle();
        $(this).toggleClass('nav__desktop__dropdown--toggle-open');
    });
    if ($(window).width() <= 991) {
        $(".content__header__large__img").detach().insertAfter("#contentLargeHeaderSeparatow");
        $("#overlapDetach").detach().insertBefore($("#overlapAttach"));
    }
    $('.blog__filters__toggle').click(function(e) {
        e.preventDefault();
        $('.blog__filters__tags').slideToggle();
        $(this).toggleClass('blog__filters__toggle--open');
    });
});
