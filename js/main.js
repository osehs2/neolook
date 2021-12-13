$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    
    autoplay: {
      delay: 4000, //시간 설정 1000 1초
      disableOnInteraction: false, //스와이프 후에 자동 재생할지 말지 
    },
    loop:true
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".mySwiper2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
   
});