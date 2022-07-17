$(document).ready(function(){
  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });     
  });

//   $(".side-loader-item").mouseover(function () {
//     $(".side-loader-link::after", this).classList.add("side-loader-animation");
// });

// $(".toll-free-btn").mouseout(function () {
//     $(".toll-free-num", this).classList.remove("side-loader-animation");
// });