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


// $(".home__blog").each(function(){
//     var largest = 0;
//     $(this).find(".card-title").each(function(){
//     var findHeight = $(this).height();
//     if(findHeight > largest){
//         largest = findHeight;
//     }
//     });
//     $(this).find(".card-title").css({"height":largest+"px"});
// });