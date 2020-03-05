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

