$(function(){
    $('.hero_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    speed: 500,
    dots:true,
});

$('.new_arrival_slider').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    infinite:true,
    prevArrow:'<i class="slider_arrow fa-solid fa-long-arrow-left"></i>',
    nextArrow:'<i class="slider_arrow fa-solid fa-long-arrow-right"></i>',

});

})
$(function(){
    $('.offer_slider').slick({
      slidesToShow:2,
      prevArrow:`<h4 class="slider_arrow left">-</h4>`,
      nextArrow:`<h4 class="slider_arrow right">-</h4>`,
    });
  })
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));