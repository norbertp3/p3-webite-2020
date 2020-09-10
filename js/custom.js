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

// Booking Widget

function openWidget() {
    document.getElementById("booking-widget").style.width = "100%";
    window.addEventListener('scroll', noScroll);
}

function closeWidget() {
    document.getElementById("booking-widget").style.width = "0";
    window.removeEventListener('scroll', noScroll);
}

$( document ).ready(function() {
    // Read more
    $('.expand').find('a[href="#"]').on('click', function (e) {
        e.preventDefault();
        this.expand = !this.expand;
        $(this).text(this.expand?"Read Less...":"Read More...");
        $(this).closest('.expand').find('.hidden-list').slideToggle();
    });

    // Responsive
    if ($(window).width() > 991) {

        // Navbar scroll
        $(window).scroll(function(e) {
        
            // add/remove class to navbar when scrolling to hide/show
            var scroll = $(window).scrollTop();
            if (scroll <= 150) {
                $('.mini-nav').addClass("navbar-hide");
            } else {
                $('.mini-nav').removeClass("navbar-hide");
            }
        });
    }
    if ($(window).width() <= 991) {

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("mini-nav").style.top = "0";
          } else {
            document.getElementById("mini-nav").style.top = "-51px";
          }
          prevScrollpos = currentScrollPos;
        }
    }

    // Booking Widget
    $('.promo-code-link').on('click', function (e) {
        e.preventDefault();
        $(this).next('.form-group').slideToggle();
    });
    $('#guest-widget').on('click', function () {
        $('.guest-widget-buttons-container').show();
    });
});

$(".home__blog").each(function(){
    var largest = 0;
    $(this).find(".card-title").each(function(){
    var findHeight = $(this).height();
    if(findHeight > largest){
        largest = findHeight;
    }
    });
    $(this).find(".card-title").css({"height":largest+"px"});
});