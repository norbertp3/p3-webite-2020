// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Read more
$('.expand').find('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    this.expand = !this.expand;
    $(this).text(this.expand?"Read Less...":"Read More...");
    $(this).closest('.expand').find('.hidden-list').slideToggle();
});

// Testimonials box size
if ($(window).width() > 991) {
    $(".testimonials").each(function(){ 
        var largest = 0;
        $(this).find("p").each(function(){ 
        var findHeight = $(this).height();
        if(findHeight > largest){
            largest = findHeight;
        }  
        });
        $(this).find("p").css({"height":largest+"px"});
    });
}