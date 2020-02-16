$('.carousel-image').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});

$('.owl-carousel').owlCarousel({
    nav:true,
    loop:true,
});
