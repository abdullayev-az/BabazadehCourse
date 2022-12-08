$('.nav-bars').click(function(){
   $('.offcanvas').fadeIn();
   $('html').css({'overflow':'hidden'});
});
$('.close i').click(function(){
    $('.offcanvas').fadeOut();
    $('html').css({'overflow':'auto'});
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
