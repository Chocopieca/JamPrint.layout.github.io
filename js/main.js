$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
})

$(".first-carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: "",
    autoplay: false,
})

$(".second-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: "",
    autoplay: false,
    nav: true,
    dots: false
})